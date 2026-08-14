/*
 * Zero-JavaScript build step.
 *
 * Everything on this site is server-rendered HTML and CSS scroll-driven
 * animation, so the framework runtime has nothing left to do. This removes it:
 * every <script>, every JS preload hint, and the chunk files themselves. Then
 * it verifies that nothing in the output references a script any more.
 *
 * Runs automatically after `next build` via the postbuild hook.
 */
import { readdir, readFile, writeFile, stat, rm } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = "dist";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

const files = await walk(DIST);
const html = files.filter((f) => extname(f) === ".html");
const js = files.filter((f) => extname(f) === ".js" || f.endsWith(".js.map"));
/* the router's RSC payloads are only useful to the runtime we are deleting */
const rsc = files.filter((f) => f.endsWith(".txt") && !f.endsWith("llms.txt") && !f.endsWith("robots.txt"));

let htmlBytesBefore = 0;
let htmlBytesAfter = 0;
let scriptsRemoved = 0;

for (const file of html) {
  const original = await readFile(file, "utf8");
  htmlBytesBefore += Buffer.byteLength(original);

  let out = original;
  const before = (out.match(/<script/g) ?? []).length;

  // every script tag, inline or external
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  out = out.replace(/<script\b[^>]*\/?>/gi, "");
  // preload and prefetch hints for scripts
  out = out.replace(/<link\b[^>]*\bas="script"[^>]*>/gi, "");
  out = out.replace(/<link\b[^>]*\.js"[^>]*>/gi, "");
  // Next leaves a couple of empty template holders behind
  out = out.replace(/<template\b[^>]*id="[^"]*next[^"]*"[^>]*>[\s\S]*?<\/template>/gi, "");
  out = out.replace(/\n{3,}/g, "\n");

  scriptsRemoved += before;
  htmlBytesAfter += Buffer.byteLength(out);
  if (out !== original) await writeFile(file, out, "utf8");
}

let jsBytes = 0;
for (const file of [...js, ...rsc]) {
  jsBytes += (await stat(file)).size;
  await rm(file, { force: true });
}

// prune directories that are now empty
for (const dir of ["dist/_next/static/chunks", "dist/_next/static", "dist/_next"]) {
  try {
    const left = await readdir(dir);
    if (left.length === 0) await rm(dir, { recursive: true, force: true });
  } catch {
    /* already gone */
  }
}

/* verify: no script tags, no .js references anywhere in the HTML */
const leftovers = [];
for (const file of await walk(DIST).then((f) => f.filter((x) => extname(x) === ".html"))) {
  const text = await readFile(file, "utf8");
  if (/<script/i.test(text)) leftovers.push(`${file}: script tag`);
  // only real URL references count: prose like "Next.js" is not a script
  const jsRef = text.match(/(?:src|href)\s*=\s*["'][^"']+\.js(?:\?[^"']*)?["']/i);
  if (jsRef) leftovers.push(`${file}: references ${jsRef[0]}`);
}

const remainingJs = (await walk(DIST)).filter((f) => extname(f) === ".js");

console.log(
  [
    "",
    "  zero-js build",
    `  html files          ${html.length}`,
    `  script tags removed ${scriptsRemoved}`,
    `  js/rsc files deleted ${js.length + rsc.length} (${(jsBytes / 1024).toFixed(1)} KB)`,
    `  html ${(htmlBytesBefore / 1024).toFixed(1)} KB -> ${(htmlBytesAfter / 1024).toFixed(1)} KB`,
    `  js files left in dist ${remainingJs.length}`,
    leftovers.length ? `  PROBLEMS:\n    ${leftovers.join("\n    ")}` : "  verified: no scripts, no js references",
    "",
  ].join("\n")
);

if (leftovers.length || remainingJs.length) process.exit(1);

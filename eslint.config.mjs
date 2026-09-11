import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // this project's own output and scratch space
    "dist/**",
    ".sisyphus/**",
  ]),
  {
    rules: {
      // The built site ships no JavaScript, so there is no client router for
      // <Link> to drive. Plain anchors are the truth here, and they are what
      // lets cross-document view transitions fire in dev as well as in dist.
      "@next/next/no-html-link-for-pages": "off",
      // enhance.css is linked by hand on purpose: the bundler cannot parse it.
      "@next/next/no-css-tags": "off",
    },
  },
]);

export default eslintConfig;

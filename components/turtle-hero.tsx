import { ReactNode } from "react";
import { LOTUS_RING, LOTUS_SEEDS, lotusGeometry } from "@/components/lotus";

/*
 * The program being "run", in LOGO:
 *
 *   PD
 *   REPEAT 120 [
 *     FD 11
 *     RT 3
 *   ]
 *
 * 120 iterations x 3 degrees = a closed circle, back where it started.
 *
 * Every bit of motion here is CSS scroll-driven animation: the geometry is
 * computed at build time and the browser drives it off the scroll position.
 * No JavaScript is shipped for any of it. Browsers without
 * animation-timeline simply get the finished drawing.
 */
const ITERATIONS = 120;
const TURN = 3;
const FORWARD = 11;
const VIEW = 600;
const PATH_LEN = 1000;
const ARC = ITERATIONS * TURN;

/* the circle finishes at 1/φ of the scene, the rest holds the finished image */
const PHI = 1.618033988749895;
const DRAW_END = (100 / PHI).toFixed(2); // 61.80 (%)

interface Pt {
  x: number;
  y: number;
}

function simulateTurtle(): Pt[] {
  // LOGO convention: heading 0 is north, positive turns clockwise
  const pts: Pt[] = [];
  let x = 0;
  let y = 0;
  let h = 90;
  pts.push({ x, y });
  for (let i = 0; i < ITERATIONS; i++) {
    const rad = (h * Math.PI) / 180;
    x += FORWARD * Math.sin(rad);
    y -= FORWARD * Math.cos(rad);
    pts.push({ x, y });
    h = (h + TURN) % 360;
  }
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  return pts.map((p) => ({ x: p.x - cx + VIEW / 2, y: p.y - cy + VIEW / 2 }));
}

const PTS = simulateTurtle();
const PATH_D = PTS.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

const LOTUS = lotusGeometry(FORWARD / (2 * Math.sin((TURN * Math.PI) / 360)));
const PETALS = Array.from({ length: LOTUS_RING.length * 2 }, (_, k) => ({
  angle: k * 22.5,
  outer: k % 2 === 0,
}));
const PETAL_STEP = 360 / PETALS.length;

/* a petal opens across the step of arc the brush is sweeping */
function petalRange(i: number) {
  const from = ((PETALS[i].angle / ARC) * Number(DRAW_END)).toFixed(2);
  const to = (((PETALS[i].angle + PETAL_STEP) / ARC) * Number(DRAW_END)).toFixed(2);
  return `contain ${from}% contain ${to}%`;
}

const PROGRAM = ["PD", "REPEAT 120 [", "FD 11", "RT 3", "]"];

const LEAVES = [
  { x: "7%", y: "12%", size: 34, opacity: 0.5, dur: "13s", delay: "0s", dx: "30px", dy: "44px", r0: "-16deg", r1: "22deg" },
  { x: "88%", y: "9%", size: 24, opacity: 0.36, dur: "16s", delay: "-4s", dx: "-24px", dy: "50px", r0: "12deg", r1: "-28deg" },
  { x: "84%", y: "74%", size: 30, opacity: 0.44, dur: "15s", delay: "-8s", dx: "-32px", dy: "-30px", r0: "8deg", r1: "34deg" },
  { x: "11%", y: "80%", size: 20, opacity: 0.3, dur: "18s", delay: "-3s", dx: "24px", dy: "-36px", r0: "-10deg", r1: "18deg" },
  { x: "48%", y: "3%", size: 17, opacity: 0.26, dur: "14s", delay: "-6s", dx: "16px", dy: "34px", r0: "0deg", r1: "38deg" },
] as const;

function Leaf({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="-24 -30 48 46" aria-hidden="true">
      <path d="M0 0 L-20 -21 A28 28 0 0 1 -1.5 -26.5 L0 -22 L1.5 -26.5 A28 28 0 0 1 20 -21 Z" fill="currentColor" />
      <path d="M0 -1 L0 13" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path
        d="M0 -1.5 L-13 -18 M0 -1.5 L-7 -21.5 M0 -1.5 L0 -22 M0 -1.5 L7 -21.5 M0 -1.5 L13 -18"
        fill="none"
        stroke="#fbfaf7"
        strokeOpacity="0.42"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default function TurtleHero({ children }: { children: ReactNode }) {
  const c = VIEW / 2;

  return (
    <section className="turtle-scene" aria-label="Introduction">
      <div className="turtle-sticky">
        <div className="turtle-grid">
          <div className="turtle-copy">{children}</div>

          <div className="turtle-stage-wrap">
            <div className="turtle-stage" aria-hidden="true">
              {/*
                Invisible hover zones, first in the DOM so a sibling selector can
                reach the leaves and the streaks. This is how the wind knows where
                the pointer is without a single line of script.
              */}
              {Array.from({ length: 12 }, (_, i) => (
                <span key={`zone-${i}`} className="wind-zone" />
              ))}

              <svg className="turtle-svg" viewBox="55 55 490 490" preserveAspectRatio="xMidYMid meet">
                <path className="wind-path wind-a" d="M -30 150 C 130 96, 260 208, 630 118" />
                <path className="wind-path wind-b" d="M -30 470 C 160 420, 300 520, 630 440" />

                <path className="enso enso-wash" d={PATH_D} pathLength={PATH_LEN} />
                <path className="enso enso-mid" d={PATH_D} pathLength={PATH_LEN} />
                <path className="enso enso-core" d={PATH_D} pathLength={PATH_LEN} />

                <g className="turtle-lotus">
                  {PETALS.map((p, i) => (
                    <g key={i} transform={`translate(${c} ${c}) rotate(${p.angle})`}>
                      <g className="lotus-petal-unit" style={{ animationRange: petalRange(i) }}>
                        <path
                          className={p.outer ? "lotus-petal lotus-petal-outer" : "lotus-petal lotus-petal-inner"}
                          d={p.outer ? LOTUS.outer : LOTUS.inner}
                        />
                        {p.outer ? <path className="lotus-vein" d={LOTUS.vein} /> : null}
                      </g>
                    </g>
                  ))}
                  <g transform={`translate(${c} ${c})`}>
                    <g className="lotus-pod">
                      <circle className="lotus-pod-ring" r={LOTUS.podR.toFixed(1)} />
                      {LOTUS_SEEDS.map((a) => (
                        <circle
                          key={a}
                          className="lotus-seed"
                          r={LOTUS.seedDot.toFixed(2)}
                          cx={(LOTUS.seedR * Math.sin((a * Math.PI) / 180)).toFixed(2)}
                          cy={(-LOTUS.seedR * Math.cos((a * Math.PI) / 180)).toFixed(2)}
                        />
                      ))}
                    </g>
                  </g>
                </g>
                {/* the turtle rides the drawing itself: same user units as the
                    path, so offset-path lines up exactly */}
                <g className="turtle-walker" style={{ offsetPath: `path("${PATH_D}")` }}>
                  <g className="turtle-marker" transform="scale(1.5) rotate(90)">
                    <ellipse className="turtle-halo" cx="0" cy="-1" rx="10.4" ry="12.6" />
                    <path className="turtle-limb" d="M0 8.6 L0 11.6" />
                    <ellipse className="turtle-limb" cx="-7.4" cy="-5.6" rx="3.4" ry="2.1" transform="rotate(-38 -7.4 -5.6)" />
                    <ellipse className="turtle-limb" cx="7.4" cy="-5.6" rx="3.4" ry="2.1" transform="rotate(38 7.4 -5.6)" />
                    <ellipse className="turtle-limb" cx="-6.6" cy="6.2" rx="3.2" ry="2" transform="rotate(38 -6.6 6.2)" />
                    <ellipse className="turtle-limb" cx="6.6" cy="6.2" rx="3.2" ry="2" transform="rotate(-38 6.6 6.2)" />
                    <path
                      className="turtle-head"
                      d="M0 -11.8 C1.8 -11.8, 2.5 -13.9, 2.1 -15.6 C1.7 -17.1, -1.7 -17.1, -2.1 -15.6 C-2.5 -13.9, -1.8 -11.8, 0 -11.8 Z"
                    />
                    <path
                      className="turtle-shell"
                      d="M-7.4 -3.4 C-7.4 -9.4, -3.6 -12.4, 0 -12.4 C3.6 -12.4, 7.4 -9.4, 7.4 -3.4 C7.4 4.6, 4 8.8, 0 8.8 C-4 8.8, -7.4 4.6, -7.4 -3.4 Z"
                    />
                    {/* carapace plates, so it reads as a shell and not a pebble */}
                    <path
                      className="turtle-plates"
                      d="M0 -11.2 L0 7.6 M-6.6 -5 L6.6 -5 M-6.2 1.4 L6.2 1.4 M-4.4 -9 L-2.6 -5 M4.4 -9 L2.6 -5 M-4.2 7 L-2.8 1.4 M4.2 7 L2.8 1.4"
                    />
                  </g>
                </g>
              </svg>
              {LEAVES.map((leaf, i) => (
                /* the wrapper takes the wind, the inner span keeps its own drift */
                <span
                  key={i}
                  className="leaf-wind"
                  style={{ left: leaf.x, top: leaf.y, opacity: leaf.opacity }}
                >
                  <span
                    className="leaf"
                    style={{
                      ["--dur" as string]: leaf.dur,
                      ["--delay" as string]: leaf.delay,
                      ["--dx" as string]: leaf.dx,
                      ["--dy" as string]: leaf.dy,
                      ["--r0" as string]: leaf.r0,
                      ["--r1" as string]: leaf.r1,
                    }}
                  >
                    <Leaf size={leaf.size} />
                  </span>
                </span>
              ))}
            </div>

            <div className="turtle-terminal" aria-hidden="true">
              <div className="terminal-title">
                <span>MSWLogo — PADMA.LOGO</span>
                <span className="terminal-chrome">
                  <span className="chrome-min" />
                  <span className="chrome-max" />
                  <span className="chrome-close" />
                </span>
              </div>
              <div className="terminal-body">
                {PROGRAM.map((line) => (
                  <span key={line} className={`terminal-token ${line.startsWith("REPEAT") ? "is-repeat" : ""}`}>
                    {line}
                  </span>
                ))}
                <span className="terminal-token terminal-prompt">
                  ? <span className="terminal-cursor" />
                </span>
              </div>
              <div className="terminal-status">
                <span className="status-running" />
                <span className="status-done">DONE · 120 STEPS · 0 ERRORS</span>
                <span className="status-bar" />
              </div>
            </div>

            <p className="turtle-caption">LOGO was the first language I ever wrote.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

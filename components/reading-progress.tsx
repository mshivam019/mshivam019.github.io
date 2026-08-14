import { LOTUS_RING, LOTUS_SEEDS, lotusGeometry } from "@/components/lotus";

/*
 * Reading progress, told by the same flower the homepage draws, and a curve
 * inked in down the right edge. Driven entirely by scroll(root) in CSS: the
 * percentage is a registered custom property printed with a CSS counter, so
 * even the number needs no JavaScript.
 */
const G = lotusGeometry(210);
const BOX = G.outerLen * 1.06;
const PETALS = Array.from({ length: LOTUS_RING.length * 2 }, (_, k) => ({
  angle: k * 22.5,
  outer: k % 2 === 0,
}));

export default function ReadingProgress() {
  return (
    <div className="reading" aria-hidden="true">
      <svg className="reading-rail" viewBox="0 0 56 420" preserveAspectRatio="none" width="56">
        <path className="reading-rail-track" d="M30 4 C54 104, 4 206, 30 304 C48 364, 34 398, 28 416" />
        <path
          className="reading-rail-ink"
          d="M30 4 C54 104, 4 206, 30 304 C48 364, 34 398, 28 416"
          pathLength={1000}
        />
      </svg>

      <div className="reading-mark">
        <svg className="reading-lotus" viewBox={`${-BOX} ${-BOX} ${BOX * 2} ${BOX * 2}`} width="46" height="46">
          <g transform="rotate(-6)">
            {PETALS.map((p, i) => (
              <g key={i} transform={`rotate(${p.angle})`}>
                <g
                  className="reading-petal-unit"
                  style={{
                    animationRange: `${((i / PETALS.length) * 100).toFixed(1)}% ${(((i + 1) / PETALS.length) * 100).toFixed(1)}%`,
                  }}
                >
                  <path
                    className={p.outer ? "lotus-petal-outer" : "lotus-petal-inner"}
                    d={p.outer ? G.outer : G.inner}
                  />
                </g>
              </g>
            ))}
            <g className="reading-pod">
              <circle className="lotus-pod-ring" r={G.podR.toFixed(1)} />
              {LOTUS_SEEDS.map((a) => (
                <circle
                  key={a}
                  className="lotus-seed"
                  r={G.seedDot.toFixed(2)}
                  cx={(G.seedR * Math.sin((a * Math.PI) / 180)).toFixed(2)}
                  cy={(-G.seedR * Math.cos((a * Math.PI) / 180)).toFixed(2)}
                />
              ))}
            </g>
          </g>
        </svg>
        <span className="reading-percent" />
      </div>
    </div>
  );
}

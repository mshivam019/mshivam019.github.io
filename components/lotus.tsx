/*
 * The padma. Sixteen petals — eight broad, eight narrow, offset by half a
 * step — which is the count shared by Japanese kamon crests and the Indian
 * mandala lotus. Kamon gives it the radial discipline and the even line
 * weight; padma gives it the ogee petal, the midrib and the seed pod.
 *
 * Every radius is the previous one divided by φ, so the whole flower is one
 * golden sequence: petal, inner petal, pod, seed ring, seed.
 */

export const PHI = 1.618033988749895;
export const LOTUS_RING = [0, 45, 90, 135, 180, 225, 270, 315];
export const LOTUS_SEEDS = [0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6];

function petal(len: number): string {
  const w = len / PHI ** 3; // half-width
  const base = len / PHI ** 4; // where it meets the pod
  return [
    `M0 ${-base}`,
    `C${(w * 0.92).toFixed(1)} ${(-len * 0.44).toFixed(1)},`,
    `${w.toFixed(1)} ${(-len * 0.76).toFixed(1)},`,
    `0 ${-len.toFixed(1)}`,
    `C${(-w).toFixed(1)} ${(-len * 0.76).toFixed(1)},`,
    `${(-w * 0.92).toFixed(1)} ${(-len * 0.44).toFixed(1)},`,
    `0 ${-base}`,
    "Z",
  ].join(" ");
}

export function lotusGeometry(ensoRadius: number) {
  const outerLen = ensoRadius / PHI;
  const innerLen = outerLen / PHI;
  const podR = innerLen / PHI ** 4;
  const seedR = podR / PHI;
  return {
    outerLen,
    outer: petal(outerLen),
    inner: petal(innerLen),
    vein: `M0 ${-(outerLen * 0.3).toFixed(1)} L0 ${-(outerLen * 0.3 + outerLen / PHI).toFixed(1)}`,
    podR,
    seedR,
    seedDot: seedR / PHI ** 3,
  };
}

/* A static lotus, for anywhere that isn't the scroll canvas. */
export function LotusMark({ size = 46 }: { size?: number }) {
  const g = lotusGeometry(210);
  const box = g.outerLen * 1.06;
  return (
    <svg
      className="lotus-mark"
      width={size}
      height={size}
      viewBox={`${-box} ${-box} ${box * 2} ${box * 2}`}
      aria-hidden="true"
    >
      <g transform="rotate(-6)">
        {LOTUS_RING.map((a) => (
          <g key={`o${a}`} transform={`rotate(${a})`}>
            <path className="lotus-mark-outer" d={g.outer} />
            <path className="lotus-mark-vein" d={g.vein} />
          </g>
        ))}
        {LOTUS_RING.map((a) => (
          <path key={`i${a}`} className="lotus-mark-inner" transform={`rotate(${a + 22.5})`} d={g.inner} />
        ))}
        <circle className="lotus-mark-pod" r={g.podR.toFixed(1)} />
        {LOTUS_SEEDS.map((a) => (
          <circle
            key={`s${a}`}
            className="lotus-mark-seed"
            r={g.seedDot.toFixed(2)}
            cx={(g.seedR * Math.sin((a * Math.PI) / 180)).toFixed(2)}
            cy={(-g.seedR * Math.cos((a * Math.PI) / 180)).toFixed(2)}
          />
        ))}
      </g>
    </svg>
  );
}

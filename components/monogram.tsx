import { SKM_H, SKM_W } from "@/components/skm-path";

/*
 * SKM. The dragon is the original mark, traced from the logo I made as a kid.
 * KM. stays in a serif, because that is how I drew it then.
 */
export default function Monogram({
  size = 30,
  word = true,
}: {
  size?: number;
  word?: boolean;
}) {
  return (
    <span className="monogram">
      <svg
        className="monogram-dragon"
        width={Math.round((size * SKM_W) / SKM_H)}
        height={size}
        aria-hidden="true"
      >
        <use href="#skm-dragon" />
      </svg>
      {word ? <span className="monogram-word">KM.</span> : null}
    </span>
  );
}

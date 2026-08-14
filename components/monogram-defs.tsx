import { SKM_PATH, SKM_VIEWBOX } from "@/components/skm-path";

/*
 * The dragon lives in one <symbol> for the whole document, so the corner mark
 * and the footer mark reference it instead of repeating the path.
 */
export default function MonogramDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <symbol id="skm-dragon" viewBox={SKM_VIEWBOX}>
        <path d={SKM_PATH} fill="currentColor" fillRule="evenodd" />
      </symbol>
    </svg>
  );
}

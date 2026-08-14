import { ACTS } from "@/components/acts";
import ActChrome from "@/components/act-chrome";
import ReadingProgress from "@/components/reading-progress";

/* Act IV. Posts get the reading mark; the index page does not. */
export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ActChrome index={ACTS.findIndex((a) => a.href === "/writing")}>
      {children}
      <ReadingProgress />
    </ActChrome>
  );
}

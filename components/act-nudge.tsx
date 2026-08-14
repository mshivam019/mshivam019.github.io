import Link from "next/link";
import { type Act } from "@/components/acts";

/*
 * A quiet nudge toward the next act, which slides up once you have scrolled to
 * the end of this one and drops away again if you scroll back. Driven by
 * scroll(root), so it knows where you are without any script.
 */
export default function ActNudge({ next }: { next: Act }) {
  return (
    <Link href={next.href} className="act-nudge">
      <span className="act-nudge-kicker">Next</span>
      <span className="act-nudge-title">
        Act {next.act} · {next.title}
      </span>
      <span className="act-nudge-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

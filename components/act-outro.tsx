import Link from "next/link";
import { type Act } from "@/components/acts";

/* The end of an act: where to go next, and the way back. */
export default function ActOutro({ next, prev }: { next: Act; prev: Act }) {
  return (
    <div className="act-outro">
      <span className="act-outro-kicker">Act {next.act}</span>
      <Link href={next.href} className="act-outro-link">
        {next.title}
        <span aria-hidden="true"> →</span>
      </Link>
      <span className="act-outro-blurb">{next.blurb}</span>
      <span className="act-outro-meta">
        <Link href={prev.href} className="act-outro-back">
          <span aria-hidden="true">← </span>
          Act {prev.act}, {prev.title}
        </Link>
      </span>
    </div>
  );
}

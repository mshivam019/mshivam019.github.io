import { type Act } from "@/components/acts";

/* The end of an act: where to go next, and the way back. */
export default function ActOutro({ next, prev }: { next: Act; prev: Act }) {
  return (
    <div className="act-outro">
      <span className="act-outro-kicker">Act {next.act}</span>
      <a href={next.href} className="act-outro-link">
        {next.title}
        <span aria-hidden="true"> →</span>
      </a>
      <span className="act-outro-blurb">{next.blurb}</span>
      <span className="act-outro-meta">
        <a href={prev.href} className="act-outro-back">
          <span aria-hidden="true">← </span>
          Act {prev.act}, {prev.title}
        </a>
      </span>
    </div>
  );
}

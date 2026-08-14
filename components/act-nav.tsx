import Link from "next/link";
import { ACTS, type Act } from "@/components/acts";

/*
 * Two arrows and the act numeral. The numeral opens the full index with a
 * <details> element, so the popover needs no script at all.
 */
export default function ActNav({ current, next, prev }: { current: Act; next: Act; prev: Act }) {
  return (
    <div className="act-nav-wrap">
      <nav className="act-nav" aria-label="Primary">
        <Link
          href={prev.href}
          className="act-nav-arrow"
          aria-label={`Previous: Act ${prev.act}, ${prev.title}`}
        >
          <span aria-hidden="true">←</span>
        </Link>

        <details className="act-index-details">
          <summary className="act-nav-current">
            <span className="act-nav-label" aria-hidden="true">
              Act
            </span>
            <span className="act-nav-numeral">{current.act}</span>
            <span className="sr-only">Show all acts</span>
          </summary>

          <div className="act-index">
            <ul className="act-index-list">
              {ACTS.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className={`act-index-link ${a.href === current.href ? "is-active" : ""}`}
                    aria-current={a.href === current.href ? "page" : undefined}
                  >
                    <span className="act-index-numeral">{a.act}</span>
                    <span className="act-index-title">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>

        <Link
          href={next.href}
          className="act-nav-arrow"
          aria-label={`Next: Act ${next.act}, ${next.title}`}
        >
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  );
}

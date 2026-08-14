import Link from "next/link";
import { ACTS, type Act } from "@/components/acts";
import Monogram from "@/components/monogram";

/*
 * The mark is the control. It opens on hover with a pointer and on tap with a
 * checkbox, so it needs no script. A <details> would have been tidier markup,
 * but a closed <details> does not render its children at all, which means hover
 * can never reveal them, and its links vanish from the accessibility tree.
 * Clipping them instead keeps every link focusable and screen-reader reachable,
 * and :focus-within opens the panel when you tab into it.
 */
export default function ActNav({ current, next, prev }: { current: Act; next: Act; prev: Act }) {
  return (
    <div className="act-nav-wrap">
      <input type="checkbox" id="act-controls" className="act-nav-toggle" />

      <div className="act-nav-shell">
        {/*
          Two marks, one shown at a time. With a pointer, hover already opens the
          panel, so the mark can be a plain link home. On touch there is no hover,
          so it has to be the toggle instead, and home is one tap away in the index.
        */}
        <Link
          href="/"
          className="act-nav-mark act-nav-mark-link"
          aria-label="Shivam Mishra, home"
          aria-current={current.href === "/" ? "page" : undefined}
        >
          <Monogram size={24} />
        </Link>

        <label className="act-nav-mark act-nav-mark-toggle" htmlFor="act-controls" aria-label="Show act controls">
          <Monogram size={24} />
        </label>

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
    </div>
  );
}

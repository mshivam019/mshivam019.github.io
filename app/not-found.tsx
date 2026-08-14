import Link from "next/link";
import { ACTS } from "@/components/acts";

export const metadata = {
  title: "No such act",
};

export default function NotFound() {
  return (
    <>
      <header className="act-header">
        <p className="act-header-kicker">404</p>
        <h1 className="act-header-title">No such act</h1>
        <div className="prose-column">
          <p>
            The turtle walked off the edge of the paper. Whatever was here has moved, or never
            existed in the first place. There are only four acts, and they are all below.
          </p>
        </div>
      </header>

      <section className="act-section">
        <p className="act-section-kicker">Start again</p>
        <ol className="post-list">
          {ACTS.map((act, i) => (
            <li key={act.href} className="post">
              <Link href={act.href} className="post-link">
                <span className="post-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="post-body">
                  <span className="post-title">{act.title}</span>
                  <span className="post-summary">{act.blurb}</span>
                  <span className="post-meta">Act {act.act}</span>
                </span>
                <span className="post-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

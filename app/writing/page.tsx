import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Writing",
  description:
    "Notes on architecture, migrations and the trade-offs behind shipping software that has to keep working.",
  alternates: { canonical: "/writing" },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function WritingPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const tags = [...new Set(sorted.flatMap((p) => p.tags ?? []))];

  return (
    <>
      <header className="act-header">
        <p className="act-header-kicker">Act IV</p>
        <h1 className="act-header-title">Field Notes</h1>
        <div className="prose-column">
          <p>
            I write things down when a decision cost me something to learn. Migrations, platform
            bills, the parts of a stack that look free until they aren&apos;t. Nothing here is
            advice; it is just what happened and what I would do differently.
          </p>
        </div>

        <dl className="stat-row">
          <div>
            <dt>Posts</dt>
            <dd>{sorted.length}</dd>
          </div>
          <div>
            <dt>Topics</dt>
            <dd>{tags.length}</dd>
          </div>
          <div>
            <dt>Latest</dt>
            <dd className="stat-small">{formatDate(sorted[0].date)}</dd>
          </div>
          <div>
            <dt>Rate</dt>
            <dd className="stat-small">when it matters</dd>
          </div>
        </dl>
      </header>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Everything, newest first</p>

          <ol className="post-list">
            {sorted.map((post, i) => (
              <li key={post.slug} className="post">
                <Link href={`/writing/${post.slug}`} className="post-link">
                  <span className="post-index">{String(sorted.length - i).padStart(2, "0")}</span>
                  <span className="post-body">
                    <span className="post-title">{post.title}</span>
                    {post.summary ? <span className="post-summary">{post.summary}</span> : null}
                    <span className="post-meta">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {post.tags?.length ? <span className="post-tags">{post.tags.join(" · ")}</span> : null}
                    </span>
                  </span>
                  <span className="post-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}

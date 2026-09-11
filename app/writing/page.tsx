import ActTitle from "@/components/act-title";
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

  return (
    <>
      <header className="act-header">
        <ActTitle href="/writing" />
        <div className="prose-column">
          <p>
            I write things down when a decision cost me something to learn. Migrations, platform
            bills, the parts of a stack that look free until they aren&apos;t. Nothing here is
            advice; it is just what happened and what I would do differently.
          </p>
        </div>
      </header>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Everything, newest first</p>

          <ol className="post-list">
            {sorted.map((post, i) => (
              <li key={post.slug} className="post">
                <a href={`/writing/${post.slug}`} className="post-link">
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
                </a>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}

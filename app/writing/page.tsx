import Link from "next/link";
import { posts } from "./posts";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  return (
    <>
      <h1 className="page-heading">Writing</h1>

      <p className="section-intro max-w-3xl">
        Notes on AI systems, product engineering, developer workflows, and the
        practical trade-offs behind shipping software.
      </p>

      {posts.length > 0 ? (
        <div className="space-y-0">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-border/65 py-4 sm:py-5 first:pt-0 last:border-b-0 last:pb-0">
              <Link 
                href={`/writing/${post.slug}`} 
                className="row-link flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
              >
                <h2 className="font-medium tracking-[-0.01em] text-[1rem] sm:text-[1.02rem] group-hover:text-foreground/85 transition-colors duration-200">
                  {post.title}
                </h2>
                <time className="meta-text sm:whitespace-nowrap">
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground max-w-2xl">
          <p className="mb-4">No writings yet.</p>
          <p className="text-sm leading-relaxed">
            Check back later for thoughts on AI, web development, and creative
            coding.
          </p>
        </div>
      )}

      <div className="subtle-divider">
        <Link
          href="/"
          className="editorial-link text-sm text-muted-foreground"
        >
          ← Back to about
        </Link>
      </div>
    </>
  );
}

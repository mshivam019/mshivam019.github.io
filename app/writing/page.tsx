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
    <main>
      <h1 className="text-2xl font-medium mb-8">Writing</h1>

      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link 
                href={`/writing/${post.slug}`} 
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
              >
                <h2 className="font-medium group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted-foreground sm:whitespace-nowrap">
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground">
          <p className="mb-4">No writings yet.</p>
          <p className="text-sm">
            Check back later for thoughts on AI, web development, and creative
            coding.
          </p>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to about
        </Link>
      </div>
    </main>
  );
}

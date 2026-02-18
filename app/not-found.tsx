import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1 className="text-2xl font-medium mb-6">404</h1>
      <p className="text-muted-foreground mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back home
      </Link>
    </main>
  );
}

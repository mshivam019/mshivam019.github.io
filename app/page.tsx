import { getProfile } from "@/lib/content";
import Link from "next/link";

export default async function Home() {
  const profile = await getProfile();

  return (
    <>
      <h1 className="page-heading">{profile.name}</h1>

      <div className="max-w-3xl mb-12 sm:mb-14 space-y-5 sm:space-y-6">
        <p className="section-intro">
          I&apos;m a {profile.role} at{" "}
          <Link
            href="https://insideiim.com"
            className="editorial-link"
          >
            InsideIIM | AltUni Labs
          </Link>
          , building across web, mobile, and AI — whatever the product needs.
        </p>

        <p className="section-intro">
          Right now I&apos;m working on AI recruitment pipelines and developer
          tools. Before this, I spent two years at{" "}
          <Link
            href="https://terriblytinytales.com"
            className="editorial-link"
          >
            Terribly Tiny Tales
          </Link>{" "}
          rebuilding their learning platform and mobile app from the ground up.
        </p>

        <p className="section-intro">
          My stack is Next.js, React Native, and Node.js, with a growing focus
          on LLMs and vector search. I care about shipping things that work and
          interfaces that don&apos;t feel like they were built by committee.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-1">
        <Link
          href={`mailto:${profile.email}`}
          className="editorial-link"
        >
          Email
        </Link>
        <Link
          href="https://github.com/mshivam019"
          className="editorial-link"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/mshivam019"
          className="editorial-link"
        >
          LinkedIn
        </Link>
      </div>
    </>
  );
}

import { getProfile } from "@/lib/content";
import Link from "next/link";

export default async function Home() {
  const profile = await getProfile();

  return (
    <>
      <h1 className="page-heading">{profile.name}</h1>

      <div className="max-w-3xl mb-12 sm:mb-14 space-y-5 sm:space-y-6">
        <p className="section-intro">
          I am a {profile.role} at{" "}
          <Link
            href="https://insideiim.com"
            className="editorial-link"
          >
            InsideIIM | AltUni Labs
          </Link>
          , where I build product-focused engineering systems across web, mobile,
          and AI workflows.
        </p>

        <p className="section-intro">
          My recent work spans AI pipelines, recruitment platforms, developer
          tooling, and learning products. Previously, I was at{" "}
          <Link
            href="https://terriblytinytales.com"
            className="editorial-link"
          >
            Terribly Tiny Tales
          </Link>{" "}
          where I led a full frontend/backend overhaul of their learning platform
          and mobile app.
        </p>

        <p className="section-intro">
          I work primarily with Next.js, React Native, Node.js, and modern AI
          tooling. I care most about shipping clear product value, improving
          developer velocity, and building interfaces that feel thoughtful.
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

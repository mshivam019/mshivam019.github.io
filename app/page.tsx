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
          . My interests span full-stack development, AI/ML integration, mobile
          development, and building developer tools.
        </p>

        <p className="section-intro">
          I have spent years working across the stack—from architecting AI 
          pipelines and recruitment platforms to building high-scale mobile apps 
          and learning platforms. Previously, I was at{" "}
          <Link
            href="https://terriblytinytales.com"
            className="editorial-link"
          >
            Terribly Tiny Tales
          </Link>{" "}
          where I led the frontend and backend overhaul of their learning
          platform and mobile app.
        </p>

        <p className="section-intro">
          I work extensively with Next.js, React Native, Node.js, and AI
          technologies. I am particularly interested in creative coding,
          canvas-based graphics editors, and building tools that make
          development more intuitive.
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

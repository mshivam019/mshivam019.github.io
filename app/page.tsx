import { getProfile } from "@/lib/content";
import Link from "next/link";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main>
      <h1 className="text-2xl font-medium mb-6">{profile.name}</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <p className="text-muted-foreground leading-relaxed">
          I am a {profile.role} at{" "}
          <Link
            href="https://insideiim.com"
            className="underline underline-offset-4 hover:text-foreground"
          >
            InsideIIM | AltUni Labs
          </Link>
          . My interests span full-stack development, AI/ML integration, mobile
          development, and building developer tools.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I have spent years working across the stack—from architecting AI 
          pipelines and recruitment platforms to building high-scale mobile apps 
          and learning platforms. Previously, I was at{" "}
          <Link
            href="https://terriblytinytales.com"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Terribly Tiny Tales
          </Link>{" "}
          where I led the frontend and backend overhaul of their learning
          platform and mobile app.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I work extensively with Next.js, React Native, Node.js, and AI
          technologies. I am particularly interested in creative coding,
          canvas-based graphics editors, and building tools that make
          development more intuitive.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link
          href={`mailto:${profile.email}`}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Email
        </Link>
        <Link
          href="https://github.com/mshivam019"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/mshivam019"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </Link>
      </div>
    </main>
  );
}

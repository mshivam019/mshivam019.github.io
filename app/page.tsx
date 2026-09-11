import ActChrome from "@/components/act-chrome";
import NameMark from "@/components/name-mark";
import TurtleHero from "@/components/turtle-hero";
import { getInterests, getProfile } from "@/lib/content";

/* the site is served from GitHub Pages and mirrored on Vercel; canonicals keep
   the two from competing in search */
export const metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const profile = await getProfile();
  const interests = await getInterests();

  return (
    <ActChrome index={0}>
      <TurtleHero>
        <p className="hero-eyebrow">Act I · {profile.location}</p>

        <h1 className="page-heading hero-name">
          <span className="sr-only">{profile.name}</span>
          <NameMark className="hero-name-mark" />
        </h1>

        <p className="section-intro">
          I&apos;m a {profile.role} at{" "}
          <a href="https://insideiim.com" className="editorial-link">
            InsideIIM | AltUni Labs
          </a>
          , building across web, mobile and AI. Whatever the product needs.
        </p>

        <div className="hero-links">
          <a href={`mailto:${profile.email}`} className="editorial-link">
            Email
          </a>
          <a href="https://github.com/mshivam019" className="editorial-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mshivam019" className="editorial-link">
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view"
            className="editorial-link"
          >
            Résumé
          </a>
        </div>

        <div className="hero-foot">
          <dl className="hero-now">
            <div>
              <dt>Now</dt>
              <dd>AI recruitment pipelines and developer tools</dd>
            </div>
            <div>
              <dt>Reading</dt>
              <dd>{interests.now[0].value}</dd>
            </div>
          </dl>

          <span className="hero-scroll" aria-hidden="true">
            <span className="hero-scroll-line" />
            scroll to run it
          </span>
        </div>
      </TurtleHero>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">What I do</p>
          <div className="prose-column">
            <p>
              Two years at{" "}
              <a href="https://terriblytinytales.com" className="editorial-link">
                Terribly Tiny Tales
              </a>{" "}
              rebuilding their learning platform and mobile app from the ground up. Now at{" "}
              <a href="https://insideiim.com" className="editorial-link">
                InsideIIM | AltUni Labs
              </a>
              , where most of my time goes to AI recruitment pipelines: CV parsing, AI-run tests,
              AI interviews, on LangChain and{" "}
              <a href="https://livekit.io" className="editorial-link">
                LiveKit
              </a>
              . Along the way a VAPT audit pushed me into DevOps; I moved everything off Supabase
              onto AWS, passed the audit with no high or critical findings, and{" "}
              <a href="/writing/moving-away-from-supabase" className="editorial-link">
                wrote the migration up
              </a>
              .
            </p>
            <p>
              The longer version, LOGO and consoles and all, is in{" "}
              <a href="/writing/how-it-started" className="editorial-link">
                how it started
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </ActChrome>
  );
}

import Link from "next/link";
import ActChrome from "@/components/act-chrome";
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

        <h1 className="page-heading">{profile.name}</h1>

        <p className="section-intro">
          I&apos;m a {profile.role} at{" "}
          <Link href="https://insideiim.com" className="editorial-link">
            InsideIIM | AltUni Labs
          </Link>
          , building across web, mobile and AI. Whatever the product needs.
        </p>

        <div className="hero-links">
          <Link href={`mailto:${profile.email}`} className="editorial-link">
            Email
          </Link>
          <Link href="https://github.com/mshivam019" className="editorial-link">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/mshivam019" className="editorial-link">
            LinkedIn
          </Link>
          <Link
            href="https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view"
            className="editorial-link"
          >
            Résumé
          </Link>
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
          <p className="act-section-kicker">01 — How it started</p>
          <h2 className="act-section-heading">A turtle, and a computer that shouldn&apos;t have been there yet</h2>
          <div className="prose-column">
            <p>
              I went to an ICSE school that taught LOGO before it taught anything else. Then
              QBasic. Then Java. The turtle at the top of this page is that first language, still
              drawing circles.
            </p>
            <p>
              My dad worked overseas, which is how a computer turned up at home earlier than it
              otherwise would have, and how I was on Skype back when a video call still felt like
              a trick. I spent that decade breaking the thing: corrupting Windows, reinstalling
              it, carving up partitions, and playing an unreasonable number of Flash games in
              between. Later the same instinct moved to phones and I lost entire months to XDA,
              flashing custom ROMs onto devices that did not always survive the experience.
            </p>
            <p>
              At university I could pair a major with a minor, so I took full stack web development
              and literature. That is how I spent one half of my week on code and the other on
              Agatha Christie and Ted Hughes&apos; Snowdrop, and I have never thought of the two as
              separate skills since.
            </p>
            <p>
              The consoles arrived in their own haphazard order. First a NES clone that took
              cartridges, loaded with a bootleg Mario, Contra and a duck hunting game. Then a Wii
              clone. Then a PS2, which is still the best machine I have owned. There is a PS5 under
              the TV now and I use it for the same thing I always did: stories.
            </p>
          </div>        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">02 — What I actually do</p>
          <h2 className="act-section-heading">Ship it, and make sure it holds</h2>
          <div className="prose-column">
            <p>
              Java took me to Udacity, Udacity took me to Android, and I kept walking from there.
              Frontend, then backend, then React Native once the apps had to exist on both stores.
              Right now I&apos;m at{" "}
              <Link href="https://insideiim.com" className="editorial-link">
                InsideIIM | AltUni Labs
              </Link>
              . Before that I spent two years at{" "}
              <Link href="https://terriblytinytales.com" className="editorial-link">
                Terribly Tiny Tales
              </Link>{" "}
              rebuilding their learning platform and mobile app from the ground up.
            </p>
            <p>
              A VAPT audit is what pushed me properly into DevOps. I moved everything off Supabase
              onto AWS, which fixed the architectural problems underneath the product, and the
              application came out of the audit with no high or critical findings. The part I&apos;m
              actually proud of is the bill: all of that AWS infrastructure still costs less than
              the $599-a-month plan Supabase wanted us on before it would hand over GDPR documents. I{" "}
              <Link href="/writing/moving-away-from-supabase" className="editorial-link">
                wrote the whole migration up
              </Link>
              .
            </p>
            <p>
              Most of my time now goes to AI recruitment pipelines: CV parsing, AI-run tests, AI
              interviews. That is LangChain for the reasoning and{" "}
              <Link href="https://livekit.io" className="editorial-link">
                LiveKit
              </Link>{" "}
              for the realtime side. Working that close to LiveKit meant reading its internals,
              which is how I ended up with PRs in it.
            </p>
            <p>
              The part I chase is the moment something ships and simply works. Shipping on its own
              isn&apos;t the point. It has to run without bugs and it has to be secure, or it
              doesn&apos;t count.
            </p>
          </div>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">03 — Off the clock</p>
          <h2 className="act-section-heading">Science fiction, philosophy, and subtitles</h2>
          <div className="prose-column">
            <p>
              I read science fiction because it asks better questions than it answers, and
              philosophy for the same reason. Subtitles have never bothered me, so I watch whatever
              is good in whatever language it was made in.
            </p>
            <p>
              Frieren and Fullmetal Alchemist: Brotherhood are the two I keep going back to. Both
              are about time, the length of a journey, and paying honestly for what you take, which
              is more or less the only moral I trust.
            </p>
            <p>
              I&apos;m also a quiz person. iQuiz on an iPod Classic got an unreasonable amount of
              use, I won enough of them at school to keep taking them seriously, and I still go
              back to Tom Scott&apos;s old quiz videos, the ones on the other channel, because that
              format is close to perfect.
            </p>
          </div>

          <dl className="now-grid">
            {interests.now.map((row) => (
              <div key={row.label} className="now-row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="shelf-grid">
            {interests.shelves.map((shelf) => (
              <div key={shelf.label} className="shelf">
                <p className="shelf-label">{shelf.label}</p>
                <ul className="shelf-list">
                  {shelf.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">04 — What I&apos;m after</p>
          <h2 className="act-section-heading">Balance, peace, and being quietly happy</h2>
          <div className="prose-column">
            <p>
              I&apos;m not chasing a title. I want balance, some peace, and an ordinary kind of
              happy. Siddhartha, the Tao Te Ching and a stubborn fondness for Diogenes all point
              the same direction: want less, pay attention, do the work in front of you.
            </p>
            <p>
              Which is why the drawing up there is what it is. One instruction at a time, a circle
              that closes, and a flower that only shows up because the turtle kept walking.
            </p>
          </div>
        </section>
      </div>
    </ActChrome>
  );
}

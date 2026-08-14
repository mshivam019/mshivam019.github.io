import Link from "next/link";
import { getContributions, getCredentials, getExperiences } from "@/lib/content";

export const metadata = {
  title: "Experience",
  description:
    "Where I have worked, what I shipped there, and the open source contributions that carry my name.",
};

interface Experience {
  company: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  kind?: string;
  role: string;
  location: string;
  achievements: string[];
}

function monthYear(value: string) {
  return new Date(value).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

function range(startDate: string, endDate?: string, isCurrent?: boolean) {
  const start = monthYear(startDate);
  if (isCurrent) return `${start} — now`;
  return endDate ? `${start} — ${monthYear(endDate)}` : start;
}

function years(startDate: string, endDate?: string) {
  const start = new Date(startDate).getFullYear();
  if (!endDate) return `${start}–now`;
  const end = new Date(endDate).getFullYear();
  return end === start ? `${start}` : `${start}–${end}`;
}

export default async function ExperiencePage() {
  const experiences = (await getExperiences()) as Experience[];
  const contributions = await getContributions();
  const { education } = await getCredentials();
  const merged = contributions
    .filter((c) => c.state === "merged")
    .reduce((total, c) => total + (c.prCount ?? 1), 0);
  const upstreamRepos = new Set(contributions.map((c) => c.repo)).size;
  const jobs = experiences.filter((e) => e.kind !== "community").length;

  return (
    <>
      <header className="act-header">
        <p className="act-header-kicker">Act II</p>
        <h1 className="act-header-title">The Road</h1>
        <div className="prose-column">
          <p>
            My contribution graph undersells this. It only counts default branches, and most of
            what I have built lived somewhere else: feature branches on someone else&apos;s
            branching model, private repos, and products that have since been shut down. So here is
            the version with the work in it.
          </p>
        </div>

        <dl className="stat-row">
          <div>
            <dt>Roles</dt>
            <dd>{jobs}</dd>
          </div>
          <div>
            <dt>Merged upstream</dt>
            <dd>{merged}</dd>
          </div>
          <div>
            <dt>Projects contributed to</dt>
            <dd>{upstreamRepos}</dd>
          </div>
          <div>
            <dt>Shipping since</dt>
            <dd>2022</dd>
          </div>
        </dl>
      </header>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Roles</p>
          <div className="role-list">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.startDate}`} className="role">
                <div className="role-rail">
                  <span className="role-years">{years(exp.startDate, exp.endDate)}</span>
                  {exp.isCurrent ? <span className="role-now">current</span> : null}
                </div>

                <div className="role-body">
                  <h2 className="role-company">
                    {exp.company}
                    {exp.kind === "community" ? <span className="role-tag">community</span> : null}
                  </h2>
                  <p className="role-meta">
                    {exp.role} · {exp.location} · {range(exp.startDate, exp.endDate, exp.isCurrent)}
                  </p>
                  <ul className="role-achievements">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Upstream</p>
          <h2 className="act-section-heading">Code I sent back out</h2>
          <div className="prose-column">
            <p>
              When something we depend on is missing a piece or quietly broken, the fix belongs
              upstream rather than in a patch folder. These are merged and shipping inside other
              people&apos;s projects.
            </p>
          </div>

          <ul className="pr-list">
            {contributions.map((c) => (
              <li key={`${c.repo}-${c.number ?? c.title}`} className="pr">
                <div className="pr-head">
                  <a
                    className="pr-title"
                    href={
                      c.number
                        ? `https://github.com/${c.repo}/pull/${c.number}`
                        : `https://github.com/${c.repo}/pulls?q=is%3Apr+author%3Amshivam019`
                    }
                  >
                    {c.title}
                  </a>
                </div>
                <p className="pr-repo">
                  {c.repo}
                  {c.number ? ` #${c.number}` : ""} · {monthYear(c.date)}
                </p>
                {c.note ? <p className="pr-note">{c.note}</p> : null}
                {c.package ? (
                  <a className="pr-package" href={c.package}>
                    <span className="pr-package-tag">npm</span>
                    {c.packageLabel ?? c.package}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Not on the graph</p>
          <h2 className="act-section-heading">The work you cannot link to</h2>
          <div className="prose-column">
            <p>
              The Tribe app rebuild, the student dashboard, the recruitment platform, the proctored
              test engine, the SIP trunking, the call recording system we wrote because the managed
              option got expensive. None of that sits in a public repo I can hand you, and some of
              it no longer exists to be handed over.
            </p>
            <p>
              It lives in private repositories I don&apos;t own, on branches that were never the
              default. That is the plain reason my profile looks quiet: the commits exist, my
              account just isn&apos;t where they landed.
            </p>
            <p>
              What I can point at is the trail around it: the plugins above, a{" "}
              <Link href="/writing/moving-away-from-supabase" className="editorial-link">
                write-up of the AWS migration
              </Link>
              , and{" "}
              <a href="https://gist.github.com/mshivam019" className="editorial-link">
                a dozen gists
              </a>{" "}
              of the small tools that fell out of the work. A Bitbucket to GitHub org migration
              script, OCR on a Node server, an xlsx to JSON converter, a mojibake cleaner, a
              submission similarity checker.
            </p>
          </div>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">School</p>
          <h2 className="act-section-heading">Where I was taught, and what I stopped collecting</h2>

          <div className="paper-grid">
            <ul className="cred-list">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="cred-name">{e.qualification}</span>
                  <span className="cred-meta">
                    {e.school} · {e.period}
                    {e.note ? ` · ${e.note}` : ""}
                  </span>
                </li>
              ))}
            </ul>

            <div className="prose-column">
              <p>
                There is no certificate list here on purpose, and I did collect the usual set:
                GitHub Foundations, AWS Academy Cloud Foundations, Google&apos;s IT Support and
                Project Management specialisations, a couple of Google Cloud tracks, and the Android
                certifications I earned through Google&apos;s own programmes.
              </p>
              <p>
                Not one of them tells you whether I can build the thing. I let the Android one lapse
                on purpose and I won&apos;t renew the others as they expire. In an era where a model
                will pass any multiple-choice exam you put in front of it, a badge proves less every
                year. A merged pull request says more, so the section above is the one I would rather
                be judged on.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

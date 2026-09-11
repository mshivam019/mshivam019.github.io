import ActTitle from "@/components/act-title";
import { getContributions, getCredentials, getExperiences } from "@/lib/content";

export const metadata = {
  title: "Experience",
  description:
    "Where I have worked, what I shipped there, and the open source contributions that carry my name.",
  alternates: { canonical: "/experience" },
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

  return (
    <>
      <header className="act-header">
        <ActTitle href="/experience" />
        <div className="prose-column">
          <p>Where I have worked, what shipped there, and the fixes that went upstream.</p>
        </div>
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
          <p className="act-section-kicker">Education</p>
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
        </section>
      </div>
    </>
  );
}

import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Things I built on my own time: a writing app, a canvas editor, a scaffolding CLI, and a long trail of learning projects.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const totalStars = projects.public.reduce((sum, p) => sum + p.stars, 0);
  const totalForks = projects.public.reduce((sum, p) => sum + p.forks, 0);
  const languages = new Set(projects.public.map((p) => p.language)).size;

  return (
    <>
      <header className="act-header">
        <p className="act-header-kicker">Act III</p>
        <h1 className="act-header-title">The Work</h1>
        <div className="prose-column">
          <p>
            Everything here I built because I wanted to know how something worked, and the fastest
            way I know to find out is to build one. A few of them turned out to be useful to other
            people, which is still the part that surprises me.
          </p>
        </div>

        <dl className="stat-row">
          <div>
            <dt>Public projects</dt>
            <dd>{projects.public.length}</dd>
          </div>
          <div>
            <dt>Stars</dt>
            <dd>{totalStars}</dd>
          </div>
          <div>
            <dt>Forks</dt>
            <dd>{totalForks}</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>{languages}</dd>
          </div>
        </dl>
      </header>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">In the open</p>
          <ul className="project-list">
            {projects.public.map((p) => (
              <li key={p.name} className="project">
                <div className="project-head">
                  <h2 className="project-name">
                    <a href={p.repo}>{p.name}</a>
                  </h2>
                  <span className="project-meta">
                    {p.language} · {p.year}
                    {p.stars > 0 ? ` · ★ ${p.stars}` : ""}
                    {p.forks > 0 ? ` · ⑂ ${p.forks}` : ""}
                  </span>
                </div>

                <p className="project-blurb">{p.blurb}</p>

                {p.bullets ? (
                  <ul className="project-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <p className="project-links">
                  <a href={p.repo} className="editorial-link">
                    Source
                  </a>
                  {p.demo ? (
                    <a href={p.demo} className="editorial-link">
                      {p.demoLabel ?? "Live"}
                    </a>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Not in the open</p>
          <h2 className="act-section-heading">The practice repos, private</h2>
          <div className="prose-column">
            <p>
              These were never meant for anyone else. They are the trail of learning a platform by
              building on it, roughly in the order I got from Java to whatever I am doing this week.
            </p>
          </div>

          <div className="prose-column">
            <p className="private-line">
              JustJava, the Udacity coffee app that started Android for me. Compose practice in
              Grocery-List and RPS. A Unity endless runner. An AIML chatbot. A Go backend with JWT,
              Spring Boot CRUD, two things in C++, IMDB scraping in Python. Then the useful ones I
              still run: a media tracker, an outing planner, a Wails desktop template.
            </p>
          </div>
        </section>
      </div>

      <div className="reveal">
        <section className="act-section">
          <p className="act-section-kicker">Offcuts</p>
          <h2 className="act-section-heading">Small tools that fell out of the work</h2>
          <div className="prose-column">
            <p>
              A Bitbucket to GitHub org migration, OCR on a Node server, a submission similarity
              checker, a mojibake cleaner, React Native deep linking and a Zustand store wired to
              MMKV. Too small to be repositories, so they live as{" "}
              <a href="https://gist.github.com/mshivam019" className="editorial-link">
                gists
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

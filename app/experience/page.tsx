import { getExperiences } from "@/lib/content";
import Link from "next/link";

interface Experience {
  company: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  role: string;
  location: string;
  achievements: string[];
}

function formatDateRange(startDate: string, endDate?: string, isCurrent?: boolean) {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  
  if (isCurrent) {
    return `${start} – Present`;
  }
  
  if (endDate) {
    const end = new Date(endDate).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    return `${start} – ${end}`;
  }
  
  return start;
}

export default async function ExperiencePage() {
  const experiences = (await getExperiences()) as Experience[];

  return (
    <>
      <h1 className="page-heading">Experience</h1>

      <p className="section-intro max-w-3xl">
        Roles where I have shipped product features end-to-end, improved platform
        reliability, and translated messy requirements into usable software.
      </p>

      <div className="space-y-9 sm:space-y-10">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.startDate}`} className="group border-b border-border/65 pb-7 sm:pb-8 last:border-b-0 last:pb-0">
            <div className="flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline mb-2 gap-2 md:gap-x-8">
              <h2 className="font-medium tracking-[-0.015em] text-[1.01rem]">{exp.company}</h2>
              <span className="meta-text mt-1 sm:mt-0 sm:whitespace-nowrap">
                {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground/90 mb-3 tracking-[-0.005em] leading-relaxed">
              {exp.role} · {exp.location}
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground/95 leading-6">
              {exp.achievements.map((achievement: string) => (
                <li key={achievement} className="flex gap-2">
                  <span className="text-muted-foreground/50">—</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="subtle-divider">
        <Link
          href="/"
          className="editorial-link text-sm text-muted-foreground"
        >
          ← Back to about
        </Link>
      </div>
    </>
  );
}

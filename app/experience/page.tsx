import { getExperiences } from "@/lib/content";
import Link from "next/link";

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
  const experiences = await getExperiences();

  return (
    <main>
      <h1 className="text-2xl font-medium mb-8">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp: any, index: number) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h2 className="font-medium">{exp.company}</h2>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {exp.role} · {exp.location}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {exp.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted-foreground/50">—</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to about
        </Link>
      </div>
    </main>
  );
}

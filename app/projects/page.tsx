import Link from "next/link";
import { Github, Star } from "lucide-react";

interface Project {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

const featuredProjects: Project[] = [
  {
    name: "StorySail",
    description: "A reading writing app built with React Native, Expo, and Supabase. A full-featured social publishing platform for writers.",
    url: "https://github.com/mshivam019/StorySail",
    stars: 162,
    language: "TypeScript",
  },
  {
    name: "Designered",
    description: "A complex canvas-based graphics editor (Canva alternative) supporting multi-layer manipulation, vector drawing, and AI-driven image generation using konva.js.",
    url: "https://github.com/mshivam019/designered",
    stars: 0,
    language: "TypeScript",
  },
  {
    name: "agents-js",
    description: "Contributor to LiveKit's agents-js. Build realtime multimodal AI agents with Node.js - a framework for creating AI-powered applications.",
    url: "https://github.com/mshivam019/agents-js",
    stars: 0,
    language: "TypeScript",
  },
  {
    name: "nod-cli",
    description: "Backend scaffolding CLI for Node.js. Quickly bootstrap Node.js projects with best practices.",
    url: "https://github.com/mshivam019/nod-cli",
    stars: 0,
    language: "TypeScript",
  },
];

const miniProjects: Project[] = [
  {
    name: "CC-Instagram",
    description: "Instagram clone using Jetpack Compose",
    url: "https://github.com/mshivam019/CC-Instagram",
    stars: 18,
    language: "Kotlin",
  },
  {
    name: "2048",
    description: "Classic 2048 puzzle game",
    url: "https://github.com/mshivam019/2048",
    stars: 11,
    language: "JavaScript",
  },
  {
    name: "star-wars-weather-app",
    description: "Star wars themed Angular weather app",
    url: "https://github.com/mshivam019/star-wars-weather-app",
    stars: 1,
    language: "TypeScript",
  },
  {
    name: "Meow-Speech",
    description: "iOS app for Text to Speech functionality",
    url: "https://github.com/mshivam019/Meow-Speech",
    stars: 3,
    language: "Swift",
  },
  {
    name: "Flappy-Bird",
    description: "2D game based on Unity Engine",
    url: "https://github.com/mshivam019/Flappy-Bird",
    stars: 4,
    language: "C#",
  },
  {
    name: "SpringKafka",
    description: "A sample Kafka Spring Boot example",
    url: "https://github.com/mshivam019/SpringKafka",
    stars: 2,
    language: "Java",
  },
  {
    name: "Stark",
    description: "Certificate Generator",
    url: "https://github.com/mshivam019/Stark",
    stars: 3,
    language: "HTML",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium mb-8">Projects</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <p className="text-muted-foreground leading-relaxed">
          Over the years, I've worked on various projects ranging from mobile apps 
          and web applications to developer tools and games. Here are some of my 
          notable works and experiments.
        </p>
      </div>

      <div className="space-y-10 mb-16">
        {featuredProjects.map((project) => (
          <article key={project.name} className="group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
              <div className="flex items-center gap-3">
                <h2 className="font-medium">{project.name}</h2>
                {project.stars > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                )}
              </div>
              <Link
                href={project.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              {project.description}
            </p>

            <span className="text-xs text-muted-foreground/70">
              {project.language}
            </span>
          </article>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-medium mb-4 text-muted-foreground">
          Other Projects
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {miniProjects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border space-y-4">
        <Link
          href="https://github.com/mshivam019"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          View all projects on GitHub
        </Link>

        <div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to about
          </Link>
        </div>
      </div>
    </main>
  );
}

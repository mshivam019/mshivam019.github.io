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
    description: "A social publishing app for writers, built with React Native, Expo, and Supabase to support writing, discovery, and reader engagement in one workflow.",
    url: "https://github.com/mshivam019/StorySail",
    stars: 162,
    language: "TypeScript",
  },
  {
    name: "Designered",
    description: "A canvas-based graphics editor focused on layered composition, vector tools, and AI-assisted image generation for practical design workflows.",
    url: "https://github.com/mshivam019/designered",
    stars: 0,
    language: "TypeScript",
  },
  {
    name: "agents-js",
    description: "Open-source contributions to LiveKit agents-js, including Sarvam plugin packages for both STT and TTS with REST and WebSocket endpoint support (contributed via fork).",
    url: "https://github.com/livekit/agents-js",
    stars: 0,
    language: "TypeScript",
  },
  {
    name: "nod-cli",
    description: "A Node.js scaffolding CLI that standardizes backend setup so new services start with sensible structure and production-minded defaults.",
    url: "https://github.com/mshivam019/nod-cli",
    stars: 0,
    language: "TypeScript",
  },
];

const miniProjects: Project[] = [
  {
    name: "CC-Instagram",
    description: "A Jetpack Compose exploration of feed-style UI patterns and mobile interaction architecture.",
    url: "https://github.com/mshivam019/CC-Instagram",
    stars: 18,
    language: "Kotlin",
  },
  {
    name: "2048",
    description: "A browser implementation of the 2048 puzzle focused on game-state logic and smooth keyboard interaction.",
    url: "https://github.com/mshivam019/2048",
    stars: 11,
    language: "JavaScript",
  },
  {
    name: "star-wars-weather-app",
    description: "A themed Angular weather app built as a UI composition and API-integration exercise.",
    url: "https://github.com/mshivam019/star-wars-weather-app",
    stars: 1,
    language: "TypeScript",
  },
  {
    name: "Meow-Speech",
    description: "An iOS text-to-speech utility built to explore accessibility-focused interaction and voice output handling.",
    url: "https://github.com/mshivam019/Meow-Speech",
    stars: 3,
    language: "Swift",
  },
  {
    name: "Flappy-Bird",
    description: "A Unity-based 2D game prototype used to practice gameplay loops and physics tuning.",
    url: "https://github.com/mshivam019/Flappy-Bird",
    stars: 4,
    language: "C#",
  },
  {
    name: "SpringKafka",
    description: "A Spring Boot + Kafka sample for event-driven backend communication patterns.",
    url: "https://github.com/mshivam019/SpringKafka",
    stars: 2,
    language: "Java",
  },
  {
    name: "Stark",
    description: "A lightweight certificate generator for fast event or cohort credential creation.",
    url: "https://github.com/mshivam019/Stark",
    stars: 3,
    language: "HTML",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <h1 className="page-heading">Projects</h1>

      <div className="max-w-3xl mb-12">
        <p className="section-intro">
          A mix of production-facing work and focused experiments across mobile,
          web, developer tooling, and creative interfaces.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-7 lg:grid-cols-2 mb-14 sm:mb-16">
        {featuredProjects.map((project) => (
          <article key={project.name} className="group border border-border/65 rounded-xl p-4 sm:p-5 h-full bg-card/35">
            <div className="flex items-center justify-between mb-3 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="font-medium tracking-[-0.015em] truncate">{project.name}</h2>
                {project.stars > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                )}
              </div>
              <Link
                href={project.url}
                className="editorial-link no-underline text-muted-foreground shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-muted-foreground/95 leading-6 mb-3">
              {project.description}
            </p>

            <span className="meta-text">
              {project.language}
            </span>
          </article>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="text-sm font-medium mb-4 text-muted-foreground tracking-[0.02em] uppercase">
          Other Projects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-muted-foreground">
          {miniProjects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              className="editorial-link text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="subtle-divider space-y-4">
        <Link
          href="https://github.com/mshivam019"
          className="editorial-link text-sm text-muted-foreground inline-flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          View all projects on GitHub
        </Link>

        <div>
          <Link
            href="/"
            className="editorial-link text-sm text-muted-foreground"
          >
            ← Back to about
          </Link>
        </div>
      </div>
    </>
  );
}

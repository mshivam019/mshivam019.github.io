import { readFile } from "fs/promises";
import { join } from "path";

const contentDir = join(process.cwd(), "content");

export async function getProfile() {
  const data = await readFile(join(contentDir, "profile.json"), "utf-8");
  return JSON.parse(data);
}

export async function getExperiences() {
  const data = await readFile(join(contentDir, "experience.json"), "utf-8");
  return JSON.parse(data);
}

export interface Project {
  name: string;
  blurb: string;
  bullets?: string[];
  language: string;
  stars: number;
  forks: number;
  year: string;
  repo: string;
  demo?: string;
  demoLabel?: string;
}

export interface Projects {
  public: Project[];
}

export async function getProjects(): Promise<Projects> {
  const data = await readFile(join(contentDir, "projects.json"), "utf-8");
  return JSON.parse(data);
}

export interface Credentials {
  education: { school: string; qualification: string; period: string; note?: string }[];
}
export async function getCredentials(): Promise<Credentials> {
  const data = await readFile(join(contentDir, "credentials.json"), "utf-8");
  return JSON.parse(data);
}

export interface Contribution {
  repo: string;
  number?: number;
  title: string;
  state: "merged" | "open" | "closed";
  prCount?: number;
  package?: string;
  packageLabel?: string;
  date: string;
  note?: string;
}

export async function getContributions(): Promise<Contribution[]> {
  const data = await readFile(join(contentDir, "opensource.json"), "utf-8");
  return JSON.parse(data);
}

export interface Interests {
  now: { label: string; value: string }[];
  shelves: { label: string; items: string[] }[];
}

export async function getInterests(): Promise<Interests> {
  const data = await readFile(join(contentDir, "interests.json"), "utf-8");
  return JSON.parse(data);
}

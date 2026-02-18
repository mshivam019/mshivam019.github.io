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

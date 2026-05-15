import { posts } from "@/app/writing/posts";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://mshivam019.github.io";

  const lines = [
    `# Shivam Mishra`,
    `> Senior Developer building across web, mobile, and AI. Writes about engineering trade-offs.`,
    ``,
    `## Pages`,
    `- About: ${baseUrl}`,
    `- Experience: ${baseUrl}/experience`,
    `- Projects: ${baseUrl}/projects`,
    `- Writing: ${baseUrl}/writing`,
    `- Resume: ${baseUrl}/resume`,
    ``,
    `## Writing`,
    ...posts.map(
      (post) =>
        `- ${post.title}: ${baseUrl}/writing/${post.slug} (${post.date})`
    ),
    ``,
    `## Optional`,
    `- Resume PDF: https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view`,
    `- GitHub: https://github.com/mshivam019`,
    `- LinkedIn: https://linkedin.com/in/mshivam019`,
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

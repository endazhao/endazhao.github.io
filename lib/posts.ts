import { parse as parseYaml } from "yaml";

const markdownFiles = import.meta.glob<string>("../content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  summary: string;
  tags: string[];
  readingTime: string;
  content: string;
};

function toPost(path: string, source: string): Post {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in ${path}`);
  const data = parseYaml(match[1]) as Record<string, unknown>;
  const content = match[2];
  const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
  const words = content.trim().split(/\s+/).length;
  const date = String(data.date);

  return {
    slug,
    title: String(data.title),
    date,
    displayDate: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(date)),
    summary: String(data.summary),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: `${Math.max(1, Math.ceil(words / 220))} min read`,
    content,
  };
}

export function getAllPosts(): Post[] {
  return Object.entries(markdownFiles)
    .map(([path, source]) => toPost(path, source))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

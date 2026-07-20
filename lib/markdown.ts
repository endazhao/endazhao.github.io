import { Marked } from "marked";
import markedKatex from "marked-katex-extension";

const markdown = new Marked(
  markedKatex({
    throwOnError: false,
  }),
);

export async function renderMarkdown(source: string): Promise<string> {
  return markdown.parse(source);
}

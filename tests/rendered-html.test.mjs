import assert from "node:assert/strict";
import test from "node:test";
import { renderMarkdown } from "../lib/markdown.ts";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the finished academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Enda Zhao/);
  assert.match(html, /inference-time methods/);
  assert.doesNotMatch(html, /I study how language models reason/);
  assert.match(html, /Recent publications/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders the publications and notes routes", async () => {
  const [publications, notes] = await Promise.all([render("/publications"), render("/blog")]);
  assert.equal(publications.status, 200);
  assert.equal(notes.status, 200);
  const publicationsHtml = await publications.text();
  assert.match(publicationsHtml, /Stepwise Informativeness Search/);
  assert.match(publicationsHtml, /page-hero-copy/);
  assert.match(await notes.text(), /Welcome to my research notes/);
});

test("renders inline and display mathematics with KaTeX", async () => {
  const html = await renderMarkdown(String.raw`Inline $p_\theta(x)$.

$$
\mathcal{L}(\theta) = \mathbb{E}_{x}[-\log p_\theta(x)]
$$`);

  assert.match(html, /class="katex"/);
  assert.match(html, /class="katex-display"/);
  assert.match(html, /<math[^>]*display="block"/);
});

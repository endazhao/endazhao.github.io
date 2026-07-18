# Enda Zhao — Academic Homepage

A maintainable academic homepage for research, publications, a web CV, and long-form notes. The site is built with the Next.js App Router on vinext, uses Markdown for writing, and exports a fully static build for GitHub Pages.

## Content map

Most updates do not require editing page components:

- `content/site.ts` — biography, contact details, profile links, and research themes
- `content/publications.ts` — publication records and paper links
- `content/cv.ts` — education, research experience, and interests
- `content/posts/*.md` — blog posts and research notes in Markdown

To publish a new note, add a Markdown file under `content/posts/`. The filename becomes the URL slug and the post is added to the notes index automatically.

```md
---
title: "A descriptive title"
date: "2026-07-17"
summary: "One or two sentences for cards and previews."
tags:
  - LLM reasoning
---

Write the post here.
```

## Local development

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Run `npm test` before requesting a release. Run `npm run build:pages` to verify the static GitHub Pages output locally.

## Branch and release workflow

- `main` contains stable, publishable releases only.
- Create a branch such as `content/new-publication` or `feature/research-page` for every change.
- Open a pull request, verify the checks and preview, then merge to `main`.
- A merge to `main` triggers the GitHub Pages deployment automatically.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** once. The workflow in `.github/workflows/pages.yml` handles subsequent releases.

# tylerlam.com

Personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Updating content

All text lives in **`src/data/portfolio.ts`**. Edit it, save, and the site updates. Anything marked `TODO` is placeholder content.

## Running locally

```bash
npm install     # first time only
npm run dev     # open http://localhost:3000
```

## Project map

| File | What it does |
| --- | --- |
| `src/data/portfolio.ts` | All site content (projects, jobs, skills, links) |
| `src/app/layout.tsx` | Wraps every page: fonts, `<html>`, SEO metadata |
| `src/app/page.tsx` | The home page; stacks the sections in order |
| `src/app/globals.css` | Colors (light + dark mode) and global styles |
| `src/components/Header.tsx` | Sticky nav bar + mobile menu |
| `src/components/Hero.tsx` | Name, headline, and buttons at the top |
| `src/components/Section.tsx` | Shared wrapper giving each section its heading/spacing |
| `src/components/sections/*` | One file per section (About, Projects, …) |
| `src/app/sitemap.ts`, `robots.ts` | Generate `/sitemap.xml` and `/robots.txt` for search engines |
| `public/` | Static files served as-is (e.g. put `resume.pdf` here) |

## Deploying

Pushing to the `main` branch on GitHub triggers an automatic Vercel deploy.

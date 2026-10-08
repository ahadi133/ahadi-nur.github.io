# Ahadi Portfolio Website

This repository hosts the personal portfolio website for Mirza Anto Ahadi Nur, a Data-Driven Business Analyst.

The live website app is located in the `ahadi133.github.io/` folder and is built with:

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Vercel deployment

The site is designed as a content-driven portfolio with static HTML output and no required backend or environment variables.

## Website summary

This portfolio presents:

- a professional profile and introduction
- skills and work approach
- work experience timeline
- analytical project highlights
- portfolio case studies
- certifications and credentials
- downloadable CV and contact links

Most content is edited in `src/content/`, which keeps the website easy to maintain without changing the underlying components.

## Repository structure

```text
.
├── README.md
├── ahadi133.github.io/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── vitest.config.mts
│   └── ...
└── ...
```

The `ahadi133.github.io/` directory contains the main application and is the working project folder.

## Run locally

```bash
cd ahadi133.github.io
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Main editable content

The site content is organized for simple updates:

- `src/content/profile.ts` — personal bio, links, education, philosophy, CV
- `src/content/skills.ts` — skill groups and working style
- `src/content/experience.ts` — work history
- `src/content/analysis-work.ts` — analysis work highlights
- `src/content/projects.ts` — project portfolio entries
- `src/content/certificates.ts` — certificates and credentials
- `src/lib/site.ts` — site URL and navigation metadata

## Quality checks

```bash
cd ahadi133.github.io
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run format
```

## Deployment

This project is intended for deployment on Vercel. After the first deploy, the production URL should be updated in `src/lib/site.ts` so canonical URLs, sitemap, and social metadata remain correct.

## Notes

This repository is a personal portfolio website for showcasing professional background, analytical work, and project experience in a clean, modern format.

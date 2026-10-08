# Ahadi Portfolio

Personal portfolio for **Mirza Anto Ahadi Nur**, Data-Driven Business Analyst.
Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, deployed on Vercel.
Every page is prerendered to static HTML; no environment variables or
third-party services are needed.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit content

All text lives in `src/content/`. Components never need to change for content
updates. Each file is validated with zod when it loads, so a typo (bad URL,
missing field) fails `npm run build` with a message saying what is wrong.

| File               | What it holds                                                      |
| ------------------ | ------------------------------------------------------------------ |
| `profile.ts`       | Name, role, intro, email, links, education, philosophy, CV, Spline |
| `skills.ts`        | "How I Work" skill groups                                          |
| `experience.ts`    | Work timeline (newest first)                                       |
| `analysis-work.ts` | Analysis Work cards                                                |
| `projects.ts`      | Projects and their case studies                                    |
| `certificates.ts`  | Certificates                                                       |
| `src/lib/site.ts`  | Live site URL and nav links                                        |

### Add a project

1. Put the screenshot in `src/assets/projects/` and import it at the top of
   `src/content/projects.ts`.
2. Add an entry to the `projects` array. `slug` (kebab-case) becomes the URL
   `/projects/<slug>`; `highlight` must be a word that appears in `title`.
3. `links.code` / `links.live` are optional; their buttons only appear when set.

### Add a certificate

Add `{ title, issuer, issued }` to `src/content/certificates.ts`. For an image,
save it under `src/assets/certificates/`, import it and set `image`. Set
`credentialUrl` to show the **VERIFIED** badge and a "View credential" link.

### CV and 3D hero

- Put the PDF in `public/assets/` and set `cvUrl: "/assets/<file>.pdf"` in
  `profile.ts`. Every "Download CV" button appears automatically.
- Set `splineScene` to a public Spline scene URL to replace the hero photo with
  a 3D scene on large screens.

### Change the accent colour

Edit `--primary` and `--primary-soft` at the top of `src/app/globals.css`.

## Quality checks

```bash
npm run lint         # ESLint, zero warnings allowed
npm run typecheck    # TypeScript
npm test             # Vitest unit/component tests
npm run test:e2e     # Playwright (builds and starts the app on port 3100)
npm run format       # Prettier
```

First Playwright run: `npx playwright install chromium`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repo and keep the detected
   Next.js settings. No environment variables are required.
3. After the first deploy, copy the production URL into `siteUrl` in
   `src/lib/site.ts` and push again (it feeds canonical URLs, the sitemap and
   social previews).
4. Optional: enable **Analytics** and **Speed Insights** in the Vercel project
   dashboard; the scripts are already wired in and only load on Vercel.
5. Custom domain: Project → **Settings → Domains → Add**, follow the DNS
   instructions, then update `siteUrl` again.

## Open TODOs

- [ ] `profile.ts`: CV PDF (`cvUrl`), education institution and years, optional
      Spline scene.
- [ ] `profile.ts`: review the drafted "How I Think" paragraph.
- [ ] `certificates.ts`: issuers for Power BI and GenAI & Prompt Engineering,
      issue dates, certificate images, credential URLs.
- [ ] `projects.ts`: public links (Tableau Public, Power BI, GitHub) if any.
- [ ] `site.ts`: real production URL after the first deploy.

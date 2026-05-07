<div align="center">
  <h2 align="center">npranto.dev</h2>

[![Live](https://img.shields.io/badge/Demo-Live.svg)](https://npranto.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d16a376-43ef-47af-8b95-ee54bcffd93c/deploy-status)](https://app.netlify.com/sites/npranto/deploys)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue.svg)](https://www.linkedin.com/in/npranto/)

</div>

## About

A production-quality engineering portfolio platform showcasing projects, work experience, skills, education, blog posts, and videos. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. All content is data-driven via JSON files with runtime validation.

See it live at [npranto.dev](https://npranto.dev/).

## Tech Stack

| Layer      | Choice                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| Framework  | [Next.js 16](https://nextjs.org/) — App Router, Turbopack                                              |
| UI         | [React 19](https://react.dev/) + TypeScript 5                                                          |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) + CSS custom property design tokens                        |
| Linting    | [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/)                                     |
| Git hooks  | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) |
| Deployment | [Netlify](https://netlify.com/)                                                                        |

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout — ThemeProvider, JSON-LD, global metadata
│   ├── page.tsx                # Home page (single-page portfolio)
│   ├── not-found.tsx           # Global 404
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # robots.txt
│   └── (pages)/                # Sub-page route group (shared Navbar + Footer)
│       ├── layout.tsx
│       ├── projects/           # /projects and /projects/[slug]
│       ├── experience/         # /experience
│       ├── skills/             # /skills
│       ├── blog/               # /blog
│       └── dev/qa/             # Dev-only QA dashboard
│
├── components/
│   ├── layout/                 # Navbar, SubpageNavbar, Footer
│   ├── sections/               # Home page section components
│   ├── projects/               # Project-specific components
│   ├── experience/             # Experience timeline components
│   ├── skills/                 # Skills components
│   ├── blog/                   # Blog card/grid components
│   └── ui/                     # Design system primitives
│
├── content/                    # JSON content files (single source of truth)
├── lib/
│   ├── content/                # Content platform (types, loaders, validators, search)
│   ├── seo/                    # SEO helpers (metadata, structured data, routes)
│   ├── ui/                     # UI utilities (cn)
│   └── utils/                  # Utility functions (date, slug, url, text, array)
│
└── scripts/                    # CLI scripts
```

Full architecture documentation: [docs/architecture.md](docs/architecture.md)

## Getting Started

```bash
# 1. Clone and install
git clone https://github.com/npranto/personal-portfolio.git
cd personal-portfolio
npm install

# 2. Set site URL (optional, for canonical URLs and sitemap)
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                      | Description                                     |
| --------------------------- | ----------------------------------------------- |
| `npm run dev`               | Start dev server at localhost:3000              |
| `npm run build`             | Create production build                         |
| `npm start`                 | Serve production build                          |
| `npm run lint`              | Run ESLint                                      |
| `npm run format`            | Run Prettier                                    |
| `npm run typecheck`         | TypeScript type check (no build artifacts)      |
| `npm run validate-content`  | Validate all content JSON files                 |
| `npm run check`             | Full check: validate + lint + typecheck + build |
| `npm run fetch-blog-posts`  | Fetch latest posts from DEV.to                  |
| `npm run fetch-video-posts` | Fetch latest videos from YouTube                |
| `npm run fetch-content`     | Fetch both blog and video posts                 |

## Content Model

All content lives in `src/content/*.json`. The key files are:

| File               | Contents                                                 |
| ------------------ | -------------------------------------------------------- |
| `profile.json`     | Name, role, location, resume link                        |
| `work.json`        | Work experience with description bullets and tech        |
| `projects.json`    | Projects with slug, category, case study, links, metrics |
| `skills.json`      | Skill groups organized by category                       |
| `education.json`   | Education history                                        |
| `socials.json`     | Social platform links                                    |
| `blog-posts.json`  | Cached posts from DEV.to (auto-fetched)                  |
| `video-posts.json` | Cached videos from YouTube (auto-fetched)                |

See [docs/content-model.md](docs/content-model.md) for full schema, required fields, and how to add new content.

## Content Validation

```bash
npm run validate-content
```

Validates all content files and exits with code 1 on failure. Run before committing content changes. Output example:

```
✅ Content validation passed.
Validated:
  - profile
  - socials
  - navigation
  - experience
  - projects
  - education
  - blog
  - videos
  - skills
```

## SEO

- Per-page metadata via `buildMetadata()` in `src/lib/seo/metadata.ts`
- Dynamic OG metadata for project detail pages
- JSON-LD (Person, WebSite, BreadcrumbList) structured data
- Dynamic sitemap at `/sitemap.xml`
- `robots.txt` disallows `/dev/`

Set the site URL:

```env
NEXT_PUBLIC_SITE_URL=https://npranto.dev
```

See [docs/seo-guide.md](docs/seo-guide.md) for full SEO documentation.

## Accessibility

- Skip-to-content link on every page
- Semantic HTML throughout (nav, main, article, aside, etc.)
- `aria-label` on all icon-only interactive elements
- `aria-current="page"` on active nav links
- `aria-live="polite"` on dynamically updated content
- Visible focus states using `focus-visible` CSS pseudo-class

See [docs/accessibility-checklist.md](docs/accessibility-checklist.md) for the full checklist.

## Environment Variables

| Variable               | Required              | Description                                     |
| ---------------------- | --------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Recommended           | Canonical base URL for sitemap, OG, and JSON-LD |
| `BLOG_API_URL`         | For fetch-blog-posts  | DEV.to API endpoint                             |
| `VIDEOS_API_URL`       | For fetch-video-posts | YouTube Data API endpoint                       |

## Deployment

Deployed automatically to Netlify on push to `main`. Preview deployments are created for all pull requests.

## Documentation

- [docs/architecture.md](docs/architecture.md) — Full app architecture
- [docs/content-model.md](docs/content-model.md) — Content types and how to add content
- [docs/development-workflow.md](docs/development-workflow.md) — Dev workflow, scripts, common issues
- [docs/qa-checklist.md](docs/qa-checklist.md) — Manual QA and regression checklist
- [docs/seo-guide.md](docs/seo-guide.md) — SEO configuration and testing
- [docs/accessibility-checklist.md](docs/accessibility-checklist.md) — A11y checklist
- [docs/performance-notes.md](docs/performance-notes.md) — Performance decisions and tradeoffs
- [docs/ai-agent-workflow.md](docs/ai-agent-workflow.md) — How to use AI tools safely in this repo

## Contributing

1. Open an [issue](https://github.com/npranto/personal-portfolio/issues) describing the change
2. Branch off `main`: `git checkout -b feat/<description>`
3. Make changes — content updates go in `src/content/`, code in `src/`
4. Run `npm run check` to validate everything
5. Open a pull request — a Netlify preview URL will be generated
6. Once preview looks good, merge; production updates within minutes

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib Pranto" width="50" style="border-radius: 50%" />
  </a>
</div>

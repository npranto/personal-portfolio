# Implementation Audit

## Current Repo Structure

```
src/
  app/
    layout.tsx      — root HTML layout, ThemeProvider, structured data (JSON-LD)
    page.tsx        — single-page portfolio, all sections inline
    not-found.tsx   — global 404
    sitemap.ts      — dynamic sitemap (/ + external blog URLs)
    robots.ts       — robots.txt
    globals.css     — design tokens, Tailwind v4, base styles
  components/
    layout/
      Navbar.tsx    — sticky nav, IntersectionObserver active state
      Footer.tsx    — copyright + social icons
    sections/
      Hero.tsx, About.tsx, Experience.tsx, Projects.tsx,
      Content.tsx, Education.tsx, Contact.tsx
    projects/
      ProjectCard.tsx, ProjectGrid.tsx, ProjectsClient.tsx, ProjectSearch.tsx
    ui/
      Badge.tsx, Button.tsx, EmptyState.tsx, ExternalLink.tsx,
      FilterTabs.tsx, Input.tsx, SectionHeading.tsx, SocialIcons.tsx
    TextRotator.tsx, ThemeProvider.tsx
  content/
    config.json, nav.json, profile.json, about.json,
    experience.json, projects.json, education.json,
    skills.json, socials.json, blog-posts.json, video-posts.json
  lib/
    content/        — types, loaders, normalizers, search, filters, sort
    seo/            — structured-data.ts only
    ui/             — cn.ts
    utils/          — slug.ts, url.ts, text.ts
    types.ts        — legacy type interfaces (used by page.tsx)
```

## Current App Architecture

- **Framework:** Next.js 16.2.2 (Turbopack, App Router)
- **Styling:** Tailwind CSS v4 with CSS custom property design tokens
- **Rendering:** 100% static generation (SSG)
- **Content:** JSON files in `src/content/`, imported at build time
- **Theme:** Dark/light mode via `data-theme` attribute + localStorage
- **Routes:** Single-page only (`/`). No sub-pages yet.

## Content Sources

- `profile.json` — name, role, location, resume link
- `about.json` — bio paragraphs
- `experience.json` — companies with description bullets and tech arrays
- `projects.json` — projects with slug, category, featured, summary, role, links, metrics, caseStudy
- `education.json` — educational institutions
- `skills.json` — skill groups with proficiency levels
- `socials.json` — social platform links
- `nav.json` — anchor-based nav links
- `blog-posts.json` — posts from dev.to
- `video-posts.json` — YouTube videos
- `config.json` — feature flags to show/hide sections

## What Has Been Implemented

### Phase 0 — Audit

- Created `docs/implementation-audit.md` (this file)

### Phase 1 — Content Platform

- Created `src/lib/content/` with types, normalizers, search, filters, sort, loaders
- Created `src/content/skills.json` with skill groups
- Enriched `src/content/projects.json` with slug, category, featured, summary, role, links, metrics, caseStudy

### Phase 2 — Validation CLI (partial)

- Added `validate-content`, `typecheck`, `check` npm scripts to `package.json`
- **Not yet created:** `src/scripts/validate-content.mjs` — running `npm run validate-content` will fail

### Phase 3 — Projects Section (home page only)

- `src/components/projects/ProjectCard.tsx` — project card component
- `src/components/projects/ProjectGrid.tsx` — responsive grid wrapper
- `src/components/projects/ProjectsClient.tsx` — search + filter state
- `src/components/projects/ProjectSearch.tsx` — search input
- `src/components/sections/Projects.tsx` — home-page projects section using the above

### Phase 7 — Homepage Metadata

- Added structured data (Person, WebSite JSON-LD) to root layout via `src/lib/seo/structured-data.ts`
- Improved root metadata (OpenGraph, Twitter cards) in `src/app/layout.tsx`

### Phase 8 — Design System (partial)

- Added `src/lib/ui/cn.ts`
- Added `src/components/ui/` — Badge, Button, EmptyState, ExternalLink, FilterTabs, Input, SectionHeading, SocialIcons

### Phase 9 — SEO (partial)

- `src/lib/seo/structured-data.ts` — JSON-LD generators (Person, WebSite)
- `src/app/sitemap.ts` — sitemap with `/` and external blog URLs
- `src/app/robots.ts` — robots.txt
- **Not yet created:** `src/lib/seo/metadata.ts` (buildMetadata helper)
- **Not yet created:** `src/lib/seo/routes.ts` (route registry)

### Phase 15 — Utilities (partial)

- `src/lib/utils/slug.ts`, `url.ts`, `text.ts`
- **Not yet created:** `src/lib/utils/date.ts`, `array.ts`

### Phase 12–13 — Docs

- `docs/` directory with all documentation files
- `docs/reviews/` templates

## What Has NOT Been Implemented (Pending)

The following phases are planned but the code does not yet exist:

### Pending: Fetch Scripts

- `src/scripts/fetch-blog-posts.mjs` — fetches from dev.to
- `src/scripts/fetch-video-posts.mjs` — fetches from YouTube
- `src/scripts/validate-content.mjs` — validates content JSON files

### Pending: Sub-pages and Route Group

- `src/app/(pages)/` route group
- `/projects` — standalone projects listing page
- `/projects/[slug]` — project detail with case study
- `/experience` — standalone experience timeline page
- `/skills` — standalone skills matrix page
- `/blog` — standalone blog listing page
- `/dev/qa` — dev-only QA dashboard

### Pending: Sub-page Components

- `src/components/layout/SubpageNavbar.tsx`
- `src/components/experience/` — ExperienceTimeline, ExperienceCard
- `src/components/skills/` — SkillGroupCard
- `src/components/blog/` — BlogCard, BlogGrid
- Additional project detail components: ProjectCaseStudy, ProjectTechStack, ProjectMetrics, RelatedProjects

### Pending: SEO Helpers

- `src/lib/seo/metadata.ts` — `buildMetadata()` helper
- `src/lib/seo/routes.ts` — route registry + `canonicalUrl()`
- Per-page `metadata` exports on all sub-pages
- Breadcrumb JSON-LD on project detail pages
- Dynamic `generateMetadata()` for project detail pages
- Sitemap entries for sub-pages and project slugs

### Pending: Accessibility Improvements

- `@media (prefers-reduced-motion: reduce)` on text-rotator-track and fade-in-up animations
- `aria-expanded` on mobile menu
- Keyboard focus trap for mobile menu

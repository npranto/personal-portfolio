# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev              # Start dev server (http://localhost:3000, Turbopack)
npm run build            # Production build (static output in .next/)
npm run typecheck        # tsc --noEmit (no build artifacts)
npm run lint             # ESLint
npm run format           # Prettier (auto-applied on commit via lint-staged)
npm run validate-content # Validate all src/content/*.json files
npm run fetch-content    # Fetch blog posts (dev.to) + video posts (YouTube)
npm run check            # validate-content → lint → typecheck → build (full CI gate)
```

> **Note:** `validate-content`, `fetch-blog-posts`, and `fetch-video-posts` scripts are defined in `package.json` but the `src/scripts/` files do not yet exist. These commands will fail until implemented.

## Architecture

### Single-page portfolio

This is a **Next.js 16 app with a single route** (`/`). All portfolio content is on the home page as anchor-linked sections (`#about`, `#work`, etc.). There are no sub-page routes yet.

```
src/app/layout.tsx   — root HTML, ThemeProvider, JSON-LD, no Navbar/Footer
src/app/page.tsx     — all sections inline: Hero, About, Experience, Projects, Content, Education, Contact
```

### Content pipeline

All content is stored as JSON in `src/content/`. It flows through three layers:

1. **Raw JSON** (`src/content/*.json`) — hand-edited or auto-fetched
2. **Normalizers** (`src/lib/content/normalizers.ts`) — transform raw JSON into richer typed objects
3. **Loaders** (`src/lib/content/loaders.ts`) — typed access functions used directly in `page.tsx`

Types for this layer live in `src/lib/content/types.ts`. The older `src/lib/types.ts` is a legacy file still used by `page.tsx`.

When adding or changing content fields: update the JSON, update both type files, and update the normalizer.

### Server vs. client components

All section/card components are server components by default. Only these are client components (marked with `'use client'`):

| Component            | Reason                                              |
| -------------------- | --------------------------------------------------- |
| `Navbar.tsx`         | Scroll detection, IntersectionObserver, mobile menu |
| `ThemeProvider.tsx`  | `localStorage` theme persistence                    |
| `TextRotator.tsx`    | CSS animation trigger                               |
| `ProjectsClient.tsx` | Search + category filter + featuredOnly state       |
| `FilterTabs.tsx`     | Button click events                                 |
| `Input.tsx`          | `forwardRef`                                        |

### Projects section composition

```
page.tsx (server)
  → Projects section (server) — calls loadProjects()
    → ProjectsClient (client) — holds search/filter/sort state
      → ProjectGrid (server-compatible) — receives filtered array
        → ProjectCard (server)
```

### Theme system

`src/content/config.json` controls the active brand theme (`theme` field). Valid values: `default`, `aurora`, `ember`, `forest`, `rose`, `midnight`, `solar`. The `ThemeProvider` applies this as a `data-theme` attribute before hydration to prevent flash.

### SEO

- Global `metadata` export in `src/app/layout.tsx` with OG/Twitter cards
- JSON-LD (Person + WebSite) via `src/lib/seo/structured-data.ts`
- `NEXT_PUBLIC_SITE_URL` env var sets canonical base URL (defaults to `http://localhost:3000`)
- `src/lib/seo/metadata.ts` and `src/lib/seo/routes.ts` are referenced in docs but not yet implemented

### Remote image domains

`next.config.ts` allows images from `media2.dev.to`, `dev-to-uploads.s3.amazonaws.com`, and `i.ytimg.com`. Any new remote image source requires adding to `remotePatterns`.

## Content model quick reference

**Adding a project:** Edit `src/content/projects.json`. Required fields: `id`, `slug`, `name`, `category`, `technologies`. Run `npm run validate-content` then `npm run build`.

**Project `id` format:** `content:project-item:<slug>`

**Valid link types:** `github`, `demo`, `npm`, `docs`, `video`, `other`

**Valid categories:** `web-app`, `library`, `tool`, `other`

**Valid skill levels:** `core`, `proficient`, `familiar`

**Blog/video posts:** Auto-fetched via `npm run fetch-content`. Do not edit `blog-posts.json` or `video-posts.json` manually.

## Environment variables

| Variable               | Required          | Description                                      |
| ---------------------- | ----------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Recommended       | Canonical base URL for sitemap, JSON-LD, OG tags |
| `BLOG_API_URL`         | For fetch scripts | dev.to API endpoint                              |
| `VIDEOS_API_URL`       | For fetch scripts | YouTube API endpoint                             |

Set in `.env` or `.env.local`.

## Development workflow rules (from Cursor rules)

- **Spec first:** For any feature touching more than one file or taking >30 minutes, write a spec doc (in `docs/`) before writing code. Gate each phase on human review: Specify → Plan → Tasks → Implement.
- **Incremental implementation:** Land one working slice at a time. The build and type-check must pass after each increment. Never mix a feature and a refactor in the same commit.
- **TDD:** Write a failing test before the implementation. For bug fixes, write a reproduction test first (Prove-It Pattern).
- **Scope discipline:** Touch only what the task requires. Note (don't fix) unrelated issues you spot.
- **UI quality:** Use the project's design system tokens, not raw hex or arbitrary pixel values. Every interactive element must be keyboard-accessible. Handle loading, error, and empty states. Split any component over 200 lines.

# Development Workflow

## Prerequisites

- Node.js (see `.nvmrc` for recommended version)
- npm

## Install

```bash
npm install
```

## Dev Server

```bash
npm run dev
```

Opens at `http://localhost:3000`.

Hot reloading is handled by Next.js Turbopack.

## Content Validation

```bash
npm run validate-content
```

Validates all JSON files in `src/content/`. Exits with code 0 on success, 1 on failure.

Run this before committing content changes.

## Type Checking

```bash
npm run typecheck
```

Runs `tsc --noEmit`. No build artifacts — type errors only.

## Lint

```bash
npm run lint
```

Runs ESLint. No warnings should be introduced.

## Format

```bash
npm run format
```

Runs Prettier on all files. Automatically applied via lint-staged on commit.

## Build

```bash
npm run build
```

Produces a production build in `.next/`. All pages are statically generated.

Expected routes:

- `/` — Home
- `/projects` — Projects listing
- `/projects/[slug]` — Project detail (one per project in projects.json)
- `/experience` — Experience timeline
- `/skills` — Skills matrix
- `/blog` — Blog listing
- `/sitemap.xml` — Sitemap
- `/robots.txt` — Robots

## Full Check (CI)

```bash
npm run check
```

Runs all of: `validate-content` → `lint` → `typecheck` → `build`

Use this before pushing to remote.

## Fetch External Content

```bash
npm run fetch-blog-posts    # Fetches latest posts from dev.to
npm run fetch-video-posts   # Fetches latest videos from YouTube
npm run fetch-content       # Runs both
```

Requires network access and valid API credentials in `.env`.

## Common Issues

### Build fails with TypeScript error

Run `npm run typecheck` to isolate the error without a full build.

### Content validation fails

Run `npm run validate-content` and read the file/path/issue in the output. Most common causes:

- Missing required field (name, slug, category)
- Invalid URL format in `links` array
- Duplicate slugs in `projects.json`

### Routes are doubled (e.g., `/projects/projects`)

This happens when pages are moved into a route group directory that already exists. Check `src/app/(pages)/` structure — each page file should be directly inside its route folder, not nested one level deeper.

### Theme flashes on load

The anti-flash script in `layout.tsx` sets `data-theme` before hydration. If a flash occurs, check that `localStorage.getItem('theme')` returns the correct value.

## Environment Variables

| Variable               | Required    | Description                                                                     |
| ---------------------- | ----------- | ------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Used for canonical URLs, sitemap, JSON-LD. Defaults to `http://localhost:3000`. |

Set in `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=https://npranto.dev
```

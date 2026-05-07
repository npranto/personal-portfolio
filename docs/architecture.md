# Architecture

## App Structure

```
src/
  app/
    layout.tsx                  — root HTML, ThemeProvider, JSON-LD
    page.tsx                    — home page (single-page portfolio)
    not-found.tsx               — global 404
    sitemap.ts                  — dynamic sitemap
    robots.ts                   — robots.txt
    (pages)/
      layout.tsx                — sub-page layout (Navbar + Footer)
      blog/page.tsx
      experience/page.tsx
      skills/page.tsx
      projects/
        page.tsx                — projects listing
        [slug]/page.tsx         — project detail
        [slug]/not-found.tsx
      dev/qa/page.tsx           — dev-only QA dashboard
  components/
    layout/
      Navbar.tsx                — home page navbar (anchor links, IntersectionObserver)
      SubpageNavbar.tsx         — sub-page navbar (Next.js Links, usePathname)
      Footer.tsx
    sections/                   — home page section components
    projects/                   — project-specific components
    experience/                 — experience timeline components
    skills/                     — skill group components
    blog/                       — blog card/grid components
    ui/                         — design system primitives
    TextRotator.tsx, ThemeProvider.tsx
  content/                      — all content as JSON
  lib/
    content/                    — content platform (types, loaders, validators, search)
    seo/                        — SEO helpers (metadata, structured data, routes)
    ui/                         — UI utilities (cn)
    utils/                      — utility functions (date, slug, url, text, array)
  scripts/                      — CLI scripts (validate-content, fetch-posts)
  utils/                        — legacy crawl utilities
  config/                       — site config
```

## Routing Strategy

The app uses Next.js App Router with two layout contexts:

1. **Root layout** (`src/app/layout.tsx`)
   - Applies to all routes
   - Provides: HTML structure, ThemeProvider, skip link, global JSON-LD
   - Does NOT include Navbar/Footer (those live at the page or route group level)

2. **Home page** (`src/app/page.tsx`)
   - Single-page portfolio with all sections
   - Includes its own `<Navbar>` and `<Footer>`
   - Nav links are anchor-based (`#about`, `#work`, etc.)

3. **Pages route group** (`src/app/(pages)/`)
   - Provides shared `<SubpageNavbar>` + `<Footer>` for sub-pages
   - Sub-pages: `/projects`, `/experience`, `/skills`, `/blog`, `/dev/qa`
   - Dynamic route: `/projects/[slug]`

## Content Architecture

All content is stored in `src/content/*.json` and:

1. Read directly as JSON imports (no file I/O at runtime)
2. Normalized into richer types via `src/lib/content/normalizers.ts`
3. Validated at build-time via `src/scripts/validate-content.mjs`
4. Exposed through typed loader functions in `src/lib/content/loaders.ts`

## Component Architecture

### Server Components (default)

All page components and most section/card components are server components.
Content is loaded directly in the page files using the content loaders.

### Client Components (interactive features only)

- `Navbar.tsx` — scroll detection, IntersectionObserver, mobile menu
- `SubpageNavbar.tsx` — usePathname for active state, mobile menu
- `ThemeProvider.tsx` — localStorage theme persistence
- `TextRotator.tsx` — CSS animation
- `ProjectsClient.tsx` — search + filter state (query, category, featuredOnly)
- `FilterTabs.tsx` — button interactions
- `Input.tsx` — forwarded ref

### Composition Pattern

Pages load data → pass to server components → pass to client components only at the interactive boundary.

Example for Projects:

```
projects/page.tsx (server) → loads projects
  → ProjectsClient (client) — holds search/filter state
    → ProjectGrid (server-compatible, receives filtered array)
      → ProjectCard (server)
```

## SEO Strategy

- `src/lib/seo/metadata.ts` — `buildMetadata()` used in all page exports
- Root layout exports global `metadata` with OG/Twitter cards
- Per-page metadata via `export const metadata: Metadata = buildMetadata({...})`
- Dynamic project pages use `generateMetadata()` for per-project OG data
- `src/app/sitemap.ts` — includes all static + dynamic routes
- `src/app/robots.ts` — blocks `/dev/` from crawlers
- JSON-LD: Person + WebSite in root layout; BreadcrumbList in project detail pages
- `NEXT_PUBLIC_SITE_URL` env var sets canonical base URL

## Validation Strategy

- TypeScript — strict type checking for all content types
- Runtime content validation — `src/scripts/validate-content.mjs`
  - Validates all JSON files without Next.js runtime dependency
  - Runs as part of `npm run check` in CI
- `npm run check` = validate-content + lint + typecheck + build

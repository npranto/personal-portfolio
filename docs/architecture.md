# Architecture

## App Structure

```
src/
  app/
    layout.tsx                  — root HTML, ThemeProvider, JSON-LD
    page.tsx                    — home page (single-page portfolio)
    not-found.tsx               — global 404
    sitemap.ts                  — dynamic sitemap (/ + external blog URLs)
    robots.ts                   — robots.txt
    globals.css                 — design tokens, Tailwind v4, base styles
  components/
    layout/
      Navbar.tsx                — home page navbar (anchor links, IntersectionObserver)
      Footer.tsx
    sections/                   — home page section components
      Hero.tsx, About.tsx, Experience.tsx, Projects.tsx,
      Content.tsx, Education.tsx, Contact.tsx
    projects/                   — project-specific components
      ProjectCard.tsx, ProjectGrid.tsx, ProjectsClient.tsx, ProjectSearch.tsx
    ui/                         — design system primitives
      Badge.tsx, Button.tsx, EmptyState.tsx, ExternalLink.tsx,
      FilterTabs.tsx, Input.tsx, SectionHeading.tsx, SocialIcons.tsx
    TextRotator.tsx, ThemeProvider.tsx
  content/                      — all content as JSON
    config.json, nav.json, profile.json, about.json,
    experience.json, projects.json, education.json,
    skills.json, socials.json, blog-posts.json, video-posts.json
  lib/
    content/                    — content platform (types, loaders, normalizers, search, filters, sort)
    seo/                        — SEO helpers (structured-data only)
    ui/                         — UI utilities (cn)
    utils/                      — utility functions (slug, url, text)
    types.ts                    — legacy type interfaces (still used by page.tsx)
```

## Routing Strategy

The app currently has a single layout context:

1. **Root layout** (`src/app/layout.tsx`)
   - Applies to all routes
   - Provides: HTML structure, ThemeProvider, skip link, global JSON-LD
   - Does NOT include Navbar/Footer (those live at the page level)

2. **Home page** (`src/app/page.tsx`)
   - Single-page portfolio with all sections inline
   - Includes its own `<Navbar>` and `<Footer>`
   - Nav links are anchor-based (`#about`, `#work`, etc.)
   - All content is rendered here: Hero, About, Experience, Projects, Content (blog + videos), Education, Contact

There is no sub-page route group. All portfolio content lives on the home page.

## Content Architecture

All content is stored in `src/content/*.json` and:

1. Read directly as JSON imports (no file I/O at runtime)
2. Normalized into richer types via `src/lib/content/normalizers.ts`
3. Exposed through typed loader functions in `src/lib/content/loaders.ts`

The `src/scripts/validate-content.mjs` script is referenced in `package.json` but the `src/scripts/` directory does not yet exist. Running `npm run validate-content` will fail until the script is created.

## Component Architecture

### Server Components (default)

All page components and most section/card components are server components.
Content is loaded directly in `page.tsx` using JSON imports.

### Client Components (interactive features only)

| Component            | Reason for Client                                         |
| -------------------- | --------------------------------------------------------- |
| `Navbar.tsx`         | Scroll detection, IntersectionObserver, mobile menu state |
| `ThemeProvider.tsx`  | localStorage theme persistence                            |
| `TextRotator.tsx`    | CSS animation trigger                                     |
| `ProjectsClient.tsx` | Search query + category + featuredOnly state              |
| `FilterTabs.tsx`     | Button click events                                       |
| `Input.tsx`          | `forwardRef`                                              |

Everything else — cards, grids, timelines — is server-rendered.

### Composition Pattern for Projects Section

```
page.tsx (server) → passes projects header
  → Projects section (server) — loads projects via loadProjects()
    → ProjectsClient (client) — holds search/filter state
      → ProjectGrid (server-compatible, receives filtered array)
        → ProjectCard (server)
```

## SEO Strategy

- Root layout exports global `metadata` with OG/Twitter cards
- `src/app/sitemap.ts` — includes `/` and external blog post URLs
- `src/app/robots.ts` — exists (currently minimal)
- JSON-LD: Person + WebSite in root layout via `src/lib/seo/structured-data.ts`
- `NEXT_PUBLIC_SITE_URL` env var sets canonical base URL

**Not yet implemented:**

- `src/lib/seo/metadata.ts` — `buildMetadata()` helper (referenced in docs, not created)
- `src/lib/seo/routes.ts` — route registry (referenced in docs, not created)
- Per-page metadata for sub-pages (no sub-pages exist yet)

## Validation Strategy

- TypeScript — strict type checking for all content types
- `npm run check` = validate-content + lint + typecheck + build
- **Note:** `validate-content`, `fetch-blog-posts`, and `fetch-video-posts` scripts are defined in `package.json` but the `src/scripts/` implementation files do not yet exist. Running these will fail until the files are created.

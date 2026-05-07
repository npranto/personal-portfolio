# Performance Notes

## What Was Optimized

### Static Generation

All pages use static generation (SSG) with no server-side data fetching. Content is imported at build time from JSON files.

### Server Components by Default

All page components and most content components are React Server Components. Client components are used only where interactivity is required.

### Client Component Boundaries

| Component            | Reason for Client                                         |
| -------------------- | --------------------------------------------------------- |
| `Navbar.tsx`         | Scroll detection, IntersectionObserver, mobile menu state |
| `SubpageNavbar.tsx`  | `usePathname` for active state, mobile menu               |
| `ThemeProvider.tsx`  | localStorage read for theme persistence                   |
| `TextRotator.tsx`    | CSS animation trigger                                     |
| `ProjectsClient.tsx` | Search query + category + featuredOnly state              |
| `FilterTabs.tsx`     | Button click events                                       |
| `Input.tsx`          | `forwardRef`                                              |

Everything else — cards, grids, timelines, case studies — is server-rendered.

### Image Optimization

- All project/company images use `next/image` with proper `width`, `height`, and `sizes`
- Local images are served as `.webp` with lazy loading
- Profile image uses `priority` + `quality={90}`
- External images (blog covers, video thumbnails) use `next/image` with remote patterns in `next.config.ts`

### Font Strategy

- Poppins is self-hosted from `/public/vendor/fonts/`
- `font-display: swap` prevents invisible text during load
- Only 3 weights loaded (400, 600, 900)

### Bundle Optimization

- No unnecessary npm dependencies added
- No heavy UI library (no shadcn, radix, etc.)
- No date parsing library — custom `formatDate` utility using native `Intl.DateTimeFormat`
- No class merging library (no `clsx`/`tailwind-merge`) — simple `cn()` utility

## What Stayed Server-Side

- All content loading (JSON imports at build time)
- All page components
- Project/experience/skill card rendering
- Blog and video listing

## What Became Client-Side and Why

- `ProjectsClient.tsx` — requires search and filter state that updates the UI in response to user input. The client boundary is set only at this component, keeping the individual `ProjectCard` components server-rendered.

## Lighthouse Checklist

Run with: `npx lighthouse http://localhost:3000 --view`

Targets:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

Key metrics to watch:

- LCP (Largest Contentful Paint) — profile image in Hero; uses `priority`
- CLS (Cumulative Layout Shift) — images have explicit dimensions
- FID/INP — minimal JS on initial load
- TTFB — static pages served instantly from Netlify CDN

## Known Tradeoffs

- The `TextRotator` uses a continuous CSS animation — this can't be paused without JS for `prefers-reduced-motion`
- The filter/search client boundary in `ProjectsClient` sends a small JS bundle for search logic — acceptable for the interactivity gain
- The `SubpageNavbar` is a client component because it needs `usePathname` — this adds a small amount of client JS

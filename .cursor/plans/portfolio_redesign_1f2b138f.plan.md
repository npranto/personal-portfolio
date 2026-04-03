---
name: Portfolio Redesign
overview: Rebuild the personal portfolio as a modern, eye-catching Next.js 16 App Router single-page app using Tailwind CSS v4, with a two-tier CSS design token system and a composable React component architecture — all driven by the existing `src/content/*.json` data and `public/assets/` files.
todos:
  - id: design-tokens
    content: Set up globals.css with two-tier design token system, Poppins @font-face, and base styles
    status: completed
  - id: layout-metadata
    content: 'Update layout.tsx: metadata (title, description, favicons from /assets/favicons/), skip-nav link, remove Geist font'
    status: completed
  - id: types-lib
    content: Create src/lib/types.ts with TypeScript interfaces for all content JSON shapes
    status: completed
  - id: ui-components
    content: 'Create src/components/ui/: Badge.tsx, Button.tsx, SectionHeading.tsx'
    status: completed
  - id: text-rotator
    content: Create TextRotator.tsx client component for animated role cycling
    status: completed
  - id: navbar
    content: 'Create Navbar.tsx: sticky, blur on scroll, anchor links from nav.json, mobile hamburger'
    status: completed
  - id: hero-section
    content: 'Create Hero.tsx: profile photo (next/image with webp/avif), name, TextRotator, CTA buttons, social icons'
    status: completed
  - id: about-section
    content: Create About.tsx client component with expandable read-more using about.json content array
    status: completed
  - id: work-section
    content: 'Create Work.tsx: timeline layout with company logos, bullets, tech badges from work.json'
    status: completed
  - id: projects-section
    content: 'Create Projects.tsx: 2-col grid with images, descriptions, tech tags, GitHub/demo links'
    status: completed
  - id: blog-section
    content: 'Create Blog.tsx: 3-col grid with cover images, titles, dates, tags from blog-posts.json'
    status: completed
  - id: videos-section
    content: 'Create Videos.tsx: 2-col grid with YouTube thumbnails, titles, dates from video-posts.json'
    status: completed
  - id: education-section
    content: 'Create Education.tsx: single card from education.json'
    status: completed
  - id: contact-section
    content: 'Create Contact.tsx: email link + all social platform links from socials.json'
    status: completed
  - id: footer
    content: Create Footer.tsx with social icons and copyright
    status: completed
  - id: page-assembly
    content: Wire page.tsx to import all sections, conditionally render per config.json flags
    status: completed
  - id: scripts-utils
    content: Copy fetch scripts and utils from _/src/scripts/ and _/src/utils/ into src/, add package.json npm scripts
    status: completed
  - id: next-config
    content: 'Update next.config.ts: add remotePatterns for dev.to and ytimg.com cover/thumbnail images'
    status: completed
isProject: false
---

# Portfolio Modern Redesign

## Architecture

```
src/
  app/
    globals.css         ← design tokens + Poppins @font-face + base styles
    layout.tsx          ← metadata, favicon refs, font setup
    page.tsx            ← renders all sections driven by config.json flags
  components/
    ui/
      Badge.tsx         ← pill for tech/tag labels, variant: default|accent
      Button.tsx        ← primary/ghost/outline, with optional icon slot
      SectionHeading.tsx ← shared section title + optional subtitle
    layout/
      Navbar.tsx        ← sticky + blur, anchor links, mobile hamburger (client)
      Footer.tsx        ← socials + copyright
    sections/
      Hero.tsx          ← hero (uses TextRotator)
      About.tsx         ← expandable read-more (client)
      Work.tsx          ← timeline
      Projects.tsx      ← card grid
      Blog.tsx          ← card grid
      Videos.tsx        ← card grid
      Education.tsx     ← single card
      Contact.tsx       ← email + socials
    TextRotator.tsx     ← animated role cycling (client)
  lib/
    types.ts            ← TypeScript interfaces for all content JSON shapes
  scripts/
    fetch-blog-posts.mjs   ← copied + updated path
    fetch-video-posts.mjs  ← copied + updated path
  utils/
    crawlBlogPosts.mjs
    crawlVideoPosts.mjs
    writeToFile.mjs
  config/
    index.mjs           ← env vars (BLOG_API_URL, VIDEOS_API_URL)
```

## Design System (`globals.css`)

Two-tier token system — swap a whole palette by changing only the primitive layer:

```css
/* Layer 1: Primitive palette — edit ONLY these to change scheme */
:root {
  --prim-bg-950: #020617; /* deepest background */
  --prim-bg-900: #0f172a; /* surface */
  --prim-bg-800: #1e293b; /* elevated surface */
  --prim-border: #334155;
  --prim-text-100: #f8fafc;
  --prim-text-400: #94a3b8;
  --prim-accent: #6366f1; /* indigo — change to swap accent */
  --prim-accent-lt: #818cf8;
  --prim-accent-dk: #4f46e5;
}

/* Layer 2: Semantic tokens — reference primitives, never hard-code colors here */
:root {
  --color-bg: var(--prim-bg-950);
  --color-surface: var(--prim-bg-900);
  --color-elevated: var(--prim-bg-800);
  --color-border: var(--prim-border);
  --color-text: var(--prim-text-100);
  --color-muted: var(--prim-text-400);
  --color-accent: var(--prim-accent);
  --color-accent-light: var(--prim-accent-lt);
  --color-accent-dark: var(--prim-accent-dk);
}
```

Poppins loaded via `@font-face` referencing `/vendor/fonts/Poppins/*.woff2` (already in `public/`).

## Section-by-section Layout

| Section       | Desktop                                                        | Mobile                       |
| ------------- | -------------------------------------------------------------- | ---------------------------- |
| **Hero**      | 2-col: text left, circular profile photo right                 | Stacked; photo above text    |
| **About**     | 2-col: intro paragraphs left, Journey/Ambitions right          | Single col, read-more toggle |
| **Work**      | Vertical timeline: logo + header row, bullet list, tech badges | Same, compressed             |
| **Projects**  | 2-col card grid with image, desc, tags, GitHub/demo links      | 1-col                        |
| **Blog**      | 3-col card grid (cover image, title, date, tags)               | 1-col                        |
| **Videos**    | 2-col card grid (YT thumbnail, title, date, desc)              | 1-col                        |
| **Education** | Single centered card                                           | Same                         |
| **Contact**   | Centered: email + all social links                             | Same                         |

## Assets & Content Wiring

- **Profile photo**: `next/image` with `srcSet` using `.webp`/`.avif` variants from `public/assets/images/profile-v4-{160,500}x{500}.{webp,avif}`
- **Company/project logos**: `next/image` for each work item and project card
- **Favicons**: referenced in `layout.tsx` metadata using `public/assets/favicons/`
- **Resume**: linked directly to `/assets/resume.pdf`
- **Blog/Video data**: imported from `src/content/blog-posts.json` and `src/content/video-posts.json` (populated by fetch scripts at build time)
- **Feature flags**: `config.json` controls which sections render in `page.tsx`
- **Social links**: all 7 platforms from `socials.json` (github, linkedin, twitter, devto, medium, youtube, substack)

## Data Fetching Scripts

Add to `package.json`:

```json
"fetch-content": "node ./src/scripts/fetch-blog-posts.mjs && node ./src/scripts/fetch-video-posts.mjs",
"prebuild": "npm run fetch-content"
```

Scripts copied from `_/src/scripts/` and `_/src/utils/` with updated output paths (`./src/content/blog-posts.json`, `./src/content/video-posts.json`).

## Accessibility & Performance

- All images: `alt` text, `loading="lazy"` (except hero `priority`)
- `aria-label` on icon-only links and nav toggle
- `<section>` with `id` anchors matching `nav.json` hrefs
- `skip-to-content` link in layout
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- No layout shift: image dimensions explicit; font `font-display: swap`
- Smooth scroll: `scroll-behavior: smooth` on `html`

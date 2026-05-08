# SEO Guide

## What Is Implemented

- `src/lib/seo/structured-data.ts` — JSON-LD generators (`personJsonLd()`, `websiteJsonLd()`)
- `src/app/sitemap.ts` — dynamic XML sitemap (includes `/` and external blog post URLs)
- `src/app/robots.ts` — robots.txt
- `src/app/layout.tsx` — global `metadata` export with OpenGraph, Twitter cards, favicons, manifest
- Root layout injects Person and WebSite JSON-LD via `<Script>` tags

## What Is NOT Yet Implemented

- `src/lib/seo/metadata.ts` — `buildMetadata()` helper (planned but not created)
- `src/lib/seo/routes.ts` — route registry + `canonicalUrl()` (planned but not created)
- Sub-page metadata (no sub-pages exist yet)
- Per-project `generateMetadata()` (no project detail pages yet)
- Breadcrumb JSON-LD (no detail pages yet)
- Sitemap entries for sub-pages or project slugs (none exist yet)

## Required Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://npranto.dev
```

Without this, canonical URLs default to `http://localhost:3000`. Set this in Netlify/Vercel environment settings for production.

## How to Test Metadata

### 1. Check HTML source

```bash
npm run build && npm run start
```

Then view page source (Cmd+U) and look for:

- `<title>` tag
- `<meta name="description">` tag
- `<meta property="og:*">` tags
- `<meta name="twitter:*">` tags
- `<link rel="canonical">` tag
- `<script type="application/ld+json">` blocks

### 2. Use social preview tools

- **Facebook OG debugger:** https://developers.facebook.com/tools/debug/
- **Twitter card validator:** https://cards-dev.twitter.com/validator
- **LinkedIn post inspector:** https://www.linkedin.com/post-inspector/

### 3. Check structured data

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org validator:** https://validator.schema.org/

### 4. Check sitemap

Visit `/sitemap.xml` to verify routes appear. Currently includes:

- `/` (the home page)
- External blog post URLs from `blog-posts.json`

### 5. Check robots.txt

Visit `/robots.txt` to verify the content.

## Manual SEO Checklist

- [ ] Home page has a unique `<title>` tag
- [ ] Home page has a `<meta name="description">` under 160 characters
- [ ] Home page has Person and WebSite JSON-LD
- [ ] Sitemap is reachable at `/sitemap.xml`
- [ ] Canonical URL uses `NEXT_PUBLIC_SITE_URL` in production
- [ ] Open Graph image is present (`/assets/images/profile-v4-500x500.jpg`)
- [ ] Twitter card type is `summary_large_image`

## Future SEO Work (when sub-pages are added)

When sub-pages (`/projects`, `/experience`, `/skills`, `/blog`) are created:

1. Create `src/lib/seo/metadata.ts` with a `buildMetadata()` helper
2. Create `src/lib/seo/routes.ts` with a route registry and `canonicalUrl()`
3. Export `metadata` from each sub-page using `buildMetadata()`
4. Use `generateMetadata()` on dynamic project detail pages
5. Add BreadcrumbList JSON-LD to project detail pages
6. Update `src/app/sitemap.ts` to include all sub-page routes and project slugs

## Current Sitemap Structure

```
/ (priority: 1.0)
external blog post URLs (priority: 0.5)
```

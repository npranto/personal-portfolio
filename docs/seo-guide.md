# SEO Guide

## What Changed

- Added `src/lib/seo/metadata.ts` — `buildMetadata()` helper for consistent page metadata
- Added `src/lib/seo/structured-data.ts` — JSON-LD generators (Person, WebSite, BreadcrumbList)
- Added `src/lib/seo/routes.ts` — route registry and `canonicalUrl()` helper
- Added `src/app/sitemap.ts` — dynamic XML sitemap including project detail pages
- Added `src/app/robots.ts` — disallows `/dev/` from crawlers
- Updated `src/app/layout.tsx` — OpenGraph, Twitter cards, JSON-LD in `<head>`
- All new pages export `metadata` using `buildMetadata()`
- Dynamic project pages use `generateMetadata()` for per-project OG data
- Breadcrumb JSON-LD on project detail pages

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

Visit `/sitemap.xml` to verify all routes appear.

### 5. Check robots.txt

Visit `/robots.txt` to verify `/dev/` is disallowed.

## Manual SEO Checklist

- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a `<meta name="description">` under 160 characters
- [ ] Home page has Person and WebSite JSON-LD
- [ ] Project detail pages have BreadcrumbList JSON-LD
- [ ] Sitemap includes all project detail routes
- [ ] Canonical URL is set correctly for production
- [ ] Open Graph image is 1200×630px or close to it
- [ ] Twitter card type is `summary_large_image` for image-heavy pages
- [ ] `/dev/` routes return `noindex, nofollow`

## Sitemap Structure

The sitemap is generated dynamically at `/sitemap.xml` and includes:

- `/` (priority: 1.0)
- `/projects` (priority: 0.9)
- `/experience` (priority: 0.8)
- `/skills` (priority: 0.7)
- `/blog` (priority: 0.7)
- `/projects/[slug]` for each project (priority: 0.7)
- External blog post URLs (priority: 0.5)

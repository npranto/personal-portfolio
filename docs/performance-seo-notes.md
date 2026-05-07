# Performance and SEO Notes

## SEO Changes

- Upgraded metadata to include title templates, Open Graph, and Twitter metadata.
- Added JSON-LD for `Person` and `WebSite`.
- Added `sitemap.ts` with project detail URLs.
- Added `robots.ts` with sitemap declaration.

## Performance Decisions

- Kept server components as default for routes and layout.
- Scoped client interactivity to project filters/search only.
- Added lightweight content validation script without introducing heavy runtime dependencies.
- Preserved existing optimized image patterns and Next image configuration.

## Manual Lighthouse Checklist

- Run Lighthouse in mobile + desktop for home and one project detail page.
- Confirm no layout shifts in hero/profile image.
- Validate color contrast in both themes.
- Check JS payload impact from interactive projects section.

## Tradeoffs

- Project normalization currently infers category/role for legacy project entries.
- Richer analytics and synthetic monitoring intentionally excluded to keep stack lean.

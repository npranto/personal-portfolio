# Performance Review Template

Use for PRs that add new pages, components, or dependencies.

## Bundle Impact

- [ ] No new npm dependencies added without justification
- [ ] Any new dependencies are tree-shakeable or small (< 5kb gzip)
- [ ] No heavy UI frameworks added (e.g., no MUI, Radix, shadcn unless intentional)
- [ ] Check `npm run build` output — no unexpected bundle size increases

## Rendering Strategy

- [ ] New pages use `export default function Page()` (server component)
- [ ] New components do not start with `'use client'` unless they need it
- [ ] Client boundaries are as narrow as possible (e.g., only the interactive container, not the entire section)

## Static Generation

- [ ] New dynamic routes have `generateStaticParams()` defined
- [ ] No server-side data fetching (`fetch` at request time) added — all data comes from static JSON imports

## Images

- [ ] All new images use `next/image`
- [ ] Explicit `width` and `height` set (prevents CLS)
- [ ] `loading="lazy"` on below-fold images
- [ ] `priority` used only for LCP images (hero/profile)
- [ ] Proper `sizes` prop set based on layout
- [ ] New remote image hostnames added to `next.config.ts` `remotePatterns`

## Fonts

- [ ] No new Google Fonts added (self-hosted Poppins is the sole font)
- [ ] `font-display: swap` maintained on any font additions

## Animation / Layout Shift

- [ ] Animated elements don't cause layout shifts
- [ ] Loading states or skeletons used if async content is added in future

## Network

- [ ] No new API calls on page load
- [ ] External resources (if any) use `preconnect` or `preload`

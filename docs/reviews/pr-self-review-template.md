# PR Self-Review Template

Use this checklist before opening or merging a PR in this portfolio repo.

## Scope

- [ ] Changes are limited to the stated PR scope — no unintended file changes
- [ ] No console.log, TODO, FIXME, or debug code left in
- [ ] No dead code or unused imports introduced

## Code Quality

- [ ] `npm run check` passes (validate-content + lint + typecheck + build)
- [ ] No new TypeScript errors or `@ts-ignore` suppressions added
- [ ] No new ESLint warnings added
- [ ] Component and variable names are consistent with existing conventions

## Content

- [ ] Any new `src/content/*.json` changes are validated by `validate-content`
- [ ] No fake or fabricated data added
- [ ] Slugs are unique and follow the `lowercase-hyphenated` format

## Rendering

- [ ] New pages use server components by default
- [ ] Client components are only used where interactivity requires it
- [ ] New components handle empty/null data gracefully (empty state shown, no crash)

## Accessibility

- [ ] All images have `alt` text
- [ ] All icon-only interactive elements have `aria-label`
- [ ] New form inputs have associated `<label>` elements
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Focus states are visible on all interactive elements

## SEO

- [ ] New pages export a `metadata` object with a unique title and description
- [ ] Dynamic pages use `generateMetadata()` if per-item OG data is needed
- [ ] `src/app/sitemap.ts` updated if new routes were added
- [ ] Note: `buildMetadata()` helper does not exist yet — add metadata manually until it is created

## Performance

- [ ] No unnecessary npm dependencies added
- [ ] No large client-side data fetches introduced
- [ ] Images use `next/image` with explicit dimensions

## Documentation

- [ ] `docs/` updated if architecture or content model changed
- [ ] README updated if setup steps changed

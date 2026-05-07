# Content Review Template

Use when adding or updating content in `src/content/*.json`.

## Accuracy

- [ ] All facts (company names, dates, titles) are correct
- [ ] Metrics and impact statements are based on real data, not estimated or invented
- [ ] URLs all point to the correct destinations
- [ ] Project categories are accurate (`web-app`, `library`, `tool`, `other`)

## Completeness

- [ ] Required fields are present: `id`, `slug`, `name`, `category`, `technologies`
- [ ] Slugs are URL-safe (`lowercase-hyphen-format`)
- [ ] `summary` is under 160 characters (used in OG descriptions)
- [ ] `links` array has at least one entry (GitHub or demo)
- [ ] Case study fields are substantive — not placeholder text

## Quality

- [ ] Descriptions are written in first person or professional third person (consistent with existing content)
- [ ] No grammar or spelling errors
- [ ] No repetition of facts already visible elsewhere in the card
- [ ] Tech stack lists only technologies actually used (not aspirational)

## Validation

- [ ] `npm run validate-content` passes after changes
- [ ] No duplicate slugs
- [ ] All URLs pass `isValidUrl()` check

## Presentation

- [ ] New project images exist in `public/assets/images/` in `.webp` format
- [ ] Image paths in JSON use the path prefix without extension (e.g., `/assets/images/project-name-200x200`)
- [ ] `featured: true` reserved for 2-3 strongest projects only

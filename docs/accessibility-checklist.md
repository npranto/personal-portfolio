# Accessibility Checklist

## Keyboard Test Checklist

- [ ] Tab through all interactive elements — focus is visible
- [ ] Skip link appears on first Tab and skips to `#main-content`
- [ ] Navbar links are reachable by keyboard
- [ ] Mobile menu button is focusable and toggles on Enter/Space
- [ ] Project search input is reachable and functional via keyboard
- [ ] Filter tabs respond to keyboard (Enter/Space to activate)
- [ ] All external links open in new tab with accessible label
- [ ] Back link on project detail page is keyboard accessible
- [ ] Logo link in navbar is focusable
- [ ] Footer links are keyboard navigable

## Screen Reader Checklist

- [ ] Page `<title>` is unique and descriptive on each page
- [ ] `<main id="main-content">` present on all pages
- [ ] Headings follow a logical hierarchy (h1 → h2 → h3)
- [ ] All images have meaningful `alt` text (decorative images use `alt=""`)
- [ ] `aria-label` on icon-only links and buttons
- [ ] `aria-current="page"` on active nav links
- [ ] `aria-live="polite"` on project count (updates as filters change)
- [ ] `aria-pressed` on filter tab buttons
- [ ] `role="list"` and `role="listitem"` on styled lists without visible list markers
- [ ] Empty states use `role="status"` for screen reader announcements
- [ ] Form inputs have associated `<label>` elements
- [ ] Error messages linked to inputs via `aria-describedby`

## Pages to Test

| Page               | Key Elements to Check                                   |
| ------------------ | ------------------------------------------------------- |
| `/`                | Hero CTA buttons, nav, social icons, skip link          |
| `/projects`        | Search input, filter tabs, project cards, count updates |
| `/projects/[slug]` | Back link, headings, external links, related projects   |
| `/experience`      | Timeline list structure, current badge                  |
| `/skills`          | Skill level legend, skill group cards                   |
| `/blog`            | Blog cards, external article links, empty state         |

## Known Limitations

- Blog posts link to external site (dev.to) — accessibility of those pages is out of scope
- Profile image uses `alt` with person name but no detailed description
- The `TextRotator` component uses CSS animation — users with `prefers-reduced-motion` will still see the animation (future improvement: add `@media (prefers-reduced-motion: reduce)` override)
- Dark/light mode toggle affects color contrast — both modes have been reviewed but not formally audited with automated tools

## Future Improvements

- Add `@media (prefers-reduced-motion: reduce)` to `text-rotator-track` animation
- Add `@media (prefers-reduced-motion: reduce)` to fade-in-up and other animations
- Conduct a formal audit with axe DevTools or WAVE
- Add keyboard focus trap for the mobile menu
- Consider adding `aria-expanded` to filter tabs when a category is selected

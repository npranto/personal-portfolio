# Accessibility Review Template

Use this for any PR that adds or modifies UI components or pages.

## Keyboard Navigation

- [ ] All interactive elements reachable by Tab key
- [ ] Tab order is logical and matches visual order
- [ ] No keyboard traps (can always Tab or Escape out)
- [ ] Enter/Space activates buttons and links
- [ ] Focus indicator is visible (check `:focus-visible` styles)
- [ ] Skip link works on first Tab press

## Semantic HTML

- [ ] `<button>` used for actions, `<a>` used for navigation
- [ ] Lists use `<ul>/<ol>/<li>` where appropriate
- [ ] Tables use `<th>` with scope if data is tabular
- [ ] Headings convey hierarchy, not just visual size
- [ ] `<main>` element present with `id="main-content"`

## ARIA

- [ ] `aria-label` on icon-only elements
- [ ] `aria-current="page"` on active nav links
- [ ] `aria-live` on dynamically updating content (project count, error messages)
- [ ] `aria-expanded` on collapsible components (mobile menu)
- [ ] `aria-hidden="true"` on decorative icons
- [ ] No redundant ARIA roles that duplicate native HTML semantics

## Images

- [ ] All `<img>` / `<Image>` elements have non-empty `alt` text
- [ ] Decorative images use `alt=""`
- [ ] Profile/person images use the person's name in alt text
- [ ] Icons have `aria-hidden="true"` or descriptive text nearby

## Color and Contrast

- [ ] Text meets WCAG AA contrast ratio (4.5:1 for normal, 3:1 for large)
- [ ] Interactive elements have visible focus indicators in both themes
- [ ] Information is not conveyed by color alone (icons/text supplement color coding)

## Reduced Motion

- [ ] Animations that loop (TextRotator, fade-in-up) have a `prefers-reduced-motion` alternative or are not critical to the experience

## Screen Reader Spot Check

- [ ] Test with VoiceOver (macOS: Cmd+F5) on the affected pages
- [ ] Headings announce in correct order
- [ ] Live regions announce filter changes
- [ ] External links announce they open in a new tab (via aria-label or sr-only text)

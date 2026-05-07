# Accessibility Checklist

## Improvements Implemented

- Added reusable `SkipLink` and keyboard-visible focus treatment.
- Improved project filter tabs with selected state via `aria-selected`.
- Added explicit search label for project search input.
- Improved empty states so missing content does not silently remove sections.
- Added stronger link labeling for project and social destinations.

## Manual Keyboard Checklist

- Tab from page top reaches "Skip to main content".
- Navbar, filter tabs, project links, and CTA buttons are all keyboard operable.
- Focus ring is visible in both light and dark themes.
- Project filter tabs can be changed without pointer interaction.

## Screen Reader Checklist

- Confirm landmarks (`header`, `main`, `footer`) are announced correctly.
- Confirm section headings match visual hierarchy.
- Confirm project filter selected state is announced.
- Confirm external links have meaningful accessible names.

## Known Limitations

- About section still renders trusted HTML content via `dangerouslySetInnerHTML`.
- Theme toggle and navigation mobile behavior should be spot-checked with VoiceOver.

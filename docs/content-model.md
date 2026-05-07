# Content Model

Primary schema definitions live in `src/lib/content/types.ts`.

## Core Files

- `config.json`: feature flags and global display toggles
- `nav.json`: top-level nav links
- `profile.json`: identity and hero CTA information
- `about.json`: biography and narrative sections
- `work.json`: work timeline entries
- `projects.json`: case-study project source entries (legacy-safe)
- `education.json`: education cards
- `blog-posts.json`: fetched DEV.to content cache
- `video-posts.json`: fetched YouTube content cache
- `socials.json`: social link configuration

## Validation

Run:

```bash
npm run validate-content
```

The validator checks required file/field structure and reports exact file + path failures.

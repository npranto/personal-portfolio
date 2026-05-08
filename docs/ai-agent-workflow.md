# AI Agent Workflow

## How to Use Cursor Agent Safely in This Repo

This document describes how to use Cursor Agent (or any LLM-assisted coding tool) effectively and safely in this portfolio project.

## Good Tasks to Give AI

- **Content updates** — "Add a new project to projects.json following the schema in docs/content-model.md"
- **New UI components** — "Create a new card component similar to ProjectCard.tsx that shows video thumbnails"
- **New pages** — "Create a /contact page with the same layout pattern as /experience"
- **SEO improvements** — "Add generateMetadata to the blog page using the buildMetadata helper"
- **Bug fixes** — "The filter tabs don't reset when I type in the search input. Fix this in ProjectsClient.tsx"
- **Refactors** — "Extract the back-link pattern from the project detail page into a reusable BackLink component"
- **Docs** — "Update docs/content-model.md to reflect the new metrics field added to projects"

## Bad Tasks to Avoid

- **Fabricating data** — Never ask AI to "add realistic metrics" or "fill in achievements" — all content must be real
- **Large architectural rewrites without a plan** — Define the target architecture first in a planning prompt
- **Blind dependency additions** — AI may add npm packages not in the project. Always review new imports
- **Ignoring AGENTS.md** — Always remind the agent to read AGENTS.md before code changes
- **Overriding validation** — Never ask AI to skip `npm run check`

## Pre-Code Planning Prompt

Use this before asking for implementation:

```
Before writing any code:
1. Read AGENTS.md and the relevant docs in docs/
2. Read the existing component or file I'm asking you to modify
3. Read src/lib/content/types.ts to understand data shapes
4. Describe your plan in 3-5 bullet points
5. Ask for confirmation before proceeding
```

## Implementation Prompt

Use this for code changes:

```
Implement: [describe task]

Rules:
- Read the file before editing
- Follow existing code style and naming conventions
- Use server components unless interactivity requires a client component
- Import from @/lib/content/loaders not directly from JSON where possible
- Run validation: npm run validate-content && npm run lint && npm run typecheck
- Report what you changed and what validation results you got
```

## Self-Review Prompt

Use this after implementation:

```
Review the changes you just made:
1. Are there any TypeScript errors or lint warnings?
2. Did you add any unnecessary npm dependencies?
3. Are there any server components that should remain server components?
4. Does the page render correctly with empty data?
5. Did you add or modify any content JSON files? If so, does validate-content pass?
6. Is the heading hierarchy correct (h1 → h2 → h3)?
7. Do all interactive elements have accessible labels?
```

## QA Prompt

Use this before committing:

```
QA check:
1. Run: npm run check
2. Test the affected pages manually:
   - Check mobile layout at 375px
   - Check keyboard navigation
   - Verify data renders correctly
   - Check dark and light mode
3. Open /dev/qa and confirm the route and content counts look right
4. Report any issues found
```

## How to Validate AI-Generated Changes

1. **Always run `npm run check`** — this catches type errors, lint issues, and broken builds
2. **Read the diff carefully** — check for unintended changes to files outside the scope
3. **Check for fake content** — verify any new JSON content against real facts
4. **Test the affected pages** — don't trust that a passing build means a correct page
5. **Check accessibility** — new interactive components should have `aria-label` and focus states

## How to Prevent Overengineering

- This is a single-developer portfolio. Resist adding abstractions before they're needed.
- If a component is used only once, it doesn't need to be extracted.
- If a utility is simple enough to inline, don't add a new file.
- Ask yourself: "Would a second developer working on this repo understand this without documentation?"
- Prefer explicit over clever code — this site's lifecycle is measured in years.

# AI Agent Workflow

## Repo Context Rules

- Read `AGENTS.md` before implementation.
- Use local repository conventions over model defaults.
- Prefer maintainable, minimal abstractions.

## Task Planning Rules

- Start with baseline checks (`lint`, `build`, `typecheck`).
- Identify content-model impact first for UI changes.
- Keep features incremental and reviewable.

## Implementation Rules

- Prefer server components unless interaction is required.
- Keep content source-of-truth in JSON with typed loaders.
- Add runtime-safe fallbacks for missing optional content.

## Review Rules

- Review for accessibility, performance, and semantic HTML.
- Validate SEO/meta changes against App Router metadata APIs.
- Avoid introducing heavy dependencies for lightweight problems.

## Validation Commands

```bash
npm run validate-content
npm run lint
npm run typecheck
npm run build
npm run check
```

## Common Pitfalls

- Overengineering content abstractions for a small portfolio.
- Moving too much rendering into client components.
- Breaking external content scripts when changing JSON shapes.
- Shipping inaccessible icon-only actions.

# Architecture Overview

- **App Router First:** Route composition lives in `src/app` with server components by default.
- **Content-Driven UI:** All page content remains JSON-backed under `src/content`.
- **Content Layer:** `src/lib/content` now contains content types, loaders, and validators.
- **Design System:** Reusable UI primitives are in `src/components/ui`.
- **Section Composition:** Homepage composes isolated section components with safe fallbacks.
- **Case Study Routing:** Projects now support dynamic detail pages at `src/app/projects/[slug]`.

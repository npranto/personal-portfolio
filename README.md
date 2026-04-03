<div align="center">
  <h2 align="center">npranto.dev</h2>

[![Live](https://img.shields.io/badge/Demo-Live.svg)](https://npranto.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d16a376-43ef-47af-8b95-ee54bcffd93c/deploy-status)](https://app.netlify.com/sites/npranto/deploys)
[![Live](https://img.shields.io/badge/LinkedIn-blue.svg)](https://www.linkedin.com/in/npranto/)

</div>

## About

A personal portfolio website showcasing projects, work experience, education, blog posts, and videos. All content is data-driven via JSON files, with external sources (DEV.to, YouTube) fetched via Node scripts and cached locally.

See it live at [npranto.dev](https://npranto.dev/).

## Tech Stack

| Layer      | Choice                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| Framework  | [Next.js 16](https://nextjs.org/) — App Router                                                         |
| UI         | [React 19](https://react.dev/) + TypeScript 5                                                          |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/)                                                            |
| Linting    | [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/)                                     |
| Git hooks  | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) |
| Deployment | [Netlify](https://netlify.com/)                                                                        |

## Prerequisites

- [Node.js](https://nodejs.org/en) v22 or above
- npm (comes with Node)

## Getting Started

```sh
# 1. Clone and enter the repo
git clone https://github.com/npranto/personal-portfolio.git
cd personal-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env   # then fill in values (see Environment Variables below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The following variables are required in `.env` (see `.env.example` for the full template):

| Variable         | Description                                  |
| ---------------- | -------------------------------------------- |
| `BLOG_API_URL`   | DEV.to API URL to fetch published blog posts |
| `VIDEOS_API_URL` | YouTube Data API URL to fetch videos         |

### Refreshing Content

Blog posts and videos are pre-fetched and stored as JSON. To pull the latest:

```sh
npm run fetch-content       # fetches both blog posts and videos

npm run fetch-blog-posts    # blog posts only
npm run fetch-video-posts   # videos only
```

These scripts hit the configured APIs and write to `src/content/blog-posts.json` and `src/content/video-posts.json`.

## Folder Structure

```
src/
├── app/                  # Next.js App Router root
│   ├── layout.tsx        # Root layout (fonts, metadata, Navbar, Footer)
│   ├── page.tsx          # Home page — composes all section components
│   └── globals.css       # Global styles and Tailwind base
│
├── components/
│   ├── layout/           # Structural shell components (Navbar, Footer)
│   ├── sections/         # One component per page section (Hero, About, Work, Projects, Blog, Videos, Education, Contact)
│   └── ui/               # Reusable primitives (Badge, Button, SectionHeading, SocialIcons)
│
├── content/              # JSON data files — single source of truth for all displayed content
│   ├── profile.json      # Name, title, summary
│   ├── work.json         # Work experience entries
│   ├── projects.json     # Highlighted projects
│   ├── education.json    # Education history
│   ├── blog-posts.json   # Cached posts from DEV.to (auto-generated)
│   ├── video-posts.json  # Cached videos from YouTube (auto-generated)
│   └── ...               # Other section data (about, nav, socials, config)
│
├── config/               # Runtime config — reads env variables for external API URLs
├── lib/                  # Shared TypeScript types
├── scripts/              # Node scripts that fetch and write content JSON files
└── utils/                # Helpers used by scripts (crawl + file write)
```

**Why this structure?** Sections are intentionally split into components under `sections/` so each part of the page is independently editable without touching the layout or other sections. All content lives in `content/` as plain JSON so updates can be made without touching any component code. The `scripts/` + `utils/` separation keeps fetch logic testable and decoupled from the Next.js app itself.

## Available Scripts

| Script                  | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Start local dev server at `localhost:3000`           |
| `npm run build`         | Create a production build                            |
| `npm start`             | Serve the production build locally                   |
| `npm run lint`          | Run ESLint across the project                        |
| `npm run format`        | Run Prettier across the project                      |
| `npm run fetch-content` | Fetch and cache all external content (blog + videos) |

## Contributing

1. Open an [issue](https://github.com/npranto/personal-portfolio/issues) describing the change
2. Branch off `main`: `git checkout -b pp-<issue-id>`
3. Make changes — content updates go in `src/content/`, code changes in `src/`
4. Verify locally: `npm run lint && npm run dev`
5. Open a pull request to `main` — a Netlify preview URL will be generated automatically
6. Once the preview looks good, merge; production updates within minutes

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib Pranto" width="50" style="border-radius: 50%" />
  </a>
</div>

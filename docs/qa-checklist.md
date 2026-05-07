# QA Checklist

## Manual QA Checklist by Page

### Home Page (`/`)

- [ ] Hero renders with name, role, and photo
- [ ] "View Projects" CTA links to `/projects`
- [ ] Resume button opens PDF in new tab
- [ ] Social icons render and link correctly
- [ ] TextRotator cycles through highlighted roles
- [ ] About section renders bio paragraphs
- [ ] Work section shows all companies in timeline
- [ ] Projects section shows all projects with badges and links
- [ ] Blog section shows recent posts
- [ ] Videos section shows video thumbnails
- [ ] Education section renders institution
- [ ] Contact section shows email and social links
- [ ] Footer shows copyright and social icons and nav links
- [ ] Navbar links scroll to correct page sections
- [ ] Theme toggle switches between dark and light

### Projects Page (`/projects`)

- [ ] Page header renders with title and count
- [ ] All projects appear in the grid
- [ ] Search input filters projects in real time
- [ ] Category filter tabs work correctly
- [ ] "Featured only" checkbox works
- [ ] Empty state appears when no results
- [ ] Project count updates as filters change
- [ ] "Case study →" link appears on projects with case study data
- [ ] GitHub and Live Demo links open in new tab
- [ ] Featured/category badges render correctly

### Project Detail Page (`/projects/[slug]`)

- [ ] Correct project data loads for each slug
- [ ] Back link navigates to `/projects`
- [ ] Breadcrumb JSON-LD in page source
- [ ] Hero section shows name, role, duration, category
- [ ] Metrics section renders if metrics exist
- [ ] Overview/description renders
- [ ] Case study section renders all provided fields
- [ ] Tech stack badges render
- [ ] External links render correctly
- [ ] Related projects sidebar shows related entries
- [ ] Not-found page loads for `/projects/invalid-slug`

### Experience Page (`/experience`)

- [ ] All work items render in timeline
- [ ] Current badge shows on current roles
- [ ] Duration, location, employment type visible
- [ ] Bullet points render for each entry
- [ ] Tech badges render

### Skills Page (`/skills`)

- [ ] All skill groups render
- [ ] Legend shows core/proficient/familiar
- [ ] Skills are color-coded by level
- [ ] Page count matches `skills.json` groups

### Blog Page (`/blog`)

- [ ] All blog posts render as cards
- [ ] Cover images load (or placeholder shows)
- [ ] Reading time shows
- [ ] Tags render
- [ ] "Read article" opens dev.to in new tab

## Mobile Checklist

- [ ] All pages are usable on 375px viewport (iPhone SE)
- [ ] Navbar collapses to hamburger menu on mobile
- [ ] Mobile menu opens and closes correctly
- [ ] Hero image and text stack vertically
- [ ] Project grid is single-column on mobile
- [ ] Blog grid is single-column on mobile
- [ ] Filter tabs wrap gracefully
- [ ] Touch targets are at least 44px
- [ ] No horizontal overflow / scroll

## Content Validation Checklist

- [ ] `npm run validate-content` exits 0
- [ ] No duplicate slugs in projects.json
- [ ] All project links are valid URLs
- [ ] All social links are valid URLs
- [ ] All blog post links are valid URLs
- [ ] Skills.json has no empty skill groups

## SEO Checklist

- [ ] Each page has a unique `<title>`
- [ ] Each page has a `<meta name="description">`
- [ ] Canonical URLs are set correctly
- [ ] Sitemap at `/sitemap.xml` includes all routes
- [ ] Robots.txt at `/robots.txt` disallows `/dev/`
- [ ] JSON-LD on home and project detail pages
- [ ] OpenGraph image renders in social preview

## Regression Checklist

After any significant code change:

- [ ] `npm run check` passes
- [ ] Home page loads without JavaScript errors
- [ ] Project detail pages render correct content per slug
- [ ] Dark/light mode toggle still works
- [ ] No 404s in build output
- [ ] `generateStaticParams` returns all project slugs

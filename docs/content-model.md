# Content Model

All portfolio content lives in `src/content/*.json`. Types are defined in `src/lib/content/types.ts`.

## Content Types

### Profile (`profile.json`)

```json
{
  "profile": {
    "id": "string",
    "author": "string (required)",
    "nickname": "string",
    "currentRole": "string (required)",
    "location": "string",
    "email": "string (required)",
    "resumeHref": "/path/to/resume.pdf",
    "contactHref": "#contact or URL",
    "highlightedRoles": ["string"],
    "picture": { "sm": "/path", "md": "/path", "lg": "/path" }
  }
}
```

### Projects (`projects.json`)

Required fields: `id`, `slug`, `name`, `category`, `technologies`

```json
{
  "projects": {
    "items": [
      {
        "id": "content:project-item:my-project",
        "slug": "my-project",
        "name": "My Project",
        "summary": "One-sentence description (used in cards and OG)",
        "description": "Full description for detail page",
        "role": "Sole Developer | Co-founder | Contributor",
        "category": "web-app | library | tool | other",
        "featured": true,
        "duration": "Jan 2024 - Present",
        "image": { "sm": "/path", "md": "/path", "lg": "/path" },
        "technologies": ["React", "TypeScript"],
        "links": [
          { "label": "GitHub", "url": "https://...", "type": "github" },
          { "label": "Live Demo", "url": "https://...", "type": "demo" }
        ],
        "metrics": [{ "label": "Status", "value": "Production" }],
        "caseStudy": {
          "problem": "What problem did this solve?",
          "constraints": "Time, team size, budget constraints",
          "solution": "How did you solve it?",
          "architectureNotes": "Key architecture decisions",
          "technicalDecisions": "Why did you choose X over Y?",
          "impact": "What was the outcome?",
          "lessonsLearned": "What would you do differently?"
        }
      }
    ]
  }
}
```

**Valid link types:** `github`, `demo`, `npm`, `docs`, `video`, `other`

**Valid categories:** `web-app`, `library`, `tool`, `other`

### How to add a new project

1. Add an entry to `src/content/projects.json` following the schema above
2. Generate a slug: lowercase, hyphenated, alphanumeric only (e.g., `my-new-project`)
3. Set `featured: true` if it should appear prominently on the home page
4. Add a `caseStudy` object for projects worth highlighting in detail
5. Run `npm run validate-content` to verify
6. Run `npm run build` to confirm everything compiles

### Experience (`experience.json`)

```json
{
  "experience": {
    "items": [
      {
        "id": "content:experience-item:company",
        "position": "Senior Engineer",
        "company": "Company Name",
        "location": "City, State | Remote",
        "duration": "Jan 2022 - Dec 2024",
        "employmentType": "Full-time | Contract | Part-time",
        "description": ["Bullet 1", "Bullet 2"],
        "technologies": ["React", "TypeScript"],
        "isCurrent": false,
        "image": { "sm": "/path", "md": "/path", "lg": "/path" }
      }
    ]
  }
}
```

### Skills (`skills.json`)

```json
{
  "skillGroups": [
    {
      "id": "skills:group-name",
      "label": "Group Name",
      "skills": [
        { "name": "React", "level": "core" },
        { "name": "Playwright", "level": "proficient" },
        { "name": "Figma", "level": "familiar" }
      ]
    }
  ]
}
```

**Valid levels:** `core` (use daily), `proficient` (use regularly), `familiar` (worked with)

### Blog Posts (`blog-posts.json`)

Auto-fetched via `npm run fetch-blog-posts`. Do not edit manually.

```json
{
  "posts": [
    {
      "link": "https://dev.to/...",
      "title": "Post Title",
      "uploadedTime": "Jan 1 '24",
      "coverImage": "https://...",
      "description": "Short excerpt",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

### How to add a new blog post

Blog posts are fetched automatically. Run:

```bash
npm run fetch-blog-posts
```

### Video Posts (`video-posts.json`)

Auto-fetched via `npm run fetch-video-posts`.

```json
{
  "posts": [
    {
      "videoId": "youtube-video-id",
      "title": "Video Title",
      "description": "Short description",
      "publishedAt": "Jan 1, 2024",
      "thumbnail": "https://i.ytimg.com/...",
      "link": "https://www.youtube.com/watch?v=..."
    }
  ]
}
```

## How Validation Works

The validation script (`src/scripts/validate-content.mjs`) checks:

1. Required fields exist and are non-empty strings
2. URLs are valid absolute HTTP/HTTPS URLs
3. Slugs are valid (lowercase alphanumeric + hyphens only)
4. No duplicate slugs across projects
5. Category values are from the allowed set
6. Arrays (technologies, tags, description) are actual arrays

To run:

```bash
npm run validate-content
```

On failure, it prints the file, path, and issue for each error, then exits with code 1.

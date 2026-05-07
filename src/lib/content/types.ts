/* ─────────────────────────────────────────────────────────────────────────────
   Richer content types for the portfolio content platform.
   These extend or replace the simpler types in src/lib/types.ts.
────────────────────────────────────────────────────────────────────────────── */

/* ── Shared ─────────────────────────────────────────────────────────────── */

export interface ImageAsset {
  sm: string;
  md: string;
  lg: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  /** Semantic type — used to pick the right icon / aria-label. */
  type: 'github' | 'demo' | 'npm' | 'docs' | 'video' | 'other';
}

export interface Metric {
  label: string;
  value: string;
}

/* ── Profile ────────────────────────────────────────────────────────────── */

export interface SiteMetadata {
  siteUrl: string;
  siteName: string;
  twitterHandle?: string;
  locale: string;
}

/* ── Navigation ─────────────────────────────────────────────────────────── */

export interface NavigationItem {
  id: string;
  text: string;
  href: string;
}

/* ── Projects ───────────────────────────────────────────────────────────── */

export type ProjectCategory = 'web-app' | 'library' | 'tool' | 'other';

export interface ProjectCaseStudy {
  problem: string;
  constraints?: string;
  solution: string;
  architectureNotes?: string;
  technicalDecisions?: string;
  impact: string;
  lessonsLearned?: string;
}

export interface RichProject {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  category: ProjectCategory;
  featured: boolean;
  duration: string;
  image: ImageAsset;
  technologies: string[];
  links: ExternalLink[];
  metrics: Metric[];
  caseStudy?: ProjectCaseStudy;
}

/* ── Work / Experience ──────────────────────────────────────────────────── */

export interface RichWorkItem {
  id: string;
  image: ImageAsset;
  position: string;
  company: string;
  location: string;
  duration: string;
  employmentType: string;
  description: string[];
  technologies: string[];
  isCurrent: boolean;
  /** Key quantified achievements pulled from bullets. */
  metrics?: Metric[];
  /** High-level summary of business impact. */
  summary?: string;
}

/* ── Skills ─────────────────────────────────────────────────────────────── */

export interface Skill {
  name: string;
  /** Optional proficiency level for display. */
  level?: 'core' | 'proficient' | 'familiar';
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: Skill[];
}

/* ── Blog ───────────────────────────────────────────────────────────────── */

export interface RichBlogPost {
  link: string;
  title: string;
  /** ISO date string, or human-readable upload time. */
  uploadedTime: string;
  coverImage: string;
  description: string;
  tags: string[];
  /** Estimated reading time in minutes. */
  readingTime?: number;
}

/* ── Videos ─────────────────────────────────────────────────────────────── */

export interface RichVideoPost {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  link: string;
}

/* ── Education ──────────────────────────────────────────────────────────── */

export interface RichEducationItem {
  id: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  credential?: string;
}

/* ── Content collections ────────────────────────────────────────────────── */

export interface ContentCollections {
  projects: RichProject[];
  work: RichWorkItem[];
  skills: SkillGroup[];
  blogPosts: RichBlogPost[];
  videoPosts: RichVideoPost[];
  education: RichEducationItem[];
}

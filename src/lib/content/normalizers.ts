import { slugify } from '@/lib/utils/slug';
import { getReadingTime } from '@/lib/utils/text';
import type {
  RichProject,
  RichBlogPost,
  RichVideoPost,
  RichExperienceItem,
  RichEducationItem,
} from './types';

/* ── Raw JSON shapes (minimal) ─────────────────────────────────────────── */

interface RawProject {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  duration?: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: { sm?: string; md?: string; lg?: string };
  slug?: string;
  summary?: string;
  role?: string;
  category?: string;
  featured?: boolean;
  links?: { label: string; url: string; type?: string }[];
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    problem?: string;
    solution?: string;
    impact?: string;
    constraints?: string;
    architectureNotes?: string;
    technicalDecisions?: string;
    lessonsLearned?: string;
  };
}

interface RawExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  employmentType: string;
  description: string[];
  technologies: string[];
  isCurrent: boolean;
  image?: { sm?: string; md?: string; lg?: string };
  metrics?: { label: string; value: string }[];
  summary?: string;
}

interface RawBlogPost {
  link: string;
  title: string;
  uploadedTime: string;
  coverImage?: string;
  description?: string;
  tags?: string[];
}

interface RawVideoPost {
  videoId: string;
  title: string;
  description?: string;
  publishedAt: string;
  thumbnail?: string;
  link: string;
}

interface RawEducationItem {
  id: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  credential?: string;
}

/* ── Normalizers ────────────────────────────────────────────────────────── */

export function normalizeProject(raw: RawProject): RichProject {
  const slug = raw.slug ?? slugify(raw.name);
  const image = {
    sm: raw.image?.sm ?? '',
    md: raw.image?.md ?? '',
    lg: raw.image?.lg ?? '',
  };

  const links = raw.links ?? [];
  if (raw.githubUrl && !links.some((l) => l.type === 'github')) {
    links.unshift({ label: 'GitHub', url: raw.githubUrl, type: 'github' });
  }
  if (
    raw.demoUrl &&
    raw.demoUrl !== raw.githubUrl &&
    !links.some((l) => l.type === 'demo' || l.type === 'npm')
  ) {
    links.push({ label: 'Live Demo', url: raw.demoUrl, type: 'demo' });
  }

  return {
    id: raw.id,
    slug,
    name: raw.name,
    summary: raw.summary ?? raw.description.slice(0, 160).trimEnd(),
    description: raw.description,
    role: raw.role ?? 'Sole Developer',
    category: (raw.category as RichProject['category']) ?? 'other',
    featured: raw.featured ?? false,
    duration: raw.duration ?? '',
    image,
    technologies: raw.technologies ?? [],
    links: links.map((l) => ({
      label: l.label,
      url: l.url,
      type: (l.type as RichProject['links'][number]['type']) ?? 'other',
    })),
    metrics: raw.metrics ?? [],
    caseStudy: raw.caseStudy
      ? {
          problem: raw.caseStudy.problem ?? '',
          constraints: raw.caseStudy.constraints,
          solution: raw.caseStudy.solution ?? '',
          architectureNotes: raw.caseStudy.architectureNotes,
          technicalDecisions: raw.caseStudy.technicalDecisions,
          impact: raw.caseStudy.impact ?? '',
          lessonsLearned: raw.caseStudy.lessonsLearned,
        }
      : undefined,
  };
}

export function normalizeExperienceItem(
  raw: RawExperienceItem
): RichExperienceItem {
  return {
    id: raw.id,
    image: {
      sm: raw.image?.sm ?? '',
      md: raw.image?.md ?? '',
      lg: raw.image?.lg ?? '',
    },
    position: raw.position,
    company: raw.company,
    location: raw.location,
    duration: raw.duration,
    employmentType: raw.employmentType,
    description: raw.description ?? [],
    technologies: raw.technologies ?? [],
    isCurrent: raw.isCurrent ?? false,
    metrics: raw.metrics ?? [],
    summary: raw.summary,
  };
}

export function normalizeBlogPost(raw: RawBlogPost): RichBlogPost {
  const description = raw.description ?? '';
  return {
    link: raw.link,
    title: raw.title,
    uploadedTime: raw.uploadedTime,
    coverImage: raw.coverImage ?? '',
    description,
    tags: raw.tags ?? [],
    readingTime: getReadingTime(description),
  };
}

export function normalizeVideoPost(raw: RawVideoPost): RichVideoPost {
  return {
    videoId: raw.videoId,
    title: raw.title,
    description: raw.description ?? '',
    publishedAt: raw.publishedAt,
    thumbnail: raw.thumbnail ?? '',
    link: raw.link,
  };
}

export function normalizeEducationItem(
  raw: RawEducationItem
): RichEducationItem {
  return {
    id: raw.id,
    institution: raw.institution,
    duration: raw.duration,
    location: raw.location,
    description: raw.description,
    credential: raw.credential,
  };
}

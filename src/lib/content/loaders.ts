/**
 * Content loaders — read JSON files and normalize them into rich types.
 * These are all pure synchronous imports; no file I/O at runtime.
 */

import {
  normalizeProject,
  normalizeExperienceItem,
  normalizeBlogPost,
  normalizeVideoPost,
  normalizeRecentActivityFromBlog,
  normalizeRecentActivityFromVideo,
  normalizeEducationItem,
} from './normalizers';
import type {
  RichProject,
  RichExperienceItem,
  RichBlogPost,
  RichVideoPost,
  RichRecentActivity,
  RichEducationItem,
  SkillGroup,
} from './types';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const projectsRaw = require('@/content/projects.json') as {
  projects: { items: Parameters<typeof normalizeProject>[0][] };
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const experienceRaw = require('@/content/experience.json') as {
  experience: { items: Parameters<typeof normalizeExperienceItem>[0][] };
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const blogRaw = require('@/content/blog-posts.json') as {
  posts: Parameters<typeof normalizeBlogPost>[0][];
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const videoRaw = require('@/content/video-posts.json') as {
  posts: Parameters<typeof normalizeVideoPost>[0][];
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const educationRaw = require('@/content/education.json') as {
  education: { items: Parameters<typeof normalizeEducationItem>[0][] };
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const skillsRaw = require('@/content/skills.json') as {
  skillGroups: SkillGroup[];
};

export function loadProjects(): RichProject[] {
  return (projectsRaw.projects.items ?? []).map(normalizeProject);
}

export function loadExperienceItems(): RichExperienceItem[] {
  return (experienceRaw.experience.items ?? []).map(normalizeExperienceItem);
}

export function loadBlogPosts(): RichBlogPost[] {
  return (blogRaw.posts ?? []).map(normalizeBlogPost);
}

export function loadVideoPosts(): RichVideoPost[] {
  return (videoRaw.posts ?? []).map(normalizeVideoPost);
}

function getParsedTime(value?: string): number {
  if (!value) return Number.NaN;
  return new Date(value).getTime();
}

export function loadRecentActivities(limit = 5): RichRecentActivity[] {
  const articleActivities = (blogRaw.posts ?? []).map(
    normalizeRecentActivityFromBlog
  );
  const videoActivities = (videoRaw.posts ?? []).map(
    normalizeRecentActivityFromVideo
  );

  const merged = [...articleActivities, ...videoActivities].filter(
    (item) => item.title && item.href
  );

  const sorted = [...merged].sort((a, b) => {
    const aTime = getParsedTime(a.publishedAt);
    const bTime = getParsedTime(b.publishedAt);

    if (Number.isNaN(aTime) && Number.isNaN(bTime)) return 0;
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return bTime - aTime;
  });

  return sorted.slice(0, Math.max(0, limit));
}

export function loadEducation(): RichEducationItem[] {
  return (educationRaw.education.items ?? []).map(normalizeEducationItem);
}

export function loadSkillGroups(): SkillGroup[] {
  return skillsRaw.skillGroups ?? [];
}

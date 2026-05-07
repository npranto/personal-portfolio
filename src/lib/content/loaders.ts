/**
 * Content loaders — read JSON files and normalize them into rich types.
 * These are all pure synchronous imports; no file I/O at runtime.
 */

import {
  normalizeProject,
  normalizeWorkItem,
  normalizeBlogPost,
  normalizeVideoPost,
  normalizeEducationItem,
} from './normalizers';
import type {
  RichProject,
  RichWorkItem,
  RichBlogPost,
  RichVideoPost,
  RichEducationItem,
  SkillGroup,
} from './types';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const projectsRaw = require('@/content/projects.json') as {
  projects: { items: Parameters<typeof normalizeProject>[0][] };
};
// eslint-disable-next-line @typescript-eslint/no-require-imports
const workRaw = require('@/content/work.json') as {
  work: { items: Parameters<typeof normalizeWorkItem>[0][] };
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

export function loadWorkItems(): RichWorkItem[] {
  return (workRaw.work.items ?? []).map(normalizeWorkItem);
}

export function loadBlogPosts(): RichBlogPost[] {
  return (blogRaw.posts ?? []).map(normalizeBlogPost);
}

export function loadVideoPosts(): RichVideoPost[] {
  return (videoRaw.posts ?? []).map(normalizeVideoPost);
}

export function loadEducation(): RichEducationItem[] {
  return (educationRaw.education.items ?? []).map(normalizeEducationItem);
}

export function loadSkillGroups(): SkillGroup[] {
  return skillsRaw.skillGroups ?? [];
}

import type { RichProject, RichBlogPost } from './types';

/** Case-insensitive substring match. */
function matches(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

/**
 * Searches projects by title, summary, description, tags, and tech stack.
 * Returns all projects if query is empty.
 */
export function searchProjects(
  projects: RichProject[],
  query: string
): RichProject[] {
  if (!query.trim()) return projects;
  return projects.filter(
    (p) =>
      matches(p.name, query) ||
      matches(p.summary, query) ||
      matches(p.description, query) ||
      p.technologies.some((t) => matches(t, query)) ||
      matches(p.category, query) ||
      matches(p.role, query)
  );
}

/**
 * Searches blog posts by title, description, and tags.
 * Returns all posts if query is empty.
 */
export function searchBlogPosts(
  posts: RichBlogPost[],
  query: string
): RichBlogPost[] {
  if (!query.trim()) return posts;
  return posts.filter(
    (p) =>
      matches(p.title, query) ||
      matches(p.description, query) ||
      p.tags.some((t) => matches(t, query))
  );
}

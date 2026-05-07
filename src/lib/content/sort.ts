import type { RichProject, RichBlogPost } from './types';

/** Sorts projects: featured first, then alphabetically by name. */
export function sortProjects(projects: RichProject[]): RichProject[] {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name);
  });
}

/** Sorts blog posts by upload time descending (most recent first). */
export function sortBlogPostsDesc(posts: RichBlogPost[]): RichBlogPost[] {
  return [...posts].sort((a, b) => {
    const da = new Date(a.uploadedTime).getTime();
    const db = new Date(b.uploadedTime).getTime();
    if (isNaN(da) && isNaN(db)) return 0;
    if (isNaN(da)) return 1;
    if (isNaN(db)) return -1;
    return db - da;
  });
}

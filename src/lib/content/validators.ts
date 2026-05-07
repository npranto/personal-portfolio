import { isValidUrl } from '@/lib/utils/url';
import { isValidSlug } from '@/lib/utils/slug';
import type {
  RichProject,
  RichExperienceItem,
  RichBlogPost,
  SkillGroup,
} from './types';

export interface ValidationError {
  file: string;
  path: string;
  issue: string;
}

function err(file: string, path: string, issue: string): ValidationError {
  return { file, path, issue };
}

/* ── Project validators ─────────────────────────────────────────────────── */

export function validateProject(
  p: RichProject,
  index: number
): ValidationError[] {
  const errors: ValidationError[] = [];
  const file = 'src/content/projects.json';
  const base = `projects.items[${index}]`;

  if (!p.name?.trim())
    errors.push(err(file, `${base}.name`, 'missing required name'));
  if (!p.slug?.trim())
    errors.push(err(file, `${base}.slug`, 'missing required slug'));
  else if (!isValidSlug(p.slug))
    errors.push(err(file, `${base}.slug`, `invalid slug: "${p.slug}"`));
  if (!p.description?.trim())
    errors.push(
      err(file, `${base}.description`, 'missing required description')
    );
  if (!p.category)
    errors.push(err(file, `${base}.category`, 'missing required category'));

  const validCategories = ['web-app', 'library', 'tool', 'other'];
  if (p.category && !validCategories.includes(p.category)) {
    errors.push(
      err(
        file,
        `${base}.category`,
        `invalid category "${p.category}", must be one of: ${validCategories.join(', ')}`
      )
    );
  }

  if (!Array.isArray(p.technologies)) {
    errors.push(err(file, `${base}.technologies`, 'must be an array'));
  }

  p.links?.forEach((link, li) => {
    if (!link.url) {
      errors.push(err(file, `${base}.links[${li}].url`, 'missing URL'));
    } else if (!isValidUrl(link.url)) {
      errors.push(
        err(file, `${base}.links[${li}].url`, `invalid URL: "${link.url}"`)
      );
    }
    if (!link.label) {
      errors.push(err(file, `${base}.links[${li}].label`, 'missing label'));
    }
  });

  return errors;
}

export function validateProjects(projects: RichProject[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const slugs = new Set<string>();

  projects.forEach((p, i) => {
    errors.push(...validateProject(p, i));
    if (p.slug) {
      if (slugs.has(p.slug)) {
        errors.push(
          err(
            'src/content/projects.json',
            `projects.items[${i}].slug`,
            `duplicate slug: "${p.slug}"`
          )
        );
      }
      slugs.add(p.slug);
    }
  });

  return errors;
}

/* ── Experience validators ──────────────────────────────────────────────── */

export function validateExperienceItems(
  items: RichExperienceItem[]
): ValidationError[] {
  const errors: ValidationError[] = [];
  const file = 'src/content/experience.json';

  items.forEach((item, i) => {
    const base = `experience.items[${i}]`;
    if (!item.position?.trim())
      errors.push(err(file, `${base}.position`, 'missing required position'));
    if (!item.company?.trim())
      errors.push(err(file, `${base}.company`, 'missing required company'));
    if (!Array.isArray(item.description))
      errors.push(err(file, `${base}.description`, 'must be an array'));
    if (!Array.isArray(item.technologies))
      errors.push(err(file, `${base}.technologies`, 'must be an array'));
  });

  return errors;
}

/* ── Blog validators ─────────────────────────────────────────────────────── */

export function validateBlogPosts(posts: RichBlogPost[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const file = 'src/content/blog-posts.json';

  posts.forEach((post, i) => {
    const base = `posts[${i}]`;
    if (!post.title?.trim())
      errors.push(err(file, `${base}.title`, 'missing required title'));
    if (!post.link?.trim())
      errors.push(err(file, `${base}.link`, 'missing required link'));
    else if (!isValidUrl(post.link))
      errors.push(err(file, `${base}.link`, `invalid URL: "${post.link}"`));
    if (!Array.isArray(post.tags))
      errors.push(err(file, `${base}.tags`, 'must be an array'));
  });

  return errors;
}

/* ── Skills validators ──────────────────────────────────────────────────── */

export function validateSkillGroups(groups: SkillGroup[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const file = 'src/content/skills.json';

  groups.forEach((group, i) => {
    const base = `skillGroups[${i}]`;
    if (!group.label?.trim())
      errors.push(err(file, `${base}.label`, 'missing required label'));
    if (!Array.isArray(group.skills))
      errors.push(err(file, `${base}.skills`, 'must be an array'));
    if (group.skills?.length === 0)
      errors.push(err(file, `${base}.skills`, 'skills array is empty'));
  });

  return errors;
}

/* ── Formatter ──────────────────────────────────────────────────────────── */

export function formatValidationErrors(errors: ValidationError[]): string {
  return errors
    .map(
      (e) =>
        `[content validation failed]\n  file: ${e.file}\n  path: ${e.path}\n  issue: ${e.issue}`
    )
    .join('\n\n');
}

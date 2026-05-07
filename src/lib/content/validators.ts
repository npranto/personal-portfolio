import type {
  AboutContent,
  BlogPostsContent,
  EducationContent,
  NavContent,
  ProfileContent,
  ProjectsContent,
  SiteConfig,
  SocialsContent,
  VideoPostsContent,
  WorkContent,
} from '@/lib/content/types';

type ValidationResult = { valid: true } | { valid: false; errors: string[] };

function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function assertField(
  value: unknown,
  fieldPath: string,
  predicate: (input: unknown) => boolean,
  errors: string[]
) {
  if (!predicate(value)) errors.push(`${fieldPath} is invalid or missing`);
}

export function validateSiteConfig(input: unknown): ValidationResult {
  const errors: string[] = [];
  if (!isObject(input))
    return { valid: false, errors: ['config root must be an object'] };
  assertField(input.theme, 'theme', (v) => typeof v === 'string', errors);
  [
    'showJumbotron',
    'showAbout',
    'showWork',
    'showProjects',
    'showBlog',
    'showVideos',
    'showEducation',
    'showContact',
  ].forEach((key) =>
    assertField(input[key], key, (v) => typeof v === 'boolean', errors)
  );
  return errors.length ? { valid: false, errors } : { valid: true };
}

export function validateContentShape<T>(
  input: unknown,
  key: string
): ValidationResult {
  if (!isObject(input) || !(key in input)) {
    return { valid: false, errors: [`${key} is missing`] };
  }
  return { valid: true } as ValidationResult & { data?: T };
}

export function validateAllContent(payload: {
  config: unknown;
  nav: unknown;
  profile: unknown;
  about: unknown;
  work: unknown;
  projects: unknown;
  education: unknown;
  socials: unknown;
  blog: unknown;
  videos: unknown;
}): ValidationResult {
  const errors: string[] = [];
  const validations: Array<[string, ValidationResult]> = [
    ['config', validateSiteConfig(payload.config)],
    ['nav', validateContentShape<NavContent>(payload.nav, 'nav')],
    [
      'profile',
      validateContentShape<ProfileContent>(payload.profile, 'profile'),
    ],
    ['about', validateContentShape<AboutContent>(payload.about, 'about')],
    ['work', validateContentShape<WorkContent>(payload.work, 'work')],
    [
      'projects',
      validateContentShape<ProjectsContent>(payload.projects, 'projects'),
    ],
    [
      'education',
      validateContentShape<EducationContent>(payload.education, 'education'),
    ],
    [
      'socials',
      validateContentShape<SocialsContent>(payload.socials, 'socials'),
    ],
    [
      'blog-posts',
      validateContentShape<BlogPostsContent>(payload.blog, 'posts'),
    ],
    [
      'video-posts',
      validateContentShape<VideoPostsContent>(payload.videos, 'posts'),
    ],
  ];
  validations.forEach(([name, result]) => {
    if (!result.valid) {
      result.errors.forEach((e) => errors.push(`${name}: ${e}`));
    }
  });
  return errors.length ? { valid: false, errors } : { valid: true };
}

export type {
  AboutContent,
  BlogPostsContent,
  EducationContent,
  NavContent,
  ProfileContent,
  ProjectsContent,
  SiteConfig,
  SocialsContent,
  VideoPostsContent,
  WorkContent,
};

import configData from '@/content/config.json';
import navData from '@/content/nav.json';
import profileData from '@/content/profile.json';
import aboutData from '@/content/about.json';
import workData from '@/content/work.json';
import projectsData from '@/content/projects.json';
import educationData from '@/content/education.json';
import socialsData from '@/content/socials.json';
import blogData from '@/content/blog-posts.json';
import videoData from '@/content/video-posts.json';
import type {
  About,
  BlogPost,
  EducationContent,
  LegacyProjectItem,
  NavContent,
  Profile,
  ProjectCategory,
  ProjectItem,
  ProjectsContent,
  SiteConfig,
  SocialsContent,
  VideoPost,
  WorkContent,
} from '@/lib/content/types';
import { validateAllContent } from '@/lib/content/validators';

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function inferCategory(project: LegacyProjectItem): ProjectCategory {
  const stack = project.technologies.join(' ').toLowerCase();
  if (stack.includes('shopify') || stack.includes('ecommerce'))
    return 'ecommerce';
  if (stack.includes('ai') || stack.includes('llm')) return 'ai-automation';
  if (stack.includes('node') || stack.includes('firebase')) return 'full-stack';
  return 'frontend';
}

function normalizeProject(item: ProjectItem | LegacyProjectItem): ProjectItem {
  if ('title' in item) return item;
  return {
    id: item.id,
    title: item.name,
    slug: toSlug(item.name),
    summary: item.description,
    role: 'Frontend Engineer',
    problem: item.description,
    solution:
      'Designed and shipped iterative improvements with maintainable UI architecture.',
    impact:
      'Improved product quality and developer velocity through pragmatic engineering decisions.',
    techStack: item.technologies,
    highlights: item.technologies
      .slice(0, 4)
      .map((tech) => `Built with ${tech}`),
    links: {
      github: item.githubUrl,
      live: item.demoUrl,
    },
    image: item.image,
    featured: item.id.includes('logtrade') || item.id.includes('portfolio'),
    category: inferCategory(item),
    duration: item.duration,
    constraints: ['Lean solo project timeline', 'Long-term maintainability'],
    architectureNotes: [
      'Data-driven content model',
      'Static-first rendering for performance',
    ],
  };
}

export function loadPortfolioContent() {
  const validation = validateAllContent({
    config: configData,
    nav: navData,
    profile: profileData,
    about: aboutData,
    work: workData,
    projects: projectsData,
    education: educationData,
    socials: socialsData,
    blog: blogData,
    videos: videoData,
  });

  if (!validation.valid) {
    throw new Error(
      `Content validation failed:\n${validation.errors.join('\n')}`
    );
  }

  const typedProjects = projectsData as ProjectsContent;
  const normalizedProjects = typedProjects.projects.items.map(normalizeProject);

  return {
    config: configData as SiteConfig,
    nav: (navData as NavContent).nav,
    profile: (profileData as { profile: Profile }).profile,
    about: (aboutData as { about: About }).about,
    work: (workData as WorkContent).work,
    projects: {
      ...(typedProjects.projects as ProjectsContent['projects']),
      items: normalizedProjects,
    },
    education: (educationData as EducationContent).education,
    socials: (socialsData as SocialsContent).socials,
    blogPosts: (blogData as { posts: BlogPost[] }).posts,
    videoPosts: (videoData as { posts: VideoPost[] }).posts,
  };
}

export function loadProjectBySlug(slug: string) {
  const { projects } = loadPortfolioContent();
  return projects.items.find((project) => project.slug === slug);
}

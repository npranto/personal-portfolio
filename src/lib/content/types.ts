export type ProjectCategory =
  | 'frontend'
  | 'full-stack'
  | 'ai-automation'
  | 'ecommerce'
  | 'other';

export interface SiteConfig {
  theme: string;
  showJumbotron: boolean;
  showAbout: boolean;
  showWork: boolean;
  showProjects: boolean;
  showBlog: boolean;
  showVideos: boolean;
  showEducation: boolean;
  showContact: boolean;
}

export interface NavLink {
  id: string;
  text: string;
  href: string;
}

export interface NavContent {
  nav: {
    id: string;
    links: NavLink[];
  };
}

export interface ProfilePicture {
  id: string;
  sm: string;
  md: string;
  lg: string;
}

export interface Profile {
  id: string;
  description: string;
  title: string;
  picture: ProfilePicture;
  author: string;
  currentRole: string;
  location: string;
  highlightedRoles: string[];
  resumeHref: string;
  contactHref: string;
  email: string;
  nickname: string;
}

export interface ProfileContent {
  profile: Profile;
}

export interface AboutParagraph {
  body: string;
}

export interface AboutSection {
  id: string;
  header?: string;
  paragraphs: AboutParagraph[];
}

export interface About {
  id: string;
  header: string;
  mainContent: AboutSection[];
  secondaryContent: AboutSection[];
}

export interface AboutContent {
  about: About;
}

export interface WorkImage {
  id: string;
  sm: string;
  md: string;
  lg: string;
}

export interface WorkItem {
  id: string;
  image: WorkImage;
  position: string;
  company: string;
  location: string;
  duration: string;
  employmentType: string;
  description: string[];
  technologies: string[];
  isCurrent: boolean;
}

export interface WorkContent {
  work: {
    id: string;
    header: string;
    items: WorkItem[];
  };
}

export interface ProjectImage {
  id?: string;
  sm?: string;
  md?: string;
  lg?: string;
  alt?: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  role: string;
  problem: string;
  constraints?: string[];
  solution: string;
  architectureNotes?: string[];
  impact: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLinks;
  image?: ProjectImage;
  featured: boolean;
  category: ProjectCategory;
  duration?: string;
}

export interface LegacyProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  duration?: string;
  image?: ProjectImage;
}

export interface ProjectsContent {
  projects: {
    id: string;
    header: string;
    items: Array<ProjectItem | LegacyProjectItem>;
  };
}

export interface EducationItem {
  id: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}

export interface EducationContent {
  education: {
    id: string;
    header: string;
    items: EducationItem[];
  };
}

export interface SocialEntry {
  hideByDefault: boolean;
  href: string;
}

export interface Socials {
  github: SocialEntry;
  linkedin: SocialEntry;
  twitter: SocialEntry;
  devto: SocialEntry;
  medium: SocialEntry;
  youtube: SocialEntry;
  substack: SocialEntry;
}

export interface SocialsContent {
  socials: {
    id: string;
  } & Socials;
}

export interface BlogPost {
  link: string;
  title: string;
  uploadedTime: string;
  coverImage: string;
  description: string;
  tags: string[];
}

export interface BlogPostsContent {
  posts: BlogPost[];
}

export interface VideoPost {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  link: string;
}

export interface VideoPostsContent {
  posts: VideoPost[];
}

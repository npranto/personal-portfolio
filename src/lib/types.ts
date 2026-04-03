/* ─────────────────────────────────────────────────────────────────────────────
   Content type definitions — mirrors the shape of every JSON file in
   src/content/. Update these when adding new fields to the JSON.
───────────────────────────────────────────────────────────────────────────── */

/* ---- config.json -------------------------------------------------------- */
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

/* ---- nav.json ----------------------------------------------------------- */
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

/* ---- profile.json ------------------------------------------------------- */
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

/* ---- about.json --------------------------------------------------------- */
export interface AboutContentItem {
  type: 'paragraph' | 'header';
  body: string;
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
  content: AboutContentItem[];
  mainContent: AboutSection[];
  secondaryContent: AboutSection[];
}
export interface AboutContent {
  about: About;
}

/* ---- work.json ---------------------------------------------------------- */
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

/* ---- projects.json ------------------------------------------------------ */
export interface ProjectImage {
  id: string;
  sm: string;
  md: string;
  lg: string;
}
export interface ProjectItem {
  id: string;
  name: string;
  duration: string;
  image: ProjectImage;
  githubUrl: string;
  demoUrl: string;
  description: string;
  technologies: string[];
}
export interface ProjectsContent {
  projects: {
    id: string;
    header: string;
    items: ProjectItem[];
  };
}

/* ---- education.json ----------------------------------------------------- */
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

/* ---- socials.json ------------------------------------------------------- */
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

/* ---- blog-posts.json ---------------------------------------------------- */
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

/* ---- video-posts.json --------------------------------------------------- */
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

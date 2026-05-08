import type {
  SiteConfig,
  NavContent,
  ProfileContent,
  AboutContent,
  ExperienceContent,
  ProjectsContent,
  EducationContent,
  SocialsContent,
  BlogPostsContent,
  VideoPostsContent,
} from '@/lib/types';

/* ── Static content imports ─────────────────────────────────────────────── */
import configData from '@/content/config.json';
import navData from '@/content/nav.json';
import profileData from '@/content/profile.json';
import aboutData from '@/content/about.json';
import experienceData from '@/content/experience.json';
import projectsData from '@/content/projects.json';
import educationData from '@/content/education.json';
import socialsData from '@/content/socials.json';
import blogData from '@/content/blog-posts.json';
import videoData from '@/content/video-posts.json';

/* ── Layout components ──────────────────────────────────────────────────── */
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

/* ── Section components ─────────────────────────────────────────────────── */
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Content } from '@/components/sections/Content';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

/* ── Type-cast JSON imports ─────────────────────────────────────────────── */
const config = configData as SiteConfig;
const { nav } = navData as NavContent;
const { profile } = profileData as ProfileContent;
const { about } = aboutData as AboutContent;
const { experience } = experienceData as ExperienceContent;
const { projects } = projectsData as ProjectsContent;
const { education } = educationData as EducationContent;
const { socials } = socialsData as SocialsContent;
const { posts: blogPosts } = blogData as BlogPostsContent;
const { posts: videoPosts } = videoData as VideoPostsContent;

/**
 * Main portfolio page.
 * All data is imported at build time from src/content/*.json.
 * Section visibility is controlled by config.json feature flags.
 */
export default function Home() {
  return (
    <>
      <Navbar links={nav.links} initials="NP" />

      <main id="main-content" className="flex-1">
        {config.showJumbotron && <Hero profile={profile} socials={socials} />}

        {config.showAbout && <About about={about} />}

        {config.showExperience && (
          <Experience header={experience.header} items={experience.items} />
        )}

        {config.showProjects && <Projects header={projects.header} />}

        {config.showContent && (
          <Content blogPosts={blogPosts} videoPosts={videoPosts} />
        )}

        {config.showEducation && (
          <Education header={education.header} items={education.items} />
        )}

        {config.showContact && (
          <Contact email={profile.email} socials={socials} />
        )}
      </main>

      <Footer author={profile.author} socials={socials} />
    </>
  );
}

import Head from 'next/head';
import Jumbotron from '@/components/jumbotron';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Videos from '@/components/videos';
import Education from '@/components/education';
import Contact from '@/components/contact';
import PROFILE from '../content/profile.json';
import CONFIG from '../content/config.json';

export default function HomePage(props) {
  const profile = PROFILE?.profile || {};
  const {
    showJumbotron,
    showAbout,
    showWork,
    showProjects,
    showBlog,
    showVideos,
    showEducation,
    showContact,
  } = CONFIG || {};
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={profile.description} />
        <title>{profile.title}</title>
      </Head>
      <div className={`flex min-h-screen flex-col sm:px-4 py-4 space-y-10`}>
        {showJumbotron && <Jumbotron />}
        {showAbout && <About />}
        {showWork && <Work />}
        {showProjects && <Projects />}
        {showBlog && <Blog />}
        {showVideos && <Videos />}
        {showEducation && <Education />}
        {showContact && <Contact />}
      </div>
    </>
  );
}

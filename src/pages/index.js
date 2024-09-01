import Head from 'next/head';

import Jumbotron from '@/components/jumbotron';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Videos from '@/components/videos';
import Education from '@/components/education';
import Contact from '@/components/contact';

import profile from '../content/profile.json';
import about from '../content/about.json';
import work from '../content/work.json';
import projects from '../content/projects.json';
import posts from '../content/blog.json';
import videos from '../content/videos.json';
import education from '../content/education.json';

export default function Home() {
	return (
		<>
			<Head>
				<meta name="viewport" content="viewport-fit=cover" />
				<meta name="description" content={profile.description} />
				<title>{profile.title}</title>
			</Head>
			<div className={`flex min-h-screen flex-col px-4 py-4 space-y-10`}>
				<Jumbotron profile={profile} />
				<About about={about} />
				<Work work={work} />
				<Projects projects={projects} />
				<Blog posts={posts} />
				<Videos videos={videos} />
				<Education education={education} />
				<Contact />
			</div>
		</>
	);
}

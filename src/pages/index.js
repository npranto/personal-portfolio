import Head from 'next/head';
import Jumbotron from '@/components/jumbotron';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Videos from '@/components/videos';
import Education from '@/components/education';
import Contact from '@/components/contact';
import data from '../data.json';

export default function Home(props) {
	const { profile } = data?.content || {};
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={profile.description} />
				<title>{profile.title}</title>
			</Head>
			<div className={`flex min-h-screen flex-col px-4 py-4 space-y-10`}>
				<Jumbotron />
				<About />
				<Work />
				<Projects />
				<Blog />
				<Videos />
				<Education />
				<Contact />
			</div>
		</>
	);
}

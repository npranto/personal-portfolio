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
// import { getNavContent } from '@/content';

export default function Home(props) {
	console.log({ props });
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

// export async function getStaticProps() {
// 	try {
// 		// Await the promise from getNavContent
// 		// const nav = await getNavContent();

// 		// Return the resolved data as props
// 		return {
// 			props: {
// 				// nav,
// 			},
// 		};
// 	} catch (error) {
// 		console.error('Error in getStaticProps:', error);
// 		return {
// 			props: {
// 				// nav: null, // Handle fallback for nav data if error occurs
// 			},
// 		};
// 	}
// }

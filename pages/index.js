/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import MenuSidebar from '../components/Nav/MenuSidebar';
import MenuTabs from '../components/Nav/MenuTabs';
import Projects from '../components/Projects/Projects';
import Work from '../components/Work/Work';

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Portfolio website - Nazmuz Pranto, a front-end engineer"
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/assets/favicons/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/assets/favicons/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/assets/favicons/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/assets/favicons/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/assets/favicons/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/assets/favicons/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/assets/favicons/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/assets/favicons/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicons/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/assets/favicons/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/assets/favicons/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/assets/favicons/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<title>Portfolio - Nazmuz Pranto v3.0.0</title>
			</Head>

			<div className="max-w-screen-lg m-auto mt-0 mb-0 bg-gray-50">
				<nav className="fixed md:w-64 z-10" data-e2e="nav">
					{/* <!-- menu tabs (bottom, fixed) --> */}
					<MenuTabs />
					{/* <!-- menu sidebar (left, fixed) --> */}
					<MenuSidebar />
				</nav>

				<main className="md:ml-64 space-y-10 sm:px-5">
					<Jumbotron />
					<About />
					<Work />
					<Projects />
					<Blog />
					<Education />
					<Contact />
				</main>
			</div>
		</>
	);
}

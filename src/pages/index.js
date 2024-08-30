import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio - Nazmuz Pranto</title>
			</Head>
			<div
				className={`flex min-h-screen flex-col px-4 py-4 ${inter.className}`}
			>
				<h1>npranto.dev</h1>
			</div>
		</>
	);
}

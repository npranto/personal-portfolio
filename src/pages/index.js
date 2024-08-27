import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
			<h1>npranto.dev</h1>
		</main>
	);
}

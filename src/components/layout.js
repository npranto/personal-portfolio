import Navbar from './nav';

export default function Layout({ children }) {
	return (
		<div className="max-w-screen-lg m-auto my-2 md:my-10 flex flex-col md:flex-row">
			<Navbar className="md:w-64 z-10" />
			<main className="flex-grow space-y-10 sm:px-5 mb-10 md:mb-0">
				{children}
			</main>
		</div>
	);
}

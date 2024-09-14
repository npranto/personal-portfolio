import Navbar from './nav';

export default function Layout({ children }) {
	return (
		<>
			<Navbar className="fixed md:w-64 z-10" />
			<main className="md:ml-64 space-y-10 sm:px-5 mb-10 md:mb-0">
				{/* {children} */}
			</main>
		</>
	);
}

import Navbar from './nav';
// import Footer from './footer';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="md:ml-64 space-y-10 sm:px-5">{children}</main>
			{/* <Footer /> */}
		</>
	);
}

import MenuSidebar from './MenuSidebar';
import MenuTabs from './MenuTabs';

export default function Nav({ className = '', ...props }) {
	return (
		<nav className="fixed md:w-64 z-10" data-e2e="nav">
			{/* <!-- menu tabs (bottom, fixed) --> */}
			<MenuTabs />

			{/* <!-- menu sidebar (left, fixed) --> */}
			<MenuSidebar />
		</nav>
	);
}

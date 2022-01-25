import BlogItem from './BlogItem';

export default function BlogList({ className = '' }) {
	return (
		<ul className={className}>
			<BlogItem
				title="How I Setup ESLint, Prettier, and EditorConfig for Static Sites"
				published="Jan 25, 2022"
				href="https://dev.to/npranto/how-i-setup-eslint-prettier-and-editorconfig-for-static-sites-33ep"
			/>
			<BlogItem
				title="macOS Web Development Setup Guide"
				published="Dec 8, 2021"
				href="https://medium.com/@npranto/macos-web-development-setup-guide-db229bcbb849"
			/>
			<BlogItem
				title="Quick Bite: SSH Key"
				published="Dec 4, 2021"
				href="https://dev.to/npranto/quick-bite-ssh-key-4llh"
			/>
		</ul>
	);
}

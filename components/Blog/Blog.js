import Header from '../Header';
import Section from '../Section';
import BlogList from './BlogList';

export default function Blog() {
	return (
		<Section
			id="blog"
			className="bg-green-100 blog rounded-lg py-10 px-4"
			data-e2e="blog"
		>
			<Header className="my-2" variant={3}>
				Blog
			</Header>

			<BlogList className="blog-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row" />
		</Section>
	);
}

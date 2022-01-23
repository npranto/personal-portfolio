import Header from '../shared/Header';
import Section from '../shared/Section';
import ProjectList from './ProjectList';

export default function Projects() {
	return (
		<Section
			id="projects"
			className="bg-lime-100 rounded-lg py-10 px-4"
			data-e2e="projects"
		>
			<Header className="my-2" variant={3}>
				Projects
			</Header>

			<ProjectList className="projects-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row lg:items-baseline" />
		</Section>
	);
}

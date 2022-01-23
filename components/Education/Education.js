import Header from '../shared/Header';
import Section from '../shared/Section';
import EducationList from './EducationList';

export default function Education() {
	return (
		<Section
			id="education"
			className="bg-sky-100 rounded-lg education py-10 px-4"
			data-e2e="education"
		>
			<Header className="my-2" variant={3}>
				Education
			</Header>

			<EducationList className="education-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row" />
		</Section>
	);
}

import Header from '../Header';
import Section from '../Section';
import WorkList from './WorkList';

export default function Work() {
	return (
		<Section
			id="work"
			className="bg-amber-100 rounded-lg py-10 px-4"
			data-e2e="work"
		>
			<Header className="my-2" variant={3}>
				Work
			</Header>

			<WorkList className="work-list" />
		</Section>
	);
}

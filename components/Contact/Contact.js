import Header from '../Header';
import Section from '../Section';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<Section
			id="contact"
			className="rounded-lg education px-4 pt-10 pb-20"
			data-e2e="contact"
		>
			<Header className="my-2" variant={3}>
				Contact
			</Header>

			<ContactForm />
		</Section>
	);
}

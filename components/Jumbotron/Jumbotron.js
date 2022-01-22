import Avatar from '../Avatar';
import Button from '../Button';
import Header from '../Header';
import RoleSlider from '../RoleSlider';
import Section from '../Section';
import SocialList from '../SocialList/SocialList';

export default function Jumbotron() {
	return (
		<Section id="jumbotron" className="jumbotron-intro" data-e2e="jumbotron">
			<Header className="mb-6" variant={2}>
				Hello,
				<span> </span>
				<span className="text-green-600 block leading-snug md:inline-block">
					I'm Shakib
				</span>
			</Header>

			<Avatar className="mb-2 md:hidden" size="sm" />

			<RoleSlider />

			<div className="action-call flex flex-row space-x-2">
				<Button
					href="./assets/resume.pdf"
					target="_blank"
					rel="noreferrer"
					data-e2e="resume-btn"
				>
					Resume
				</Button>
				<Button href="#contact" data-e2e="lets-talk-btn">
					Let's Talk
				</Button>
			</div>
			{/* only shown on mobile view */}
			<SocialList className="md:hidden mt-5" />
		</Section>
	);
}

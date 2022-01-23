import Avatar from '../shared/Avatar';
import Button from '../shared/Button';
import Header from '../shared/Header';
import RoleSlider from './RoleSlider';
import Section from '../shared/Section';
import SocialList from '../shared/SocialList/SocialList';

export default function Jumbotron() {
	return (
		<Section id="jumbotron" data-e2e="jumbotron">
			<Header className="mb-6" variant={2}>
				Hello,
				<span> </span>
				<span className="text-green-600 block leading-snug md:inline-block">
					I'm Shakib
				</span>
			</Header>

			<Avatar
				className="mb-2 md:hidden"
				logo="/assets/images/profile-v3-112.png"
				size="sm"
			/>

			<RoleSlider />

			<div className="action-call flex flex-row space-x-2">
				<Button
					variant={1}
					href="/assets/resume.pdf"
					target="_blank"
					rel="noreferrer"
					data-e2e="resume-btn"
				>
					Resume
				</Button>
				<Button variant={1} href="#contact" data-e2e="lets-talk-btn">
					Let's Talk
				</Button>
			</div>
			{/* only shown on mobile view */}
			<SocialList className="md:hidden mt-5" />
		</Section>
	);
}

import Button from '../shared/Button';
import SocialList from '../shared/SocialList/SocialList';

export default function MenuTabs() {
	return (
		<div
			id="menu-tabs"
			className="md:hidden bottom-0 w-full fixed bg-white flex overflow-x-auto space-x-2 px-4 pb-6 pt-4"
		>
			<Button variant={6} href="#about">
				About
			</Button>
			<Button variant={6} href="#work">
				Work
			</Button>
			<Button variant={6} href="#projects">
				Projects
			</Button>
			<Button variant={6} href="#blog">
				Blog
			</Button>
			<Button variant={6} href="#education">
				Education
			</Button>
			<Button variant={6} href="#contact">
				Contact
			</Button>
			<SocialList />
		</div>
	);
}

import SocialList from '../SocialList/SocialList';
import MenuTab from './MenuTab';

export default function MenuTabs() {
	return (
		<div
			id="menu-tabs"
			className="md:hidden bottom-0 w-full fixed bg-white flex overflow-x-auto space-x-2 px-4 pb-6 pt-4"
		>
			<MenuTab href="#about">About</MenuTab>
			<MenuTab href="#work">Work</MenuTab>
			<MenuTab href="#projects">Projects</MenuTab>
			<MenuTab href="#blog">Blog</MenuTab>
			<MenuTab href="#education">Education</MenuTab>
			<MenuTab href="#contact">Contact</MenuTab>
			<SocialList />
		</div>
	);
}

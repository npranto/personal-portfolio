import Avatar from '../Avatar';
import Header from '../Header';
import SocialList from '../SocialList/SocialList';
import Text from '../Text';
import MenuLinks from './MenuLinks';

export default function MenuSidebar() {
	return (
		<section
			id="nav-menu"
			className="navigation-menu hidden md:block h-screen px-4 py-4 box-border"
		>
			<Avatar size="lg" className="mb-2" />
			<Header className="name my-2" variant={1}>
				Nazmuz
				<br />
				Pranto
			</Header>
			<Text className="title">Software Engineer</Text>
			<Text className="location">Cambridge, MA</Text>
			<MenuLinks />
			<SocialList />
		</section>
	);
}

import Avatar from '../shared/Avatar';
import Header from '../shared/Header';
import SocialList from '../shared/SocialList/SocialList';
import Text from '../shared/Text';
import MenuLinks from './MenuLinks';

export default function MenuSidebar() {
	return (
		<section
			id="nav-menu"
			className="navigation-menu hidden md:block h-screen px-4 py-4 box-border"
		>
			<Avatar
				size="lg"
				logo="/assets/images/profile-v3-160.png"
				className="mb-2"
			/>
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

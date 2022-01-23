import Button from '../Button';
import {
	DevIcon,
	GitHubIcon,
	LinkedInIcon,
	MediumIcon,
	TwitterIcon,
} from '../Icon';

const SOCIALS = [
	{
		name: 'github',
		link: 'https://github.com/npranto',
		icon: <GitHubIcon />,
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/npranto/',
		icon: <LinkedInIcon />,
	},
	{
		name: 'twitter',
		link: 'https://twitter.com/nazmuzpranto',
		icon: <TwitterIcon />,
	},
	{
		name: 'dev',
		link: 'https://dev.to/npranto',
		icon: <DevIcon />,
	},
	{
		name: 'medium',
		link: 'https://medium.com/@npranto',
		icon: <MediumIcon />,
	},
];

function getSocialInfo(social) {
	if (!social || typeof social !== 'string') return undefined;
	return SOCIALS.find((s) => s.name.toLowerCase() === social);
}

export default function SocialLink({ social }) {
	const { name, link, icon } = getSocialInfo(social);
	return (
		<Button variant={7} href={link} target="_blank" rel="noreferrer">
			<span className={`${name}-icon`}>{icon}</span>
		</Button>
	);
}

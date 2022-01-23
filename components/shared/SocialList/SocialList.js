import SocialLink from './SocialLink';

export default function SocialList({ className = '' }) {
	return (
		<ul className={`socials flex flex-row space-x-2 ${className}`}>
			<li className="transition ease-in-out hover:-translate-y-1">
				<SocialLink social="github" />
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<SocialLink social="linkedin" />
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<SocialLink social="twitter" />
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<SocialLink social="dev" />
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<SocialLink social="medium" />
			</li>
		</ul>
	);
}

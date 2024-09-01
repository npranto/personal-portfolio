import React from 'react';
import Socials from './socials';

const ProfilePicture = ({ srcLg }) => (
	<div className="profile-picture mb-2">
		<picture>
			<source srcSet={`${srcLg}?as=webp`} type="image/webp" />
			<img
				src={`${srcLg}?width=200`}
				alt="Profile Picture"
				width="200px"
				height="auto"
				className="rounded"
			/>
		</picture>
	</div>
);

const MenuTabs = ({ links, socials }) => (
	<div
		id="menu-tabs"
		className="md:hidden bottom-0 w-full fixed bg-white flex overflow-x-auto space-x-2 px-4 pb-6 pt-4"
	>
		{links.map((link) => (
			<a key={link.href} href={link.href} className="nav-link-tab">
				{link.text}
			</a>
		))}
		<Socials socials={socials} />
	</div>
);

const MenuSidebar = ({ profile, links, socials }) => (
	<section
		id="nav-menu"
		className="navigation-menu hidden md:block h-screen px-4 py-4 box-border"
	>
		<ProfilePicture srcLg={profile.picture.lg} />
		<h1 className="name inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight my-2">
			{profile.author}
		</h1>
		<p className="title profile-info">{profile.currentRole}</p>
		<p className="location profile-info">{profile.location}</p>

		<ul id="menu-links" className="menu-links grid grid-cols-1 my-10">
			{links.map((link) => (
				<li key={link.href}>
					<a
						href={link.href}
						type="button"
						className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
						data-e2e={`menu-link-${link.id}`}
					>
						{link.text}
					</a>
				</li>
			))}
		</ul>
		<Socials socials={socials} />
	</section>
);

const profileData = {
	picture: { lg: '/assets/images/profile-v3-200.png' },
	author: 'Nazmuz Pranto',
	currentRole: 'Frontend Developer',
	location: 'Boston, MA',
};

const linksData = [
	{
		id: 'about',
		text: 'About',
		href: '#about',
	},
	{
		id: 'work',
		text: 'Work',
		href: '#work',
	},
	{
		id: 'projects',
		text: 'Projects',
		href: '#projects',
	},
	{
		id: 'blog',
		text: 'Blog',
		href: '#blog',
	},
	{
		id: 'education',
		text: 'Education',
		href: '#education',
	},
	{
		id: 'contact',
		text: 'Contact',
		href: '#contact',
	},
];

const socialsData = {
	github: 'https://github.com/username',
	linkedin: 'https://linkedin.com/in/username',
	twitter: 'https://twitter.com/username',
	devto: 'https://dev.to/username',
	medium: 'https://medium.com/@username',
};

export default function Nav({ className = '' }) {
	return (
		<nav className={`${className}`} data-e2e="nav">
			<MenuTabs links={linksData} socials={socialsData} />
			<MenuSidebar
				profile={profileData}
				links={linksData}
				socials={socialsData}
			/>
		</nav>
	);
}

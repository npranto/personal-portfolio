import React from 'react';
import Socials from './socials';
import Card from './card';
import ProfilePicture from './profile-picture';
import TextSlider from './text-slider';
import PROFILE from '../content/profile.json';

const Jumbotron = () => {
	const profile = PROFILE?.profile || {};
	return (
		<Card
			id="jumbotron"
			className={`jumbotron-card sm:pt-0`}
			data-e2e="jumbotron"
		>
			<h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight mb-6">
				Hello,{' '}
				<span className="text-green-600 block leading-snug md:inline-block">
					I&apos;m {profile.nickname}
				</span>
			</h1>

			<ProfilePicture
				className="mb-2 md:hidden"
				src={profile?.picture?.sm}
				width={160}
				height={160}
			/>

			<TextSlider className="sm:mb-10" items={profile.highlightedRoles} />

			<div className="action-call flex flex-row space-x-2">
				<a
					href={profile.resumeHref}
					target="_blank"
					className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
					data-e2e="resume-btn"
				>
					Resume
				</a>
				<a
					href={profile.contactHref}
					className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
					data-e2e="lets-talk-btn"
				>
					Let&apos;s Talk
				</a>
			</div>

			<div className="md:hidden mt-5">
				<Socials />
			</div>
		</Card>
	);
};

export default Jumbotron;

import React from 'react';
import Image from 'next/image';
import Socials from './socials';

const Jumbotron = ({ profile }) => {
	return (
		<section
			id="jumbotron"
			className={`jumbotron-intro card`}
			data-e2e="jumbotron"
		>
			<h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight mb-6">
				Hello,{' '}
				<span className="text-green-600 block leading-snug md:inline-block">
					I&apos;m {profile.nickname}
				</span>
			</h1>
			<div className="profile-picture mb-2 md:hidden">
				<picture>
					<source
						srcSet={`${profile.picture.sm}?as=webp&width=112`}
						type="image/webp"
					/>
					<Image
						src={`${profile.picture.sm}?width=160`}
						alt="Profile Picture"
						width={112}
						height={160}
						layout="intrinsic"
						objectFit="contain"
					/>
				</picture>
			</div>
			<div className={`slider sm:mb-10`}>
				{profile.highlightedRoles.map((role, index) => (
					<h2
						key={index}
						className={`item flex text-2xl md:text-4xl font-extrabold text-red-600 tracking-tight mb-10`}
					>
						&lt; {role} /&gt;
					</h2>
				))}
			</div>
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
				<Socials socials={import('../content/socials.json').default} />
			</div>
		</section>
	);
};

export default Jumbotron;

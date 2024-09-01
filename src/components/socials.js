import React from 'react';
import socials from '../content/socials.json';

const GitHubLogo = () => {
	return (
		<span className="github-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-github"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
			</svg>
		</span>
	);
};

export const LinkedinLogo = () => {
	return (
		<span className="linkedin-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-linkedin"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<rect x="4" y="4" width="16" height="16" rx="2" />
				<line x1="8" y1="11" x2="8" y2="16" />
				<line x1="8" y1="8" x2="8" y2="8.01" />
				<line x1="12" y1="16" x2="12" y2="11" />
				<path d="M16 16v-3a2 2 0 0 0 -4 0" />
			</svg>
		</span>
	);
};

const TwitterLogo = () => {
	return (
		<span className="twitter-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-twitter"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
			</svg>
		</span>
	);
};

const MediumLogo = () => {
	return (
		<span className="medium-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-medium"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="9" />
				<path d="M13 10h-2v6h2" />
				<path d="M17 10c0 6.5 -2 6.5 -2 6.5" />
				<path d="M7 10c0 6.5 2 6.5 2 6.5" />
			</svg>
		</span>
	);
};

const YoutubeLogo = () => {
	return (
		<span className="youtube-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-brand-youtube"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<rect x="3" y="5" width="18" height="14" rx="4" />
				<path d="M10 9l5 3l-5 3z" />
			</svg>
		</span>
	);
};

const DevToLogo = () => {
	return (
		<span className="dev-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-code"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<polyline points="7 8 3 12 7 16" />
				<polyline points="17 8 21 12 17 16" />
				<line x1="14" y1="4" x2="10" y2="20" />
			</svg>
		</span>
	);
};

export default function Socials() {
	return (
		<ul className="socials flex flex-row space-x-2">
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.github} target="_blank" rel="noopener noreferrer">
					<GitHubLogo />
				</a>
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
					<LinkedinLogo />
				</a>
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.twitter} target="_blank" rel="noopener noreferrer">
					<TwitterLogo />
				</a>
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.devto} target="_blank" rel="noopener noreferrer">
					<DevToLogo />
				</a>
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.medium} target="_blank" rel="noopener noreferrer">
					<MediumLogo />
				</a>
			</li>
			<li className="transition ease-in-out hover:-translate-y-1">
				<a href={socials.youtube} target="_blank" rel="noopener noreferrer">
					<YoutubeLogo />
				</a>
			</li>
		</ul>
	);
}

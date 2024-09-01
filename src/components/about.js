import React, { useState } from 'react';
import CardHeading from './card-heading';
import Card from './card';

const About = ({ about }) => {
	const [showReadMore, setShowReadMore] = useState(false);

	const handleReadMoreToggle = () =>
		setShowReadMore((showReadMore) => !showReadMore);

	return (
		<Card id="about" className="about bg-red-100 card" data-e2e="about">
			<CardHeading>{about.header}</CardHeading>

			<div
				className="text-base text-gray-500"
				dangerouslySetInnerHTML={{ __html: about.focusContent }}
			></div>

			{showReadMore && (
				<div
					id="read-more-content"
					className="transition ease-in-out"
					data-e2e="read-more-content"
				>
					<div
						dangerouslySetInnerHTML={{ __html: about.readMoreContent }}
					></div>
				</div>
			)}

			<button
				type="button"
				id="read-more-btn"
				className={`flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 ${showReadMore ? 'hidden' : ''}`}
				data-e2e="read-more-btn"
				onClick={handleReadMoreToggle}
			>
				Read more
				<span className="arrow-down-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-down"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</span>
			</button>

			<button
				type="button"
				id="collapse-read-more-btn"
				className={`flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 ${showReadMore ? '' : 'hidden'}`}
				data-e2e="collapse-btn"
				onClick={handleReadMoreToggle}
			>
				Collapse
				<span className="arrow-up-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-up"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<polyline points="6 15 12 9 18 15"></polyline>
					</svg>
				</span>
			</button>
		</Card>
	);
};

export default About;

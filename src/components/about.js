import React, { useState, useRef, useEffect } from 'react';
import Card from './card';
import CardHeading from './card-heading';
import data from '../data.json';

const About = () => {
	const { about } = data?.content || {};
	const readMoreContentRef = useRef(null);
	const hasInteractedWithReadMoreBtn = useRef(false);
	const [showReadMore, setShowReadMore] = useState(false);

	const handleReadMoreToggle = () => {
		hasInteractedWithReadMoreBtn.current = true;
		setShowReadMore((showReadMore) => !showReadMore);
	};

	const scrollIntoView = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		} else {
			ref.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	useEffect(() => {
		if (!hasInteractedWithReadMoreBtn.current) return;
		if (showReadMore) scrollIntoView(readMoreContentRef);
		else scrollIntoView(document.getElementById('about'));
	}, [showReadMore]);

	return (
		<Card id="about" className="about-card bg-red-100 card" data-e2e="about">
			<CardHeading>{about.header}</CardHeading>

			<div
				id="focus-content"
				className="transition ease-in-out"
				data-e2e="focus-content"
			>
				<div className="text-base">
					{about.mainContent.map((mainContentItem, idx) => (
						<div key={idx}>
							{mainContentItem?.header && (
								<h3 className="font-semibold mt-3">{mainContentItem.header}</h3>
							)}
							{(mainContentItem?.paragraphs || []).map((paragraph) => (
								<p
									key={
										paragraph?.body?.length <= 10
											? paragraph?.body
											: paragraph?.body?.substr(0, 5) +
												paragraph?.body?.substr(paragraph.length - 5)
									}
									className="paragraph-content text-base text-gray-500 my-2"
									dangerouslySetInnerHTML={{ __html: paragraph?.body }}
								></p>
							))}
						</div>
					))}
				</div>
			</div>

			{showReadMore && (
				<div
					ref={readMoreContentRef}
					id="read-more-content"
					className="transition ease-in-out"
					data-e2e="read-more-content"
				>
					<div className="text-base">
						{about.secondaryContent.map((secondaryContentItem) => (
							<>
								<h3 className="font-semibold mt-3">
									{secondaryContentItem.header}
								</h3>
								{secondaryContentItem.paragraphs.map((paragraph) => (
									<p
										key={
											paragraph?.body?.length <= 10
												? paragraph?.body
												: paragraph?.body?.substr(0, 5) +
													paragraph?.body?.substr(paragraph?.body?.length - 5)
										}
										className="paragraph-content text-base text-gray-500 my-2"
										dangerouslySetInnerHTML={{ __html: paragraph?.body }}
									></p>
								))}
							</>
						))}
					</div>
				</div>
			)}

			<button
				type="button"
				id="read-more-btn"
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1 mt-4 ${showReadMore ? 'hidden' : ''}`}
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
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1 mt-4 ${showReadMore ? '' : 'hidden'}`}
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

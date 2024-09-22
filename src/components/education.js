import React from 'react';
import CardHeading from './card-heading';
import Card from './card';
import data from '../data.json';

const Education = () => {
	const { education } = data?.content || {};
	return (
		<Card
			id="education"
			className="bg-sky-100 education card"
			data-e2e="education"
		>
			<CardHeading>{education.header}</CardHeading>

			<ul className="education-list grid lg:grid-cols-2 gap-4 lg:grid-flow-row lg:items-stretch">
				{(education?.items || []).map((item, index) => (
					<li
						key={index}
						className="blog-item bg-gray-100 drop-shadow-lg transition ease-in-out duration-500 rounded-md"
					>
						<div className="p-4">
							<div className="flex space-x-2">
								<div className="flex flex-col flex-grow top-level-details">
									<h4 className="text-base font-semibold">
										{item.institution}
									</h4>
									<p className="text-sm text-gray-500">
										{item.duration && <span>{item.duration}</span>}
										{item.location && <span> | {item.location}</span>}
									</p>
									{item.description && (
										<p
											className="text-sm text-gray-500"
											dangerouslySetInnerHTML={{ __html: item.description }}
										/>
									)}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Education;

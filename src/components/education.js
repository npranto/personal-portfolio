import React from 'react';

const Education = ({ education }) => {
	return (
		<section
			id="education"
			className="bg-sky-100 education card"
			data-e2e="education"
		>
			<h2 className="card-heading">{education.header}</h2>

			<ul className="education-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row">
				{education.items.map((item, index) => (
					<li
						key={index}
						className="education-item bg-gray-100 drop-shadow-lg transition ease-in-out duration-500 my-3 rounded-md"
					>
						<div className="cursor-pointer p-4">
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
		</section>
	);
};

export default Education;

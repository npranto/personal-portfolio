import Image from 'next/image';
import CardHeading from './card-heading';
import Card from './card';

const Work = ({ work }) => {
	return (
		<Card id="work" className="bg-amber-100 work card" data-e2e="work">
			<CardHeading>{work.header}</CardHeading>

			<ul className="work-list">
				{work.items.map((item) => (
					<li
						key={item.id}
						className="work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md"
						data-e2e={`${item.id}-item`}
					>
						<input
							className="hidden"
							type="checkbox"
							id={`${item.id}-input`}
							name={`${item.id}-input`}
							value={`${item.id}-dropdown-content`}
						/>
						<label htmlFor={`${item.id}-input`}>
							<div className="cursor-pointer p-4">
								<div className="flex space-x-2">
									<div className="logo flex-shrink-0">
										<Image
											className="object-cover rounded-md"
											src={item.image.lg}
											alt={item.company}
											width={64}
											height={64}
										/>
									</div>
									<div className="flex flex-col flex-grow top-level-details">
										<h4 className="text-base font-semibold">{item.position}</h4>
										<p className="text-sm text-gray-500">
											{item.company}, {item.location}
										</p>
										<p className="text-sm text-gray-500">
											{item.duration} | {item.employmentType}
										</p>
									</div>
								</div>
								<div
									className="description-and-tech hidden"
									id={`${item.id}-dropdown-content`}
									data-e2e={`${item.id}-dropdown-content`}
								>
									<ul className="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6">
										{item.description.map((desc, index) => (
											<li key={index}>{desc}</li>
										))}
									</ul>
									<div className="technologies flex flex-wrap my-2 gap-2">
										{item.technologies.map((tech, index) => (
											<span
												key={index}
												className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</label>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Work;

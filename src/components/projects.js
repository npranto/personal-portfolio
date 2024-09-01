import React from 'react';

const Projects = ({ projects }) => {
	return (
		<section
			id="projects"
			className="bg-lime-100 projects card"
			data-e2e="projects"
		>
			<h2 className="card-heading">{projects.header}</h2>

			<ul className="projects-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row lg:items-stretch">
				{projects.items.map((item) => (
					<li
						key={item.id}
						className="project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md"
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
										<picture>
											<source
												srcSet={`${item.image.sm}?as=webp`}
												type="image/webp"
											/>
											<img
												width="48px"
												height="auto"
												className="object-cover rounded-md"
												src={item.image.sm}
												alt={item.name}
											/>
										</picture>
									</div>
									<div className="flex flex-col flex-grow top-level-details">
										<h4 className="text-base font-semibold">{item.name}</h4>
										<p className="text-sm text-gray-500">{item.duration}</p>
									</div>
									<div className="resources flex space-x-2">
										{item.github && (
											<a
												href={item.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="github-icon transition ease-in-out hover:-translate-y-1">
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
											</a>
										)}
										{item.demo && (
											<a
												href={item.demo}
												target="_blank"
												rel="noopener noreferrer"
											>
												<span className="share-icon transition ease-in-out hover:-translate-y-1">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="icon icon-tabler icon-tabler-screen-share"
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
														<path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
														<line x1="7" y1="20" x2="17" y2="20" />
														<line x1="9" y1="16" x2="9" y2="20" />
														<line x1="15" y1="16" x2="15" y2="20" />
														<path d="M17 4h4v4" />
														<path d="M16 9l5 -5" />
													</svg>
												</span>
											</a>
										)}
									</div>
								</div>
								<div
									className="description-and-tech mt-2 space-y-2 text-sm text-gray-500 hidden"
									id={`${item.id}-dropdown-content`}
								>
									<div dangerouslySetInnerHTML={{ __html: item.description }} />

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
		</section>
	);
};

export default Projects;

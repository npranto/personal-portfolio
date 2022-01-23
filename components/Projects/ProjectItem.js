import { useState } from 'react';
import Button from '../shared/Button';
import Header from '../shared/Header';
import { GitHubIcon, PackageIcon, ShareIcon } from '../shared/Icon';
import Logo from '../shared/Logo';
import Tag from '../shared/Tag';
import Text from '../shared/Text';

export default function ListItem({
	logo = '',
	projectName = '',
	startAndEndDate = '',
	sourceCodeUrl = '',
	demoUrl = '',
	npmUrl = '',
	description = [],
	technologies = [],
}) {
	const [showDesc, setShowDesc] = useState(false);
	const toggleShowDesc = () => setShowDesc((prevState) => !prevState);

	return (
		<li className="project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
			<Button
				variant={5}
				type="button"
				className="w-full"
				onClick={toggleShowDesc}
			>
				<div className="cursor-pointer p-4 text-left">
					<div className="flex space-x-2">
						<Logo logo={logo} alt={projectName} />
						<div className="flex flex-col flex-grow top-level-details">
							<Header variant={5}>{projectName}</Header>
							<Text variant={2}>{startAndEndDate}</Text>
						</div>
						<div className="resources flex space-x-2">
							{sourceCodeUrl && (
								<Button
									variant={3}
									href={sourceCodeUrl}
									target="_blank"
									rel="noreferrer"
									className="transition ease-in-out hover:-translate-y-1"
								>
									<span className="github-icon transition ease-in-out hover:-translate-y-1">
										<GitHubIcon />
									</span>
								</Button>
							)}

							{demoUrl && (
								<Button
									variant={3}
									href={demoUrl}
									target="_blank"
									rel="noreferrer"
								>
									<span className="share-icon transition ease-in-out hover:-translate-y-1">
										<ShareIcon />
									</span>
								</Button>
							)}

							{npmUrl && (
								<Button
									variant={3}
									href={npmUrl}
									target="_blank"
									rel="noreferrer"
								>
									<span className="package-icon transition ease-in-out hover:-translate-y-1">
										<PackageIcon />
									</span>
								</Button>
							)}
						</div>
					</div>

					{showDesc && (
						<div className="description-and-tech mt-2 space-y-2 text-sm text-gray-500">
							{description}

							<div className="technologies flex flex-wrap my-2 gap-2">
								{technologies.map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
						</div>
					)}
				</div>
			</Button>
		</li>
	);
}

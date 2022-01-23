import { useState } from 'react';
import Button from '../shared/Button';
import Header from '../shared/Header';
import Logo from '../shared/Logo';
import Tag from '../shared/Tag';
import Text from '../shared/Text';

export default function ListItem({
	listId = '',
	itemId = '',
	logo = { sm: '', lg: '' },
	position = '',
	companyName = '',
	companyLocation = '',
	startAndEndDate = '',
	employmentType = '',
	description = [],
	technologies = [],
}) {
	const { sm, lg } = logo;

	const [showDesc, setShowDesc] = useState(false);

	const toggleShowDesc = () => setShowDesc((prevState) => !prevState);

	return (
		<li
			className={`${listId}-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md`}
			data-e2e={`${itemId}-item`}
		>
			<Button variant={5} onClick={toggleShowDesc} className="w-full">
				<div className="cursor-pointer p-4 text-left">
					<div className="flex space-x-2">
						<Logo logo={{ sm, lg }} alt={companyName} />

						<div className="flex flex-col flex-grow top-level-details">
							<Header variant={5}>{position}</Header>
							<Text variant={2}>
								{companyName}, {companyLocation && `, ${companyLocation}`}
							</Text>
							<Text variant={2}>
								{startAndEndDate && startAndEndDate}
								{employmentType && `| ${employmentType}`}
							</Text>
						</div>
					</div>

					{showDesc && (
						<div
							className="description-and-tech"
							id={`${itemId}-dropdown-content`}
							data-e2e={`${itemId}-dropdown-content`}
						>
							<ul className="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6">
								{description.map((desc) => (
									<li
										key={desc}
										// eslint-disable-next-line react/no-danger
										dangerouslySetInnerHTML={{ __html: `${desc}` }}
									/>
								))}
							</ul>

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

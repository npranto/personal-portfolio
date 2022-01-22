import Header from '../Header';
import Text from '../Text';

export default function EducationItem({
	institution = '',
	location = '',
	startAndEndDate = '',
	description = '',
}) {
	return (
		<li className="education-item bg-gray-100 drop-shadow-lg transition ease-in-out duration-500 my-3 rounded-md">
			<div className="cursor-pointer p-4">
				<div className="flex space-x-2">
					<div className="flex flex-col flex-grow top-level-details">
						<Header variant={5}>{institution}</Header>
						<Text variant={2}>
							{startAndEndDate} {location && `| ${location}`}
						</Text>
						<Text variant={2}>{description}</Text>
					</div>
				</div>
			</div>
		</li>
	);
}

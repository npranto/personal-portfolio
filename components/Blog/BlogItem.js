import Header from '../Header';
import Text from '../Text';

export default function BlogItem({ href, title, published }) {
	return (
		<li className="blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
			<a
				href={href}
				target="_blank"
				className="text-indigo-600 hover:text-indigo-500"
				rel="noreferrer"
			>
				<div className="cursor-pointer p-4">
					<div className="flex space-x-2">
						<div className="flex flex-col flex-grow top-level-details">
							<Header variant={6}>{title}</Header>
							<Text variant={2}>Published on {published}</Text>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
}

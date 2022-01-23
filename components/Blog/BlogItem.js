import Button from '../shared/Button';
import Header from '../shared/Header';
import Text from '../shared/Text';

export default function BlogItem({ href, title, published }) {
	return (
		<li className="blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
			<Button variant={9} href={href} target="_blank" rel="noreferrer">
				<div className="cursor-pointer p-4">
					<div className="flex space-x-2">
						<div className="flex flex-col flex-grow top-level-details">
							<Header variant={6}>{title}</Header>
							<Text variant={2}>Published on {published}</Text>
						</div>
					</div>
				</div>
			</Button>
		</li>
	);
}

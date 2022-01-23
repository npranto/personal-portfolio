import { useState } from 'react';
import Button from '../shared/Button';
import Header from '../shared/Header';
import { ArrowDownIcon, ArrowUpIcon } from '../shared/Icon';
import Section from '../shared/Section';
import Text from '../shared/Text';
import ReadMoreContent from './ReadMoreContent';

export default function About() {
	const [showReadMore, setShowReadMore] = useState(false);

	const toggleShowReadMore = () => setShowReadMore((prevState) => !prevState);

	return (
		<Section
			id="about"
			className="bg-red-100 rounded-lg about py-10 px-4"
			data-e2e="about"
		>
			<Header className="my-2" variant={3}>
				About
			</Header>

			<Text className="my-2">
				I am Nazmuz (Shakib) Pranto, a front-end engineer with hands-on
				experience building single and multi-page web applications. I’m
				passionate about crafting clean, responsive, reusable user interfaces
				with modern technologies including
				<span> </span>
				<a
					href="https://reactjs.org/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					React
				</a>
				,<span> </span>
				<a
					href="https://redux.js.org/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Redux
				</a>
				, and <span> </span>
				<a
					href="https://nextjs.org/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Next.js
				</a>
				. I also love creating products that serve instant value to customers.
			</Text>

			<Text className="my-2">
				Over the past few years, I had the honor of helping build a highly
				customizable eCommerce platform as an engineer at Newfold Digital. This,
				in return, accelerated development time and feature delivery for
				multiple client-side teams within the organization. On the side, I also
				built and published mini utility libraries and APIs using
				<span> </span>
				<a
					href="https://nodejs.org/en/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Node.js
				</a>
				<span> </span>
				for external use.
			</Text>

			<Text className="my-2">
				Currently, I am learning techniques to better architect client-side
				applications to deliver more performant, reliable applications. So, if
				you are looking for a front-end focused developer who can take on a
				project to improve developer experience, create dynamic user interfaces,
				and collaborate effectively to turn a product into reality,
				<span> </span>
				<a href="#contact" className="text-indigo-600 hover:text-indigo-500">
					let’s stay in touch!
				</a>
			</Text>

			{showReadMore && <ReadMoreContent />}

			{!showReadMore && (
				<Button
					variant={2}
					id="read-more-btn"
					data-e2e="read-more-btn"
					onClick={toggleShowReadMore}
				>
					Read more
					<span className="arrow-down-icon">
						<ArrowDownIcon />
					</span>
				</Button>
			)}

			{showReadMore && (
				<Button
					variant={2}
					id="collapse-read-more-btn"
					data-e2e="collapse-btn"
					onClick={toggleShowReadMore}
				>
					Collapse
					<span className="arrow-up-icon">
						<ArrowUpIcon />
					</span>
				</Button>
			)}
		</Section>
	);
}

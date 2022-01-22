import { useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons';
import Section from '../Section';
import Text from '../Text';

function ReadMoreContent() {
	return (
		<div
			id="read-more-content"
			className="transition ease-in-out"
			data-e2e="read-more-content"
		>
			<Header className="mt-3" variant={4}>
				My Journey
			</Header>
			<Text className="my-2">
				I started my journey to web development during my first year of college
				as a Computer Science student. I was learning HTML and CSS for the very
				first time, not through a college course though, but on an online
				learning platform called -
				<a
					href="https://www.codecademy.com/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Codeacademy
				</a>
				. I found that to be way more fun and practical than the college courses
				I was taking back then. Thus, I continued with it and pushed to learn
				even more on the side. Eventually, I fell in love with it so much that I
				took the risk of taking time off from college and fully dedicated my
				time to a software engineering immersive program called
				<a
					href="https://devmountain.com/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					DevMountain
				</a>
				.
			</Text>
			<Text className="my-2">
				I always believed that I was a go-getter who loves taking risks to
				improve and get better progressively. That's why I pursued an
				alternative track to higher education. While I understand the importance
				of traditional computer science education with a heavy theoretical
				learning approach, I don't think it's enough for diving into real-world
				problems in the most effective way. We need more hands-on, practical,
				project-based learning, where learning to code is acquired from a series
				of trials and mistakes. As a DevMountain scholar, I have learned to do
				exactly that and have taken that lesson to heart till today.
			</Text>
			<Text className="my-2">
				Since my exposure to DevMountain, I have taken on a junior role at
				<a
					href="https://www.lexialearning.com/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Lexia Learning
				</a>
				to a full-time Software Engineer gig at
				<a
					href="https://newfold.com/"
					target="_blank"
					className="text-indigo-600 hover:text-indigo-500"
					rel="noreferrer"
				>
					Newfold Digital
				</a>
				, working on enterprise-level applications used by millions of customers
				and internal teams.
			</Text>

			<Header className="mt-3" variant={4}>
				Future Ambitions
			</Header>
			<Text className="my-2">
				Of course, I still have a long way to go and I am working on getting
				better one day at a time. For now, I plan to actively contribute the
				skills I have acquired till now on my next role and learn modern,
				industry-proven techniques and best practices from both experienced and
				newbie developers to be a more well-rounded senior engineer and a
				mentor.
			</Text>
		</div>
	);
}

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

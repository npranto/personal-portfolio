import Header from '../shared/Header';
import Text from '../shared/Text';

export default function ReadMoreContent() {
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

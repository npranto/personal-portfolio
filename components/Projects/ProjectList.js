import ProjectItem from './ProjectItem';

export default function ProjectList({ className = '' }) {
	return (
		<ul className={className}>
			<ProjectItem
				listId="projects"
				itemId="portfolio-v2"
				logo="/assets/images/portfolio-v2-logo-48.png"
				projectName="Portfolio v2.0.0"
				startAndEndDate="Jan 2022"
				sourceCodeUrl="https://github.com/npranto/personal-portfolio"
				demoUrl="https://npranto.dev/"
				description={
					<>
						<p>
							A static personal portfolio website to showcase projects, work
							experiences, and blogs.
						</p>
						<p>
							<span className="font-semibold">Motivation:</span>
							It's been almost 3 years since I have launched
							<a
								className="text-indigo-600 hover:text-indigo-500"
								href="https://nsp.surge.sh/"
							>
								v1.0.0
							</a>
							of my personal portfolio site. At that time, I was heavily
							involved with building single-page applications w/ React. So, even
							for a simple static website like a portfolio, I went overboard and
							built it as a SPA. Looking back at it, I realized there was no
							need to complicate building static websites. That can be achieved
							pretty easily with a few HTML, CSS, and JavaScript files. Thus, I
							decided to redesign the UI and keep the architecture simple to
							make future updates easy and more manageable. Unlike v1.0.0, I
							also added end-to-end UI testing with Cypress and also set up a
							CI/CD pipeline with GitHub Actions to automate tests and
							deployment on code changes.
						</p>
					</>
				}
				technologies={[
					'HTML',
					'CSS',
					'JavaScript',
					'TailwindCSS',
					'Parcel',
					'Cypress',
					'Netlify',
					'ESLint',
					'Prettier',
					'GitHub Actions',
				]}
			/>
			<ProjectItem
				listId="projects"
				itemId="logtrade"
				logo="/assets/images/logtrade-logo-48.png"
				projectName="LogTrade"
				startAndEndDate="Oct 2021 - Present"
				sourceCodeUrl="https://github.com/npranto/logtrade"
				demoUrl="https://logtrade.netlify.app/home/"
				description={
					<>
						<p>
							A personal journal for keeping track of all your trades online.
						</p>
						<p>
							<span className="font-semibold">Motivation:</span> A friend
							reached out to me to ask for an application that he wants to use
							to log daily stock trades. I found the idea fairly simple to
							implement as it seemed very similar to any other note or record
							tracking software. Thus, I felt the need to jump on it right away.
							I didn't want to spend too much time building out the entire
							application, specially handling APIs and databases, so I decided
							to go with a firebase database to store stock trades on the
							backend. As for user authentication, firebase authentication also
							came in handy as well. This way, I was able to focus more on the
							client side and build a responsive, playful UI with React
						</p>
						<p>
							<span className="font-semibold">Future Plans:</span> As of October
							17, 2021, LogTrade
							<a
								className="text-indigo-600 hover:text-indigo-500"
								href="https://github.com/npranto/logtrade/releases/tag/v1.0.0"
							>
								v1.0.0
							</a>
							is
							<a
								className="text-indigo-600 hover:text-indigo-500"
								href="https://616ccd47646645000896e7cb--logtrade.netlify.app/home/"
							>
								live
							</a>
							in production. More potential bug-fixes and feature enhancements
							will be added pretty soon. Also, I do have plans to release v2.0.0
							early to mid 2022.
						</p>
					</>
				}
				technologies={[
					'React',
					'Tailwind CSS',
					'Webpack',
					'Firebase',
					'Netlify',
				]}
			/>
			<ProjectItem
				listId="projects"
				itemId="regexer"
				logo="/assets/images/regexer-logo-48.png"
				projectName="Regexer"
				startAndEndDate="Jul 2018 - Present"
				sourceCodeUrl="https://github.com/npranto/regexer"
				npmUrl="https://www.npmjs.com/package/nsp-regexer"
				description={
					<>
						<p>
							An utility library of functions that leverage regular expressions
							to validate different types of inputs
						</p>
						<p>
							<span className="font-semibold">Motivation:</span> Using regexes
							is very common for developers to validate inputs like email, zip
							code, or credit card number. I wanted to build a small utility
							library to verify many different types of inputs with regexes, so
							I never have to reach out to google to find the same, trustworthy
							regex every time. Currently, I do not have an exhaustive list of
							all the regexes there are, but I have plans to add more and more
							over time. Regexer is a node package that can be installed for
							both server side and client side use.
						</p>
					</>
				}
				technologies={['Node.js', 'ESLint', 'Mocha', 'Semantic Release']}
			/>
		</ul>
	);
}

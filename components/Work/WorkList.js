import ListItem from './WorkItem';

export default function WorkList({ className = '' }) {
	return (
		<ul className={className}>
			<ListItem
				listId="work"
				itemId="newfold"
				logo={{
					sm: '/assets/images/newfold-logo-48.jpeg',
					lg: '/assets/images/newfold-logo-64.jpeg',
				}}
				position="Software Engineer"
				companyName="Newfold Digital"
				companyLocation="Burlington, MA"
				startAndEndDate="Jul 2018 - Jul 2021"
				employmentType="Full-time"
				description={[
					`Built and maintained robust, reusable e-commerce based
						UI components using React and Redux to ease feature
						development for multiple internal teams`,

					`Added over 50+ bug-fixes and features along with unit
						tests to enhance and improve existing single page
						application (SPA) for customer registration and
						checkout`,

					`Frequently collaborated with internal front and
						backend services teams to integrate new products and
						payment gateways`,

					`Integrated Contentful, a headless CMS, to prefetch
						product contents for better client-side performance
						and to enable marketing teams to make custom content
						changes without code releases`,

					`Worked on a fast-paced agile environment with multiple
						releases per sprint basis`,
				]}
				technologies={[
					'React',
					'Redux',
					'Sass',
					'Webpack',
					'Contentful',
					'Node.js',
					'Git',
					'JIRA',
				]}
			/>
			<ListItem
				listId="work"
				itemId="lexia"
				logo={{
					sm: '/assets/images/lexia-logo-48.jpeg',
					lg: '/assets/images/lexia-logo-64.jpeg',
				}}
				position="Software Engineer"
				companyName="Lexia Learning"
				companyLocation="Concord, MA"
				startAndEndDate="Sep - Dec 2016 & Jun - Aug 2017"
				employmentType="Contract"
				description={[
					`Built 20+ JSON schemas to validate and structure
  					large, nested JSON objects, or lesson tasks for
  					production-level reading software program`,

					`Written various JavaScript functions or snippets to
  					automate JSON file modifications to simplify and speed
  					up application content updates`,
				]}
				technologies={['JavaScript', 'JSON Schema', 'Git']}
			/>
		</ul>
	);
}

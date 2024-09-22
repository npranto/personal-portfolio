import 'dotenv/config';
import chalk from 'chalk';
import { ContentfulService } from '../../services/contentful/index.mjs';
import { CrawlerService } from '../../services/crawler/index.mjs';

export const fetchPortfolioContent = async () => {
	console.log(
		'👉🏼',
		chalk.bgWhite.black('Fetching Content from Contentful and Crawler')
	);

	const { getPortfolioCore } = ContentfulService();
	const { getBlogPosts, getVideoPosts } = CrawlerService();

	const [
		{ data: core } = {},
		{ posts: crawledBlogPosts } = {},
		{ posts: crawledVideoPosts } = {},
	] = await Promise.all([getPortfolioCore(), getBlogPosts(), getVideoPosts()]);

	if (!core || !crawledBlogPosts || !crawledVideoPosts) {
		console.log(`❌ Status: ${chalk.red.bold('Failed')} 💥`);
		console.error(
			chalk.dim('Failed to fetch content from Contentful and Crawler')
		);
		return;
	}

	const allContent = {
		config: {
			theme: core?.theme || 'Simple',
			showAbout: core?.showAbout || true,
			showWork: core?.showWork || true,
			showProjects: core?.showProjects || true,
			showBlog: core?.showBlog || true,
			showVideos: core?.showVideos || true,
			showEducation: core?.showEducation || true,
			showContact: core?.showContact || true,
		},
		content: {
			about: core?.about || {},
			work: core?.work || [],
			projects: core?.projects || [],
			education: core?.education || [],
			profile: core?.profile || {},
			nav: core?.nav || [],
			socials: core?.socials || [],
			blog: {
				...(core?.blog || {}),
				posts:
					(core?.blog?.useCrawler ? crawledBlogPosts : core?.blog?.posts) || [],
			},
			videos: {
				...(core?.videos || {}),
				posts:
					(core?.videos?.useCrawler
						? crawledVideoPosts
						: core?.videos?.posts) || [],
			},
		},
	};

	console.log(chalk.dim(JSON.stringify(allContent, null, 2)));
	console.log(`✅ Status: ${chalk.green.bold('Passed')} 🎉`);
	return allContent;
};

import 'dotenv/config';
import { ContentfulService } from '../services/contentful/index.mjs';
import { CrawlerService } from '../services/crawler/index.mjs';
import { writeToFile } from './writeToFile.mjs';

export const fetchPortfolioContent = async () => {
	const { getPortfolioCore } = ContentfulService();
	const { getBlogPosts, getVideoPosts } = CrawlerService();

	const [{ data: core }, { posts: blog }, { posts: videos }] =
		await Promise.all([getPortfolioCore(), getBlogPosts(), getVideoPosts()]);

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
			blog: blog || [],
			videos: videos || [],
		},
	};

	console.log('allContent:', JSON.stringify(allContent, null, 2));
	// writeToFile('../data.json', JSON.stringify(allData, null, 2));

	return allContent;
};

(async () => {
	const allContent = await fetchPortfolioContent();
	await writeToFile('../xxx.json', JSON.stringify(allContent, null, 2));
})();

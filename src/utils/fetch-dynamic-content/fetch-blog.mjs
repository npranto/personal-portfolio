import chalk from 'chalk';
import { crawlBlogPosts } from '../crawlBlogPosts.mjs';

export const fetchBlogContent = async () => {
	return crawlBlogPosts().then((posts) => {
		console.log(chalk.green(JSON.stringify({ posts }, null, 2)));
		return { posts };
	});
};

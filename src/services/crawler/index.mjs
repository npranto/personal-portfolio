import { crawlBlogPosts } from './crawlBlogPosts.mjs';
import { crawlVideoPosts } from './crawlVideoPosts.mjs';
import { CRAWLER_BLOG_URL, CRAWLER_VIDEOS_URL } from '../../config/index.mjs';

export const CrawlerService = () => {
	return {
		getBlogPosts: async () =>
			await crawlBlogPosts({ blogUrl: CRAWLER_BLOG_URL }),
		getVideoPosts: async () =>
			await crawlVideoPosts({ videosUrl: CRAWLER_VIDEOS_URL }),
	};
};

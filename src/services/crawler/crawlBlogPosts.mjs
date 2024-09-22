import puppeteer from 'puppeteer';

export const crawlBlogPosts = async ({ blogUrl = '' } = {}) => {
	if (!blogUrl || typeof blogUrl !== 'string' || blogUrl.trim().length === 0)
		return { posts: [] };

	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(blogUrl, {
			waitUntil: 'networkidle2',
		});

		const posts = await page.evaluate(() => {
			const formatPostInfo = ({ href = '', title = '', publishedOn = '' }) => ({
				href: `https://dev.to${href.trim()}`,
				title: title.trim(),
				publishedOn: (() => {
					const splitDate = publishedOn?.split(',');
					const monthAndDate = splitDate[splitDate.length - 3]?.trim();
					const year = splitDate[splitDate.length - 2]?.trim();
					return `${monthAndDate}, ${year}`?.trim();
				})(),
			});

			// extract out all the blog post stories
			const stories = [
				...document.querySelectorAll('#substories .crayons-story'),
			];

			return (
				stories
					// extract out all the meta data - post title, link and date published
					.map((story) => {
						const href = story?.querySelector('a')?.getAttribute('href') || '';
						const title = story?.querySelector('a')?.innerText || '';
						const publishedOn =
							story
								?.querySelector('.crayons-story__meta a > time')
								?.getAttribute('title') || '';
						return { href, title, publishedOn };
					})
					// formats metadata
					.map(({ href, title, publishedOn }) =>
						formatPostInfo({ href, title, publishedOn })
					)
			);
		});
		await browser.close();
		return { posts: posts || [] };
	} catch (error) {
		console.error('Error crawling blog posts', error.message);
		return { posts: [] };
	}
};

import puppeteer from 'puppeteer';

export const crawlBlogPosts = async (blogUrl = '') => {
  if (!blogUrl || typeof blogUrl !== 'string' || blogUrl.trim().length === 0)
    return { posts: [] };

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(blogUrl, {
      waitUntil: 'networkidle2',
    });

    const posts = await page.evaluate(() => {
      const formatPostInfo = ({
        link = '',
        title = '',
        uploadedTime = '',
      }) => ({
        link: `${link.trim()}`,
        title: title.trim(),
        uploadedTime: (() => {
          const regex = /\b([A-Za-z]+ \d{1,2}, \d{4})\b/;
          const match = uploadedTime.match(regex);
          return match ? `${match[0]}` : '';
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
            const link = story?.querySelector('a')?.getAttribute('href') || '';
            const title = story?.querySelector('a')?.innerText || '';
            const uploadedTime =
              story
                ?.querySelector('.crayons-story__meta a > time')
                ?.getAttribute('title') || '';
            return { link, title, uploadedTime };
          })
          // formats metadata
          .map(({ link, title, uploadedTime }) =>
            formatPostInfo({ link, title, uploadedTime })
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

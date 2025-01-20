import puppeteer from 'puppeteer';

export const crawlVideoPosts = async (videosUrl = '') => {
  if (
    !videosUrl ||
    typeof videosUrl !== 'string' ||
    videosUrl.trim().length === 0
  )
    return { posts: [] };

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(videosUrl, {
      waitUntil: 'networkidle2',
    });

    const posts = await page.evaluate(() => {
      const videos =
        document.querySelectorAll(
          'ytd-two-column-browse-results-renderer #contents ytd-rich-item-renderer'
        ) || [];

      return [...videos].map((video) => {
        const title = video.querySelector('#video-title')?.innerText || '';
        const link = video.querySelector('#video-title-link')?.href || '';
        const uploadedTime =
          [
            ...video.querySelectorAll(
              '.inline-metadata-item.ytd-video-meta-block'
            ),
          ]?.pop()?.innerText || '';
        return {
          title,
          link,
          uploadedTime,
        };
      });
    });
    await browser.close();
    return { posts: posts || [] };
  } catch (error) {
    console.error('Error crawling video posts', error.message);
    return { posts: [] };
  }
};

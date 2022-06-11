/* eslint-disable import/no-extraneous-dependencies */
const puppeteer = require('puppeteer');
const chalk = require('chalk');
const { USE_CACHE } = require('./cache/config');
const useCache = require('./cache/useCache');

const { getEntryFromCache, saveEntryToCache } = useCache();

const fetchBlogPosts = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://dev.to/npranto', {
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
  return posts;
};

const getBlogPosts = async () => {
  if (USE_CACHE) {
    console.log(chalk.cyan('>>> USING CACHE'));

    // get entry from cache
    const cacheEntry = getEntryFromCache('blog');
    // if entry does not exist in cache, fetch it
    if (cacheEntry === null) {
      console.log(chalk.dim('>>> Entry missing in cache, refetching'));
      const posts = await fetchBlogPosts();
      saveEntryToCache('blog', posts);
      return posts;
    }
    // else, return the cache entry
    return cacheEntry;
  }
  return fetchBlogPosts();
};

module.exports = getBlogPosts;

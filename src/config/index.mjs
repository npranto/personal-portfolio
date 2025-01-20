import dotenv from 'dotenv';
dotenv.config();

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CRAWLER_BLOG_URL = process.env.CRAWLER_BLOG_URL;
const CRAWLER_VIDEOS_URL = process.env.CRAWLER_VIDEOS_URL;

export { GTM_ID, CRAWLER_BLOG_URL, CRAWLER_VIDEOS_URL };

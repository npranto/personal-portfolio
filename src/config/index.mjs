import dotenv from 'dotenv';
dotenv.config();

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const BLOG_API_URL = process.env.BLOG_API_URL;
const VIDEOS_API_URL = process.env.VIDEOS_API_URL;

export { GTM_ID, BLOG_API_URL, VIDEOS_API_URL };

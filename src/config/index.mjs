import dotenv from 'dotenv';
dotenv.config();

const BLOG_API_URL = process.env.BLOG_API_URL;
const VIDEOS_API_URL = process.env.VIDEOS_API_URL;

export { BLOG_API_URL, VIDEOS_API_URL };

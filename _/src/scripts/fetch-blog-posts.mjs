import { BLOG_API_URL } from '../config/index.mjs';
import { crawlBlogPosts } from '../utils/crawlBlogPosts.mjs';
import { writeToFile } from '../utils/writeToFile.mjs';

const fetchBlogPosts = async () => {
  console.log('=============================');
  console.log('START >>> Fetching blog posts');
  console.log('=============================');

  try {
    console.log('Blog API URL: ', BLOG_API_URL);
    const { posts } = await crawlBlogPosts(BLOG_API_URL);
    console.log('All blog posts: ');
    console.log(JSON.stringify({ posts }, null, 2));
    const filePath = './src/content/blog-posts.json';
    console.log(`Saving all blog posts to: [${filePath}]`);
    await writeToFile(filePath, JSON.stringify({ posts }, null, 2));
    console.log('All blog posts saved successfully 🎉');
  } catch (error) {
    console.error(
      'Oops! Something went wrong while fetching or saving blog posts',
      error
    );
  }
  console.log('===========================');
  console.log('END >>> Fetching blog posts');
  console.log('===========================');
};

fetchBlogPosts();

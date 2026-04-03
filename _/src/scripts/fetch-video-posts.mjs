import { VIDEOS_API_URL } from '../config/index.mjs';
import { crawlVideoPosts } from '../utils/crawlVideoPosts.mjs';
import { writeToFile } from '../utils/writeToFile.mjs';

const fetchVideoPosts = async () => {
  console.log('=============================');
  console.log('START >>> Fetching video posts');
  console.log('=============================');

  try {
    console.log('Videos API URL: ');
    const { posts } = await crawlVideoPosts(VIDEOS_API_URL);
    console.log('All video posts: ');
    console.log(JSON.stringify({ posts }, null, 2));
    const filePath = './src/content/video-posts.json';
    console.log(`Saving all video posts to: [${filePath}]`);
    await writeToFile(filePath, JSON.stringify({ posts }, null, 2));
    console.log('All video posts saved successfully 🎉');
  } catch (error) {
    console.error(
      'Oops! Something went wrong while fetching or saving video posts',
      error
    );
  }
  console.log('===========================');
  console.log('END >>> Fetching video posts');
  console.log('===========================');
};

fetchVideoPosts();

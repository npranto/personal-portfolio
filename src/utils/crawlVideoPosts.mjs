const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const generateVideoLink = (videoId) => {
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : '';
};

export const crawlVideoPosts = async (videosUrl = '') => {
  console.log('videosUrl', videosUrl);
  if (
    !videosUrl ||
    typeof videosUrl !== 'string' ||
    videosUrl.trim().length === 0
  )
    return { posts: [] };

  try {
    const response = await fetch(videosUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch video posts: ${response.status}`);
    }
    const data = await response.json();
    const videos = (data?.items || []).map((item) => ({
      videoId: item?.id?.videoId || '',
      title: item?.snippet?.title || '',
      description: item?.snippet?.description || '',
      publishedAt: item?.snippet?.publishedAt
        ? formatDate(item.snippet.publishedAt)
        : '',
      thumbnail: item?.snippet?.thumbnails?.default?.url || '',
      link: item?.id?.videoId ? generateVideoLink(item?.id?.videoId) : '',
    }));
    return { posts: videos || [] };
  } catch (error) {
    console.error('Error fetching video posts', error.message);
    return { posts: [] };
  }
};

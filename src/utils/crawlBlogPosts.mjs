export const crawlBlogPosts = async (blogUrl = '') => {
  if (!blogUrl || typeof blogUrl !== 'string' || blogUrl.trim().length === 0)
    return { posts: [] };

  try {
    const response = await fetch(blogUrl);
    if (!response.ok)
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    const articles = await response.json();
    const posts = articles.map(
      ({
        url,
        title,
        readable_publish_date,
        cover_image,
        description,
        tag_list,
      }) => ({
        link: url,
        title: title.trim(),
        uploadedTime: readable_publish_date,
        coverImage: cover_image || '',
        description: description.trim(),
        tags: tag_list || [],
      })
    );
    return { posts: posts || [] };
  } catch (error) {
    console.error('Error fetching blog posts:', error.message);
    return { posts: [] };
  }
};

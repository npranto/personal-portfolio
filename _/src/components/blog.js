import React, { useState, useRef } from 'react';
import CardHeading from './card-heading';
import Card from './card';
import BLOG_POSTS from '../content/blog-posts.json';

const MAX_POSTS_TO_SHOW = 10;

const Blog = () => {
  const posts = BLOG_POSTS?.posts || [];

  const [showAll, setShowAll] = useState(false);
  const blogRef = useRef(null);
  const showMoreRef = useRef(null);

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    setTimeout(() => {
      if (showAll) {
        blogRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        showMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!posts?.length) return null;

  const visiblePosts = showAll ? posts : posts.slice(0, MAX_POSTS_TO_SHOW);

  return (
    <Card
      id="blog"
      ref={blogRef}
      className="bg-green-100 blog card"
      data-e2e="blog"
    >
      <CardHeading>Blog</CardHeading>

      <ul className="blog-list grid lg:grid-cols-2 gap-4 lg:grid-flow-row lg:items-stretch">
        {visiblePosts.map((item, index) => (
          <li
            key={item?.link}
            className="blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 rounded-md"
            ref={index === MAX_POSTS_TO_SHOW ? showMoreRef : null}
          >
            <a
              href={item?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500"
            >
              <div className="cursor-pointer p-4">
                <div className="flex space-x-2">
                  <div className="flex flex-col flex-grow top-level-details gap-1">
                    <h4 className="text-lg font-semibold line-clamp-2 leading-6">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item?.uploadedTime}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {posts.length > MAX_POSTS_TO_SHOW && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            id="collapse-read-more-btn"
            className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1 mt-4`}
            data-e2e="collapse-btn"
            onClick={handleToggle}
          >
            {showAll ? 'Show Less' : 'Show More'}

            {!showAll ? (
              <span className="arrow-down-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            ) : (
              <span className="arrow-up-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="6 15 12 9 18 15"></polyline>
                </svg>
              </span>
            )}
          </button>
        </div>
      )}
    </Card>
  );
};

export default Blog;

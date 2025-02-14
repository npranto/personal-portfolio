import React, { Suspense, lazy } from 'react';
import CardHeading from './card-heading';
import Card from './card';
import VIDEO_POSTS from '../content/video-posts.json';

const Videos = () => {
  const posts = VIDEO_POSTS?.posts || [];

  if (!posts.length) return null;

  return (
    <Card id="videos" className="bg-orange-100 videos card" data-e2e="videos">
      <CardHeading>Videos</CardHeading>

      <ul className="videos-list grid lg:grid-cols-2 gap-4 lg:grid-flow-row lg:items-stretch">
        {(posts || []).map((item) => (
          <li
            key={item?.link}
            className={`blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 rounded-md`}
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
                    <p className="text-xs text-gray-400">{item?.publishedAt}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Videos;

import React, { useState, useRef } from 'react';
import Card from './card';
import CardHeading from './card-heading';
import ABOUT from '../content/about.json';

const MAX_CONTENT_TO_SHOW = 1;

const About = () => {
  const about = ABOUT?.about || {};

  const aboutRef = useRef(null);
  const moreContentRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);

  const handleToggle = () => {
    setShowReadMore((showReadMore) => !showReadMore);

    setTimeout(() => {
      if (showReadMore) {
        moreContentRef?.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const visibleContents = showReadMore
    ? about.content
    : about.content.slice(0, MAX_CONTENT_TO_SHOW);

  return (
    <Card
      id="about"
      ref={aboutRef}
      className="about-card bg-red-100 card"
      data-e2e="about"
    >
      <CardHeading>{about.header}</CardHeading>

      <div
        id="focus-content"
        className="transition ease-in-out"
        data-e2e="focus-content"
      >
        <div className="text-base">
          {visibleContents.map((contentItem, idx) => (
            <div key={idx}>
              {contentItem?.type === 'header' ? (
                <h3 className="font-semibold mt-3">{contentItem.body}</h3>
              ) : contentItem?.type === 'paragraph' ? (
                <p
                  key={contentItem?.body?.substr(0, 10)}
                  ref={idx === MAX_CONTENT_TO_SHOW ? moreContentRef : null}
                  className={`paragraph-content text-xs sm:text-sm leading-normal text-gray-500 my-2 ${showReadMore ? '' : ''}`}
                  dangerouslySetInnerHTML={{ __html: contentItem?.body }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        id="collapse-read-more-btn"
        className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1 mt-4`}
        data-e2e="collapse-btn"
        onClick={handleToggle}
      >
        {showReadMore ? 'Collapse' : 'Read More'}

        {!showReadMore ? (
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
    </Card>
  );
};

export default About;

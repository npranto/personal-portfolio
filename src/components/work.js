import { useState, useEffect } from 'react';
import Image from 'next/image';
import CardHeading from './card-heading';
import Card from './card';
import WORK from '../content/work.json';

const Work = () => {
  const work = WORK?.work || {};

  const [activeWorkItemId, setActiveWorkItemId] = useState(work.items[0].id);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    if (hasUserInteracted) {
      const activeItem = document.getElementById(`${activeWorkItemId}-item`);
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [activeWorkItemId, hasUserInteracted]);

  const handleItemClick = (itemId) => {
    setActiveWorkItemId(itemId);
    if (!hasUserInteracted) setHasUserInteracted(true);
  };

  return (
    <Card id="work" className="bg-amber-100 work card" data-e2e="work">
      <CardHeading>{work.header}</CardHeading>

      <ul className="work-list grid lg:grid-cols-1 gap-4 lg:grid-flow-row lg:items-stretch">
        {work.items.map((item) => (
          <li
            key={item.id}
            className={`project-item -mx-4 sm:-mx-0 bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 rounded-md ${activeWorkItemId === item.id ? 'bg-white drop-shadow-2xl' : ''}`}
            data-e2e={`${item.id}-item`}
            id={`${item.id}-item`}
          >
            <button
              onClick={() => handleItemClick(item.id)}
              className="text-left w-full h-full"
            >
              <div className="cursor-pointer p-4">
                <div className="flex space-x-2">
                  <div className="logo flex-shrink-0">
                    <Image
                      className="object-cover rounded-md"
                      src={item.image.lg}
                      alt={item.company}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col flex-grow top-level-details">
                    <h4 className="text-base font-semibold">{item.position}</h4>
                    <p className="text-sm text-gray-500">
                      {item.company}, {item.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.duration} | {item.employmentType}
                    </p>
                  </div>
                  {item.isCurrent && (
                    <span className="self-start px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-green-800">
                      Current
                    </span>
                  )}
                </div>

                <div
                  className={`description-and-tech overflow-hidden transition-all duration-500 ease-in-out ${
                    activeWorkItemId === item.id
                      ? 'h-auto opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                  id={`${item.id}-dropdown-content`}
                  data-e2e={`${item.id}-dropdown-content`}
                >
                  <ul className="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6">
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <div className="technologies flex flex-wrap my-2 gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Work;

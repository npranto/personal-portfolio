import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import { List, ListItem } from './List.js';
import EducationItem from './EducationItem.js';

export default function Education() {
  return `
    ${SectionLayout({
      id: 'education',
      className: 'bg-sky-100',
      content: `
        ${Header({ variant: 'h3', content: 'Education' })}

        ${List({
          className:
            'education-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row',
          content: `
            ${ListItem({
              className:
                'work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${EducationItem({
                  id: 'dev-mountain',
                  institution: 'DevMountain',
                  location: 'Dallas, TX',
                  duration: '2016',
                  description: 'Web Development Immersive Program',
                })}
              `,
            })}

            ${ListItem({
              className:
                'work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${EducationItem({
                  id: 'free-code-camp',
                  institution: 'freeCodeCamp',
                  duration: 'Jul 2015 - Present',
                  description: `
                    Certifications:
                    <a
                      class="text-indigo-600 hover:text-indigo-500"
                      href="https://www.freecodecamp.org/certification/npranto/responsive-web-design"
                      target="_blank"
                      class="underline"
                      >Responsive Web Design</a
                    >
                  `,
                })}
              `,
            })}
          `,
        })}
      `,
    })}
  `;
}

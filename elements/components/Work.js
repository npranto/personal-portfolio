import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import { List, ListItem } from './List.js';
import WorkItem from './WorkItem.js';

export default function Work() {
  return `
    ${SectionLayout({
      id: 'work',
      className: 'bg-amber-100',
      content: `
        ${Header({ variant: 'h3', content: 'Work' })}

        ${List({
          className: 'work-list',
          content: `
            ${ListItem({
              className:
                'work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${WorkItem({
                  id: 'lexia',
                  companyName: 'Lexia Learning',
                  companyLogo: '/assets/images/lexia-logo.jpeg',
                  companyLocation: 'Concord, MA',
                  title: 'Software Engineer',
                  employmentType: 'Contract',
                  employmentDuration: 'Sep - Dec 2016 & Jun - Aug 2017',
                  description: `
                    <li>
                      Built 20+ JSON schemas to validate and structure large,
                      nested JSON objects, or lesson tasks for production-level
                      reading software program
                    </li>
                    <li>
                      Written various JavaScript functions or snippets to
                      automate JSON file modifications to simplify and speed up
                      application content updates.
                    </li>
                  `,
                  technologies: ['JavaScript', 'JSON Schema', 'Git'],
                })}
              `,
            })}
            ${ListItem({
              className:
                'work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${WorkItem({
                  id: 'newfold',
                  companyName: 'Newfold Digital',
                  companyLogo: '/assets/images/newfold-logo.jpeg',
                  companyLocation: 'Burlington, MA',
                  title: 'Software Engineer',
                  employmentType: 'Full-time',
                  employmentDuration: 'Jul 2018 - Jul 2021',
                  description: `
                    <li>
                      Built and maintained robust, reusable e-commerce based UI
                      components using React and Redux to ease feature
                      development for multiple internal teams
                    </li>
                    <li>
                      Added over 50+ bug-fixes and features along with unit
                      tests to enhance and improve existing single page
                      application (SPA) for customer registration and checkout
                    </li>
                    <li>
                      Frequently collaborated with internal front and backend
                      services teams to integrate new products and payment
                      gateways
                    </li>
                    <li>
                      Integrated Contentful, a headless CMS, to prefetch product
                      contents for better client-side performance and to enable
                      marketing teams to make custom content changes without
                      code releases
                    </li>
                    <li>
                      Worked on a fast-paced agile environment with multiple
                      releases per sprint basis
                    </li>
                  `,
                  technologies: [
                    'React',
                    'Redux',
                    'Sass',
                    'Webpack',
                    'Contentful',
                    'Node.js',
                    'Git',
                    'JIRA',
                  ],
                })}
              `,
            })}
          `,
        })}
      `,
    })}
  `;
}

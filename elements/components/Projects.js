import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import { List, ListItem } from './List.js';
import ProjectItem from './ProjectItem.js';

export default function Projects() {
  return `
    ${SectionLayout({
      id: 'projects',
      className: 'bg-lime-100',
      content: `
        ${Header({ variant: 'h3', content: 'Projects' })}

        ${List({
          className:
            'projects-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row lg:items-baseline',
          content: `
            ${ListItem({
              className:
                'project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${ProjectItem({
                  id: 'logtrade',
                  projectName: 'LogTrade',
                  projectLogo: '/assets/images/logtrade-logo.png',
                  projectDuration: 'Oct 2021 - Present',
                  sourceCodeURL: 'https://github.com/npranto/logtrade',
                  demoURL: 'https://logtrade.netlify.app/home/',
                  description: `
                    <p>
                        A personal journal for keeping track of all your trades
                        online.
                    </p>
                    <p>
                      <span class="font-semibold">Motivation:</span> A friend
                      reached out to me to ask for an application that he wants to
                      use to log daily stock trades. I found the idea fairly
                      simple to implement as it seemed very similar to any other
                      note or record tracking software. Thus, I felt the need to
                      jump on it right away. I didn't want to spend too much time
                      building out the entire application, specially handling APIs
                      and databases, so I decided to go with a firebase database
                      to store stock trades on the backend. As for user
                      authentication, firebase authentication also came in handy
                      as well. This way, I was able to focus more on the client
                      side and build a responsive, playful UI with React
                    </p>
                    <p>
                      <span class="font-semibold">Future Plans:</span> As of
                      October 17, 2021, LogTrade
                      <a
                        class="text-indigo-600 hover:text-indigo-500"
                        href="https://github.com/npranto/logtrade/releases/tag/v1.0.0"
                        >v1.0.0</a
                      >
                      is
                      <a
                        class="text-indigo-600 hover:text-indigo-500"
                        href="https://616ccd47646645000896e7cb--logtrade.netlify.app/home/"
                        >live</a
                      >
                      in production. More potential bug-fixes and feature
                      enhancements will be added pretty soon. Also, I do have
                      plans to release v2.0.0 early to mid 2022.
                    </p>
                  `,
                  technologies: [
                    'React',
                    'Tailwind CSS',
                    'Webpack',
                    'Firebase',
                    'Netlify',
                  ],
                })}
              `,
            })}
            ${ListItem({
              className:
                'project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${ProjectItem({
                  id: 'regexer',
                  projectName: 'Regexer',
                  projectLogo: '/assets/images/logtrade-logo.png',
                  projectDuration: 'Sep - Dec 2016 & Jun - Aug 2017',
                  sourceCodeURL: 'https://github.com/npranto/regexer',
                  npmURL: 'https://www.npmjs.com/package/nsp-regexer',
                  description: `
                    <p>
                      An utility library of functions that leverage regular
                      expressions to validate different types of inputs
                    </p>
                    <p>
                      <span class="font-semibold">Motivation:</span> Using regexes
                      is very common for developers to validate inputs like email,
                      zip code, or credit card number. I wanted to build a small
                      utility library to verify many different types of inputs
                      with regexes, so I never have to reach out to google to find
                      the same, trustworthy regex every time. Currently, I do not
                      have an exhaustive list of all the regexes there are, but I
                      have plans to add more and more over time. Regexer is a node
                      package that can be installed for both server side and
                      client side use.
                    </p>
                  `,
                  technologies: [
                    'Node.js',
                    'ESLint',
                    'Mocha',
                    'Semantic Release',
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

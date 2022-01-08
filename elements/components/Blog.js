import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import { List, ListItem } from './List.js';
import BlogItem from './BlogItem.js';

export default function Blog() {
  return `
    ${SectionLayout({
      id: 'blog',
      className: 'bg-green-100',
      content: `
        ${Header({ variant: 'h3', content: 'Blog' })}

        ${List({
          className:
            'blog-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row',
          content: `            
            ${ListItem({
              className:
                'blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${BlogItem({
                  title: 'macOS Web Development Setup Guide',
                  href: 'https://medium.com/@npranto/macos-web-development-setup-guide-db229bcbb849',
                  publishedOn: 'December 8, 2021',
                })}
              `,
            })}
            ${ListItem({
              className:
                'blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md',
              content: `
                ${BlogItem({
                  title: 'Quick Bite: SSH Key',
                  href: 'https://dev.to/npranto/quick-bite-ssh-key-4llh',
                  publishedOn: 'December 4, 2021',
                })}
              `,
            })}
          `,
        })}
      `,
    })}
  `;
}

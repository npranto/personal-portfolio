import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import Link from './Link.js';
import { ArrowDownIcon, ArrowUpIcon } from './Icons.js';

export default function About({ summaryContent = '', readMoreContent = '' }) {
  return `
    ${SectionLayout({
      id: 'about',
      className: 'bg-red-100',
      content: `
        ${Header({ variant: 'h3', content: 'About' })}

        <div id="about-summary" class="text-base text-gray-500">
          ${summaryContent}
        </div>

        <div id="read-more-content" class="hidden transition ease-in-out">
          ${readMoreContent}
        </div>

        ${Link({
          type: 'button',
          id: 'read-more-btn',
          content: `
            Read more
            ${ArrowDownIcon()}
          `,
        })}

        ${Link({
          className: 'hidden',
          type: 'button',
          id: 'collapse-read-more-btn',
          content: `
            Collapse
            ${ArrowUpIcon()}
          `,
        })}
      `,
    })}
  `;
}

import SocialLinks from './SocialLinks.js';
import Tab from './Tab.js';

export default function MenuTabs({ id, className = '' }) {
  return `
    <div id="${id}" class="${className}">
      ${Tab({
        href: '#about',
        content: 'About',
      })}
      ${Tab({
        href: '#work',
        content: 'Work',
      })}
      ${Tab({
        href: '#projects',
        content: 'Projects',
      })}
      ${Tab({
        href: '#blog',
        content: 'Blog',
      })}
      ${Tab({
        href: '#education',
        content: 'Education',
      })}
      ${Tab({
        href: '#contact',
        content: 'Contact',
      })}
      ${SocialLinks()}
    </div>
  `;
}

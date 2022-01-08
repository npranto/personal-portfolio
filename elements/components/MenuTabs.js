import SocialLinks from './SocialLinks.js';
import Tab from './Tab.js';

export default function MenuTabs() {
  return `
    <div id="menu-tabs" class="flex overflow-x-auto space-x-2 px-4 py-4">
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

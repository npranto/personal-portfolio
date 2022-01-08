import Avatar from './Avatar.js';
import Header from './Header.js';
import MenuLinks from './MenuLinks.js';
import SocialLinks from './SocialLinks.js';
import Text from './Text.js';

export default function MenuSideBar({ id, className = '' }) {
  return `
    <section
      id="${id}"
      class="${className}"
    >
      ${Avatar({
        src: '/assets/images/profile-v3.png',
        alt: 'Profile Picture',
        size: 'LG',
      })} 

      ${Header({ variant: 'h2', content: 'Nazmuz Pranto' })}

      ${Text({
        content: 'Software Engineer',
        className: 'title text-base text-gray-500',
      })}

      ${Text({
        content: 'Cambridge, MA',
        className: 'location text-base text-gray-500',
      })}

      ${MenuLinks()}
      
      ${SocialLinks()}
    </section>
  `;
}

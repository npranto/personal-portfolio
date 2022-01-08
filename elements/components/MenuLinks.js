import MenuLink from './MenuLink.js';

export default function MenuLinks() {
  return `
    <ul id="menu-links" class="menu-links grid grid-cols-1 my-10">
      <li>
        ${MenuLink({ href: '#about', content: 'About' })}
      </li>
      <li>
        ${MenuLink({ href: '#work', content: 'Work' })}
      </li>
      <li>
        ${MenuLink({ href: '#projects', content: 'Projects' })}
      </li>
      <li>
        ${MenuLink({ href: '#blog', content: 'Blog' })}
      </li>
      <li>
        ${MenuLink({ href: '#education', content: 'Education' })}
      </li>
      <li>
        ${MenuLink({ href: '#contact', content: 'Contact' })}
      </li>
    </ul>
  `;
}

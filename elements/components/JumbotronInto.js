import Avatar from './Avatar.js';
import Button from './Button.js';
import Header from './Header.js';
import RoleSlider from './RoleSlider.js';

export default function JumbotronInto() {
  return `
    <section id="jumbotron" class="jumbotron-intro py-10 px-4 drop-shadow-sm">
      ${Header({
        variant: 'h1',
        content: `
          Hello,
          <span class="text-green-600 block leading-snug md:inline-block">
            I'm Shakib
          </span>
        `,
      })}

      ${Avatar({
        src: '/assets/images/profile-v3.png',
        alt: 'Profile Picture',
        className: 'sm:hidden',
        size: 'MD',
      })}

      ${RoleSlider({
        roles: [
          {
            className: 'text-red-600 tracking-tight dark:text-gray-200',
            content: '&lt; Frontend Engineer /&gt;',
          },
          {
            className: 'text-lime-600 tracking-tight dark:text-gray-200',
            content: '&lt; Creative Thinker /&gt;',
          },
          {
            className: 'text-emerald-500 tracking-tight dark:text-gray-200',
            content: '&lt; Problem Solver /&gt;',
          },
          {
            className: 'text-yellow-600 tracking-tight dark:text-gray-200',
            content: '&lt; Rookie Blogger /&gt;',
          },
          {
            className: 'text-red-700 tracking-tight dark:text-gray-200',
            content: '&lt; Mentor /&gt;',
          },
        ],
      })}

      <div class="action-call flex flex-row space-x-2">
        ${Button({
          link: true,
          target: '_blank',
          href: '/assets/resume.pdf',
          content: 'Resume',
        })}
        ${Button({ link: true, href: '#contact', content: "Let's Talk" })}
      </div>
    </section>
  `;
}

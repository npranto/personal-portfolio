import {
  DevIcon,
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  TwitterIcon,
} from './Icons.js';
import SocialLink from './SocialLink.js';

export default function SocialLinks() {
  return `
    <ul class="socials flex flex-row space-x-2">
      <li class="transition ease-in-out hover:-translate-y-1">
        ${SocialLink({
          href: 'https://github.com/npranto',
          icon: GitHubIcon(),
        })}
      </li>
      <li class="transition ease-in-out hover:-translate-y-1">
        ${SocialLink({
          href: 'https://www.linkedin.com/in/npranto/',
          icon: LinkedInIcon(),
        })}
      </li>
      <li class="transition ease-in-out hover:-translate-y-1">
      ${SocialLink({
        href: 'https://twitter.com/nazmuzpranto',
        icon: TwitterIcon(),
      })}
      </li>
      <li class="transition ease-in-out hover:-translate-y-1">
      ${SocialLink({
        href: 'https://dev.to/npranto',
        icon: DevIcon(),
      })}
      </li>
      <li class="transition ease-in-out hover:-translate-y-1">
      ${SocialLink({
        href: 'https://medium.com/@npranto',
        icon: MediumIcon(),
      })}
      </li>
    </ul>
  `;
}

import MenuSideBar from './MenuSideBar.js';
import MenuTabs from './MenuTabs.js';

export default function Nav() {
  return `
    <nav class="fixed bottom-0 w-full sm:w-64 z-10 bg-white">
      ${MenuTabs({
        // shown on mobile and tablet views only
        id: 'menu-tabs',
        className: 'flex overflow-x-auto space-x-2 px-4 py-4',
      })}
      ${MenuSideBar({
        // shown on desktop views only
        id: 'nav-menu',
        className:
          'navigation-menu hidden sm:block h-screen pl-4 py-4 mt-2 box-border',
      })}
    </nav>
  `;
}

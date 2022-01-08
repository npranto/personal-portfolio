import MenuSideBar from './MenuSideBar.js';
import MenuTabs from './MenuTabs.js';

export default function Nav() {
  return `
    <nav class="fixed bottom-0 w-full sm:w-64 z-10 bg-white">
      ${MenuTabs()}
      ${MenuSideBar()}
    </nav>
  `;
}

export default function MenuLink({ content, href }) {
  return `
    <a
      href="${href}"
      type="button"
      class="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition ease-in-out hover:-translate-x-2 hover:px-1"
    >${content}</a>
  `;
}

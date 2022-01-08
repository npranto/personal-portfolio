export default function Button({
  className = '',
  link = true,
  href = '',
  content = '',
  type = 'button',
  id = '',
  target = '',
}) {
  if (link) {
    return `
      <a
        ${target ? `target=${target}` : ''}
        href="${href}"
        class="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 dark:focus:ring-offset-0 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 transition ease-in-out duration-200 hover:-translate-y-1 ${className}"
        >${content}</a
      >
    `;
  }
  return `
    <button
      id="${id}"
      type="${type}"
      class="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 dark:focus:ring-offset-0 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 transition ease-in-out duration-200 hover:-translate-y-1 ${className}"
      >${content}</button>
  `;
}

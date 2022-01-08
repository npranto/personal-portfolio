export default function Link({
  className = '',
  link = false,
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
        class="flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 ${className}"
        >${content}</a
      >
    `;
  }
  return `
    <button
      id="${id}"
      type="${type}"
      class="flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 ${className}"
      >${content}</button>
  `;
}

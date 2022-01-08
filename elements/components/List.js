export const ListItem = ({ className = '', content = '' }) => {
  return `
    <li
      class="${className}"
    >
      ${content}
    </li>
  `;
};

export function List({ className = '', content = '' }) {
  return `
    <ul class="${className}">
      ${content}
    </ul>
  `;
}

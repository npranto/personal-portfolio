export default function Text({ content = '', className }) {
  return `
    <p class="title text-base text-gray-500 ${className}">
      ${content}
    </p>
  `;
}

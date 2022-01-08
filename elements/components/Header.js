export default function Header({ variant = '', content = '' }) {
  if (variant === 'h1') {
    return `
      <h1
        class="text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight dark:text-gray-200 mb-6"
      >
        ${content}
      </h1>
    `;
  }
  if (variant === 'h2') {
    return `
      <h2
        class="name inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight dark:text-gray-200"
      >
        ${content}
      </h2>
    `;
  }
  if (variant === 'h3') {
    return `
      <h2
        class="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200 my-2"
      >
        ${content}
      </h2>
    `;
  }
  return `
    <h1
      class="name inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight dark:text-gray-200"
    >
      ${content}
    </h1>
  `;
}

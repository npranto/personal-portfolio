export default function BlogItem({ title = '', href = '', publishedOn = '' }) {
  return `
    <a
      href="${href}"
      target="_blank"
      class="text-indigo-600 hover:text-indigo-500"
    >
      <div class="cursor-pointer p-4">
        <div class="flex space-x-2">
          <div class="flex flex-col flex-grow top-level-details">
            <h4 class="text-lg font-semibold">
              ${title}
            </h4>
            <p class="text-sm text-gray-500">
              Published on ${publishedOn}
            </p>
          </div>
        </div>
      </div>
    </a>
  `;
}

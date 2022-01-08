export default function Tab({ href = '', className = '', content = '' }) {
  return `
    <a
      href="${href}"
      class="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
    >
      ${content}
    </a>
  `;
}

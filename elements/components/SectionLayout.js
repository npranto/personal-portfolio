export default function SectionLayout({
  content = '',
  id = '',
  className = '',
}) {
  return `
    <section id="${id}" class="rounded-lg py-10 px-4 ${className}">
      ${content}
    </section>
  `;
}

export default function EducationItem({
  id = '',
  institution = '',
  location = '',
  duration = '',
  description = '',
}) {
  return `
    <div class="cursor-pointer p-4" id=${id}>
      <div class="flex space-x-2">
        <div class="flex flex-col flex-grow top-level-details">
          <h4 class="text-base font-semibold">${institution}</h4>
          <p class="text-sm text-gray-500">
            ${duration}${location ? ` | ${location}` : ''}</p>
          <p class="text-sm text-gray-500">
            ${description}
          </p>
        </div>
      </div>
    </div>
  `;
}

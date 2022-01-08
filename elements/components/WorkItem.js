export default function WorkItem({
  id,
  companyName,
  companyLogo,
  companyLocation,
  title,
  employmentType,
  employmentDuration,
  description,
  technologies = [],
}) {
  return `
    <input
      class="hidden"
      type="checkbox"
      id="${id}-input"
      name="${id}-input"
      value="${id}-dropdown-content"
    />
    <label for="${id}-input">
      <div class="cursor-pointer p-4">
        <div class="flex space-x-2">
          <div class="logo">
            <img
              class="w-16 object-cover rounded-md"
              src="${companyLogo}"
              alt="${companyName}"
            />
          </div>
          <div class="flex flex-col flex-grow top-level-details">
            <h4 class="text-base font-semibold">${title}</h4>
            <p class="text-sm text-gray-500">
              ${companyName}, ${companyLocation}
            </p>
            <p class="text-sm text-gray-500">
              ${employmentDuration} | ${employmentType}
            </p>
          </div>
        </div>
        <div
          class="description-and-tech hidden"
          id="${id}-dropdown-content"
        >
          <ul
            class="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6"
          >
            ${description}
          </ul>
          <div class="technologies flex flex-wrap my-2 gap-2">
            ${technologies
              .map(
                (tech) => `
                  <span
                    class="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500"
                  >
                    ${tech}
                  </span>
                `
              )
              .join('\n')}
          </div>
        </div>
      </div>
    </label>
  `;
}

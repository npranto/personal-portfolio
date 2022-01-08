export default function ProjectItem({
  id,
  projectLogo,
  projectName,
  projectDuration,
  sourceCodeURL,
  demoURL,
  npmURL,
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
              class="w-12 object-cover rounded-md"
              src="${projectLogo}"
              alt="${projectName}"
            />
          </div>
          <div class="flex flex-col flex-grow top-level-details">
            <h4 class="text-base font-semibold">${projectName}</h4>
            <p class="text-sm text-gray-500">${projectDuration}</p>
          </div>
          <div class="resources flex space-x-2">
            ${
              sourceCodeURL
                ? `
                  <a
                    href="${sourceCodeURL}"
                    target="_blank"
                  >
                    <span
                      class="github-icon transition ease-in-out hover:-translate-y-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                        ></path>
                      </svg>
                    </span>
                  </a>
                `
                : ''
            }

            ${
              demoURL
                ? `
                  <a
                  href="${demoURL}"
                  target="_blank"
                >
                  <span
                    class="share-icon transition ease-in-out hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-screen-share"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <path
                        d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"
                      ></path>
                      <line x1="7" y1="20" x2="17" y2="20"></line>
                      <line x1="9" y1="16" x2="9" y2="20"></line>
                      <line x1="15" y1="16" x2="15" y2="20"></line>
                      <path d="M17 4h4v4"></path>
                      <path d="M16 9l5 -5"></path>
                    </svg>
                  </span>
                </a>
                `
                : ''
            }

            ${
              npmURL
                ? `
                <a
                  href="https://www.npmjs.com/package/nsp-regexer"
                  target="_blank"
                >
                  <span
                    class="package-icon transition ease-in-out hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-box"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <polyline
                        points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"
                      ></polyline>
                      <line x1="12" y1="12" x2="20" y2="7.5"></line>
                      <line x1="12" y1="12" x2="12" y2="21"></line>
                      <line x1="12" y1="12" x2="4" y2="7.5"></line>
                    </svg>
                  </span>
                </a>
                `
                : ''
            }
          </div>
        </div>
        <div
          class="description-and-tech mt-2 space-y-2 text-sm text-gray-500 hidden"
          id="${id}-dropdown-content"
        >
          ${description}

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
  </li>
  `;
}

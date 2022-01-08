export default function Education() {
  return `
    <section
      id="education"
      class="bg-sky-100 rounded-lg education py-10 px-4"
    >
      <h2
        class="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200 my-2"
      >
        Education
      </h2>

      <ul
        class="education-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row"
      >
        <li
          class="work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md"
        >
          <div class="cursor-pointer p-4">
            <div class="flex space-x-2">
              <div class="flex flex-col flex-grow top-level-details">
                <h4 class="text-base font-semibold">DevMountain</h4>
                <p class="text-sm text-gray-500">
                  Web Development Immersive Program, 2016
                </p>
              </div>
            </div>
          </div>
        </li>
        <li
          class="work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md"
        >
          <div class="cursor-pointer p-4">
            <div class="flex space-x-2">
              <div class="flex flex-col flex-grow top-level-details">
                <h4 class="text-base font-semibold">freeCodeCamp</h4>
                <p class="text-sm text-gray-500">Jul 2015 - Present</p>
                <p class="text-sm text-gray-500">
                  Certifications:
                  <a
                    class="text-indigo-600 hover:text-indigo-500"
                    href="https://www.freecodecamp.org/certification/npranto/responsive-web-design"
                    target="_blank"
                    class="underline"
                    >Responsive Web Design</a
                  >
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  `;
}

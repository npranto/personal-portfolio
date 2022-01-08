export default function Contact() {
  return `
    <section id="contact" class="rounded-lg education px-4 pt-10 pb-20">
      <h2
        class="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200 my-2"
      >
        Contact
      </h2>

      <form class="w-full max-w-lg" id="contact-form">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              name="name"
              placeholder="John Smith"
            />
            <p class="text-red-500 text-xs italic hidden" id="name-error"></p>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="email"
              name="email"
              placeholder="jsmith@gmail.com"
            />
            <p
              class="text-red-500 text-xs italic hidden"
              id="email-error"
            ></p>
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-message"
            >
              Message
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-64"
              name="message"
              id="grid-message"
              type="text"
              placeholder="How can I help?"
            ></textarea>
            <p
              class="text-red-500 text-xs italic hidden"
              id="message-error"
            ></p>
          </div>
        </div>
        <button
          type="submit"
          id="send-email-btn"
          class="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 dark:focus:ring-offset-0 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 transition ease-in-out duration-200 hover:-translate-y-1"
        >
          Send
        </button>
      </form>
    </section>
  `;
}

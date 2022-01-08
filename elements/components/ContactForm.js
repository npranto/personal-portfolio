import Button from './Button.js';

export const Input = ({ id, name, label, type, placeholder }) => {
  return `
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="${id}"
    >
      ${label}
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="${id}"
      type="${type}"
      name="${name}"
      placeholder="${placeholder}"
    />
    <p class="text-red-500 text-xs italic hidden" id="${name}-error"></p>
  `;
};

export const TextArea = ({ id, name, label, placeholder }) => {
  return `
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="${id}"
    >
      ${label}
    </label>
    <textarea
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-64"
      name="${name}"
      id="${id}"
      placeholder="${placeholder}"
    ></textarea>
    <p
      class="text-red-500 text-xs italic hidden"
      id="${name}-error"
    ></p>
  `;
};

export default function ContactForm({ id }) {
  return `
    <form class="w-full max-w-lg" id="${id}">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full p-3">
          ${Input({
            id: 'name',
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'John Smith',
          })}
        </div>
        <div class="w-full p-3">
          ${Input({
            id: 'email',
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'jsmith@gmail.com',
          })}
        </div>
        <div class="w-full p-3">
          ${TextArea({
            id: 'message',
            name: 'message',
            label: 'Message',
            placeholder: 'How can I help?',
          })}
        </div>
      </div>
      ${Button({
        type: 'submit',
        id: 'send-email-btn',
        content: 'Send',
      })}
    </form>

  `;
}

import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import ContactForm from './ContactForm.js';

export default function Contact() {
  return `
    ${SectionLayout({
      id: 'contact',
      className: 'rounded-lg education px-4 pt-10 pb-20',
      content: `
        ${Header({ variant: 'h3', content: 'Contact' })}
        ${ContactForm({ id: 'contact-form' })}
      `,
    })}
  `;
}

import SectionLayout from './SectionLayout.js';
import Header from './Header.js';
import ContactForm from './ContactForm.js';

export default function Contact() {
  return `
    ${SectionLayout({
      id: 'contact',
      className: '',
      content: `
        ${Header({ variant: 'h3', content: 'Contact' })}
        ${ContactForm({ id: 'contact-form' })}
      `,
    })}
  `;
}

// elements

// nav
export const menuLinks = document.querySelectorAll('#menu-links > li > a');
export const menuTabs = document.querySelectorAll('#menu-tabs > a');

// about
export const aboutSection = document.querySelector('#about');
export const readMoreBtn = document.querySelector('#read-more-btn');
export const collapseReadMoreBtn = document.querySelector(
	'#collapse-read-more-btn'
);
export const readMoreContent = document.querySelector('#read-more-content');

// work
export const workSection = document.querySelector('#work');
export const workElementInputs = document.querySelectorAll(
	'.work-list li input[type="checkbox"]'
);

// projects
export const projectElementInputs = document.querySelectorAll(
	'.projects-list li input[type="checkbox"]'
);

// contact
export const contactForm = document.querySelector('#contact-form');
export const nameField = document.querySelector(
	'#contact-form input[name="name"]'
);
export const emailField = document.querySelector(
	'#contact-form input[name="email"]'
);
export const messageField = document.querySelector(
	'#contact-form textarea[name="message"]'
);
export const nameError = document.querySelector('#contact-form #name-error');
export const emailError = document.querySelector('#contact-form #email-error');
export const messageError = document.querySelector(
	'#contact-form #message-error'
);

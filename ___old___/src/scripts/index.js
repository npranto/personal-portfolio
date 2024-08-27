import {
	collapseReadMoreBtn,
	contactForm,
	readMoreBtn,
	workElementInputs,
	projectElementInputs,
} from './elements.js';
import {
	highlightMenuTabs,
	highlightMenuLink,
	onSend,
	showReadMoreContent,
	hideReadMoreContent,
	toggleDropdownContent,
} from './functions.js';

// window
window.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 640) {
		highlightMenuTabs();
	} else {
		highlightMenuLink();
	}
});

window.addEventListener('hashchange', () => {
	if (window.innerWidth < 640) {
		highlightMenuTabs();
	} else {
		highlightMenuLink();
	}
});

// about
if (readMoreBtn !== null) {
	readMoreBtn.addEventListener('click', showReadMoreContent);
}
if (collapseReadMoreBtn !== null) {
	collapseReadMoreBtn.addEventListener('click', hideReadMoreContent);
}
// work
if (workElementInputs !== null) {
	workElementInputs.forEach(
		(workElementInput) =>
			workElementInput !== null &&
			workElementInput.addEventListener('change', toggleDropdownContent)
	);
}

// projects
if (projectElementInputs !== null) {
	projectElementInputs.forEach(
		(projectElementInput) =>
			projectElementInput !== null &&
			projectElementInput.addEventListener('change', toggleDropdownContent)
	);
}
// contact
if (contactForm !== null) {
	contactForm.addEventListener('submit', onSend);
}

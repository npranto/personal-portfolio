import {
  collapseReadMoreBtn,
  lexiaInput,
  newfoldInput,
  regexerInput,
  logtradeInput,
  contactForm,
  readMoreBtn,
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
readMoreBtn.addEventListener('click', showReadMoreContent);
collapseReadMoreBtn.addEventListener('click', hideReadMoreContent);

// work
lexiaInput.addEventListener('change', toggleDropdownContent);
newfoldInput.addEventListener('change', toggleDropdownContent);

// projects
regexerInput.addEventListener('change', toggleDropdownContent);
logtradeInput.addEventListener('change', toggleDropdownContent);

// contact
contactForm.addEventListener('submit', onSend);

console.log('Index!');

// ========== //

const readMoreBtn = document.querySelector('#read-more-btn');
const collapseReadMoreBtn = document.querySelector('#collapse-read-more-btn');
const readMoreContent = document.querySelector('#read-more-content');

function openReadMoreContent() {
  readMoreBtn.classList.add('hidden');
  collapseReadMoreBtn.classList.remove('hidden');
  readMoreContent.classList.remove('hidden');
}

function closeReadMoreContent() {
  readMoreBtn.classList.remove('hidden');
  collapseReadMoreBtn.classList.add('hidden');
  readMoreContent.classList.add('hidden');
}

readMoreBtn.addEventListener('click', openReadMoreContent);
collapseReadMoreBtn.addEventListener('click', closeReadMoreContent);

// ========== //

const lexiaInput = document.querySelector('#lexia-input');
const newfoldInput = document.querySelector('#newfold-input');

lexiaInput.addEventListener('change', (e) => {
  const isInputChecked = e?.target?.checked;
  const dropdownContentSelector = e?.target?.value;
  const lexiaDropdownContent = document.querySelector(
    `#${dropdownContentSelector}`
  );

  if (lexiaDropdownContent && isInputChecked) {
    lexiaDropdownContent.classList.remove('hidden');
  } else if (lexiaDropdownContent && !isInputChecked) {
    lexiaDropdownContent.classList.add('hidden');
  }
});

newfoldInput.addEventListener('change', (e) => {
  const isInputChecked = e?.target?.checked;
  const dropdownContentSelector = e?.target?.value;
  const newfoldDropdownContent = document.querySelector(
    `#${dropdownContentSelector}`
  );

  if (newfoldDropdownContent && isInputChecked) {
    newfoldDropdownContent.classList.remove('hidden');
  } else if (newfoldDropdownContent && !isInputChecked) {
    newfoldDropdownContent.classList.add('hidden');
  }
});

// ========== //

const regexerInput = document.querySelector('#regexer-input');
const logtradeInput = document.querySelector('#logtrade-input');

regexerInput.addEventListener('change', (e) => {
  const isInputChecked = e?.target?.checked;
  const dropdownContentSelector = e?.target?.value;
  const regexerDropdownContent = document.querySelector(
    `#${dropdownContentSelector}`
  );

  if (regexerDropdownContent && isInputChecked) {
    regexerDropdownContent.classList.remove('hidden');
  } else if (regexerDropdownContent && !isInputChecked) {
    regexerDropdownContent.classList.add('hidden');
  }
});

logtradeInput.addEventListener('change', (e) => {
  const isInputChecked = e?.target?.checked;
  const dropdownContentSelector = e?.target?.value;
  const logtradeDropdownContent = document.querySelector(
    `#${dropdownContentSelector}`
  );

  if (logtradeDropdownContent && isInputChecked) {
    logtradeDropdownContent.classList.remove('hidden');
  } else if (logtradeDropdownContent && !isInputChecked) {
    logtradeDropdownContent.classList.add('hidden');
  }
});

// ========== //

const menuLinks = document.querySelectorAll('#menu-links > li > a');
const menuTabs = document.querySelectorAll('#menu-tabs > a');

function highlightMenuLink() {
  if (!menuLinks || menuLinks === null) return;
  menuLinks.forEach((link) => {
    const { hash } = link || {};
    if (hash && window?.location?.href?.includes(hash)) {
      link.classList.add(
        'text-gray-800',
        'bg-gray-100',
        'font-semibold',
        '-translate-x-2',
        'px-1'
      );
    } else {
      link.classList.remove(
        'text-gray-800',
        'bg-gray-100',
        'font-semibold',
        '-translate-x-2',
        'px-1'
      );
    }
  });
}

function highlightMenuTabs() {
  if (!menuTabs || menuLinks === null) return;
  menuTabs.forEach((tab) => {
    const { hash } = tab || {};
    if (hash && window?.location?.href?.includes(hash)) {
      tab.classList.add('bg-gray-800', 'text-slate-50');
    } else {
      tab.classList.remove('bg-gray-800', 'text-slate-50');
    }
  });
}

window.addEventListener('hashchange', () => {
  highlightMenuLink();
  highlightMenuTabs();
});

window.addEventListener('DOMContentLoaded', () => {
  highlightMenuLink();
  highlightMenuTabs();
});

// ========== //

const nameField = document.querySelector('#contact-form input[name="name"]');
const emailField = document.querySelector('#contact-form input[name="email"]');
const messageField = document.querySelector(
  '#contact-form textarea[name="message"]'
);

const nameError = document.querySelector('#contact-form #name-error');
const emailError = document.querySelector('#contact-form #email-error');
const messageError = document.querySelector('#contact-form #message-error');

const contactForm = document.querySelector('#contact-form');

const validateContactFields = (fields = {}) => {
  const { name, email, message } = fields;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isNameValid = () =>
    typeof name === 'string' && name.length > 0 && name.length <= 63;
  const isEmailValid = () =>
    typeof email === 'string' &&
    email.length > 0 &&
    emailRegex.test(email.toLowerCase());
  const isMessageValid = () =>
    typeof message === 'string' && message.length > 0 && message.length <= 500;

  if (!isNameValid()) {
    return {
      isValid: false,
      field: 'name',
      error: 'Please enter a valid name',
    };
  }
  if (!isEmailValid()) {
    return {
      isValid: false,
      field: 'email',
      error: 'Please enter a valid email',
    };
  }
  if (!isMessageValid()) {
    return {
      isValid: false,
      field: 'message',
      error: 'Please enter a valid message',
    };
  }
  return { isValid: true, error: null, field: null };
};

const sanitizeContactFields = (fields = {}) => {
  const { name, email, message } = fields;
  return {
    name,
    email: email.toLowerCase(),
    message,
  };
};

const showValidationError = (error, field) => {
  if (field === 'name') {
    nameError.textContent = error;
    nameError.classList.remove('hidden');
    nameField.classList.add('border-red-500');
  } else if (field === 'email') {
    emailError.textContent = error;
    emailError.classList.remove('hidden');
    emailField.classList.add('border-red-500');
  } else if (field === 'message') {
    messageError.textContent = error;
    messageError.classList.remove('hidden');
    messageField.classList.add('border-red-500');
  }
};

const clearValidationErrors = () => {
  nameError.textContent = '';
  nameError.classList.add('hidden');
  nameField.classList.remove('border-red-500');

  emailError.textContent = '';
  emailError.classList.add('hidden');
  emailField.classList.remove('border-red-500');

  messageError.textContent = '';
  messageError.classList.add('hidden');
  messageField.classList.remove('border-red-500');
};

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm?.elements?.name?.value;
  const email = contactForm?.elements?.email?.value;
  const message = contactForm?.elements?.message?.value;

  clearValidationErrors();

  console.log({ name, email, message });

  const { isValid, error, field } = validateContactFields({
    name,
    email,
    message,
  });

  if (!isValid) {
    showValidationError(error, field);
  } else {
    const sanitizedContactFields = sanitizeContactFields({
      name,
      email,
      message,
    });

    const mailTo = 'npranto@gmail.com';
    const subject = `Urgent: Message from ${sanitizedContactFields.name}`;
    const body = encodeURIComponent(sanitizedContactFields.message);

    window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);
  }
});

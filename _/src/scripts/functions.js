import {
  aboutSection,
  collapseReadMoreBtn,
  contactForm,
  emailError,
  emailField,
  menuLinks,
  menuTabs,
  messageError,
  messageField,
  nameError,
  nameField,
  readMoreBtn,
  readMoreContent,
} from './elements.js';

export function showReadMoreContent() {
  readMoreBtn.classList.add('hidden');
  collapseReadMoreBtn.classList.remove('hidden');
  readMoreContent.classList.remove('hidden');
  readMoreContent.scrollIntoView();
}

export function hideReadMoreContent() {
  readMoreBtn.classList.remove('hidden');
  collapseReadMoreBtn.classList.add('hidden');
  readMoreContent.classList.add('hidden');
  aboutSection.scrollIntoView();
}

export function highlightMenuLink() {
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

export function highlightMenuTabs() {
  if (!menuTabs || menuLinks === null) return;
  menuTabs.forEach((tab) => {
    const { hash } = tab || {};
    if (hash && window?.location?.href?.includes(hash)) {
      tab.classList.replace('bg-gray-100', 'bg-gray-800');
      tab.classList.replace('text-black', 'text-slate-50');
    } else {
      tab.classList.replace('bg-gray-800', 'bg-gray-100');
      tab.classList.replace('text-slate-50', 'text-black');
    }
  });
}

export function toggleDropdownContent(e) {
  const isInputChecked = e?.target?.checked;
  const dropdownContentId = e?.target?.value;
  const dropdownContent = document.querySelector(`#${dropdownContentId}`);

  if (dropdownContent && isInputChecked) {
    // show dropdown content
    dropdownContent.classList.remove('hidden');
    e?.target?.parentNode?.scrollIntoView();
  } else if (dropdownContent && !isInputChecked) {
    // hide dropdown content
    dropdownContent.classList.add('hidden');
    e?.target?.parentNode?.parentNode?.parentNode?.scrollIntoView();
  }
}

export const validateContactFields = (fields = {}) => {
  const { name, email, message } = fields;
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isNameValid = () =>
    typeof name === 'string' && name.length > 0 && name.length <= 63;
  const isEmailValid = () =>
    typeof email === 'string' &&
    email.length > 0 &&
    emailRegex.test(email.toLowerCase());
  const isMessageValid = () =>
    typeof message === 'string' && message.length > 0 && message.length <= 500;

  // validate name field
  if (!isNameValid()) {
    return {
      isValid: false,
      field: 'name',
      error: 'Please enter a valid name',
    };
  }
  // validate email field
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

export const sanitizeContactFields = (fields = {}) => {
  const { name, email, message } = fields;
  return {
    name,
    email: email.toLowerCase(),
    message,
  };
};

export const showValidationError = (error, field) => {
  if (field === 'name') {
    nameError.textContent = error;
    nameError.classList.remove('hidden');
    nameField.classList.replace('border-gray-500', 'border-red-500');
  } else if (field === 'email') {
    emailError.textContent = error;
    emailError.classList.remove('hidden');
    emailField.classList.replace('border-gray-500', 'border-red-500');
  } else if (field === 'message') {
    messageError.textContent = error;
    messageError.classList.remove('hidden');
    messageField.classList.replace('border-gray-500', 'border-red-500');
  }
};

export const clearValidationErrors = () => {
  nameError.textContent = '';
  nameError.classList.add('hidden');
  nameField.classList.replace('border-red-500', 'border-gray-500');

  emailError.textContent = '';
  emailError.classList.add('hidden');
  emailField.classList.replace('border-red-500', 'border-gray-500');

  messageError.textContent = '';
  messageError.classList.add('hidden');
  messageField.classList.replace('border-red-500', 'border-gray-500');
};

export function onSend(e) {
  e.preventDefault();

  const name = contactForm?.elements?.name?.value;
  const email = contactForm?.elements?.email?.value;
  const message = contactForm?.elements?.message?.value;

  clearValidationErrors();

  const { isValid, error, field } = validateContactFields({
    name,
    email,
    message,
  });

  if (!isValid) {
    showValidationError(error, field);
  } else {
    const sanitizedFields = sanitizeContactFields({
      name,
      email,
      message,
    });

    const mailTo = 'npranto@gmail.com';
    const subject = `Urgent: Message from ${sanitizedFields.name}`;
    const body = encodeURIComponent(sanitizedFields.message);

    window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);
  }
}

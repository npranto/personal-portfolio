console.log('Welcome to Index!');

// elements
// const menuIconBtn = document.querySelector('#menu-icon-btn');
// const closeMenuIconBtn = document.querySelector('#close-menu-icon-btn');
// const navMenu = document.querySelector('#nav-menu');

// function closeNavigationMenu() {
//   navMenu.classList.add('hidden');
//   menuIconBtn.classList.remove('hidden');
//   closeMenuIconBtn.classList.add('hidden');
// }
// function openNavigationMenu() {
//   navMenu.classList.remove('hidden');
//   menuIconBtn.classList.add('hidden');
//   closeMenuIconBtn.classList.remove('hidden');
//   closeMenuIconBtn.classList.add('inline-block');
// }

// events
// menuIconBtn.addEventListener('click', openNavigationMenu);
// closeMenuIconBtn.addEventListener('click', closeNavigationMenu);

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
    // console.log({ link, path: window?.location?.href });
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
    // console.log({ tab });
    const { hash } = tab || {};
    // console.log({ hash, path: window?.location?.href });
    if (hash && window?.location?.href?.includes(hash)) {
      console.log('add', { hash });
      tab.classList.add('bg-gray-800', 'text-slate-50');
    } else {
      console.log('remove', { hash });
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

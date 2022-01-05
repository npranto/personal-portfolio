console.log('Welcome to Index!');

// elements
const menuIconBtn = document.querySelector('#menu-icon-btn');
const closeMenuIconBtn = document.querySelector('#close-menu-icon-btn');
const navMenu = document.querySelector('#nav-menu');

function closeNavigationMenu() {
  navMenu.classList.add('hidden');
  menuIconBtn.classList.remove('hidden');
  closeMenuIconBtn.classList.add('hidden');
}
function openNavigationMenu() {
  navMenu.classList.remove('hidden');
  menuIconBtn.classList.add('hidden');
  closeMenuIconBtn.classList.remove('hidden');
  closeMenuIconBtn.classList.add('inline-block');
}

// events
menuIconBtn.addEventListener('click', openNavigationMenu);
closeMenuIconBtn.addEventListener('click', closeNavigationMenu);

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

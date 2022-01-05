console.log('Welcome to Index!');

// elements
const menuIconBtn = document.querySelector('#menu-icon-btn');
const closeMenuIconBtn = document.querySelector('#close-menu-icon-btn');
const navMenu = document.querySelector('#nav-menu');

// events
menuIconBtn.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
  menuIconBtn.classList.add('hidden');
  closeMenuIconBtn.classList.remove('hidden');
  closeMenuIconBtn.classList.add('inline-block');
});

closeMenuIconBtn.addEventListener('click', () => {
  navMenu.classList.add('hidden');
  menuIconBtn.classList.remove('hidden');
  closeMenuIconBtn.classList.add('hidden');
});

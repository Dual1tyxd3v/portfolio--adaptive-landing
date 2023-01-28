const menu = document.querySelector(`.menu`);
const navLinks = document.querySelectorAll('.nav_item a');
const nav = document.querySelector('.nav');

navLinks.forEach((it) => {
  it.addEventListener('click', () => {
    toggleMenu();
  })
});

menu.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle('menu-open');
  menu.classList.contains('menu-open') ? nav.style.display = 'block' : nav.style.display = 'none';
  document.querySelector('.main_title__lang').classList.toggle('hide');
}
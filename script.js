const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const navLinks = document.querySelectorAll('.nav-link');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

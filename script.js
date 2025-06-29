// Highlight the current nav link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const path = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === path || (link.getAttribute('href') === 'index.html' && path === '')) {
      link.classList.add('active');
    }
  });
});

const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
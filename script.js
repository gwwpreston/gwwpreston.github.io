document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('nav a');
  const path = window.location.pathname.split('/').pop();

  // Highlight current nav link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === path || (link.getAttribute('href') === 'index.html' && path === '')) {
      link.classList.add('active');
    }
  });

  // Hamburger menu toggle
  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Ensure nav is visible on desktop (hide on mobile)
const handleNavVisibility = () => {
  const navMenu = document.getElementById('nav-menu');
  if (!navMenu) return;  // safeguard

  if (window.innerWidth >= 769) {
    navMenu.classList.add('show');
  } else {
    navMenu.classList.remove('show');
  }
};

  // Initial check and on resize
  handleNavVisibility();
  window.addEventListener('resize', handleNavVisibility);

  // FAQ individual toggle
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const arrow = question.querySelector('.arrow');

      if (item.classList.contains('expanded')) {
        answer.style.height = answer.scrollHeight + 'px';
        requestAnimationFrame(() => {
          answer.style.height = '0px';
        });
        item.classList.remove('expanded');
        if (arrow) arrow.textContent = '▶';
      } else {
        answer.style.height = answer.scrollHeight + 'px';
        item.classList.add('expanded');
        if (arrow) arrow.textContent = '▼';

        answer.addEventListener('transitionend', function cleanup() {
          answer.style.height = 'auto';
          answer.removeEventListener('transitionend', cleanup);
        });
      }
    });
  });

// Expand/Collapse All
const toggleAllBtn = document.getElementById('toggle-all-btn');
const faqItems = document.querySelectorAll('.faq-item');

if (toggleAllBtn) {
  toggleAllBtn.addEventListener('click', () => {
    const expanding = toggleAllBtn.textContent === 'Expand All';

    faqItems.forEach(item => {
      const answer = item.querySelector('.faq-answer');
      const arrow = item.querySelector('.arrow');

      if (!answer) return;

      if (expanding && !item.classList.contains('expanded')) {
        answer.style.height = answer.scrollHeight + 'px';
        item.classList.add('expanded');
        if (arrow) arrow.textContent = '▼';

        answer.addEventListener('transitionend', function cleanup() {
          answer.style.height = 'auto';
          answer.removeEventListener('transitionend', cleanup);
        });
      } else if (!expanding && item.classList.contains('expanded')) {
        answer.style.height = answer.scrollHeight + 'px';
        requestAnimationFrame(() => {
          answer.style.height = '0px';
        });
        item.classList.remove('expanded');
        if (arrow) arrow.textContent = '▶';
      }
    });

    toggleAllBtn.textContent = expanding ? 'Collapse All' : 'Expand All';
  });
}
});
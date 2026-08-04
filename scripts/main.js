const header = document.querySelector('[data-header]');
const nav = document.querySelector('#site-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const closeNavigation = () => {
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
};

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  nav.classList.toggle('is-open', !isOpen);
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
});

navLinks.forEach((link) => link.addEventListener('click', closeNavigation));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeNavigation();
    navToggle.focus();
  }
});

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${entry.target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  });
}, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

document.querySelector('[data-year]').textContent = new Date().getFullYear();

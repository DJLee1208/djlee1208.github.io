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

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.toggleAttribute('aria-current', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelectorAll('.resume-link').forEach(async (link) => {
  try {
    const response = await fetch(link.getAttribute('href'), { method: 'HEAD' });
    if (response.ok) return;
  } catch (_) {
    // Local file previews can reject HEAD requests; leave the link available there.
    if (window.location.protocol === 'file:') return;
  }

  link.setAttribute('aria-disabled', 'true');
  link.removeAttribute('download');
  link.setAttribute('title', 'Résumé PDF will be available after the final file is added.');
  link.addEventListener('click', (event) => event.preventDefault());
});

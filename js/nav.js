/* ================================================================
   TONY TRAN — PORTFOLIO
   nav.js : highlight du lien actif dans la sidebar selon la page courante
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Récupère le nom du fichier courant (ex: "projets.html")
  const current = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  // ── Hamburger (mobile) ───────────────────────────────────────
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (ham && nav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  // ── Scroll-trigger animations ────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.timeline-item, .project-card, .skill-group, .home-stat'
  ).forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // Close mobile menu when a navigation link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const reservationForm = document.querySelector('#reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = reservationForm.querySelector('.success-message');
      if (msg) {
        msg.style.display = 'block';
        msg.textContent = 'Thank you! Your reservation request has been received.';
      }
      reservationForm.reset();
    });
  }
});

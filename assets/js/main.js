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

  // Reservation form success overlay removed per request

  // Menu tab switching
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const menuTabContents = document.querySelectorAll('.menu-tab-content');

  menuTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      menuTabBtns.forEach(b => b.classList.remove('active'));
      menuTabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      btn.classList.add('active');
      const targetContent = document.getElementById(`${targetTab}-menu`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});

// BOSSEN INC — main site scripts
(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  // Placeholder phone warning: remove when real number is added
  document.querySelectorAll('a[href^="tel:"]').forEach(function (tel) {
    tel.addEventListener('click', function (e) {
      if (tel.dataset.placeholder === 'true') {
        e.preventDefault();
        alert('Phone number coming soon. Please use the contact form for now.');
      }
    });
  });
})();

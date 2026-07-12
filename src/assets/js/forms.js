// BOSSEN INC — form validation and lead handling
(function () {
  'use strict';

  function showStatus(form, message, type) {
    const status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = message;
    status.className = 'form-status ' + type;
    status.style.display = 'block';
  }

  function validateRequired(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#c0392b';
      } else {
        field.style.borderColor = '';
      }
    });

    const phone = form.querySelector('input[type="tel"]');
    if (phone && phone.value.trim()) {
      const digits = phone.value.replace(/\D/g, '');
      if (digits.length < 10) {
        valid = false;
        phone.style.borderColor = '#c0392b';
      }
    }

    const email = form.querySelector('input[type="email"]');
    if (email && email.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        valid = false;
        email.style.borderColor = '#c0392b';
      }
    }

    return valid;
  }

  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateRequired(form)) {
        showStatus(form, 'Please fill in all required fields correctly.', 'error');
        return;
      }

      const data = new FormData(form);
      const payload = {};
      data.forEach(function (value, key) {
        if (payload[key]) {
          if (!Array.isArray(payload[key])) payload[key] = [payload[key]];
          payload[key].push(value);
        } else {
          payload[key] = value;
        }
      });

      // Placeholder form handler: replace with real endpoint
      showStatus(
        form,
        'Thanks for your request. This is a demo form; we still need to connect it to a real email/CRM service. We will follow up with you soon.',
        'success'
      );

      // Reset form
      form.reset();

      // Optional: send to real endpoint later
      // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } });
    });
  });
})();

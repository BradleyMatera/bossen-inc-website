// BOSSEN INC — client-side form validation before submitting to the backend
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
      if (!validateRequired(form)) {
        e.preventDefault();
        showStatus(form, 'Please fill in all required fields correctly.', 'error');
        return;
      }

      // Clear any previous error styling
      form.querySelectorAll('[style*="border-color"]').forEach(function (field) {
        field.style.borderColor = '';
      });

      showStatus(form, 'Sending your request...', 'success');
      // The form will now submit to the backend normally.
    });
  });
})();

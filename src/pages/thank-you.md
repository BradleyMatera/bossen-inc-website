---
templateEngineOverride: njk
layout: layout
permalink: /thank-you/
title: Thank You | BOSSEN INC
description: Thank you for contacting BOSSEN INC. We will get back to you as soon as possible.
canonical: https://bosseninc.com/thank-you/
---

<section class="page-header">
  <h1>Thank You</h1>
  <p>Your request has been sent. We will call or email you back as soon as we can.</p>
</section>

<section class="section">
  <div class="container">
    <div class="content" id="thank-you-message">
      <p>If this is a roadside emergency, please call directly. Do not wait for an email reply.</p>
      <p>
        <a class="btn btn-primary" href="/">Back to Home</a>
        <a class="btn btn-secondary" href="/contact/">Contact Page</a>
      </p>
    </div>
  </div>
</section>

<script>
(function () {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  const status = params.get('status');
  const container = document.getElementById('thank-you-message');
  if (!container) return;
  if (email === 'not-configured') {
    container.insertAdjacentHTML('afterbegin', '<p style="color:#c0390f;background:#fbe0e0;padding:1rem;border-radius:4px;"><strong>Your request was received, but the email notification is not set up yet.</strong> A team member is checking the dashboard. If this is urgent, please call directly.</p>');
  } else if (status === 'error') {
    container.insertAdjacentHTML('afterbegin', '<p style="color:#c0390f;background:#fbe0e0;padding:1rem;border-radius:4px;"><strong>Your request was received, but there was a problem sending the email notification.</strong> A team member is checking the dashboard. If this is urgent, please call directly.</p>');
  }
})();
</script>

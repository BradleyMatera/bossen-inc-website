---
layout: layout
permalink: /contact/
title: Contact BOSSEN INC | Rockford IL Truck Repair, Roadside, Parking, Freight
description: Contact BOSSEN INC for roadside assistance, repair estimates, parking, freight quotes, and fleet service in Rockford, Illinois.
canonical: https://bosseninc.com/contact/
include_forms_js: true
---

<section class="page-header">
      <h1>Contact BOSSEN INC</h1>
      <p>Choose the right path for your need. For emergencies, call directly.</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <h3>Roadside Assistance</h3>
            <p>Stuck on the road? Call first. Do not wait for a form response.</p>
            <a class="btn btn-danger" href="tel:+10000000000" data-placeholder="true">Call Roadside</a>
          </div>
          <div class="service-card">
            <h3>Repair Appointment</h3>
            <p>Schedule a repair, inspection, or diagnostic.</p>
            <a class="btn btn-primary" href="#service-form">Request Repair</a>
          </div>
          <div class="service-card">
            <h3>Rebuild Estimate</h3>
            <p>Major component replacement or complete rebuild.</p>
            <a class="btn btn-primary" href="#service-form">Request Rebuild</a>
          </div>
          <div class="service-card">
            <h3>Parking Inquiry</h3>
            <p>Ask about tractor, trailer, or combo parking.</p>
            <a class="btn btn-primary" href="/parking/">Parking Form</a>
          </div>
          <div class="service-card">
            <h3>Freight Quote</h3>
            <p>General freight or machinery transportation quote.</p>
            <a class="btn btn-primary" href="/freight/">Freight Quote</a>
          </div>
          <div class="service-card">
            <h3>Fleet Service</h3>
            <p>Maintenance plans and fleet support.</p>
            <a class="btn btn-primary" href="/fleet-service/">Fleet Discussion</a>
          </div>
        </div>

        <div class="placeholder" style="margin-top:2rem;">
          <strong>Placeholder:</strong> Phone number, email, address, and hours will be added once Paul confirms them.
        </div>
      </div>
    </section>

    <section class="section section-alt" id="service-form">
      <div class="container">
        <h2 class="section-title">General Service Request</h2>
        <p class="section-subtitle">Tell us what you need and we will call you back. For roadside emergencies, call directly.</p>

        <form id="contact-form" action="" method="POST">
          <div class="form-row">
            <div class="form-group">
              <label for="c-name">Your name <span aria-label="required">*</span></label>
              <input type="text" id="c-name" name="name" required>
            </div>
            <div class="form-group">
              <label for="c-phone">Phone <span aria-label="required">*</span></label>
              <input type="tel" id="c-phone" name="phone" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="c-email">Email</label>
              <input type="email" id="c-email" name="email">
            </div>
            <div class="form-group">
              <label for="c-company">Company</label>
              <input type="text" id="c-company" name="company">
            </div>
          </div>

          <div class="form-group">
            <label for="c-type">What do you need? <span aria-label="required">*</span></label>
            <select id="c-type" name="inquiry_type" required>
              <option value="">Select one</option>
              <option value="repair">Truck/trailer repair</option>
              <option value="rebuild">Rebuild estimate</option>
              <option value="roadside">Non-emergency roadside</option>
              <option value="parking">Parking inquiry</option>
              <option value="freight">Freight quote</option>
              <option value="fleet">Fleet service</option>
              <option value="general">General question</option>
            </select>
          </div>

          <div class="form-group">
            <label for="c-unit">Vehicle or unit info</label>
            <input type="text" id="c-unit" name="unit" placeholder="Year, make, model, trailer type, or fleet size">
          </div>

          <div class="form-group">
            <label for="c-message">Describe your request <span aria-label="required">*</span></label>
            <textarea id="c-message" name="message" rows="4" required></textarea>
          </div>

          <div class="form-group checkbox-group">
            <label><input type="checkbox" name="consent" value="yes" required> I agree to be contacted by phone, text, or email about this request.</label>
          </div>

          <button type="submit" class="btn btn-primary">Submit Request</button>
          <div class="form-status" aria-live="polite"></div>
        </form>
      </div>
    </section>
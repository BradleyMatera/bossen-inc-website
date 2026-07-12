---
templateEngineOverride: njk
layout: layout
permalink: /freight/
title: Freight & Transportation Rockford IL | BOSSEN INC
description: BOSSEN INC is an active interstate carrier based in Rockford, IL. General freight and machinery transportation. USDOT 3358683 MC-1075161.
canonical: https://bosseninc.com/freight/
include_forms_js: true
---

<section class="page-header">
      <h1>Freight & Transportation</h1>
      <p>Reliable freight and machinery transportation from an active interstate carrier.</p>
    </section>

    <section class="content">
      <div class="placeholder">
        <strong>Placeholder:</strong> Freight lanes, equipment types, capacity, and specialized hauling capabilities must be confirmed with Paul before this page is advertised.
      </div>

      <h2>Verified Carrier Information</h2>
      <ul>
        <li><strong>Business name:</strong> BOSSEN INC</li>
        <li><strong>USDOT number:</strong> 3358683</li>
        <li><strong>MC number:</strong> MC-1075161</li>
        <li><strong>Status:</strong> Active interstate carrier with FMCSA</li>
        <li><strong>Location:</strong> Rockford, Illinois area</li>
        <li><strong>Operating authority:</strong> Registered since approximately 2019</li>
      </ul>

      <h2>Freight Services</h2>
      <p>BOSSEN INC is associated with general freight and machinery or large-object transportation. The exact lanes, equipment, and freight types are available upon request.</p>

      <ul>
        <li>General freight</li>
        <li>Machinery or large-object transportation</li>
        <li>Additional services to be confirmed with Paul</li>
      </ul>

      <div class="placeholder">
        <strong>Placeholder:</strong> Do not claim nationwide coverage, hazmat, refrigerated, expedited, or guaranteed delivery without confirmation.
      </div>

      <h2>Freight Quote</h2>
      <p>Send us the details and we will respond with availability and pricing.</p>

      <form id="freight-form" action="https://bossen-inc-cms.netlify.app/.netlify/functions/form-submit" method="POST">
          <input type="hidden" name="form_type" value="freight">
          <input type="hidden" name="redirect" value="/thank-you/">
          <input type="hidden" name="form-name" value="freight">
          <div class="visually-hidden">
            <label>Do not fill this in if you are human <input type="text" name="bot-field" tabindex="-1" autocomplete="off"></label>
          </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-pickup">Pickup location <span aria-label="required">*</span></label>
            <input type="text" id="f-pickup" name="pickup" required>
          </div>
          <div class="form-group">
            <label for="f-delivery">Delivery location <span aria-label="required">*</span></label>
            <input type="text" id="f-delivery" name="delivery" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-commodity">Commodity</label>
            <input type="text" id="f-commodity" name="commodity">
          </div>
          <div class="form-group">
            <label for="f-weight">Weight (lbs)</label>
            <input type="text" id="f-weight" name="weight">
          </div>
        </div>

        <div class="form-group">
          <label for="f-dimensions">Dimensions (L x W x H)</label>
          <input type="text" id="f-dimensions" name="dimensions" placeholder="e.g. 48 x 40 x 36 inches">
        </div>

        <div class="form-group">
          <label for="f-equipment">Equipment requirements</label>
          <input type="text" id="f-equipment" name="equipment" placeholder="e.g. flatbed, dry van, step deck">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-pickup-date">Pickup date</label>
            <input type="date" id="f-pickup-date" name="pickup_date">
          </div>
          <div class="form-group">
            <label for="f-deadline">Delivery deadline</label>
            <input type="date" id="f-deadline" name="deadline">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-name">Your name <span aria-label="required">*</span></label>
            <input type="text" id="f-name" name="name" required>
          </div>
          <div class="form-group">
            <label for="f-phone">Phone <span aria-label="required">*</span></label>
            <input type="tel" id="f-phone" name="phone" required>
          </div>
        </div>

        <div class="form-group">
          <label for="f-notes">Additional notes</label>
          <textarea id="f-notes" name="notes" rows="3"></textarea>
        </div>

        <div class="form-group checkbox-group">
          <label><input type="checkbox" name="consent" value="yes" required> I agree to be contacted about this freight quote.</label>
        </div>

        <button type="submit" class="btn btn-primary">Request Freight Quote</button>
        <div class="form-status" aria-live="polite"></div>
      </form>
    </section>
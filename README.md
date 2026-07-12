# BOSSEN INC Web Presence Package

This is the complete launch package for BOSSEN INC, a Rockford, Illinois based trucking, commercial vehicle repair, roadside service, parking, and freight company owned by Paul Maksim.

## Project Structure

- `public/` — The live website. All HTML pages, CSS, JS, and images go here.
- `brand/` — Business strategy, questionnaire, SEO plan, and 90-day launch plan.
- `README.md` — This file.

## Key Files

- `public/index.html` — Homepage with trust bar, service grid, and emergency CTA.
- `public/truck-repair.html` — Truck & trailer repair services.
- `public/rebuilds.html` — Complete rebuilds and major replacements.
- `public/roadside-service.html` — Mobile roadside flow with large click-to-call.
- `public/medium-duty.html` — Medium-duty commercial vehicle service.
- `public/parking.html` — Truck & trailer parking availability and inquiry form.
- `public/freight.html` — Freight quote request and verified carrier info.
- `public/fleet-service.html` — Fleet maintenance and support.
- `public/about.html` — About Paul and BOSSEN INC (framework).
- `public/contact.html` — Contact paths and general service form.
- `public/privacy.html`, `terms.html`, `disclaimer.html`, `parking-terms.html`, `sms-consent.html` — Legal placeholders.

## Brand & Planning Documents

- `brand/business-summary.md` — Confirmed/unconfirmed facts and positioning.
- `brand/questionnaire.md` — Interview questions for Paul.
- `brand/seo-plan.md` — Local SEO keywords, structured data, and Google Business Profile plan.
- `brand/launch-plan.md` — Brand concepts, slogans, sitemap, 90-day launch plan, tech stack.

## Technology Stack

- Static HTML5, CSS3, vanilla JavaScript
- Mobile-first, accessible, semantic markup
- Google Fonts (Inter)
- Form handling currently a placeholder; connect to Netlify Forms, Formspree, or custom backend
- Host on Cloudflare Pages, Netlify, or Vercel

## Verified Information

- Business name: BOSSEN INC
- Owner: Paul Maksim
- Location: Rockford, Illinois area
- USDOT: 3358683
- MC: MC-1075161
- Status: Active interstate carrier (FMCSA)
- Operating history: Registered since approximately 2019
- Freight: General freight and machinery / large-object transportation

## Placeholders

The following must be confirmed with Paul before launch:

- Phone number, email, and physical address
- Operating hours, service area, and response times
- Specific repair and rebuild capabilities
- Parking lot details, amenities, capacity, and pricing
- Roadside service availability and 24/7 status
- Medium-duty service capabilities
- Freight lanes, equipment, and specialized services
- Warranty terms and legal policies
- Real photos and logo

## How to Test Locally

```bash
cd public
python3 -m http.server 8080
```

Open http://localhost:8080 in a browser.

## Next Steps

1. Have Paul complete the questionnaire in `brand/questionnaire.md`.
2. Replace all placeholder phone numbers (`+1-000-000-0000`) with the real number.
3. Confirm services and remove placeholder boxes.
4. Add real photos to `public/assets/images/` and update image references.
5. Connect forms to a real service (Netlify Forms, Formspree, or custom backend).
6. Set up Google Business Profile, Bing Places, Apple Business Connect, Facebook, LinkedIn, and Yelp.
7. Submit site to Google Search Console and Google Analytics.
8. Have legal counsel review privacy policy, terms, and disclaimers.

## Notes

- Do not invent certifications, experience, warranties, testimonials, or facilities.
- Do not present the “91 Excellent” third-party score as an official FMCSA safety rating.
- The FMCSA registration is not an endorsement.

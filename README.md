# BOSSEN INC Web Presence Package

This is the complete launch package for BOSSEN INC, a Rockford, Illinois based trucking, commercial vehicle repair, roadside service, parking, and freight company owned by Paul Maksim.

## Project Structure

- `src/` — Source files for the website.
  - `src/pages/` — One Markdown file per page. Paul can edit these through the CMS.
  - `src/_includes/` — HTML layout templates.
  - `src/_data/` — Global data like business info, phone, USDOT, MC.
  - `src/assets/` — CSS, JavaScript, and images.
  - `src/admin/` — Decap CMS admin files.
- `brand/` — Business strategy, questionnaire, SEO plan, and 90-day launch plan.
- `_site/` — Generated static site (do not edit; created by 11ty).
- `netlify.toml` — Netlify build settings.
- `.github/workflows/deploy-pages.yml` — Auto-deploys to GitHub Pages.

## Content Management System (CMS)

The site uses **Decap CMS** (formerly Netlify CMS). It is a free, Git-based CMS with a simple editor for Paul.

- **Admin URL:** `https://bossen-inc-cms.netlify.app/admin/`
- Paul logs in, edits pages, and clicks "Publish" — changes are saved to the GitHub repo and the site rebuilds.
- **Important:** Netlify Identity and Git Gateway must be enabled before Paul can log in. See setup instructions below.

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

## Development

```bash
npm install
npm run dev
```

The local dev server will start at `http://localhost:8080`.

## Build

```bash
npm run build
```

The site is generated in `_site/`.

## Deployments

- **Production:** GitHub Pages — `https://bradleymatera.github.io/bossen-inc-website/`
- **Dev/Preview:** Vercel — `https://bossen-inc-dev.vercel.app`
- **CMS Admin:** Netlify — `https://bossen-inc-cms.netlify.app/admin/`

## How to Finish CMS Setup

1. Open the Netlify admin dashboard: `https://app.netlify.com/sites/bossen-inc-cms/identity`
2. Click **Enable Identity**.
3. Go to **Identity → Services → Git Gateway** and click **Enable Git Gateway**.
4. Invite Paul as an Identity user.
5. Paul can then log in at `https://bossen-inc-cms.netlify.app/admin/`.

## Editing the Site

### For Paul (non-technical)

1. Go to `https://bossen-inc-cms.netlify.app/admin/`
2. Log in with the email invitation.
3. Click a page in the "Pages" collection.
4. Edit text, phone numbers, or content.
5. Click **Publish** to save changes.

### For developers

Edit files in `src/` or `src/_data/site.json` and push to `main`. GitHub Actions will rebuild and deploy to GitHub Pages.

## Legal & Compliance Notes

- Do not invent certifications, experience, warranties, testimonials, or facilities.
- Do not present the “91 Excellent” third-party score as an official FMCSA safety rating.
- The FMCSA registration is not an endorsement.

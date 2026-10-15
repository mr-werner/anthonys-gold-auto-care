# Anthony's Gold Auto Care — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.anthonysgoldautocareinc.com/ (Aurora, CO).
Preview: https://agac.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

All business content is in `src/site.js`; colors and fonts are in `src/theme.css`. `src/App.jsx` is the shared layout.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `anthonys-gold-auto-care` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `agac.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-20) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- Uses the shop's real logo card (mountains, Jeep, star) on a white plate in the header and footer, the full business card in the About section, and a favicon cut from it.
- Palette taken from the current site: black header, charcoal top bar and the #d4af37 gold band, plus the slate-navy of the logo lettering. Zilla Slab headings echo the logo's slab wordmark.
- The shop's own photos: the storefront with the classic cars in the hero and the crew photo in About. Four stock photos from the current site illustrate the service bays.
- The five service pages are condensed into one tabbed "service bays" section with each page's checklist kept.
- Replaced the review carousel, where every card read "Slide title" with a stray "Button" label, with all six reviews from the current site quoted verbatim, plus the Google rating and a link to read reviews on Google (live once the Places env vars are set). Removed an earlier quote ("This place is GOLD!") that does not appear on the current site.
- Signature motif: a gold ridgeline drawn from the mountains in the logo, used in the hero, the "Why us" band and the footer; gold-ingot labels for the shop's credentials.
- Added an online appointment request form (the current site is phone-only), hours/phone/address in a gold bar right under the hero, and an embedded map with the "behind Kohl's and Aamco" landmark from the business card.
- Removed duplicated headlines, the empty "Share by:" block and the duplicated contact block.
- No award or certification badges appear on the current site, so none are shown.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 179 is a fallback from lead research on 2026-10-14.
- Confirm the unit: the site header says #A, but the business card and one contact block say Unit C. The concept uses Unit A.
- Confirm "70+ years of combined experience", "ASE Certified Master Technicians" and "NAPA-approved parts" (all stated in the current site's copy, without badges) and whether they have ASE / NAPA AutoCare badge artwork to add.
- Confirm Anthony Gonzales is happy to be named as owner (from the business card) and the crew photo can be used; add the crew's names if wanted.
- Warranty: one review mentions "an excellent warranty"; get the actual terms before showing any warranty copy.
- Decide whether to show anthonysgold@comcast.net or set up a branded address, and where appointment requests go.
- The six quotes are copied from the current site; confirm the shop is happy to reuse them.
- A higher-resolution logo file would sharpen the header; the only source is a 528x303 scan of the business card.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.

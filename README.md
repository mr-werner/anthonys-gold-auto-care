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

- Replaced the review carousel, where every card read "Slide title" with a stray "Button" label, with real Google review data (live once the Places env vars are set) and two short quotes from the current site.
- Added an online appointment request form (the current site is phone-only).
- Put hours, address, payment options and the Google rating in the first screen.
- Removed duplicated headlines and the empty "Share by:" block; added an embedded map.
- Contact details use the shop's phone; the comcast.net address is left off the page pending a branded email.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 179 is a fallback from a third-party listing checked 2026-10-14.
- Confirm the owner's name and how they'd like the family story told; the current site never names Anthony.
- Confirm "70+ years of combined experience" and the services list (the site names Auto Repair, Auto Maintenance, Engine & Transmission Repair, AC & Heating).
- Confirm copy drawn from reviews: "customers since the early 2000s", classic-car work (a '64 Plymouth), and the "Second Opinions" service card, which is a concept suggestion.
- Warranty: one review mentions "an excellent warranty"; get the actual terms before showing any warranty copy.
- Decide whether to show anthonysgold@comcast.net or set up a branded address, and where appointment requests go.
- The two quotes are copied from reviews shown on the current site; confirm the shop is happy to reuse them.
- Replace the icon wordmark with the business's real logo, and add real photos with permission.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.

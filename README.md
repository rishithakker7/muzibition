# MUZIBITION DJs – website

One-page React + Vite site. Dark, electric-purple, mobile first.

## Run it

```bash
npm install
npm run dev        # local preview
npm run build      # production build in /dist
```

## Edit content

Everything the visitor reads lives in `src/content.js`: tagline, about text, courses, testimonials, address, phone, email and social links. Colours and fonts live in `src/theme.css`.

## Before going live

1. **Enquiry form**: create a free form at formspree.io, then paste its URL into `formEndpoint` in `src/content.js`. Until then the form opens the visitor's email app.
2. **Studio photos**: they currently load from the old muzibitiondjs.com site. Download them into `public/studio/` and change the `src` values in `content.js` to `/studio/yourfile.jpg`.
3. **Fees / batch dates**: not on the old site, so left out. Add a line to the course cards if the client wants them shown.

## Reuse for another client

1. Copy this folder.
2. Replace the data in `src/content.js`.
3. Change the accent colour and fonts in `src/theme.css` (and the Google Fonts link in `index.html`).

No component edits needed.

## Deploy

Upload the `dist/` folder to Netlify, Vercel or any static host.

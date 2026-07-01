# Michael Corcoran LMT — Professional Massage & Bodyworks

Marketing + booking website modeled on the North Hand Institute site.
Stack: **Next.js 16 / React 19 / Tailwind 4**. Fully static — no database.
Booking is handled by **Vagaro** (all "Book" buttons link to your Vagaro page).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. Import it in Vercel → it auto-detects Next.js, no config needed.
3. Add your domain **michaelcorcoranlmt.com** in Vercel → Settings → Domains.
   (Point your registrar's DNS at Vercel as instructed there.)

No environment variables are required.

## What to customize (search for `TODO:` in the code)

| File | What to edit |
|------|--------------|
| `public/logo-placeholder.svg` | Replace with your real logo (keep the filename, or update the `src` in `components/Hero.tsx`). |
| `components/Services.tsx` | Your real Vagaro service names, durations, and **prices** (currently `$00`). |
| `components/Location.tsx` | Real street address, hours, and a Google Maps embed. |
| `components/Testimonials.tsx` | Real client reviews (from Vagaro/Yelp). |
| `components/FAQ.tsx` | Adjust Q&A to your practice. |
| `public/icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico` | App/tab icons — currently placeholders. |

## Booking link

Set everywhere as:
`https://www.vagaro.com/michaelcorcoranlmt/book-now`
To change it, update the `BOOKING_URL` constant at the top of `Nav.tsx`, `Hero.tsx`,
`Services.tsx`, `Location.tsx`, and `Contact.tsx`.

## Sections (in order)

Hero → About/Bio → Modalities → Services & Pricing → Testimonials → Location & Hours → FAQ → Contact → Footer

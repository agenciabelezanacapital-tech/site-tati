# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: women 40-65+ in and around Lago Sul, Brasília, seeking wellness and quality of life through Pilates (not primarily post-injury rehab or young athletic conditioning, though the studio also serves clinical/rehabilitation cases). They arrive via a Google Ads search campaign, already searching for a local Pilates studio, and decide quickly whether to act — the job is choosing a trustworthy, established, nearby studio and taking the first step (booking a trial class).

## Product Purpose

Studio de Pilates Tatiane Lasneaux is a Pilates studio in Lago Sul, Brasília, in operation for almost 20 years. The site's sole job is converting Google Ads traffic into WhatsApp conversations that lead to a booked trial class ("aula experimental"). Every page decision is judged by whether it moves a visitor toward clicking a WhatsApp CTA.

## Positioning

Almost 20 years of continuous operation in Lago Sul, a specific and well-known neighborhood of Brasília; 5.0 rating across 77 Google reviews; clinical/therapeutic Pilates expertise (not just a generic fitness studio) combined with humanized, personalized attendance. A newer, cheaper, or more generic studio cannot truthfully claim the tenure, the clinical specialization, and the review record together.

## Operating Context

- Traffic source: Google Ads search campaigns; headline/meta must stay editable for message-match against ad copy.
- Conversion channel: WhatsApp, via `wa.me` links with a pre-filled message. Every WhatsApp button fires `whatsapp_click` through GA4 (`gtag`), Google Ads conversion (`gtag('event','conversion', ...)`), and GTM `dataLayer`. This instrumentation is load-bearing for the ad campaigns and must survive the redesign unchanged in behavior (selectors/classes may change only if `js/main.js` is updated to match).
- Live Google tag already firing in `<head>` (`AW-18181878048`); GTM/GA4/Ads-conversion IDs in `js/main.js` `CONFIG` are still placeholders (`GTM-XXXXXXX`, `G-XXXXXXXXXX`, etc.) pending the real values.
- No build step: plain HTML5 + CSS3 + vanilla JS, meant to run by opening `index.html` directly or via static hosting (Vercel/Netlify/any static host).

## Capabilities and Constraints

- Real address, phone, Instagram handle, and WhatsApp number are already correct in `js/main.js` `CONFIG` and must not be altered.
- Real studio photography exists under `images/` (recently replaced per project history) and should be (re)wired into whichever `assets/images/...` paths the new markup/CSS references.
- Keep all real content as-is: testimonials, service descriptions, FAQ, address, the 5.0/77-review claim. Do not invent, embellish, or remove factual claims — this is a visual/structural redesign, not a copy rewrite.
- Schema.org `LocalBusiness`/`ExerciseGym` JSON-LD, SEO meta (title/description/OG/Twitter/geo tags), `llms.txt`, `robots.txt`, and `sitemap.xml` encode real business data and local-SEO work already done; preserve their factual content through any markup changes.
- Static site: any new visual system must be deliverable in plain CSS (and vanilla JS if needed), no framework/build pipeline introduced.

## Brand Commitments

- Name stays exactly: "Studio de Pilates Tatiane Lasneaux".
- Existing logo stays as-is (not redesigned) — current assets: `images/logo1.svg`, `images/logo2.svg` (see also `logoDark`/`logoLight` wiring in `js/main.js`).
- Slogan on record: "Pilates é saúde. É bem-estar."

## Evidence on Hand

- Real Google reviews/testimonials already in `index.html` (Elisabeth Dantas, Paulo Leite, Patricia Nasr, Eliane, and others) and in the JSON-LD `review` array — reuse, do not fabricate new ones.
- Real aggregate rating: 5.0, 77 reviews (JSON-LD `aggregateRating`).
- Real studio photography in `images/` (exterior, interior, classes) — the set to source new hero/section imagery from instead of stock photos.
- Real address: SHIS QI 11 Bloco M, Loja 10 – Lago Sul, Brasília – DF, CEP 71625-620. Real phone/WhatsApp: (61) 99247-2800.

## Product Principles

1. Every section earns its place by moving the visitor closer to a WhatsApp click — this is a conversion instrument, not a brochure.
2. Trust and tenure are the core sell: nearly 20 years, 5.0/77 reviews, clinical expertise — surface these early and often rather than burying them.
3. Never trade real content for invented content: redesign the frame, not the facts.
4. Preserve the existing WhatsApp/GA4/Ads conversion instrumentation exactly in behavior; only extend it if a redesign adds new CTA instances.
5. Ship something a 40-65-year-old visitor scanning quickly on a phone, from a Google Ads click, can understand and act on in seconds — clarity and warmth over cleverness.

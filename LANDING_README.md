# JWS Program Landing Page — go-live steps

A single-page site selling the custom program bot. Built in the PDF's own
design language (black cover hero, cream framed sections, wave chips, goat
crest via your CDN). Conservative CSS on purpose — it renders perfectly in
Telegram's in-app browser, where most of your traffic will open it.

## Files
- index.html          the whole site (styles + script inside)
- assets/page-day.jpg      product shot — a training day with wave chips
- assets/page-closing.jpg  product shot — the Great Work page

## 1. GitHub
New repository (e.g. jws-program-landing) → upload the 3 files
(keep assets/ as a folder).

## 2. Netlify (same dance as the trade + vip pages)
Add new site → Import an existing project → GitHub → pick the repo →
Deploy. No build command, no settings — it's pure static.

## 3. Subdomain
Netlify → Domain settings → Add custom domain →
    programs.journeywithshannon.com
→ then the usual CNAME record at your DNS pointing at the Netlify site.
(If you'd rather a different subdomain, also edit 3 URLs in index.html:
the canonical link and the two og: URLs near the top.)

## 4. The Shopify redirect (matches /App /Trade /Store)
Shopify admin → Online Store → Navigation → View URL Redirects →
Create URL redirect:
    Redirect from:  /Programs
    Redirect to:    https://programs.journeywithshannon.com
Now journeywithshannon.com/Programs forwards to the landing page, same as
your other properties.

## 5. One-line check before sharing
At the bottom of index.html:  var BOT_USERNAME = "JWS_Fitness_Bot";
Make sure that's your bot's exact @username (open the bot's profile in
Telegram to confirm). Every button on the page builds its link from this
one line.

## Notes
- The goat crest + Google fonts load live from CDNs — they won't show in
  offline previews but render on the real site.
- All claims on the page are honest and match the product (free preview,
  $7.99 AUD one-time, injuries programmed around, not medical advice).
- Natural follow-up when you want it: a 5th card on the Shopify hub for
  Programs, matching the VIP/Journey/Trading/Store cards.

## Client transformations (auto-discovered)
Drop images into assets/transformations/ named 1.jpg, 2.jpg, 3.jpg ...
(.png also works). One image per client — before & after combined
side-by-side. The page finds them automatically and shows a horizontal
swipe carousel; with zero images the section stays invisible. Only post
real clients who've given written permission.

## Watermarking (do this before uploading transformations)
Open /watermark.html on the live site, drop the raw photos in, and download
the branded copies — diagonal JWS marks across the middle (can't be cropped
out) plus a corner tag with the URL, baked into the pixels in your browser.
Upload the watermarked copies to assets/transformations/, not the originals.
The page is unlisted (noindex, not in the sitemap).

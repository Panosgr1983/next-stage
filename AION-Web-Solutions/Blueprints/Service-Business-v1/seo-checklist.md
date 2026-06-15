# SEO Checklist — Service Business v1

## Schema.org
- [ ] `LocalBusiness` — name, address, phone, email, hours, URL, priceRange
- [ ] `LocalBusiness.areaServed` — list of 5-8 surrounding areas
- [ ] `FAQPage` — all question/answer pairs (min 9)
- [ ] (Optional) `aggregateRating` — if client has reviews to display
- [ ] (Optional) `Service` type for specific offerings

## Meta Tags
- [ ] `<title>` — Primary keyword + location + trust element (max 60 chars)
- [ ] `<meta description>` — Problem + solution + CTA (max 160 chars)
- [ ] `<link rel="canonical">` — production URL
- [ ] `<html lang="">` — correct locale (el for Greek, en for English)
- [ ] Open Graph — title, description, image, url, locale
- [ ] Twitter Card — summary_large_image

## Technical SEO
- [ ] `robots.txt` — Allow all, point to sitemap.xml
- [ ] `sitemap.xml` — submit to Search Console
- [ ] `favicon` + `apple-touch-icon`
- [ ] Heading hierarchy — h1 → h2 → h3 (no skips)
- [ ] Image `alt` attributes on all meaningful images
- [ ] Image `loading="lazy"` on below-fold images
- [ ] Image `decoding="async"` on non-critical images
- [ ] Image `width` + `height` on all images (prevent CLS)
- [ ] Hero image: `fetchpriority="high"`, no `loading="lazy"`, no `decoding="async"`
- [ ] LCP element preloaded via `<link rel="preload">`
- [ ] Mobile responsive — test in mobile-first index

## Local SEO
- [ ] NAP (Name, Address, Phone) consistent on site + GBP
- [ ] Google Business Profile claimed + verified
- [ ] GBP categories match services on site
- [ ] GBP has photos matching site gallery
- [ ] 10+ Google Reviews with location mentions
- [ ] Service Area section visible on site (before footer)
- [ ] Service area mentioned in Footer
- [ ] Service area mentioned in FAQ

## Analytics (Pre-Launch)
- [ ] Google Analytics 4 property created
- [ ] GA4 measurement ID added to site
- [ ] Google Search Console property verified
- [ ] sitemap.xml submitted to Search Console
- [ ] Microsoft Clarity project created + snippet added

## Image Optimization
- [ ] Format: WebP only (or AVIF if client requires)
- [ ] Quality: 80 for photos, 60-70 for icons/graphics
- [ ] Hero: 1920×1080px, ≤200KB
- [ ] Gallery: 768×512px, ≤80KB each
- [ ] Logo: ≤30KB
- [ ] Lazy load all non-hero images

## Performance Targets
| Metric | Target | Priority |
|---|---|---|
| Performance | > 90 | Medium |
| Accessibility | > 95 | High |
| SEO | > 95 | High |
| Best Practices | > 90 | Medium |
| TTFB | < 800ms | High |
| LCP | < 2.5s | High |
| CLS | < 0.1 | High |

## Structured Data Testing
- [ ] Run through Google Rich Results Test
- [ ] Run through Schema.org validator
- [ ] Preview OG tags via Facebook Sharing Debugger
- [ ] Test Twitter Card via card validator

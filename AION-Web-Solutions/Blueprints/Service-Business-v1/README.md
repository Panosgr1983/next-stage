# AION Service Business Blueprint v1

## Business Type
Local Service Business — repair, installation, maintenance, technical support.

## Page Architecture (Baseline)
1. **Hero** — Problem + Solution + Guarantee, trust bar, 2 CTAs
2. **Why Choose Us** — 6 differentiators, icon grid
3. **Social Proof (Reviews)** — Star rating + review count
4. **Services** — Cards, local photos, icons
5. **Process** — 4 steps, numbered badges, connector line
6. **FAQ** — 9 questions, accordion, FAQPage JSON-LD
7. **Service Area** — Areas served (before footer)
8. **Testimonials** — Real client quotes
9. **Contact** — Form + info + hours + map
10. **Footer** — NAP + areas + copyright

## Header Rules
- **Layout**: Logo (left) → Nav → Language → Dark toggle → Phone CTA (right)
- **Nav order**: Services → About → Gallery → Testimonials → Contact
- **Home link**: Logo only (no "Home" nav item)
- **Phone CTA**: Compact pill, one line, `text-sm`
- **Language toggle**: Icon-only (flags), no text labels
- **Logo**: White variant on dark backgrounds; dark variant on light backgrounds
- **Scroll behavior**: Transparent → white/dark glass on scroll

## Hero Rules
- **Format**: `[Service] [Category] & [Category] με [Trust Element]`
- Last word is highlight color (green)
- **Subtitle**: Short, benefit-focused, ≤25 words
- **CTA 1**: "Call Now" → `tel:` link (primary, green)
- **CTA 2**: "Free Diagnosis" → scroll to contact (secondary, ghost)
- **Trust metrics**: Single glass bar with 3 items, inline dividers
- **Background**: Real business photo (never stock), dark overlay for readability
- **Above fold at 1440px**: Logo + nav + H1 + CTAs + trust bar must all be visible

## Conversion Rules
- **CTA 1**: Always action-oriented ("Καλέστε Τώρα", "Ζητήστε Προσφορά")
- **CTA 2**: Always risk-reversal ("Δωρεάν Διάγνωση", "Δωρεάν Εκτίμηση")
- Phone always visible in header
- Trust appears high (before services)
- Social proof high on page (after Why Choose Us, before Services)

## Trust Framework
Always 3 metrics:
1. **100%** — Genuine parts / quality guarantee
2. **24-48h** — Turnaround time
3. **X Months** — Warranty period

Numbers adapt per business type. Always use numbers, never generic text.

## SEO Framework (Minimum Viable)
- [ ] Title tag (primary keyword + location + trust)
- [ ] Meta description (problem + solution + CTA)
- [ ] Canonical URL
- [ ] Open Graph (title, description, image, locale)
- [ ] Twitter Card
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] JSON-LD: LocalBusiness (with areaServed)
- [ ] JSON-LD: FAQPage
- [ ] Heading hierarchy (h1 → h2 → h3, no skips)
- [ ] Image alt attributes
- [ ] Image width + height (prevent CLS)
- [ ] WebP format (quality 80)
- [ ] favicon + apple-touch-icon

## Analytics Framework (Pre-Launch)
- [ ] Google Analytics 4 (GA4)
- [ ] Google Search Console
- [ ] Microsoft Clarity

Site is not considered production-ready without all three.

## Performance Targets (Lighthouse)
| Metric | Target |
|---|---|
| Performance | > 90 |
| Accessibility | > 95 |
| SEO | > 95 |

Beyond this = diminishing returns. Do not chase 100.

## Content Framework (Client Intake)
Always request from client before starting:
- Logo (with white variant if possible)
- Real business photos (hero, workspace, team)
- Service list with descriptions
- Working hours
- Contact info (phone, email, address)
- Google Business Profile URL
- Reviews / testimonials (with permission)
- FAQ (5-10 questions)
- Business description (for About)
- Any real repair/project photos (for case studies)

## Launch Checklist
- [ ] All sections complete
- [ ] Mobile responsive tested
- [ ] Dark/light mode tested
- [ ] Language switch works (EL/EN)
- [ ] All links functional
- [ ] Lighthouse targets met
- [ ] Analytics tools installed
- [ ] Search Console submitted
- [ ] sitemap.xml submitted
- [ ] OG preview valid
- [ ] 301 redirect if using old domain
- [ ] Client final review

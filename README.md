# Kometa Moving

Rebuild of kometa-moving.com on Next.js, using the Movexa moving-services design language.
English + Russian. See [`PLAN.md`](./PLAN.md) for the full frontend/backend roadmap.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /ru
```

```bash
npm run build && npm start   # production build
```

## Where things live

| Path | What |
|---|---|
| `src/content/site.ts` | **All copy, both locales.** Edit text here, never in components. |
| `src/app/[locale]/` | Root layout + landing page |
| `src/components/sections/` | Hero, HowItWorks, WhyUs, Services, Pricing, Testimonials, QuoteForm, Faq |
| `src/components/site/` | Header, Footer, Logo, LocaleSwitcher |
| `src/components/ui/` | Container, Button, SectionHeading, Reveal |
| `src/app/globals.css` | Design tokens (`--color-brand`, `--color-cream`, fonts, radii) |
| `src/proxy.ts` | Locale detection + `/` → `/en` \| `/ru` redirect |
| `public/images/` | **Placeholders — swap in real photos**, see `public/images/README.md` |

## Notes

- Fonts are self-hosted via `@fontsource-variable/*` — no Google Fonts request at
  build or runtime. Outfit renders Latin headings; Manrope fills in Cyrillic.
- The quote form currently fakes its submit (`TODO(phase 2)` in `QuoteForm.tsx`).
  Phase 2 wires it to `POST /api/quotes` + Prisma + email.
- Locale choice is remembered in a `NEXT_LOCALE` cookie.
- Next.js 16 note: middleware is `src/proxy.ts` (the `middleware` convention is deprecated).

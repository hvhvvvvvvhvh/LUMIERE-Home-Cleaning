# Lumière Home Cleaning — CEO Demo / Full Frontend

A modern Next.js 14 App Router frontend based on the supplied **Home Cleaning Company Website** brief.

## Included
- Premium responsive homepage with quote estimator, FAQ, service area checker and animated sections
- Modern sticky header, services dropdown, mobile navigation and animated hover states
- Modern footer with service/explore/contact groups and social links
- Services overview + four service detail pages
- About, How It Works, Reviews, Gallery, FAQ, Offers, Checklist, Contact, Careers, Blog
- Functional frontend booking and contact/careers forms with validation/success states
- Legal page placeholders ready for approved business copy
- CSS micro-interactions plus IntersectionObserver reveal animations
- Responsive breakpoints for desktop, tablet and mobile

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production phase still required
The supplied brief describes backend/admin capabilities. This delivery is the polished frontend/demo phase. Live availability, database bookings, customer accounts, cleaner assignment, payments/invoices, coupons, notifications, analytics, CMS/admin management and approved company data should be connected in the production backend phase.

## Important placeholders
Phone, email, service-area rules, reviews, exact pricing and legal copy are intentionally placeholders until the business provides approved final values.

## Final visual QA pass
This version includes a full visual polish layer across the shared design system: premium typography, refined spacing, responsive breakpoints, interactive hover states, animated cards and forms, a homepage hero carousel, improved branding/wordmark treatment, and a redesigned footer/newsletter area. The homepage Lucide Home icon is aliased to `HomeIcon` to avoid identifier collisions with page components. The project is pinned to Next.js 14.2.33 for the Windows setup used in this workflow.

## Final pre-launch polish
- Homepage hero uses a 3-slide luxury image carousel with gradient overlays, controls, counters and responsive behavior.
- Internal page heroes now use their own 3-image carousel treatment with stronger contrast overlays and slide controls.
- Gallery was redesigned with category filters, editorial presentation, stats and a stronger showcase section.
- The Autoprefixer `align-items: end` warning was replaced with `align-items: flex-end`.
- Before production, replace placeholder business contact details, service-area rules, testimonials, legal copy and editorial imagery with approved company content.

## Vercel pre-launch
1. Extract the project and run `npm install`.
2. Run `npm run dev` and inspect every route listed in the navigation.
3. Run `npm run build` locally before deploying.
4. Push the project to GitHub and import it into Vercel.
5. Confirm the production domain, approved contact details and final business imagery before publishing.

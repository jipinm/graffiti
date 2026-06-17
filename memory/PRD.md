# GRAFFITI — Premium Device Trade-In & Resale Platform (Demo)

## Original Problem Statement
Build a React web application demo for a Premium Device Trade-In & Accelerated Resale Platform with full Buy + Sell journeys, MG/21-day model, premium Apple-like polish, all mock data.

## Brand & Location
- Brand: **GRAFFITI** (renamed from ReCell, 17 Feb 2026)
- Primary location: **Kochi, Kerala** — all 6 stores in MG Road, Edappally, Kakkanad, Vyttila, Panampilly Nagar, Fort Kochi
- Currency: INR (₹)

## Architecture
- **Frontend-only React 19 app** (CRA + craco), Tailwind, shadcn/ui, lucide-react, react-icons, sonner toasts.
- **Routing**: BrowserRouter with shared `<Layout>` outlet (sticky glass nav + dark footer).
- **Mock data**: `/app/frontend/src/lib/mockData.js` — brands, models, marketplace, listings, Kochi stores, FAQs, testimonials, platform stats, How-It-Works steps.
- **Backend**: untouched (default helloworld). No API wiring yet.

## User Personas
1. **Seller** — wants quick MG payout, transparent pricing, profit share on resale.
2. **Buyer** — wants certified premium phones with 1-day return, store pickup in Kochi.
3. **Browser** — exploring trust signals before committing.

## Implemented Features (17 Feb 2026 v2 — Major UX overhaul)
### Pages
- **Home**: hero w/ animated CountUp stats, dual Buy/Sell entry cards above the fold, brand picker, **7-step How GRAFFITI Works**, bonus formula card, Why GRAFFITI (Sell + Buy blocks), trust indicators row, featured marketplace, testimonials section, FAQ accordion, store callout.
- **Sell**: 6 stages (brand → model → variant → 4-step questionnaire → OTP → final price). Questionnaire is **icon-based card UI** (yes/no per question + select-all component grid) with a **live price panel** that updates as answers change. Demo OTP = `123456`.
- **Buy**: storefront with brand/grade filters, sort, search; all stock pickup in Kochi.
- **Product Detail**: image gallery, savings, store pickup info, Reserve/Add-to-Cart toasts, what's-verified list.
- **Dashboard (/account & /dashboard)**: Seller/Buyer tabs. Seller view = MG totals, profit share, active listings, avg resale time + listings with 21-day progress. Buyer view = orders/reserved/returns/savings + recent reservations.
- **Stores**: 6-store Kochi locator with addresses, hours, phone, Directions and Call buttons.
- **How It Works** (`/how-it-works`): full 7-step page + bonus formula footer.
- **Why GRAFFITI** (`/why-graffiti`): animated platform stats, Why-Sell/Why-Buy blocks, 5 trust pillars, testimonials, final CTA.
- **FAQs** (`/faqs`): searchable expandable accordion (9 FAQs).
- **Track My Device** (`/track`): search by listing ID, sample timeline with active-day badge.
- **Contact** (`/contact`): form with topic chips + multiple contact channels.

### Components
- Expanded header: announcement strip (Kochi + phone), sticky glass nav with 8 primary nav items (Home, Sell Device, Buy Devices, How It Works, Why GRAFFITI, Stores, FAQs, Contact), prominent Sell Now + Buy Now CTAs, tablet hamburger, mobile drawer with utility links (Track / My Account).
- Dark premium footer with 5 columns (brand, Platform, Company, Stores, Legal).
- `CountUp` reusable animated counter component.

### Testing
- iteration_1 — 100% pass (ReCell baseline)
- iteration_2 — 100% pass after GRAFFITI rebrand + 4 new pages. Zero console errors.

## Prioritized Backlog
**P0 (next)**
- Wire FastAPI backend for OTP and listings persistence.
- Add Emergent Google Auth on `/account`.
- Hook contact form to a real email/CRM endpoint.

**P1**
- Cart drawer + checkout route (`/checkout`) with reservation confirmation.
- Image upload during Sell flow (device photos) — Object Storage.
- Real-time WebSocket "bid" updates on the dashboard.
- KYC document upload step before MG payout.

**P2**
- Laptop trade-in extension.
- B2B liquidation portal.
- Referral program & city-specific SEO landing pages.

## Next Action Items
1. Confirm Kochi store addresses are representative; adjust copy if needed.
2. Decide whether to wire a real backend or keep frontend-only for further iterations.
3. Consider adding Emergent Google Auth on `/account` so the seller dashboard becomes personalised.

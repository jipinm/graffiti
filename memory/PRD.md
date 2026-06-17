# ReCell — Premium Device Trade-In & Resale Platform (Demo)

## Original Problem Statement
Build a React web application demo (no backend data) for a Premium Device Trade-In & Accelerated Resale Platform documented in `report.txt`. The website must be responsive, user-friendly, with a modern, trending, visually appealing design that is professional and well-branded (like Apple or Samsung), suited to a mobile phone selling platform.

## Architecture (Implemented)
- **Frontend-only React 19 app** (CRA + craco), Tailwind + shadcn/ui, lucide-react, react-icons (brand logos), framer-motion, sonner toasts.
- **Routing**: BrowserRouter with shared `<Layout>` outlet (sticky glass nav + footer).
- **Mock data layer**: `/app/frontend/src/lib/mockData.js` — brands, models, marketplace, dashboard listings, stores.
- **Pages**: Home, Sell (multi-stage), Buy storefront, Product Detail, Seller Dashboard, Stores.
- **Backend**: untouched (default `helloworld`). No API integration this iteration.

## User Personas
1. **Seller (Aarav)** — wants quick MG payout, fair price, transparent 21-day resale window.
2. **Buyer** — wants certified pre-owned phones, store pickup, 1-day return.
3. **Browser** — landing visitor exploring the brand and trust signals.

## Core Requirements (Static)
- Apple-store-grade premium aesthetic: light theme, electric blue (#0066CC) accent, Outfit/Manrope fonts, generous spacing, rounded-3xl surfaces, glass nav.
- Sell flow: brand → model → variant → 4-step questionnaire → mobile OTP → exact price → Sell Now.
- Buy flow: storefront grid with filter chips (brand/grade), sort, search, PDP with store-pickup CTA.
- Seller dashboard: MG total, profit share, active listings, 21-day countdown progress bars.
- Store locator: 6 cities, address, hours, directions CTA.

## Implemented (17 Feb 2026)
- Home page with hero, brand picker, How-It-Works (3 steps), featured marketplace, trust strip, store callout.
- Multi-stage Sell flow with derived price calc (storage/RAM + per-question impacts), OTP gating (demo OTP `123456`).
- Buy storefront with live filters/search/sort and PDP with savings + benefits.
- Seller dashboard with stat cards + 21-day progress bars + status badges.
- Store locator across 6 Indian cities.
- Responsive nav with mobile menu.
- All major elements have data-testid attributes.
- Tested end-to-end (frontend) — 100% of critical flows passing, 0 console errors.

## Prioritized Backlog
**P0 (next iteration)**
- Wire a minimal FastAPI backend for OTP and listings persistence (currently 100% mocked).
- Add a `/checkout` route for the Buy flow with reserved-pickup confirmation.
- Add account auth (Emergent Google Auth or JWT) for the dashboard.

**P1**
- Real-time price ticker using `framer-motion` count-up on the exact-value reveal.
- KYC document upload flow before MG payout.
- Buyer cart drawer with persistent state.
- Admin / Ops dashboard for hub inspectors.

**P2**
- Laptop trade-in extension.
- Wholesale (B2B) liquidation portal.
- Referral program & SEO landing pages per city.

## Next Action Items
1. Confirm visual direction with user; gather any color/copy tweaks.
2. If retained, wire minimal backend for OTP + listings persistence.
3. Add Emergent Google Auth for the dashboard.

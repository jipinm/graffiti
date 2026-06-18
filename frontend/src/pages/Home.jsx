import { Link } from "react-router-dom";
import {
  ArrowUpRight, ShieldCheck, Banknote, Clock4, Sparkles, Search,
  TrendingUp, Check, Star, MessageCircle, ArrowRight,
  Zap, BadgeIndianRupee, Layers, Wallet,
} from "lucide-react";
import { useState } from "react";
import {
  BRANDS, MARKETPLACE, STORE_IMG, formatINR,
  HOW_IT_WORKS, PLATFORM_STATS, TESTIMONIALS, FAQS, BRAND_CITY,
} from "@/lib/mockData";
import CountUp from "@/components/CountUp";

export default function Home() {
  const [q, setQ] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div data-testid="home-page">
      {/* SPLIT HERO — Sell journey (left) · Buy journey (right) */}
      <section className="relative recell-grain border-b border-[#E5E5EA]" data-testid="split-hero">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch" data-testid="split-hero-grid">
            {/* ============== LEFT — SELL ============== */}
            <div
              className="relative bg-[#0a0a0b] text-white rounded-3xl p-7 lg:p-10 overflow-hidden recell-fade-up flex flex-col"
              data-testid="hero-sell-panel"
              style={{ animationDelay: "0ms" }}
            >
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0066CC]/35 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#0066CC]/20 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-[11px] uppercase tracking-wider font-semibold text-white">
                  <Zap className="h-3.5 w-3.5 text-[#0066CC]" /> For sellers · Kochi
                </div>

                <h1
                  className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tighter leading-[1.02]"
                  style={{ fontFamily: "Outfit" }}
                >
                  Sell your mobile phone <span className="text-[#0066CC]">instantly.</span>
                </h1>

                <p className="mt-3 text-sm lg:text-base text-white/65 max-w-md leading-relaxed">
                  Walk in. Get a guaranteed minimum price the same day. We list it on the GRAFFITI marketplace and pay you the bonus when it sells.
                </p>

                <ul className="mt-6 space-y-3" data-testid="hero-sell-benefits">
                  {[
                    { Icon: Zap, t: "Sell your mobile phone instantly", d: "Quote in 60 seconds, payout the same business day." },
                    { Icon: BadgeIndianRupee, t: "Get a guaranteed minimum price", d: "Our MG is locked in — no haggling, no surprises." },
                    { Icon: Layers, t: "Listed on the platform for resale", d: "21-day window on the GRAFFITI marketplace." },
                    { Icon: Wallet, t: "Receive final payout once sold", d: "Bonus = Selling Price − MG − Platform Fee." },
                  ].map(({ Icon, t, d }, i) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 recell-fade-up"
                      style={{ animationDelay: `${120 + i * 90}ms` }}
                    >
                      <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#0066CC]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium leading-snug">{t}</div>
                        <div className="text-xs text-white/55 mt-0.5">{d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/sell"
                  data-testid="hero-cta-sell"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0066CC] text-white font-medium hover:bg-[#0055AA] transition-colors"
                >
                  Get a free quote
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  data-testid="hero-cta-howitworks"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium transition-colors backdrop-blur"
                >
                  How it works
                </Link>
              </div>

              <div className="relative mt-7 pt-5 border-t border-white/10 grid grid-cols-4 gap-3">
                {PLATFORM_STATS.map((s) => (
                  <div key={s.id} data-testid={`hero-stat-${s.id}`}>
                    <div className="text-base lg:text-xl font-semibold tabular-nums" style={{ fontFamily: "Outfit" }}>
                      <CountUp value={s.value} decimals={s.value % 1 ? 1 : 0} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-white/45 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ============== RIGHT — BUY ============== */}
            <div
              className="relative bg-[#F5F5F7] rounded-3xl p-7 lg:p-10 flex flex-col recell-fade-up"
              data-testid="hero-buy-panel"
              style={{ animationDelay: "60ms" }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[11px] uppercase tracking-wider font-semibold text-[#0066CC] border border-[#0066CC]/15">
                    <Star className="h-3.5 w-3.5 fill-[#FF9500] text-[#FF9500]" /> Hot deals today
                  </div>
                  <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tighter leading-[1.05]" style={{ fontFamily: "Outfit" }}>
                    Buy certified phones,<br />picked up in Kochi.
                  </h2>
                </div>
                <Link
                  to="/buy"
                  data-testid="hero-buy-browse-top"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#0066CC] hover:underline shrink-0 mt-1"
                >
                  Browse all <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 lg:gap-4 flex-1" data-testid="hero-buy-grid">
                {MARKETPLACE.slice(0, 4).map((p, i) => {
                  const off = Math.round((1 - p.price / p.mrp) * 100);
                  return (
                    <Link
                      to={`/buy/${p.id}`}
                      key={p.id}
                      data-testid={`hero-deal-${p.id}`}
                      className="group bg-white rounded-2xl p-3 lg:p-4 flex flex-col recell-card-hover recell-fade-up"
                      style={{ animationDelay: `${120 + i * 90}ms` }}
                    >
                      <div className="relative bg-[#F5F5F7] rounded-xl aspect-[5/4] overflow-hidden flex items-center justify-center">
                        <img
                          src={p.image}
                          alt={p.model}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider font-semibold text-[#0066CC] bg-white/95 backdrop-blur px-2 py-0.5 rounded-full border border-[#0066CC]/20">
                          {p.grade}
                        </span>
                        <span className="absolute top-2 right-2 text-[9px] font-semibold text-white bg-[#34C759] px-2 py-0.5 rounded-full">
                          {off}% off
                        </span>
                      </div>
                      <div className="mt-3 flex-1 flex flex-col">
                        <div className="text-[13px] font-medium leading-tight line-clamp-1">{p.model}</div>
                        <div className="text-[11px] text-[#86868B] mt-0.5 line-clamp-1">{p.variant}</div>
                        <div className="mt-2 flex items-baseline gap-1.5">
                          <div className="text-base font-semibold" style={{ fontFamily: "Outfit" }}>{formatINR(p.price)}</div>
                          <div className="text-[10px] text-[#86868B] line-through">{formatINR(p.mrp)}</div>
                        </div>
                        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#86868B]">
                            <Star className="h-3 w-3 fill-[#FF9500] text-[#FF9500]" /> {p.rating}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0066CC] group-hover:gap-1.5 transition-all">
                            View <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
                <div className="text-xs text-[#86868B]">
                  Showing 4 of {MARKETPLACE.length} certified phones · Kochi pickup
                </div>
                <Link
                  to="/buy"
                  data-testid="hero-buy-browse-more"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white text-sm font-medium transition-colors"
                >
                  Browse all phones <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16" data-testid="brand-selector-grid">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Get started</div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight" style={{fontFamily:"Outfit"}}>
              Pick your brand. Get an instant estimate.
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] w-full sm:w-80">
            <Search className="h-4 w-4 text-[#86868B]" />
            <input
              data-testid="home-search-input"
              value={q} onChange={(e)=>setQ(e.target.value)}
              placeholder="Search iPhone 15, Galaxy S24…"
              className="bg-transparent text-sm outline-none flex-1 placeholder:text-[#86868B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANDS.map(({id, name, Icon}) => (
            <Link
              key={id}
              to={`/sell?brand=${id}`}
              data-testid={`brand-card-${id}`}
              className="recell-card-hover group bg-white border border-[#E5E5EA] rounded-2xl p-6 flex flex-col items-center justify-center aspect-square text-center"
            >
              <Icon className="h-10 w-10 text-[#1D1D1F] group-hover:text-[#0066CC] transition-colors" />
              <div className="mt-4 text-sm font-medium">{name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-[#86868B]">Get a quote</div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — 7 steps */}
      <section className="bg-[#F5F5F7]" data-testid="how-graffiti-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Process</div>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
                How <span className="text-[#0066CC]">GRAFFITI</span> works
              </h2>
              <p className="mt-4 text-[#86868B] max-w-xl">
                Seven simple steps from the day you submit your phone to the day your bonus hits your account. Transparent at every stage.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link to="/how-it-works" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-sm font-medium transition-colors" data-testid="how-it-works-link">
                See the full process <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS.slice(0, 7).map((step, idx) => (
              <StepCard key={step.n} step={step} highlight={idx === 6} />
            ))}
            <Link to="/sell" data-testid="how-it-works-start"
              className="bg-[#0066CC] text-white rounded-3xl p-6 flex flex-col justify-between recell-card-hover">
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-white/60">Ready?</div>
                <div className="mt-3 text-xl font-semibold" style={{fontFamily:"Outfit"}}>Start your free valuation now</div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Get a quote <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          {/* Bonus formula highlight */}
          <div className="mt-10 bg-white rounded-3xl p-6 lg:p-8 border border-[#E5E5EA] flex items-center flex-wrap gap-4" data-testid="bonus-formula">
            <div className="h-12 w-12 rounded-2xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center shrink-0">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-[220px]">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">The bonus formula</div>
              <div className="mt-1 text-lg sm:text-xl font-medium" style={{fontFamily:"Outfit"}}>
                Bonus&nbsp;=&nbsp;<span className="text-[#0066CC]">Selling Price</span>&nbsp;−&nbsp;Minimum Guarantee&nbsp;−&nbsp;Platform Fee
              </div>
            </div>
            <Link to="/faqs" className="text-sm font-medium text-[#0066CC] inline-flex items-center gap-1 hover:underline">
              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY GRAFFITI — split: Why Sell + Why Buy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-testid="why-graffiti">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Why GRAFFITI</div>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter max-w-2xl" style={{fontFamily:"Outfit"}}>
          Built on trust. Engineered for upside.
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <BenefitCard
            title="Why sell with GRAFFITI?"
            color="dark"
            items={[
              { icon: Banknote, t: "Instant Minimum Guarantee", d: "Money in your bank the same business day." },
              { icon: Sparkles, t: "Transparent pricing", d: "No haggling — every deduction is itemised." },
              { icon: ShieldCheck, t: "Certified inspection", d: "Lab-grade verification at every store." },
              { icon: Clock4, t: "Real-time tracking", d: "Watch the 21-day resale window from your dashboard." },
              { icon: TrendingUp, t: "Profit share on resale", d: "You earn when we earn — automatically." },
            ]}
            cta={{ to: "/sell", label: "Start a quote" }}
          />
          <BenefitCard
            title="Why buy from GRAFFITI?"
            color="light"
            items={[
              { icon: ShieldCheck, t: "Certified mobile phones", d: "Cleared on IMEI, carrier and police databases." },
              { icon: Check, t: "Verified original components", d: "OEM screen, battery and camera modules only." },
              { icon: Star, t: "Quality assurance", d: "Every phone passes a 64-point inspection." },
              { icon: Banknote, t: "Competitive pricing", d: "Below market — without the sketchy resellers." },
              { icon: Clock4, t: "1-day return policy", d: "Walk in, walk out — peace of mind included." },
            ]}
            cta={{ to: "/buy", label: "Browse certified" }}
          />
        </div>

        {/* Trust indicators row */}
        <div className="mt-10 bg-[#F5F5F7] rounded-3xl p-6 lg:p-8" data-testid="trust-indicators">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {[
              { Icon: ShieldCheck, t: "Verified inspections" },
              { Icon: Banknote, t: "Secure payments" },
              { Icon: Check, t: "KYC verification" },
              { Icon: Sparkles, t: "Original invoice check" },
              { Icon: Clock4, t: "IMEI validation" },
            ].map(({Icon, t}) => (
              <div key={t} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#0066CC]" />
                </div>
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0a0a0b] text-white" data-testid="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-xs uppercase tracking-wider font-semibold text-white/50">Loved in Kochi</div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter max-w-2xl" style={{fontFamily:"Outfit"}}>
            Real customers. Real payouts.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 rounded-3xl p-7 recell-card-hover" data-testid={`testimonial-${t.id}`}>
                <div className="flex items-center gap-1 text-[#FFD60A]">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-[#FFD60A]" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/85">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0066CC] flex items-center justify-center font-semibold">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS (compact) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-testid="home-faqs">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">FAQ</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
              Common questions, answered honestly
            </h2>
            <p className="mt-4 text-[#86868B] text-sm leading-relaxed">
              We're transparent about how the MG model works. Tap a question to see the answer.
            </p>
            <Link to="/faqs" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0066CC] hover:underline" data-testid="home-faqs-all">
              See all FAQs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8 space-y-2">
            {FAQS.slice(0, 5).map((f, i) => (
              <button
                key={i}
                data-testid={`faq-row-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full text-left bg-[#F5F5F7] hover:bg-[#EFEFF1] transition-colors rounded-2xl px-5 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base font-medium">{f.q}</span>
                  <span className={`h-7 w-7 rounded-full bg-white flex items-center justify-center text-[#0066CC] transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </div>
                {openFaq === i && (
                  <p className="mt-3 text-sm text-[#1D1D1F]/80 leading-relaxed">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STORE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24" data-testid="store-callout">
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F5F5F7] rounded-3xl overflow-hidden">
          <div className="lg:col-span-6 p-8 lg:p-14">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Stores · Kochi</div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
              6 flagship stores. Pick up the same day.
            </h2>
            <p className="mt-4 text-[#86868B] leading-relaxed max-w-md">
              MG Road, Edappally, Kakkanad, Vyttila, Panampilly Nagar, Fort Kochi — every phone is inspected, cleaned and packed on-site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/stores" data-testid="store-callout-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white text-sm font-medium hover:bg-black transition-colors">
                Find a store <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1D1D1F] text-sm font-medium hover:bg-white/80 transition-colors">
                <MessageCircle className="h-4 w-4" /> Talk to us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-full">
            <div className="aspect-[5/4] lg:aspect-auto lg:h-full">
              <img src={STORE_IMG} alt="GRAFFITI Kochi store" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ step, highlight }) {
  return (
    <div
      data-testid={`how-step-${step.n}`}
      className={`rounded-3xl p-6 recell-card-hover border ${
        highlight ? "bg-[#1D1D1F] text-white border-[#1D1D1F]" : "bg-white border-[#E5E5EA]"
      }`}
    >
      <div className={`text-4xl font-semibold ${highlight ? "text-white" : "text-[#0066CC]"}`} style={{fontFamily:"Outfit"}}>{step.n}</div>
      <h3 className="mt-3 text-base font-semibold" style={{fontFamily:"Outfit"}}>{step.title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${highlight ? "text-white/70" : "text-[#86868B]"}`}>{step.body}</p>
    </div>
  );
}

function BenefitCard({ title, items, color, cta }) {
  const isDark = color === "dark";
  return (
    <div className={`rounded-3xl p-7 lg:p-10 ${isDark ? "bg-[#1D1D1F] text-white" : "bg-[#F5F5F7]"}`}>
      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map(({icon: Icon, t, d}) => (
          <div key={t} className="flex items-start gap-3">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${isDark ? "bg-white/10" : "bg-white"}`}>
              <Icon className={`h-4 w-4 ${isDark ? "text-white" : "text-[#0066CC]"}`} />
            </div>
            <div>
              <div className="text-sm font-medium">{t}</div>
              <div className={`text-xs mt-0.5 ${isDark ? "text-white/60" : "text-[#86868B]"}`}>{d}</div>
            </div>
          </div>
        ))}
      </div>
      <Link to={cta.to}
        className={`mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
          isDark ? "bg-white text-[#1D1D1F] hover:bg-white/90" : "bg-[#1D1D1F] text-white hover:bg-black"
        }`}
      >
        {cta.label} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

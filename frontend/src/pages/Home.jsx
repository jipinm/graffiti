import { Link } from "react-router-dom";
import {
  ArrowUpRight, ShieldCheck, Banknote, Clock4, Sparkles, Search,
  TrendingUp, Check, Star, MessageCircle, MapPin, ArrowRight,
} from "lucide-react";
import { useState } from "react";
import {
  BRANDS, MARKETPLACE, HERO_IMG, STORE_IMG, formatINR,
  HOW_IT_WORKS, PLATFORM_STATS, TESTIMONIALS, FAQS, BRAND_CITY,
} from "@/lib/mockData";
import CountUp from "@/components/CountUp";

export default function Home() {
  const [q, setQ] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative recell-grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 recell-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] text-xs uppercase tracking-wider font-semibold text-[#0066CC]">
                <Sparkles className="h-3.5 w-3.5" /> Now live in Kochi
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.98]" style={{fontFamily:"Outfit"}}>
                Trade smarter.<br />
                <span className="text-[#0066CC]">Buy certified.</span>
              </h1>
              <p className="mt-6 text-lg text-[#86868B] max-w-xl leading-relaxed">
                GRAFFITI guarantees a fair minimum price the day you walk in — and shares the upside when your phone resells in our 21-day window. Verified, original, like-new only.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/sell" data-testid="hero-cta-sell"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0066CC] text-white font-medium hover:bg-[#0055AA] transition-colors group">
                  Sell your Mobile Phone <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link to="/buy" data-testid="hero-cta-buy"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-medium transition-colors">
                  Browse certified phones
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-3 max-w-2xl">
                {PLATFORM_STATS.map((s) => (
                  <div key={s.id} className="border-l border-[#E5E5EA] pl-3" data-testid={`hero-stat-${s.id}`}>
                    <div className="text-xl sm:text-2xl font-semibold tabular-nums" style={{fontFamily:"Outfit"}}>
                      <CountUp value={s.value} decimals={s.value % 1 ? 1 : 0} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#86868B] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 recell-scale-in">
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F5F7] aspect-[4/5]">
                <img src={HERO_IMG} alt="Premium mobile phone" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur text-[10px] uppercase tracking-wider text-white font-semibold">
                  Today's top quote
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-[#86868B]">iPhone 15 Pro · 256 GB</div>
                      <div className="text-sm font-medium mt-0.5">Like-new condition</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-[#86868B]">Get up to</div>
                      <div className="text-2xl font-bold text-[#0066CC] recell-price-counter" style={{fontFamily:"Outfit"}}>₹78,500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUY vs SELL DUAL CARDS — above-the-fold-ish entry points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 lg:mt-0 pb-4">
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6" data-testid="dual-entry">
          <Link to="/sell" className="recell-card-hover group block bg-[#1D1D1F] text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden" data-testid="entry-sell">
            <div className="text-xs uppercase tracking-wider font-semibold text-white/50">For sellers</div>
            <h3 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>Sell your Mobile Phone</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> Instant valuation in 60 seconds</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> MG paid the same business day</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> Track sale in real time</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> Earn profit share on resale</li>
            </ul>
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066CC] group-hover:bg-[#0055AA] transition-colors text-sm font-medium">
              Get a quote <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link to="/buy" className="recell-card-hover group block bg-[#F5F5F7] rounded-3xl p-8 lg:p-10 relative overflow-hidden" data-testid="entry-buy">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">For buyers</div>
            <h3 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>Buy certified mobile phones</h3>
            <ul className="mt-5 space-y-2 text-sm text-[#1D1D1F]">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> Verified premium phones & laptops</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> 64-point quality inspection</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> Pickup at any Kochi store</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0066CC]" /> 1-day in-store return policy</li>
            </ul>
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D1D1F] group-hover:bg-black text-white transition-colors text-sm font-medium">
              Browse marketplace <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
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

      {/* FEATURED BUY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16" data-testid="featured-buy">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Marketplace</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
              Certified pre-owned. Like new.
            </h2>
          </div>
          <Link to="/buy" data-testid="featured-view-all"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0066CC] hover:underline">
            View marketplace <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MARKETPLACE.slice(0,4).map((p) => (
            <Link to={`/buy/${p.id}`} key={p.id} className="block recell-card-hover" data-testid={`featured-card-${p.id}`}>
              <div className="bg-[#F5F5F7] rounded-3xl p-6 aspect-square flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.model} className="max-h-full max-w-full object-contain rounded-xl" />
              </div>
              <div className="px-1 mt-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-medium">{p.model}</div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0066CC] bg-[#0066CC]/10 px-2 py-1 rounded-full">{p.grade}</span>
                </div>
                <div className="text-xs text-[#86868B] mt-1">{p.variant} · {p.color}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>{formatINR(p.price)}</div>
                  <div className="text-xs text-[#86868B] line-through">{formatINR(p.mrp)}</div>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-[#86868B]">
                  <MapPin className="h-3 w-3 text-[#0066CC]" /> {p.store}
                </div>
              </div>
            </Link>
          ))}
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

import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Banknote, Clock4, Sparkles, Search } from "lucide-react";
import { useState } from "react";
import { BRANDS, MARKETPLACE, HERO_IMG, STORE_IMG, formatINR } from "@/lib/mockData";

export default function Home() {
  const [q, setQ] = useState("");

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative recell-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 recell-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] text-xs uppercase tracking-wider font-semibold text-[#0066CC]">
                <Sparkles className="h-3.5 w-3.5" /> Instant Minimum Guarantee
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05]" style={{fontFamily:"Outfit"}}>
                Sell your phone in 24 hours.<br />
                <span className="text-[#0066CC]">Get paid upfront.</span>
              </h1>
              <p className="mt-6 text-lg text-[#86868B] max-w-xl leading-relaxed">
                ReCell guarantees a fair minimum price the day you walk in — and shares the upside if it sells higher in 21 days. Verified, original, like-new devices only.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/sell" data-testid="hero-cta-sell"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0066CC] text-white font-medium hover:bg-[#0055AA] transition-colors">
                  Get a quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/buy" data-testid="hero-cta-buy"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-medium transition-colors">
                  Browse certified phones
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { k: "24h", v: "MG payout" },
                  { k: "21-day", v: "Resale window" },
                  { k: "100%", v: "IMEI verified" },
                ].map((s) => (
                  <div key={s.k} className="border-l border-[#E5E5EA] pl-4">
                    <div className="text-2xl font-semibold" style={{fontFamily:"Outfit"}}>{s.k}</div>
                    <div className="text-xs uppercase tracking-wider text-[#86868B] mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 recell-scale-in">
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F5F7] aspect-[4/5]">
                <img src={HERO_IMG} alt="Premium device" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur px-5 py-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#86868B]">{"Today\u2019s top quote"}</div>
                      <div className="text-lg font-semibold mt-1" style={{fontFamily:"Outfit"}}>iPhone 15 Pro · 256 GB</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#86868B]">Get up to</div>
                      <div className="text-2xl font-semibold text-[#0066CC] recell-price-counter" style={{fontFamily:"Outfit"}}>₹78,500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16" data-testid="brand-selector-grid">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Step 1</div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight" style={{fontFamily:"Outfit"}}>
              Pick your brand. Get an instant estimate.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] w-80">
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
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F5F5F7]" data-testid="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Process</div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight max-w-2xl" style={{fontFamily:"Outfit"}}>
            Three clean steps. No haggling. No surprises.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { n:"01", t:"Get a quote online", d:"Tell us your model, variant and condition. We respond with a transparent estimated range in under 60 seconds.", Icon: Sparkles },
              { n:"02", t:"Walk-in or courier", d:"Visit a ReCell store or send your device via our secure courier. A certified technician completes the inspection.", Icon: ShieldCheck },
              { n:"03", t:"Get paid instantly", d:"The Minimum Guarantee lands in your bank account the same day. Profit share follows when your phone resells.", Icon: Banknote },
            ].map(({n,t,d,Icon}) => (
              <div key={n} className="bg-white rounded-3xl p-8 border border-[#E5E5EA] recell-card-hover">
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-semibold text-[#0066CC]" style={{fontFamily:"Outfit"}}>{n}</div>
                  <Icon className="h-6 w-6 text-[#1D1D1F]" />
                </div>
                <h3 className="mt-6 text-xl font-medium" style={{fontFamily:"Outfit"}}>{t}</h3>
                <p className="mt-2 text-sm text-[#86868B] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BUY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-testid="featured-buy">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Marketplace</div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight" style={{fontFamily:"Outfit"}}>
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: ShieldCheck, t:"IMEI Verified", d:"Cross-checked with carrier and police databases" },
              { Icon: Banknote, t:"Paid in 24 Hours", d:"MG hits your account same business day" },
              { Icon: Clock4, t:"21-Day Resale", d:"Earn profit share when your phone resells" },
              { Icon: Sparkles, t:"Original Parts Only", d:"Lab-certified screen and battery" },
            ].map(({Icon,t,d}) => (
              <div key={t} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#0066CC]" />
                </div>
                <div>
                  <div className="text-sm font-medium">{t}</div>
                  <div className="text-xs text-[#86868B] mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" data-testid="store-callout">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Stores</div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight" style={{fontFamily:"Outfit"}}>
              12 flagship stores. Pick up the same day.
            </h2>
            <p className="mt-4 text-[#86868B] leading-relaxed max-w-md">
              {"Every certified ReCell phone is checked, cleaned and packed in-store. Walk in, verify your device, walk out with a phone you\u2019ll trust."}
            </p>
            <Link to="/stores" data-testid="store-callout-cta"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white text-sm font-medium hover:bg-black transition-colors">
              Find a store near you <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden aspect-[5/4]">
              <img src={STORE_IMG} alt="ReCell store" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ShieldCheck, Banknote, Sparkles, Clock4, TrendingUp, Check, Star, ArrowRight, Lock, FileText, Cpu } from "lucide-react";
import { TESTIMONIALS, PLATFORM_STATS } from "@/lib/mockData";
import CountUp from "@/components/CountUp";

export default function WhyGraffiti() {
  return (
    <div data-testid="why-graffiti-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Why GRAFFITI</div>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-3xl" style={{fontFamily:"Outfit"}}>
          The honest way to <span className="text-[#0066CC]">trade premium devices.</span>
        </h1>
        <p className="mt-5 text-lg text-[#86868B] max-w-2xl">
          We built GRAFFITI to remove the friction, suspicion and shady pricing of the second-hand phone market. Here is what makes us different.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_STATS.map((s) => (
            <div key={s.id} className="bg-[#F5F5F7] rounded-3xl p-6" data-testid={`why-stat-${s.id}`}>
              <div className="text-3xl sm:text-4xl font-semibold tabular-nums" style={{fontFamily:"Outfit"}}>
                <CountUp value={s.value} decimals={s.value % 1 ? 1 : 0} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-[#86868B]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" data-testid="why-sellers">
        <div className="grid lg:grid-cols-2 gap-5">
          <Block dark title="Why sell with GRAFFITI?" items={[
            { Icon: Banknote, t: "Instant Minimum Guarantee", d: "MG paid the same business day — no waiting for a buyer." },
            { Icon: Sparkles, t: "Transparent pricing", d: "Every deduction is itemised before you commit." },
            { Icon: ShieldCheck, t: "Professional inspection", d: "Certified technicians, lab-grade tools." },
            { Icon: Clock4, t: "Real-time tracking", d: "Watch the 21-day window from your dashboard." },
            { Icon: TrendingUp, t: "Profit share on resale", d: "If we sell it for more, you earn more — automatically." },
          ]} />
          <Block title="Why buy from GRAFFITI?" items={[
            { Icon: ShieldCheck, t: "Certified devices", d: "Cleared on IMEI, carrier and police databases." },
            { Icon: Check, t: "Verified original components", d: "OEM screen, battery and camera modules only." },
            { Icon: Star, t: "Quality assurance", d: "Every device passes a 64-point inspection." },
            { Icon: Banknote, t: "Competitive pricing", d: "Below market — without the dodgy resellers." },
            { Icon: Clock4, t: "1-day return policy", d: "Walk in, walk out — peace of mind included." },
          ]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" data-testid="trust-pillars">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>Trust, baked in.</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { Icon: ShieldCheck, t: "Verified inspections", d: "Lab-certified parts" },
            { Icon: Lock, t: "Secure payments", d: "PCI-DSS gateways" },
            { Icon: FileText, t: "KYC verification", d: "Govt-ID matched" },
            { Icon: Sparkles, t: "Original invoice check", d: "Where applicable" },
            { Icon: Cpu, t: "IMEI validation", d: "Carrier + police DB" },
          ].map(({Icon, t, d}) => (
            <div key={t} className="bg-white border border-[#E5E5EA] rounded-2xl p-5">
              <div className="h-10 w-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <Icon className="h-5 w-5 text-[#0066CC]" />
              </div>
              <div className="mt-4 text-sm font-semibold">{t}</div>
              <div className="text-xs text-[#86868B] mt-1">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>Loved in Kochi.</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#F5F5F7] rounded-3xl p-6">
              <div className="flex items-center gap-1 text-[#FF9500]">
                {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-[#FF9500]" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-semibold">{t.initial}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-[#86868B]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1D1D1F] text-white rounded-3xl p-8 lg:p-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight" style={{fontFamily:"Outfit"}}>Ready to trade with confidence?</h3>
            <p className="mt-2 text-white/60 text-sm max-w-lg">Get a quote in 60 seconds or browse certified phones at any of our 6 Kochi stores.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/sell" className="px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-sm font-medium inline-flex items-center gap-2">Sell now <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/buy" className="px-6 py-3 rounded-full bg-white text-[#1D1D1F] hover:bg-white/90 text-sm font-medium">Buy now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ dark, title, items }) {
  return (
    <div className={`rounded-3xl p-7 lg:p-10 ${dark ? "bg-[#1D1D1F] text-white" : "bg-[#F5F5F7]"}`}>
      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map(({Icon, t, d}) => (
          <div key={t} className="flex items-start gap-3">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${dark ? "bg-white/10" : "bg-white"}`}>
              <Icon className={`h-4 w-4 ${dark ? "text-white" : "text-[#0066CC]"}`} />
            </div>
            <div>
              <div className="text-sm font-medium">{t}</div>
              <div className={`text-xs mt-0.5 ${dark ? "text-white/60" : "text-[#86868B]"}`}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

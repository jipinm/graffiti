import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, ShieldCheck, Banknote, Calendar, LineChart, TrendingUp, Check, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/mockData";

const ICON_MAP = { Sparkles, ShieldCheck, Banknote, Calendar, LineChart, TrendingUp, Check };

export default function HowItWorks() {
  return (
    <div data-testid="how-it-works-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-16 lg:pb-12">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">How it works</div>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-3xl" style={{fontFamily:"Outfit"}}>
          The GRAFFITI process, end-to-end.
        </h1>
        <p className="mt-5 text-lg text-[#86868B] max-w-2xl leading-relaxed">
          We pay you upfront, list your device for 21 days, and share the bonus when it sells. Seven steps. Zero ambiguity.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-testid="how-it-works-steps">
        <div className="space-y-4 lg:space-y-6">
          {HOW_IT_WORKS.map((step) => {
            const Icon = ICON_MAP[step.icon] || Sparkles;
            return (
              <div key={step.n} className="grid lg:grid-cols-12 gap-4 lg:gap-8 bg-white rounded-3xl p-6 lg:p-10 border border-[#E5E5EA] recell-card-hover" data-testid={`how-step-${step.n}`}>
                <div className="lg:col-span-1">
                  <div className="text-5xl lg:text-6xl font-semibold text-[#0066CC]" style={{fontFamily:"Outfit"}}>{step.n}</div>
                </div>
                <div className="lg:col-span-2">
                  <div className="h-14 w-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center">
                    <Icon className="h-7 w-7 text-[#0066CC]" />
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-2xl lg:text-3xl font-medium" style={{fontFamily:"Outfit"}}>{step.title}</h2>
                  <p className="mt-3 text-[#86868B] leading-relaxed">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-[#1D1D1F] text-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-wider font-semibold text-white/60">The bonus formula</div>
              <h3 className="mt-2 text-2xl lg:text-3xl font-semibold tracking-tight" style={{fontFamily:"Outfit"}}>
                Bonus = Selling Price − MG − Platform Fee
              </h3>
              <p className="mt-3 text-white/70 max-w-lg">
                If your phone sells above the Minimum Guarantee, every rupee of upside (minus a transparent platform fee) goes straight to your bank account once the buyer's return window closes.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/sell" data-testid="how-cta-sell"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-sm font-medium">
                Start a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

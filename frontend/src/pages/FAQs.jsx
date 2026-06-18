import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, MessageCircle, Phone as PhoneIcon } from "lucide-react";
import { FAQS } from "@/lib/mockData";

export default function FAQs() {
  const [open, setOpen] = useState(0);
  const [q, setQ] = useState("");
  const filtered = FAQS.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));

  return (
    <div data-testid="faqs-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-16">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Frequently Asked</div>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-3xl" style={{fontFamily:"Outfit"}}>
          Questions answered honestly.
        </h1>
        <p className="mt-4 text-[#86868B] max-w-2xl">
          Everything you might want to know about Minimum Guarantee, the 21-day window, and how we keep your data and phone safe.
        </p>

        <div className="mt-8 max-w-xl flex items-center gap-2 px-4 py-3 rounded-full bg-[#F5F5F7] border border-[#E5E5EA]">
          <Search className="h-4 w-4 text-[#86868B]" />
          <input
            data-testid="faq-search"
            value={q} onChange={(e)=>setQ(e.target.value)}
            placeholder="Search FAQs…"
            className="bg-transparent outline-none flex-1 text-sm placeholder:text-[#86868B]"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-testid="faqs-list">
        <div className="space-y-2">
          {filtered.map((f, i) => (
            <button
              key={i}
              data-testid={`faq-item-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left bg-[#F5F5F7] hover:bg-[#EFEFF1] transition-colors rounded-2xl px-5 py-5"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-medium">{f.q}</span>
                <span className={`h-7 w-7 rounded-full bg-white flex items-center justify-center text-[#0066CC] transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
              {open === i && (
                <p className="mt-3 text-sm text-[#1D1D1F]/80 leading-relaxed">{f.a}</p>
              )}
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-sm text-[#86868B]">No matching FAQs.</div>
          )}
        </div>

        <div className="mt-12 bg-[#1D1D1F] text-white rounded-3xl p-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold" style={{fontFamily:"Outfit"}}>Still have a question?</h3>
            <p className="text-sm text-white/60 mt-1">Our Kochi team is one call away.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link to="/contact" data-testid="faq-cta-contact" className="px-5 py-2.5 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-sm font-medium inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+914841100100" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium inline-flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" /> +91 484 4 100 100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

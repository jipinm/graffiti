import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Check, Truck, Cpu, Package, Banknote, ArrowRight, MapPin } from "lucide-react";
import { SELLER_LISTINGS } from "@/lib/mockData";

const TIMELINE = [
  { id: "submitted", title: "Device submitted", t: "12 Feb 2026, 10:24 AM", Icon: Check, done: true },
  { id: "inspection", title: "Primary inspection complete", t: "12 Feb 2026, 11:05 AM", Icon: Cpu, done: true },
  { id: "mg-paid", title: "Minimum Guarantee paid", t: "12 Feb 2026, 12:40 PM", Icon: Banknote, done: true },
  { id: "listed", title: "Listed on marketplace", t: "13 Feb 2026, 09:00 AM", Icon: Package, done: true },
  { id: "selling", title: "Active in 21-day window", t: "Day 7 of 21", Icon: Truck, done: true, active: true },
  { id: "sold", title: "Sold & bonus paid", t: "Pending", Icon: Check, done: false },
];

export default function TrackDevice() {
  const [q, setQ] = useState("");
  const [found, setFound] = useState(null);

  const onTrack = () => {
    const match = SELLER_LISTINGS.find((l) => l.id.toLowerCase() === q.toLowerCase()) || SELLER_LISTINGS[0];
    setFound(match);
  };

  return (
    <div data-testid="track-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-16">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Track My Device</div>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-3xl" style={{fontFamily:"Outfit"}}>
          Where's my device, right now?
        </h1>
        <p className="mt-4 text-[#86868B] max-w-2xl">
          Enter your listing ID (e.g. G-204A) or registered mobile number to see live status, current bid, and bonus projection.
        </p>

        <div className="mt-8 max-w-xl flex gap-2">
          <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] flex-1">
            <Search className="h-4 w-4 text-[#86868B]" />
            <input
              data-testid="track-input"
              value={q} onChange={(e)=>setQ(e.target.value)}
              placeholder="Listing ID or mobile number"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          <button
            data-testid="track-cta"
            onClick={onTrack}
            className="px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium inline-flex items-center gap-2"
          >Track <ArrowRight className="h-4 w-4" /></button>
        </div>
        <div className="mt-3 text-xs text-[#86868B]">Demo: try any text — we'll show a sample listing timeline.</div>
      </section>

      {found && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 recell-fade-up" data-testid="track-result">
          <div className="bg-white border border-[#E5E5EA] rounded-3xl p-6 lg:p-8">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="h-20 w-20 rounded-2xl bg-[#F5F5F7] overflow-hidden flex items-center justify-center shrink-0">
                <img src={found.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-[180px]">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Listing {found.id}</div>
                <div className="mt-1 text-2xl font-semibold" style={{fontFamily:"Outfit"}}>{found.model}</div>
                <div className="mt-1 text-xs text-[#86868B] flex items-center gap-1"><MapPin className="h-3 w-3" /> Edappally Hub · Kochi</div>
              </div>
              <div className="grid grid-cols-3 gap-6 w-full lg:w-auto">
                <Metric label="MG" value={`₹${found.mg.toLocaleString("en-IN")}`} />
                <Metric label="Current Bid" value={`₹${found.currentBid.toLocaleString("en-IN")}`} />
                <Metric label="Projected Bonus" value={`+₹${found.margin.toLocaleString("en-IN")}`} positive />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>Timeline</h3>
              <div className="mt-6 relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#E5E5EA]" />
                <div className="space-y-5">
                  {TIMELINE.map((t) => {
                    const Icon = t.Icon;
                    return (
                      <div key={t.id} className="flex items-start gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                          t.done ? (t.active ? "bg-[#0066CC] text-white" : "bg-[#34C759] text-white") : "bg-[#F5F5F7] text-[#86868B]"
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className={`flex-1 pb-1 ${t.active ? "" : t.done ? "" : "opacity-50"}`}>
                          <div className="text-sm font-medium">{t.title}</div>
                          <div className="text-xs text-[#86868B] mt-0.5">{t.t}</div>
                          {t.active && <div className="mt-3 text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066CC]/10 text-[#0066CC] font-semibold">Active now</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/account" className="px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium">Open my dashboard</Link>
              <Link to="/contact" className="px-6 py-3 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-sm font-medium">Need help?</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Metric({ label, value, positive }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">{label}</div>
      <div className={`mt-1 text-base font-semibold ${positive ? "text-[#34C759]" : ""}`} style={{fontFamily:"Outfit"}}>{value}</div>
    </div>
  );
}

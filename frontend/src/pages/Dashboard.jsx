import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Wallet, Clock4, Package } from "lucide-react";
import { SELLER_LISTINGS, formatINR } from "@/lib/mockData";

export default function Dashboard() {
  const totalMG = SELLER_LISTINGS.reduce((a,l)=>a+l.mg,0);
  const totalMargin = SELLER_LISTINGS.reduce((a,l)=>a+l.margin,0);
  const activeListings = SELLER_LISTINGS.filter(l=>l.status === "Listed").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="seller-dashboard-overview">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Seller dashboard</div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            Welcome back, Aarav
          </h1>
          <p className="mt-2 text-[#86868B]">Track your listings, MG payouts and 21-day resale window.</p>
        </div>
        <Link to="/sell" data-testid="dashboard-cta-sell"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium">
          Sell another device <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard Icon={Wallet} label="Total MG received" value={formatINR(totalMG)} hint="across all listings" />
        <StatCard Icon={TrendingUp} label="Profit share earned" value={formatINR(totalMargin)} hint="after platform fees" accent />
        <StatCard Icon={Package} label="Active listings" value={String(activeListings)} hint="currently on sale" />
        <StatCard Icon={Clock4} label="Avg. resale time" value="11 days" hint="last 6 months" />
      </div>

      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-medium" style={{fontFamily:"Outfit"}}>Your listings</h2>
        <div className="mt-6 space-y-4">
          {SELLER_LISTINGS.map((l) => (
            <ListingRow key={l.id} l={l} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ Icon, label, value, hint, accent }) {
  return (
    <div
      className={`rounded-3xl p-6 border ${accent ? "bg-[#1D1D1F] text-white border-[#1D1D1F]" : "bg-white border-[#E5E5EA]"}`}
      data-testid={`stat-${label.replace(/\s+/g,'-').toLowerCase()}`}
    >
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${accent ? "bg-white/10" : "bg-[#F5F5F7]"}`}>
        <Icon className={`h-5 w-5 ${accent ? "text-white" : "text-[#0066CC]"}`} />
      </div>
      <div className={`mt-4 text-xs uppercase tracking-wider font-semibold ${accent ? "text-white/60" : "text-[#86868B]"}`}>{label}</div>
      <div className="mt-1 text-2xl lg:text-3xl font-semibold recell-price-counter" style={{fontFamily:"Outfit"}}>{value}</div>
      <div className={`mt-1 text-xs ${accent ? "text-white/60" : "text-[#86868B]"}`}>{hint}</div>
    </div>
  );
}

function ListingRow({ l }) {
  const pct = ((21 - l.daysRemaining) / 21) * 100;
  return (
    <div className="bg-white border border-[#E5E5EA] rounded-3xl p-5 lg:p-6" data-testid={`listing-${l.id}`}>
      <div className="flex items-center gap-5 flex-wrap lg:flex-nowrap">
        <div className="h-20 w-20 rounded-2xl bg-[#F5F5F7] overflow-hidden flex items-center justify-center shrink-0">
          <img src={l.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-sm font-medium">{l.model}</div>
            <span
              className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
              style={{ background: l.statusColor + "20", color: l.statusColor }}
            >
              {l.status}
            </span>
          </div>
          <div className="text-xs text-[#86868B] mt-1">{l.id} · Listed on {l.listedOn}</div>
          {l.status === "Listed" && (
            <div className="mt-3 max-w-md">
              <div className="h-1.5 w-full bg-[#F5F5F7] rounded-full overflow-hidden">
                <div className="h-full bg-[#0066CC]" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-1 text-xs text-[#86868B]">{l.daysRemaining} days remaining in resale window</div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-6 lg:gap-10 w-full lg:w-auto">
          <Metric label="MG" value={l.mg ? formatINR(l.mg) : "—"} />
          <Metric label="Current Bid" value={l.currentBid ? formatINR(l.currentBid) : "—"} />
          <Metric label="Your Margin" value={l.margin ? "+" + formatINR(l.margin) : "—"} positive={!!l.margin} />
        </div>
      </div>
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

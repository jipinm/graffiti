import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Wallet, Clock4, Package, Star, ShoppingBag, RotateCcw, FileText, Banknote } from "lucide-react";
import { SELLER_LISTINGS, MARKETPLACE, formatINR } from "@/lib/mockData";

export default function Dashboard() {
  const [tab, setTab] = useState("seller");
  const totalMG = SELLER_LISTINGS.reduce((a,l)=>a+l.mg,0);
  const totalMargin = SELLER_LISTINGS.reduce((a,l)=>a+l.margin,0);
  const activeListings = SELLER_LISTINGS.filter(l=>l.status === "Listed").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="seller-dashboard-overview">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">My account</div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            Welcome back, Aarav
          </h1>
          <p className="mt-2 text-[#86868B]">Track your listings, MG payouts and purchases — all in one place.</p>
        </div>
        <Link to="/sell" data-testid="dashboard-cta-sell"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium">
          Sell another phone <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Tabs */}
      <div className="mt-8 inline-flex p-1 bg-[#F5F5F7] rounded-full" data-testid="dashboard-tabs">
        <button
          data-testid="tab-seller"
          onClick={() => setTab("seller")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${tab === "seller" ? "bg-white shadow-sm" : "text-[#86868B] hover:text-[#1D1D1F]"}`}
        >Seller</button>
        <button
          data-testid="tab-buyer"
          onClick={() => setTab("buyer")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${tab === "buyer" ? "bg-white shadow-sm" : "text-[#86868B] hover:text-[#1D1D1F]"}`}
        >Buyer</button>
      </div>

      {tab === "seller" && (
        <div className="recell-fade-up">
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5" data-testid="seller-stats">
            <StatCard testid="stat-total-mg" Icon={Wallet} label="Total MG received" value={formatINR(totalMG)} hint="across all listings" />
            <StatCard testid="stat-profit-share" Icon={TrendingUp} label="Profit share earned" value={formatINR(totalMargin)} hint="after platform fees" accent />
            <StatCard testid="stat-active-listings" Icon={Package} label="Active listings" value={String(activeListings)} hint="currently on sale" />
            <StatCard testid="stat-avg-resale-time" Icon={Clock4} label="Avg. resale time" value="11 days" hint="last 6 months" />
          </div>

          {/* What sellers can do */}
          <div className="mt-10 bg-[#F5F5F7] rounded-3xl p-6 lg:p-8" data-testid="seller-can-do">
            <h2 className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>What you can do as a seller</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { Icon: Package, t: "Track active listings" },
                { Icon: Wallet, t: "View MG amounts" },
                { Icon: TrendingUp, t: "Check potential bonus" },
                { Icon: Clock4, t: "Monitor days remaining" },
                { Icon: Star, t: "Track completed sales" },
                { Icon: Banknote, t: "View payment history" },
              ].map(({Icon, t}) => (
                <div key={t} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E5E5EA]">
                  <div className="h-9 w-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#0066CC]" />
                  </div>
                  <div className="text-sm font-medium">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <h2 className="text-xl sm:text-2xl font-medium" style={{fontFamily:"Outfit"}}>Your listings</h2>
            <Link to="/track" className="text-sm text-[#0066CC] hover:underline">Detailed tracking</Link>
          </div>
          <div className="mt-6 space-y-4">
            {SELLER_LISTINGS.map((l) => <ListingRow key={l.id} l={l} />)}
          </div>
        </div>
      )}

      {tab === "buyer" && (
        <div className="recell-fade-up">
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5" data-testid="buyer-stats">
            <StatCard testid="buyer-stat-orders" Icon={ShoppingBag} label="Orders placed" value="2" hint="last 30 days" />
            <StatCard testid="buyer-stat-reserved" Icon={Package} label="Reserved" value="1" hint="awaiting pickup" accent />
            <StatCard testid="buyer-stat-returns" Icon={RotateCcw} label="Returns" value="0" hint="all time" />
            <StatCard testid="buyer-stat-saved" Icon={Wallet} label="Saved vs MRP" value={formatINR(56400)} hint="lifetime" />
          </div>

          <div className="mt-10 bg-[#F5F5F7] rounded-3xl p-6 lg:p-8" data-testid="buyer-can-do">
            <h2 className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>What you can do as a buyer</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { Icon: ShoppingBag, t: "Browse mobile phones" },
                { Icon: FileText, t: "View condition reports" },
                { Icon: Package, t: "Reserve products" },
                { Icon: Wallet, t: "Manage purchases" },
                { Icon: RotateCcw, t: "Access return requests" },
                { Icon: Star, t: "Rate your store visit" },
              ].map(({Icon, t}) => (
                <div key={t} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E5E5EA]">
                  <div className="h-9 w-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#0066CC]" />
                  </div>
                  <div className="text-sm font-medium">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <h2 className="text-xl sm:text-2xl font-medium" style={{fontFamily:"Outfit"}}>Recent reservations</h2>
            <Link to="/buy" className="text-sm text-[#0066CC] hover:underline">Browse more</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKETPLACE.slice(0, 3).map((p) => (
              <Link to={`/buy/${p.id}`} key={p.id} className="block recell-card-hover" data-testid={`buyer-order-${p.id}`}>
                <div className="bg-[#F5F5F7] rounded-3xl p-6 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.model} className="max-h-full max-w-full object-contain rounded-xl" />
                </div>
                <div className="px-1 mt-4">
                  <div className="text-sm font-medium">{p.model}</div>
                  <div className="text-xs text-[#86868B] mt-1">Reserved · Pickup at {p.store}</div>
                  <div className="mt-2 text-base font-semibold" style={{fontFamily:"Outfit"}}>{formatINR(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ Icon, label, value, hint, accent, testid }) {
  return (
    <div
      className={`rounded-3xl p-6 border ${accent ? "bg-[#1D1D1F] text-white border-[#1D1D1F]" : "bg-white border-[#E5E5EA]"}`}
      data-testid={testid}
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
            >{l.status}</span>
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

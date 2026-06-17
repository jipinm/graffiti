import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, Filter } from "lucide-react";
import { MARKETPLACE, BRANDS, formatINR } from "@/lib/mockData";

const GRADES = ["All", "Like New", "Superb", "Good"];

export default function Buy() {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("All");
  const [grade, setGrade] = useState("All");
  const [sort, setSort] = useState("recommended");

  const filtered = useMemo(() => {
    let list = [...MARKETPLACE];
    if (q) list = list.filter((p) => (p.model + p.brand + p.variant).toLowerCase().includes(q.toLowerCase()));
    if (brand !== "All") list = list.filter((p) => p.brand === brand);
    if (grade !== "All") list = list.filter((p) => p.grade === grade);
    if (sort === "price-low") list.sort((a,b) => a.price - b.price);
    if (sort === "price-high") list.sort((a,b) => b.price - a.price);
    return list;
  }, [q, brand, grade, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="buy-page">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Marketplace</div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            Certified pre-owned phones
          </h1>
          <p className="mt-3 text-[#86868B] max-w-xl">
            Every device passes a 64-point inspection. 1-day return at store. Prepaid only · Store pickup.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] w-full sm:w-80">
          <Search className="h-4 w-4 text-[#86868B]" />
          <input
            data-testid="buy-search-input"
            value={q} onChange={(e)=>setQ(e.target.value)}
            placeholder="Search model, brand…"
            className="bg-transparent text-sm outline-none flex-1 placeholder:text-[#86868B]"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="buy-filters">
        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F5F5F7] text-xs uppercase tracking-wider font-semibold text-[#86868B]">
          <Filter className="h-3.5 w-3.5" /> Filters
        </div>
        <Group label="Brand" testid="brand">
          {["All", ...BRANDS.map((b) => b.name)].map((b) => (
            <Chip key={b} active={brand===b} onClick={()=>setBrand(b)} testid={`buy-filter-brand-${b.toLowerCase()}`}>{b}</Chip>
          ))}
        </Group>
        <Group label="Grade" testid="grade">
          {GRADES.map((g) => (
            <Chip key={g} active={grade===g} onClick={()=>setGrade(g)} testid={`buy-filter-grade-${g.replace(/\s+/g,'').toLowerCase()}`}>{g}</Chip>
          ))}
        </Group>
        <div className="ml-auto">
          <select
            data-testid="buy-sort"
            value={sort} onChange={(e)=>setSort(e.target.value)}
            className="text-sm px-4 py-2 rounded-full bg-white border border-[#E5E5EA] outline-none focus:border-[#0066CC]"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-6 text-sm text-[#86868B]" data-testid="buy-result-count">
        {filtered.length} {filtered.length === 1 ? "device" : "devices"} available
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" data-testid="buy-storefront-grid">
        {filtered.map((p) => (
          <Link to={`/buy/${p.id}`} key={p.id} className="recell-card-hover block" data-testid={`buy-card-${p.id}`}>
            <div className="bg-[#F5F5F7] rounded-3xl p-6 aspect-square flex items-center justify-center overflow-hidden relative">
              <img src={p.image} alt={p.model} className="max-h-full max-w-full object-contain rounded-xl" />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-semibold text-[#0066CC] bg-white px-2 py-1 rounded-full border border-[#0066CC]/20">
                {p.grade}
              </span>
            </div>
            <div className="px-1 mt-4">
              <div className="text-sm font-medium">{p.model}</div>
              <div className="text-xs text-[#86868B] mt-1">{p.variant} · {p.color}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <div className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>{formatINR(p.price)}</div>
                <div className="text-xs text-[#86868B] line-through">{formatINR(p.mrp)}</div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-[#86868B]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0066CC]" /> Pickup · {p.store}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20" data-testid="buy-empty">
          <div className="text-sm text-[#86868B]">No devices match your filters.</div>
        </div>
      )}
    </div>
  );
}

function Group({ label, children, testid }) {
  return (
    <div className="flex items-center gap-2 flex-wrap" data-testid={`buy-group-${testid}`}>
      <span className="text-xs text-[#86868B]">{label}:</span>
      <div className="flex gap-2 flex-wrap">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children, testid }) {
  return (
    <button
      data-testid={testid}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
          : "bg-white text-[#1D1D1F] border-[#E5E5EA] hover:border-[#1D1D1F]"
      }`}
    >
      {children}
    </button>
  );
}

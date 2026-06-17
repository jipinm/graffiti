import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, SlidersHorizontal, X, Star, MapPin, ChevronDown, RotateCcw } from "lucide-react";
import { MARKETPLACE, BRANDS, formatINR } from "@/lib/mockData";

const GRADES = ["Like New", "Superb", "Good"];
const STORAGE_FACETS = ["128 GB", "256 GB", "512 GB", "1 TB"];
const RAM_FACETS = ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];
const WARRANTY_FACETS = ["3 months", "6 months", "12 months"];
const PRICE_BUCKETS = [
  { id: "p1", label: "Under ₹25,000", min: 0, max: 25000 },
  { id: "p2", label: "₹25,000 – ₹40,000", min: 25000, max: 40000 },
  { id: "p3", label: "₹40,000 – ₹60,000", min: 40000, max: 60000 },
  { id: "p4", label: "₹60,000 – ₹80,000", min: 60000, max: 80000 },
  { id: "p5", label: "Above ₹80,000", min: 80000, max: Infinity },
];

const STORE_FACETS = Array.from(new Set(MARKETPLACE.map((p) => p.store))).sort();
const COLOR_FACETS = Array.from(new Set(MARKETPLACE.map((p) => p.color))).sort();

const initialFilters = {
  brands: new Set(),
  grades: new Set(),
  storage: new Set(),
  ram: new Set(),
  warranty: new Set(),
  price: new Set(),
  stores: new Set(),
  colors: new Set(),
};

export default function Buy() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recommended");
  const [filters, setFilters] = useState(initialFilters);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      if (next[group].has(value)) next[group].delete(value);
      else next[group].add(value);
      return next;
    });
  };

  const clearAll = () => setFilters({
    brands: new Set(), grades: new Set(), storage: new Set(), ram: new Set(),
    warranty: new Set(), price: new Set(), stores: new Set(), colors: new Set(),
  });

  const activeCount =
    filters.brands.size + filters.grades.size + filters.storage.size +
    filters.ram.size + filters.warranty.size + filters.price.size +
    filters.stores.size + filters.colors.size;

  const filtered = useMemo(() => {
    let list = [...MARKETPLACE];
    if (q) list = list.filter((p) => (p.model + " " + p.brand + " " + p.color).toLowerCase().includes(q.toLowerCase()));
    if (filters.brands.size) list = list.filter((p) => filters.brands.has(p.brand));
    if (filters.grades.size) list = list.filter((p) => filters.grades.has(p.grade));
    if (filters.storage.size) list = list.filter((p) => filters.storage.has(p.storage));
    if (filters.ram.size) list = list.filter((p) => filters.ram.has(p.ram));
    if (filters.warranty.size) list = list.filter((p) => filters.warranty.has(p.warranty));
    if (filters.stores.size) list = list.filter((p) => filters.stores.has(p.store));
    if (filters.colors.size) list = list.filter((p) => filters.colors.has(p.color));
    if (filters.price.size) {
      list = list.filter((p) =>
        Array.from(filters.price).some((id) => {
          const b = PRICE_BUCKETS.find((x) => x.id === id);
          return b && p.price >= b.min && p.price < b.max;
        })
      );
    }
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "discount") list.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));
    return list;
  }, [q, filters, sort]);

  const sidebar = (
    <Sidebar
      filters={filters} toggle={toggle} clearAll={clearAll} activeCount={activeCount}
    />
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="buy-page">
      {/* Header strip */}
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Marketplace · Kochi pickup</div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            Certified pre-owned phones
          </h1>
          <p className="mt-2 text-[#86868B] max-w-xl">
            Every device passes a 64-point inspection. 1-day return at store · Prepaid only · Pickup at any GRAFFITI Kochi store.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] w-full sm:w-80">
          <Search className="h-4 w-4 text-[#86868B]" />
          <input
            data-testid="buy-search-input"
            value={q} onChange={(e)=>setQ(e.target.value)}
            placeholder="Search model, brand, colour…"
            className="bg-transparent text-sm outline-none flex-1 placeholder:text-[#86868B]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8" data-testid="buy-layout">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block" data-testid="buy-sidebar">
          <div className="sticky top-28">
            {sidebar}
          </div>
        </aside>

        {/* Right: toolbar + grid */}
        <div className="min-w-0">
          {/* Top toolbar */}
          <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
            <div className="flex items-center gap-2">
              <button
                data-testid="buy-mobile-filter-toggle"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D1D1F] text-white text-sm font-medium"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters {activeCount > 0 && <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#1D1D1F] text-[10px] font-bold">{activeCount}</span>}
              </button>
              <span className="text-sm text-[#86868B]" data-testid="buy-result-count">
                {filtered.length} {filtered.length === 1 ? "device" : "devices"}
              </span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <label className="text-xs uppercase tracking-wider text-[#86868B]">Sort</label>
              <div className="relative">
                <select
                  data-testid="buy-sort"
                  value={sort} onChange={(e)=>setSort(e.target.value)}
                  className="text-sm pl-4 pr-9 py-2 rounded-full bg-white border border-[#E5E5EA] outline-none focus:border-[#0066CC] appearance-none cursor-pointer"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest rated</option>
                  <option value="discount">Biggest discount</option>
                </select>
                <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#86868B] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active filter chips */}
          {activeCount > 0 && (
            <div className="mb-4 flex items-center gap-2 flex-wrap" data-testid="buy-active-chips">
              {Object.entries(filters).flatMap(([group, set]) =>
                Array.from(set).map((v) => (
                  <button
                    key={`${group}-${v}`}
                    onClick={() => toggle(group, v)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066CC]/10 text-[#0066CC] text-xs font-medium hover:bg-[#0066CC]/20 transition-colors"
                  >
                    {group === "price" ? PRICE_BUCKETS.find((p) => p.id === v)?.label : v}
                    <X className="h-3 w-3" />
                  </button>
                ))
              )}
              <button
                data-testid="buy-clear-chips"
                onClick={clearAll}
                className="text-xs text-[#86868B] hover:text-[#1D1D1F] underline"
              >Clear all</button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5" data-testid="buy-storefront-grid">
            {filtered.map((p) => (
              <Link to={`/buy/${p.id}`} key={p.id} className="recell-card-hover block" data-testid={`buy-card-${p.id}`}>
                <div className="bg-[#F5F5F7] rounded-3xl p-5 aspect-square flex items-center justify-center overflow-hidden relative">
                  <img src={p.image} alt={p.model} className="max-h-full max-w-full object-contain rounded-xl" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold text-[#0066CC] bg-white px-2 py-1 rounded-full border border-[#0066CC]/20">
                    {p.grade}
                  </span>
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-semibold bg-white px-2 py-1 rounded-full border border-[#E5E5EA]">
                    <Star className="h-3 w-3 fill-[#FF9500] text-[#FF9500]" /> {p.rating}
                  </span>
                </div>
                <div className="px-1 mt-4">
                  <div className="text-sm font-medium">{p.model}</div>
                  <div className="text-xs text-[#86868B] mt-1">{p.variant} · {p.color}</div>
                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <div className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>{formatINR(p.price)}</div>
                    <div className="text-xs text-[#86868B] line-through">{formatINR(p.mrp)}</div>
                    <div className="text-xs font-semibold text-[#34C759]">
                      {Math.round((1 - p.price / p.mrp) * 100)}% off
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-[#86868B]">
                    <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[#0066CC]" /> {p.warranty}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.store}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" data-testid="buy-empty">
              <div className="text-sm text-[#86868B]">No devices match your filters.</div>
              <button onClick={clearAll} className="mt-3 px-5 py-2 rounded-full bg-[#0066CC] text-white text-sm font-medium">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" data-testid="buy-mobile-drawer">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white p-5 overflow-y-auto recell-fade-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="h-9 w-9 rounded-full bg-[#F5F5F7] inline-flex items-center justify-center" data-testid="buy-mobile-close">
                <X className="h-4 w-4" />
              </button>
            </div>
            {sidebar}
            <button
              onClick={() => setSidebarOpen(false)}
              className="mt-5 w-full px-5 py-3 rounded-full bg-[#0066CC] text-white font-medium"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ filters, toggle, clearAll, activeCount }) {
  return (
    <div className="bg-white border border-[#E5E5EA] rounded-3xl p-5 max-h-[calc(100vh-7rem)] overflow-y-auto" data-testid="buy-filter-panel">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#86868B]">
          <SlidersHorizontal className="h-3.5 w-3.5" /> Filters {activeCount > 0 && <span className="text-[#0066CC]">· {activeCount}</span>}
        </div>
        {activeCount > 0 && (
          <button
            data-testid="buy-clear-all"
            onClick={clearAll}
            className="inline-flex items-center gap-1 text-xs text-[#0066CC] hover:underline"
          >
            <RotateCcw className="h-3 w-3" /> Clear
          </button>
        )}
      </div>

      <Section title="Brand" testid="brand">
        {BRANDS.map(({ name }) => (
          <CheckRow key={name} label={name} active={filters.brands.has(name)} onClick={() => toggle("brands", name)} testid={`filter-brand-${name.toLowerCase()}`} />
        ))}
      </Section>

      <Section title="Condition" testid="grade">
        {GRADES.map((g) => (
          <CheckRow key={g} label={g} active={filters.grades.has(g)} onClick={() => toggle("grades", g)} testid={`filter-grade-${g.replace(/\s+/g,'').toLowerCase()}`} />
        ))}
      </Section>

      <Section title="Price" testid="price">
        {PRICE_BUCKETS.map((b) => (
          <CheckRow key={b.id} label={b.label} active={filters.price.has(b.id)} onClick={() => toggle("price", b.id)} testid={`filter-price-${b.id}`} />
        ))}
      </Section>

      <Section title="Storage" testid="storage">
        <div className="flex flex-wrap gap-2">
          {STORAGE_FACETS.map((s) => (
            <Chip key={s} active={filters.storage.has(s)} onClick={() => toggle("storage", s)} testid={`filter-storage-${s.replace(/\s+/g,'').toLowerCase()}`}>{s}</Chip>
          ))}
        </div>
      </Section>

      <Section title="RAM" testid="ram">
        <div className="flex flex-wrap gap-2">
          {RAM_FACETS.map((r) => (
            <Chip key={r} active={filters.ram.has(r)} onClick={() => toggle("ram", r)} testid={`filter-ram-${r.replace(/\s+/g,'').toLowerCase()}`}>{r}</Chip>
          ))}
        </div>
      </Section>

      <Section title="Warranty" testid="warranty">
        {WARRANTY_FACETS.map((w) => (
          <CheckRow key={w} label={w} active={filters.warranty.has(w)} onClick={() => toggle("warranty", w)} testid={`filter-warranty-${w.replace(/\s+/g,'').toLowerCase()}`} />
        ))}
      </Section>

      <Section title="Pickup store" testid="store">
        {STORE_FACETS.map((s) => (
          <CheckRow key={s} label={s.replace(", Kochi", "")} active={filters.stores.has(s)} onClick={() => toggle("stores", s)} testid={`filter-store-${s.split(",")[0].replace(/\s+/g,'').toLowerCase()}`} />
        ))}
      </Section>

      <Section title="Colour" testid="color" last>
        <div className="flex flex-wrap gap-2">
          {COLOR_FACETS.map((c) => (
            <Chip key={c} active={filters.colors.has(c)} onClick={() => toggle("colors", c)} testid={`filter-color-${c.replace(/\s+/g,'').toLowerCase()}`}>{c}</Chip>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children, testid, last }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`py-3 ${last ? "" : "border-b border-[#F0F0F2]"}`} data-testid={`filter-section-${testid}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm font-semibold" style={{fontFamily:"Outfit"}}>{title}</span>
        <ChevronDown className={`h-4 w-4 text-[#86868B] transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && <div className="mt-3 space-y-1">{children}</div>}
    </div>
  );
}

function CheckRow({ label, active, onClick, testid }) {
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className="w-full flex items-center gap-2 py-1.5 px-1 text-left hover:bg-[#F9F9FB] rounded-md transition-colors"
    >
      <span className={`h-4 w-4 rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${
        active ? "bg-[#0066CC] border-[#0066CC]" : "border-[#C7C7CC]"
      }`}>
        {active && (
          <svg viewBox="0 0 12 12" className="h-3 w-3 text-white">
            <path d="M2 6.2L4.6 8.8 10 3.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span className="text-sm">{label}</span>
    </button>
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

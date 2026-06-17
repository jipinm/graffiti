import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Store, RotateCcw, CreditCard, Check, MapPin } from "lucide-react";
import { toast } from "sonner";
import { MARKETPLACE, formatINR } from "@/lib/mockData";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = MARKETPLACE.find((x) => x.id === id);

  if (!p) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center" data-testid="product-not-found">
        <div className="text-sm text-[#86868B]">Product not found.</div>
        <Link to="/buy" className="mt-4 inline-block text-[#0066CC] underline">Back to marketplace</Link>
      </div>
    );
  }

  const savings = p.mrp - p.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="product-detail-page">
      <button onClick={() => navigate(-1)} data-testid="pdp-back"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-xs font-medium mb-6">
        <ArrowLeft className="h-3.5 w-3.5" /> Back
      </button>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-16 aspect-square flex items-center justify-center" data-testid="pdp-image">
            <img src={p.image} alt={p.model} className="max-h-full max-w-full object-contain rounded-2xl" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-[#F5F5F7] rounded-2xl aspect-square flex items-center justify-center">
                <img src={p.image} alt="" className="h-full w-full object-cover rounded-xl opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0066CC]/10 text-xs uppercase tracking-wider font-semibold text-[#0066CC]">
            <ShieldCheck className="h-3.5 w-3.5" /> Certified · {p.grade}
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            {p.model}
          </h1>
          <div className="mt-2 text-sm text-[#86868B]">{p.variant} · {p.color}</div>

          <div className="mt-8 flex items-baseline gap-3">
            <div className="text-4xl font-semibold recell-price-counter" style={{fontFamily:"Outfit"}}>{formatINR(p.price)}</div>
            <div className="text-base text-[#86868B] line-through">{formatINR(p.mrp)}</div>
            <div className="text-sm font-medium text-[#34C759]">Save {formatINR(savings)}</div>
          </div>
          <div className="mt-2 text-xs text-[#86868B]">Inclusive of all taxes · 1-day return at store</div>

          <div className="mt-8 bg-[#F5F5F7] rounded-3xl p-5">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#0066CC] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium">Store pickup · {p.store}</div>
                <div className="text-xs text-[#86868B] mt-1">Ready for pickup today after 4 PM</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              data-testid="pdp-reserve"
              onClick={() => { toast.success("Reserved! Show this confirmation at the store."); }}
              className="px-6 py-4 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white font-medium"
            >
              Reserve & pay
            </button>
            <button
              data-testid="pdp-add-to-cart"
              onClick={() => toast.success("Added to your cart")}
              className="px-6 py-4 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-medium"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3" data-testid="pdp-benefits">
            {[
              { Icon: ShieldCheck, t: "Certified" },
              { Icon: RotateCcw, t: "1-day return" },
              { Icon: CreditCard, t: "Prepaid only" },
            ].map(({Icon, t}) => (
              <div key={t} className="bg-white border border-[#E5E5EA] rounded-2xl p-3 text-center">
                <Icon className="h-4 w-4 text-[#0066CC] mx-auto" />
                <div className="text-xs mt-1.5 font-medium">{t}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#86868B]" style={{fontFamily:"Outfit"}}>{"What\u2019s verified"}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "Original display & battery (≥85% health)",
                "Cleared from carrier and police IMEI databases",
                "All buttons, sensors, and ports functional",
                "Professionally sanitized and repackaged",
              ].map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#0066CC] mt-0.5 shrink-0" /> {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

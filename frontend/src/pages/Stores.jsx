import { MapPin, Clock4, ArrowUpRight, Phone as PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { STORES, STORE_IMG, BRAND_CITY } from "@/lib/mockData";

export default function Stores() {
  return (
    <div data-testid="stores-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Store locator · {BRAND_CITY}</div>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
              Walk in. Get inspected. Get paid.
            </h1>
            <p className="mt-4 text-[#86868B] max-w-md leading-relaxed">
              6 flagship GRAFFITI stores across Kochi — staffed with certified technicians, lab-grade tools, and same-day MG payouts.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link to="/sell" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium" data-testid="stores-cta-sell">
                Sell Now <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-sm font-medium" data-testid="stores-cta-contact">
                Contact a store
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden aspect-[5/4]">
              <img src={STORE_IMG} alt="GRAFFITI Kochi store" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" data-testid="stores-grid">
        <h2 className="text-xl sm:text-2xl font-medium mb-6" style={{fontFamily:"Outfit"}}>All Kochi locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORES.map((s) => (
            <div key={s.id} className="bg-white border border-[#E5E5EA] rounded-3xl p-6 recell-card-hover" data-testid={`store-${s.id}`}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#0066CC]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">{s.city}</div>
                  <div className="text-lg font-medium mt-0.5" style={{fontFamily:"Outfit"}}>{s.area}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#86868B]">{s.address}</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-[#1D1D1F]"><Clock4 className="h-3.5 w-3.5" /> {s.hours}</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-[#1D1D1F]"><PhoneIcon className="h-3.5 w-3.5" /> {s.phone}</div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button className="px-4 py-2.5 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-sm font-medium" data-testid={`store-directions-${s.id}`}>
                  Directions
                </button>
                <a href={`tel:${s.phone.replace(/\s/g,'')}`} className="px-4 py-2.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white text-sm font-medium text-center" data-testid={`store-call-${s.id}`}>
                  Call store
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

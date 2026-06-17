import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Search, User, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { BRAND_NAME, BRAND_CITY } from "@/lib/mockData";

const PRIMARY_NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/sell", label: "Sell Device" },
  { to: "/buy", label: "Buy Devices" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/why-graffiti", label: "Why GRAFFITI" },
  { to: "/stores", label: "Stores" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

const UTILITY_NAV = [
  { to: "/track", label: "Track My Device" },
  { to: "/account", label: "My Account" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      {/* Pre-header announcement strip */}
      <div className="bg-[#1D1D1F] text-white text-xs hidden md:block" data-testid="announcement-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="h-3.5 w-3.5" /> {BRAND_CITY} · 6 flagship stores
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <Link to="/track" className="hover:text-white transition-colors">Track my device</Link>
            <Link to="/account" className="hover:text-white transition-colors">My Account</Link>
            <a href="tel:+914841100100" className="hover:text-white transition-colors">+91 484 4 100 100</a>
          </div>
        </div>
      </div>

      <header
        className={`recell-glass-nav sticky top-0 z-50 transition-all ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : ""}`}
        data-testid="site-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2 shrink-0" data-testid="logo-link">
              <div className="h-9 w-9 rounded-2xl bg-[#1D1D1F] flex items-center justify-center">
                <span className="text-white font-bold text-base" style={{fontFamily:"Outfit"}}>G</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight" style={{fontFamily:"Outfit", letterSpacing:"-0.02em"}}>{BRAND_NAME}</span>
                <span className="text-[10px] text-[#86868B] uppercase tracking-[0.18em] mt-0.5">{BRAND_CITY.split(",")[0]}</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
              {PRIMARY_NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g,'-')}`}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] rounded-full font-medium transition-colors ${
                      isActive ? "bg-[#F5F5F7] text-[#0066CC]" : "text-[#1D1D1F] hover:bg-[#F5F5F7]"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <Link
                to="/buy"
                data-testid="header-cta-buy"
                className="px-4 py-2 text-sm rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-medium transition-colors"
              >
                Buy Now
              </Link>
              <Link
                to="/sell"
                data-testid="header-cta-sell"
                className="px-4 py-2 text-sm rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white font-medium transition-colors inline-flex items-center gap-1"
              >
                Sell Now <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Tablet compact (md, lg) */}
            <div className="hidden md:flex xl:hidden items-center gap-2">
              <Link to="/buy" className="px-3 py-1.5 text-sm rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] font-medium" data-testid="header-cta-buy-tablet">Buy</Link>
              <Link to="/sell" className="px-3 py-1.5 text-sm rounded-full bg-[#0066CC] text-white font-medium" data-testid="header-cta-sell-tablet">Sell</Link>
              <button
                data-testid="tablet-menu-toggle"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-full hover:bg-[#F5F5F7]"
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full hover:bg-[#F5F5F7]"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="xl:hidden pb-5 pt-1" data-testid="mobile-menu">
              <div className="grid grid-cols-1 gap-1">
                {PRIMARY_NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    end={n.end}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium ${
                        isActive ? "bg-[#1D1D1F] text-white" : "hover:bg-[#F5F5F7]"
                      }`
                    }
                  >
                    <span>{n.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-50" />
                  </NavLink>
                ))}
                <div className="h-px bg-[#E5E5EA] my-2" />
                {UTILITY_NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-3 rounded-2xl text-sm ${
                        isActive ? "bg-[#F5F5F7] text-[#0066CC]" : "text-[#86868B] hover:bg-[#F5F5F7]"
                      }`
                    }
                  >
                    <User className="h-4 w-4" /> {n.label}
                  </NavLink>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <Link
                  to="/buy"
                  className="px-4 py-3 rounded-full bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium text-center"
                >
                  Buy Now
                </Link>
                <Link
                  to="/sell"
                  className="px-4 py-3 rounded-full bg-[#0066CC] text-white text-sm font-medium text-center"
                >
                  Sell Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-24 bg-[#0a0a0b] text-white" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
            <div className="col-span-2 md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-9 w-9 rounded-2xl bg-white text-[#0a0a0b] flex items-center justify-center">
                  <span className="font-bold text-base" style={{fontFamily:"Outfit"}}>G</span>
                </div>
                <span className="text-xl font-bold" style={{fontFamily:"Outfit"}}>{BRAND_NAME}</span>
              </div>
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                Premium device trade-in with an instant Minimum Guarantee. Sell smart, buy certified — picked up from your nearest GRAFFITI store in Kochi.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                <MapPin className="h-3.5 w-3.5" /> {BRAND_CITY}
              </div>
            </div>

            <FooterCol title="Platform" links={[
              { to: "/sell", label: "Sell a Device" },
              { to: "/buy", label: "Buy Certified" },
              { to: "/track", label: "Track My Device" },
              { to: "/account", label: "Seller Dashboard" },
            ]} />
            <FooterCol title="Company" links={[
              { to: "/how-it-works", label: "How It Works" },
              { to: "/why-graffiti", label: "Why GRAFFITI" },
              { to: "/faqs", label: "FAQs" },
              { to: "/contact", label: "Contact Us" },
            ]} />
            <FooterCol title="Stores" links={[
              { to: "/stores", label: "MG Road · Flagship" },
              { to: "/stores", label: "Edappally · Lulu Mall" },
              { to: "/stores", label: "Kakkanad · Infopark" },
              { to: "/stores", label: "All Kochi stores" },
            ]} />
            <div className="col-span-2 md:col-span-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white/40 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="text-white/70 hover:text-white" href="#">Terms of Service</a></li>
                <li><a className="text-white/70 hover:text-white" href="#">Privacy Policy</a></li>
                <li><a className="text-white/70 hover:text-white" href="#">Return Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-xs text-white/40">© 2026 GRAFFITI Technologies Pvt. Ltd. · Kochi · Demo build</p>
            <p className="text-xs text-white/40">IMEI verified · KYC secure · 64-point inspection</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="col-span-1 md:col-span-2">
      <h4 className="text-xs uppercase tracking-wider font-semibold text-white/40 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((l, i) => (
          <li key={i}><Link to={l.to} className="text-white/70 hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

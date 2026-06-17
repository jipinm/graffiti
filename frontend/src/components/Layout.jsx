import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const NAV = [
  { to: "/sell", label: "Sell" },
  { to: "/buy", label: "Buy" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/stores", label: "Stores" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <header className="recell-glass-nav sticky top-0 z-50" data-testid="site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
              <div className="h-8 w-8 rounded-xl bg-[#1D1D1F] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{fontFamily:"Outfit"}}>R</span>
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{fontFamily:"Outfit"}}>ReCell</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  data-testid={`nav-${n.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm rounded-full transition-colors ${
                      isActive ? "bg-[#1D1D1F] text-white" : "text-[#1D1D1F] hover:bg-[#F5F5F7]"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/sell"
                data-testid="header-cta-sell"
                className="px-5 py-2 text-sm rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white font-medium transition-colors inline-flex items-center gap-1"
              >
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

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
            <div className="md:hidden pb-4 space-y-1" data-testid="mobile-menu">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm ${
                      isActive ? "bg-[#1D1D1F] text-white" : "hover:bg-[#F5F5F7]"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/sell"
                className="block mt-2 px-4 py-3 rounded-xl bg-[#0066CC] text-white text-sm font-medium text-center"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-[#E5E5EA] bg-[#F5F5F7]" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-xl bg-[#1D1D1F] flex items-center justify-center">
                  <span className="text-white font-bold text-sm" style={{fontFamily:"Outfit"}}>R</span>
                </div>
                <span className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>ReCell</span>
              </div>
              <p className="text-sm text-[#86868B] max-w-sm">
                Premium device trade-in with an instant Minimum Guarantee. Sell smart, buy certified — pickup from your nearest ReCell store.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#86868B] mb-3">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sell" className="hover:text-[#0066CC]">Sell a Device</Link></li>
                <li><Link to="/buy" className="hover:text-[#0066CC]">Buy Certified</Link></li>
                <li><Link to="/dashboard" className="hover:text-[#0066CC]">Seller Dashboard</Link></li>
                <li><Link to="/stores" className="hover:text-[#0066CC]">Store Locator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#86868B] mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-[#0066CC]" href="#">How It Works</a></li>
                <li><a className="hover:text-[#0066CC]" href="#">Trust & Safety</a></li>
                <li><a className="hover:text-[#0066CC]" href="#">B2B Liquidation</a></li>
                <li><a className="hover:text-[#0066CC]" href="#">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#E5E5EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-xs text-[#86868B]">© 2026 ReCell Technologies Pvt. Ltd. · Demo</p>
            <p className="text-xs text-[#86868B]">Made for India · 6 cities · 12 stores</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import "@/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";

// Route-level code-splitting — each page becomes its own chunk
const Home = lazy(() => import("@/pages/Home"));
const Sell = lazy(() => import("@/pages/Sell"));
const Buy = lazy(() => import("@/pages/Buy"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Stores = lazy(() => import("@/pages/Stores"));
const HowItWorks = lazy(() => import("@/pages/HowItWorks"));
const WhyGraffiti = lazy(() => import("@/pages/WhyGraffiti"));
const FAQs = lazy(() => import("@/pages/FAQs"));
const TrackDevice = lazy(() => import("@/pages/TrackDevice"));
const Contact = lazy(() => import("@/pages/Contact"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" data-testid="page-loader">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-[#E5E5EA] border-t-[#0066CC] animate-spin" />
        <div className="text-xs uppercase tracking-wider text-[#86868B]">Loading</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Suspense fallback={<PageFallback />}><Home /></Suspense>}
            />
            <Route
              path="/sell"
              element={<Suspense fallback={<PageFallback />}><Sell /></Suspense>}
            />
            <Route
              path="/buy"
              element={<Suspense fallback={<PageFallback />}><Buy /></Suspense>}
            />
            <Route
              path="/buy/:id"
              element={<Suspense fallback={<PageFallback />}><ProductDetail /></Suspense>}
            />
            <Route
              path="/dashboard"
              element={<Suspense fallback={<PageFallback />}><Dashboard /></Suspense>}
            />
            <Route
              path="/account"
              element={<Suspense fallback={<PageFallback />}><Dashboard /></Suspense>}
            />
            <Route
              path="/stores"
              element={<Suspense fallback={<PageFallback />}><Stores /></Suspense>}
            />
            <Route
              path="/how-it-works"
              element={<Suspense fallback={<PageFallback />}><HowItWorks /></Suspense>}
            />
            <Route
              path="/why-graffiti"
              element={<Suspense fallback={<PageFallback />}><WhyGraffiti /></Suspense>}
            />
            <Route
              path="/faqs"
              element={<Suspense fallback={<PageFallback />}><FAQs /></Suspense>}
            />
            <Route
              path="/track"
              element={<Suspense fallback={<PageFallback />}><TrackDevice /></Suspense>}
            />
            <Route
              path="/contact"
              element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;

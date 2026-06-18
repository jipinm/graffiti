import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Sell from "@/pages/Sell";
import Buy from "@/pages/Buy";
import ProductDetail from "@/pages/ProductDetail";
import Dashboard from "@/pages/Dashboard";
import Stores from "@/pages/Stores";
import HowItWorks from "@/pages/HowItWorks";
import WhyGraffiti from "@/pages/WhyGraffiti";
import FAQs from "@/pages/FAQs";
import TrackDevice from "@/pages/TrackDevice";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/buy/:id" element={<ProductDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Dashboard />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-graffiti" element={<WhyGraffiti />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/track" element={<TrackDevice />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;

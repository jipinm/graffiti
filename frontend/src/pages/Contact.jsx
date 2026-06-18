import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone as PhoneIcon, MapPin, MessageCircle, Send, Clock4 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Sell", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks! Our Kochi team will reach out within 4 business hours.");
    setForm({ name: "", email: "", topic: "Sell", message: "" });
  };
  return (
    <div data-testid="contact-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-16">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Contact us</div>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter max-w-3xl" style={{fontFamily:"Outfit"}}>
          Talk to the GRAFFITI Kochi team.
        </h1>
        <p className="mt-4 text-[#86868B] max-w-2xl">We typically respond within 4 business hours. For instant help, walk in to any of our 6 Kochi stores.</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <ContactCard Icon={PhoneIcon} title="Call us" subtitle="+91 484 4 100 100" detail="Mon – Sat, 10 AM – 9 PM" />
            <ContactCard Icon={Mail} title="Email" subtitle="hello@graffiti.in" detail="Average response in 4 hours" />
            <ContactCard Icon={MessageCircle} title="WhatsApp" subtitle="+91 99000 22000" detail="Chat with a real human" />
            <ContactCard Icon={MapPin} title="Flagship store" subtitle="MG Road, Ernakulam · 682011" detail="Open 10:30 AM – 9:30 PM" />
            <div className="bg-[#1D1D1F] text-white rounded-3xl p-6 mt-4">
              <div className="flex items-center gap-3">
                <Clock4 className="h-5 w-5 text-[#0066CC]" />
                <div className="text-sm font-medium">Same-day MG payouts in Kochi</div>
              </div>
              <div className="mt-2 text-xs text-white/60">Walk in before 5 PM on a business day — your MG hits the bank before close.</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 bg-white border border-[#E5E5EA] rounded-3xl p-6 lg:p-8" data-testid="contact-form">
            <h2 className="text-lg font-semibold" style={{fontFamily:"Outfit"}}>Send us a message</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="Your name" testid="contact-name" value={form.name} onChange={(v)=>setForm({...form, name: v})} />
              <Field label="Email" testid="contact-email" type="email" value={form.email} onChange={(v)=>setForm({...form, email: v})} />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">I'm reaching out about</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Sell","Buy","Track","Other"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    data-testid={`contact-topic-${t.toLowerCase()}`}
                    onClick={() => setForm({...form, topic: t})}
                    className={`px-4 py-2 rounded-full text-sm border ${form.topic === t ? "bg-[#1D1D1F] text-white border-[#1D1D1F]" : "bg-white border-[#E5E5EA] hover:border-[#1D1D1F]"}`}
                  >{t}</button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Message</label>
              <textarea
                data-testid="contact-message"
                value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})}
                rows={5}
                className="mt-2 w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#0066CC] outline-none text-sm resize-none"
                placeholder="Tell us about your phone or query…"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
              <div className="text-xs text-[#86868B]">By submitting, you agree to GRAFFITI's <Link to="/faqs" className="text-[#0066CC] underline">privacy practices</Link>.</div>
              <button
                data-testid="contact-submit"
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium inline-flex items-center gap-2"
              >Send message <Send className="h-4 w-4" /></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ Icon, title, subtitle, detail }) {
  return (
    <div className="bg-[#F5F5F7] rounded-3xl p-5 flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-[#0066CC]" />
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">{title}</div>
        <div className="mt-0.5 text-base font-semibold" style={{fontFamily:"Outfit"}}>{subtitle}</div>
        <div className="text-xs text-[#86868B] mt-0.5">{detail}</div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", testid }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">{label}</label>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="mt-2 w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#0066CC] outline-none text-sm"
      />
    </div>
  );
}

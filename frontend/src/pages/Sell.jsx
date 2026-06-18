import { useMemo, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Check, ShieldCheck, Phone as PhoneIcon, Sparkles,
  Hand, Monitor, AlertTriangle, Layers, Scissors, AlertOctagon,
  Camera, Aperture, Volume2, Fingerprint, Wifi, Speaker, VolumeX, ScanFace,
  Power, Plug, Mic, Bluetooth, Activity, Radar, BatteryCharging,
  Package, PlugZap,
} from "lucide-react";
import { toast } from "sonner";
import {
  BRANDS, MODELS_BY_BRAND, STORAGE_OPTIONS, RAM_OPTIONS,
  QUESTIONNAIRE_STEPS, formatINR,
} from "@/lib/mockData";

const ICON_MAP = {
  Phone: PhoneIcon, Hand, Monitor, AlertTriangle, Layers, Scissors, AlertOctagon,
  Camera, Aperture, Volume2, Fingerprint, Wifi, Speaker, VolumeX, ScanFace,
  Power, Plug, Mic, Bluetooth, Activity, Radar, BatteryCharging,
  Package, PlugZap, Sparkles, Check, ShieldCheck,
};

export default function Sell() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const initialBrand = (() => {
    const b = params.get("brand");
    return b ? BRANDS.find((x) => x.id === b) || null : null;
  })();
  const [stage, setStage] = useState(initialBrand ? "model" : "brand");
  const [brand, setBrand] = useState(initialBrand);
  const [model, setModel] = useState(null);
  const [storage, setStorage] = useState(null);
  const [ram, setRam] = useState(null);
  const [qStep, setQStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const totalQs = QUESTIONNAIRE_STEPS.length;

  // Live price computation
  const livePrice = useMemo(() => {
    if (!model) return 0;
    let price = model.baseEstimate;
    const storIdx = STORAGE_OPTIONS.indexOf(storage);
    if (storIdx > 0) price += storIdx * 2500;
    const ramIdx = RAM_OPTIONS.indexOf(ram);
    if (ramIdx > 0) price += ramIdx * 800;
    QUESTIONNAIRE_STEPS.forEach((s) => {
      s.questions.forEach((q) => {
        const ans = answers[q.id];
        if (q.invert) { if (ans === true) price -= q.impact; }
        else { if (ans === false) price -= q.impact; }
      });
    });
    return Math.max(price, Math.round(model.baseEstimate * 0.35));
  }, [model, storage, ram, answers]);

  const estimateRange = useMemo(() => {
    if (!model) return [0, 0];
    return [Math.round(model.baseEstimate * 0.78), model.baseEstimate];
  }, [model]);

  const reset = () => {
    setBrand(null); setModel(null); setStorage(null); setRam(null);
    setQStep(0); setAnswers({}); setPhone(""); setOtp(""); setOtpSent(false);
    setStage("brand"); navigate("/sell");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14" data-testid="sell-page">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Sell your Mobile Phone</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
            Get an instant quote
          </h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#86868B]">
          <ShieldCheck className="h-4 w-4 text-[#0066CC]" /> IMEI verified · KYC secure
        </div>
      </div>

      <StepBar stage={stage} />

      {stage === "brand" && (
        <div className="recell-fade-up" data-testid="sell-stage-brand">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANDS.map(({ id, name, Icon }) => (
              <button
                key={id}
                data-testid={`sell-brand-${id}`}
                onClick={() => { setBrand({ id, name, Icon }); setStage("model"); }}
                className="recell-card-hover bg-white border border-[#E5E5EA] rounded-2xl p-6 flex flex-col items-center justify-center aspect-square hover:border-[#0066CC]"
              >
                <Icon className="h-10 w-10 text-[#1D1D1F]" />
                <div className="mt-4 text-sm font-medium">{name}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "model" && brand && (
        <div className="recell-fade-up" data-testid="sell-stage-model">
          <BackBar onBack={() => { setStage("brand"); setBrand(null); }} label={`Choose your ${brand.name} model`} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {(MODELS_BY_BRAND[brand.id] || []).map((m) => (
              <button
                key={m.id}
                data-testid={`sell-model-${m.id}`}
                onClick={() => { setModel(m); setStage("variant"); }}
                className="text-left recell-card-hover bg-white border border-[#E5E5EA] rounded-2xl p-5 hover:border-[#0066CC]"
              >
                <div className="bg-[#F5F5F7] rounded-2xl aspect-square overflow-hidden flex items-center justify-center">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-sm font-medium">{m.name}</div>
                <div className="text-xs text-[#86868B] mt-1">Get up to {formatINR(m.baseEstimate)}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "variant" && model && (
        <div className="recell-fade-up" data-testid="sell-stage-variant">
          <BackBar onBack={() => setStage("model")} label={`Configure your ${model.name}`} />
          <div className="grid lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-7 space-y-8">
              <Pickers label="Storage" options={STORAGE_OPTIONS} value={storage} onChange={setStorage} testid="storage" />
              <Pickers label="RAM" options={RAM_OPTIONS} value={ram} onChange={setRam} testid="ram" />
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#1D1D1F] text-white rounded-3xl p-8 sticky top-24" data-testid="price-estimator-card">
                <div className="text-xs uppercase tracking-wider font-semibold text-white/60">Estimated range</div>
                <div className="mt-3 text-4xl font-semibold recell-price-counter" style={{fontFamily:"Outfit"}}>
                  Up to {formatINR(estimateRange[1])}
                </div>
                <div className="text-sm text-white/60 mt-2">Starting from {formatINR(estimateRange[0])}</div>
                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  {"Want a precise quote? Tell us a bit about the phone\u2019s condition next."}
                </p>
                <button
                  data-testid="sell-get-exact-value"
                  disabled={!storage || !ram}
                  onClick={() => { setStage("questionnaire"); setQStep(0); }}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#0066CC] text-white font-medium hover:bg-[#0055AA] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Get exact value <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {stage === "questionnaire" && model && (
        <div className="recell-fade-up" data-testid="device-condition-form">
          <BackBar onBack={() => { if (qStep === 0) setStage("variant"); else setQStep(qStep - 1); }} label={QUESTIONNAIRE_STEPS[qStep].title} />
          <div className="mt-2 text-sm text-[#86868B]">{`Step ${qStep+1} of ${totalQs} · ${QUESTIONNAIRE_STEPS[qStep].subtitle}`}</div>

          {/* Progress + step dots */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-[#F5F5F7] rounded-full overflow-hidden">
              <div className="h-full bg-[#0066CC] transition-all duration-500" style={{ width: `${((qStep+1)/totalQs)*100}%` }} />
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {QUESTIONNAIRE_STEPS.map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full transition-colors ${i <= qStep ? "bg-[#0066CC]" : "bg-[#E5E5EA]"}`} />
              ))}
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-6">
            {/* Question area */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-[#E5E5EA] rounded-3xl p-6 lg:p-8">
                <QuestionGroup step={QUESTIONNAIRE_STEPS[qStep]} answers={answers} setAnswers={setAnswers} />

                <div className="mt-8 flex items-center justify-between gap-3 flex-wrap">
                  <button
                    data-testid="sell-q-prev"
                    onClick={() => { if (qStep === 0) setStage("variant"); else setQStep(qStep - 1); }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-sm font-medium"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    data-testid="sell-q-next"
                    onClick={() => { if (qStep < totalQs - 1) setQStep(qStep + 1); else setStage("otp"); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white text-sm font-medium"
                  >
                    {qStep < totalQs - 1 ? "Continue" : "Continue to verify"} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Live price sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-[#1D1D1F] text-white rounded-3xl p-7 sticky top-24" data-testid="live-price-panel">
                <div className="text-xs uppercase tracking-wider font-semibold text-white/60">Live estimate</div>
                <div className="mt-2 text-4xl font-semibold recell-price-counter transition-all" style={{fontFamily:"Outfit"}}>
                  {formatINR(livePrice)}
                </div>
                <div className="mt-2 text-sm text-white/60">{model.name} · {storage} · {ram}</div>
                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-4 text-xs text-white/60 leading-relaxed">
                  Your price updates in real time as you answer. Final amount confirmed after the in-store inspection.
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider font-semibold">
                  <div className="bg-white/5 rounded-xl p-2.5 text-center">
                    <div className="text-white/50">Step</div>
                    <div className="text-white text-sm mt-0.5">{qStep+1} / {totalQs}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 text-center">
                    <div className="text-white/50">Answered</div>
                    <div className="text-white text-sm mt-0.5">{Object.keys(answers).length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {stage === "otp" && (
        <div className="recell-fade-up max-w-md mx-auto" data-testid="sell-stage-otp">
          <BackBar onBack={() => setStage("questionnaire")} label="Verify your mobile" />
          <div className="mt-6 bg-white border border-[#E5E5EA] rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                <PhoneIcon className="h-5 w-5 text-[#0066CC]" />
              </div>
              <div>
                <div className="text-sm font-medium">Login with mobile</div>
                <div className="text-xs text-[#86868B]">{"We\u2019ll send you a 6-digit OTP"}</div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Mobile number</label>
                <div className="mt-2 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] focus-within:border-[#0066CC]">
                  <span className="text-sm font-medium">+91</span>
                  <input
                    data-testid="sell-mobile-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g,"").slice(0,10))}
                    placeholder="98765 43210"
                    className="bg-transparent outline-none flex-1 text-sm"
                  />
                </div>
              </div>
              {!otpSent ? (
                <button
                  data-testid="sell-send-otp"
                  disabled={phone.length !== 10}
                  onClick={() => { setOtpSent(true); toast.success("OTP sent. Use 123456 for the demo."); }}
                  className="w-full px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white font-medium disabled:opacity-40"
                >Send OTP</button>
              ) : (
                <>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Enter OTP</label>
                    <input
                      data-testid="sell-otp-input"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g,"").slice(0,6))}
                      placeholder="123456"
                      className="mt-2 w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#0066CC] outline-none text-base tracking-[0.4em] text-center font-medium"
                    />
                  </div>
                  <button
                    data-testid="sell-verify-otp"
                    disabled={otp.length !== 6}
                    onClick={() => {
                      if (otp === "123456") { setStage("price"); toast.success("Verified. Here is your exact price."); }
                      else toast.error("Invalid OTP. Use 123456 for the demo.");
                    }}
                    className="w-full px-6 py-3 rounded-full bg-[#0066CC] hover:bg-[#0055AA] text-white font-medium disabled:opacity-40"
                  >Verify & Reveal Price</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {stage === "price" && model && (
        <div className="recell-fade-up" data-testid="sell-stage-price">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">Final quote</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tighter" style={{fontFamily:"Outfit"}}>
                {model.name}
              </h2>
              <p className="mt-2 text-sm text-[#86868B]">{storage} · {ram} · IMEI verification on walk-in</p>

              <div className="mt-8 bg-[#1D1D1F] text-white rounded-3xl p-8 lg:p-10">
                <div className="text-xs uppercase tracking-wider font-semibold text-white/60">Your exact value</div>
                <div className="mt-3 text-5xl lg:text-6xl font-semibold recell-price-counter" style={{fontFamily:"Outfit"}}>
                  {formatINR(livePrice)}
                </div>
                <div className="mt-2 text-sm text-white/60">Minimum Guarantee · Paid the day you walk in</div>
                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <button
                    data-testid="sell-now-cta"
                    onClick={() => { toast.success("Listing created. Track it on your dashboard."); navigate("/account"); }}
                    className="px-6 py-4 rounded-full bg-[#0066CC] hover:bg-[#0055AA] font-medium inline-flex items-center justify-center gap-2"
                  >Sell Now <ArrowRight className="h-4 w-4" /></button>
                  <button
                    data-testid="sell-revalue-cta"
                    onClick={() => { setStage("questionnaire"); setQStep(0); }}
                    className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 font-medium border border-white/20"
                  >Revalue</button>
                </div>
                <p className="mt-6 text-xs text-white/50 leading-relaxed">
                  Final amount confirmed after a 24-hour lab inspection. If your phone resells above MG within 21 days, you earn a profit share.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <SidePanel title="What happens next" items={[
                "Walk in to a GRAFFITI Kochi store with a valid ID",
                "Primary inspection takes 15 minutes",
                "MG paid to your bank within 24 hours",
                "Track listing & profit share on your dashboard",
              ]} />
              <SidePanel title="Trust & verification" items={[
                "KYC against government ID",
                "IMEI cross-checked with carrier and police db",
                "Hardware verified for original parts",
                "Account de-link assistance in store",
              ]} />
              <button onClick={reset} data-testid="sell-restart"
                className="w-full px-6 py-3 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-sm font-medium">
                Start over
              </button>
              <Link to="/faqs" className="block text-center text-sm text-[#0066CC] hover:underline">Have a question? See FAQs</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function QuestionGroup({ step, answers, setAnswers }) {
  if (step.type === "yesno") {
    return (
      <div className="grid sm:grid-cols-2 gap-3">
        {step.questions.map((q) => {
          const Icon = ICON_MAP[q.icon] || Check;
          const current = answers[q.id];
          return (
            <div key={q.id} data-testid={`question-${q.id}`} className="bg-[#F5F5F7] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#0066CC]" />
                </div>
                <div className="text-sm font-medium leading-snug">{q.label}</div>
              </div>
              <div className="mt-4 flex gap-2">
                {[{ v: true, label: "Yes" }, { v: false, label: "No" }].map((opt) => (
                  <button
                    key={String(opt.v)}
                    data-testid={`answer-${q.id}-${opt.label.toLowerCase()}`}
                    onClick={() => setAnswers({ ...answers, [q.id]: opt.v })}
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      current === opt.v
                        ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                        : "bg-white text-[#1D1D1F] border-[#E5E5EA] hover:border-[#1D1D1F]"
                    }`}
                  >{opt.label}</button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // select-all card grid
  return (
    <>
      <p className="text-xs text-[#86868B] mb-4">Tap each component that's working. Skip the ones that aren't.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {step.questions.map((q) => {
          const Icon = ICON_MAP[q.icon] || Check;
          const checked = answers[q.id] === true;
          return (
            <button
              key={q.id}
              data-testid={`question-${q.id}`}
              onClick={() => setAnswers({ ...answers, [q.id]: !checked })}
              className={`text-left rounded-2xl p-4 border transition-all ${
                checked
                  ? "border-[#0066CC] bg-[#0066CC]/5 ring-1 ring-[#0066CC]/20"
                  : "border-[#E5E5EA] bg-white hover:border-[#1D1D1F]"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${checked ? "bg-[#0066CC] text-white" : "bg-[#F5F5F7] text-[#0066CC]"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className={`h-5 w-5 rounded-md flex items-center justify-center border transition-all ${checked ? "bg-[#0066CC] border-[#0066CC]" : "border-[#86868B]"}`}>
                  {checked && <Check className="h-3.5 w-3.5 text-white" />}
                </span>
              </div>
              <div className="mt-3 text-sm font-medium leading-snug">{q.label}</div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function StepBar({ stage }) {
  const order = ["brand", "model", "variant", "questionnaire", "otp", "price"];
  const labels = ["Brand","Model","Variant","Condition","Verify","Quote"];
  const idx = order.indexOf(stage);
  return (
    <div className="mb-8 hidden md:flex items-center gap-2 overflow-x-auto" data-testid="sell-stepbar">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2 shrink-0">
          <div className={`h-7 px-3 rounded-full text-xs font-medium inline-flex items-center justify-center transition-colors ${
            i <= idx ? "bg-[#0066CC] text-white" : "bg-[#F5F5F7] text-[#86868B]"
          }`}>{i+1}. {l}</div>
          {i < labels.length-1 && <div className={`h-px w-6 ${i < idx ? "bg-[#0066CC]" : "bg-[#E5E5EA]"}`} />}
        </div>
      ))}
    </div>
  );
}

function BackBar({ onBack, label }) {
  return (
    <div className="flex items-center gap-3">
      <button data-testid="sell-back" onClick={onBack} className="h-9 w-9 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] inline-flex items-center justify-center">
        <ArrowLeft className="h-4 w-4" />
      </button>
      <h2 className="text-xl sm:text-2xl font-medium" style={{fontFamily:"Outfit"}}>{label}</h2>
    </div>
  );
}

function Pickers({ label, options, value, onChange, testid }) {
  return (
    <div data-testid={`sell-picker-${testid}`}>
      <div className="text-xs uppercase tracking-wider font-semibold text-[#86868B]">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            data-testid={`sell-${testid}-${opt.replace(/\s+/g,'').toLowerCase()}`}
            onClick={() => onChange(opt)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
              value === opt
                ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                : "bg-white border-[#E5E5EA] hover:border-[#1D1D1F]"
            }`}
          >{opt}</button>
        ))}
      </div>
    </div>
  );
}

function SidePanel({ title, items }) {
  return (
    <div className="bg-[#F5F5F7] rounded-3xl p-6">
      <h4 className="text-sm font-semibold" style={{fontFamily:"Outfit"}}>{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-[#0066CC] mt-0.5 shrink-0" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

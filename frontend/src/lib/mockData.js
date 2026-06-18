// Mock data for GRAFFITI demo platform — Kochi, Kerala
import { FaApple } from "react-icons/fa";
import { SiSamsung, SiSony, SiOneplus, SiXiaomi, SiGoogle } from "react-icons/si";

export const BRAND_NAME = "GRAFFITI";
export const BRAND_TAGLINE = "Trade smarter. Buy certified.";
export const BRAND_CITY = "Kochi, Kerala";

export const BRANDS = [
  { id: "apple", name: "Apple", Icon: FaApple },
  { id: "samsung", name: "Samsung", Icon: SiSamsung },
  { id: "oneplus", name: "OnePlus", Icon: SiOneplus },
  { id: "xiaomi", name: "Xiaomi", Icon: SiXiaomi },
  { id: "google", name: "Google", Icon: SiGoogle },
  { id: "sony", name: "Sony", Icon: SiSony },
];

const IPHONE_IMG = "https://images.unsplash.com/photo-1736173155811-e8142fd553ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxpcGhvbmUlMjAxNSUyMHByb3xlbnwwfHx8fDE3ODE0MjQwMDB8MA&ixlib=rb-4.1.0&q=85";
const SAMSUNG_IMG = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxzYW1zdW5nJTIwZ2FsYXh5JTIwc21hcnRwaG9uZXxlbnwwfHx8fDE3ODE0MjQwMDB8MA&ixlib=rb-4.1.0&q=85";
const PHONE_TABLE = "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const MODELS_BY_BRAND = {
  apple: [
    { id: "iphone-15-pro", name: "iPhone 15 Pro", image: IPHONE_IMG, baseEstimate: 78500 },
    { id: "iphone-14", name: "iPhone 14", image: IPHONE_IMG, baseEstimate: 48200 },
    { id: "iphone-13", name: "iPhone 13", image: IPHONE_IMG, baseEstimate: 36400 },
    { id: "iphone-12", name: "iPhone 12", image: IPHONE_IMG, baseEstimate: 27800 },
    { id: "iphone-11", name: "iPhone 11", image: IPHONE_IMG, baseEstimate: 18900 },
    { id: "iphone-se", name: "iPhone SE (3rd gen)", image: IPHONE_IMG, baseEstimate: 14500 },
  ],
  samsung: [
    { id: "s24-ultra", name: "Galaxy S24 Ultra", image: SAMSUNG_IMG, baseEstimate: 82400 },
    { id: "s23", name: "Galaxy S23", image: SAMSUNG_IMG, baseEstimate: 41000 },
    { id: "s22", name: "Galaxy S22", image: SAMSUNG_IMG, baseEstimate: 28500 },
    { id: "z-flip5", name: "Galaxy Z Flip5", image: SAMSUNG_IMG, baseEstimate: 56000 },
  ],
  oneplus: [
    { id: "op-12", name: "OnePlus 12", image: PHONE_TABLE, baseEstimate: 38500 },
    { id: "op-11", name: "OnePlus 11", image: PHONE_TABLE, baseEstimate: 29900 },
    { id: "op-nord-3", name: "OnePlus Nord 3", image: PHONE_TABLE, baseEstimate: 16800 },
  ],
  xiaomi: [
    { id: "mi-14", name: "Xiaomi 14", image: PHONE_TABLE, baseEstimate: 34500 },
    { id: "mi-13-pro", name: "Xiaomi 13 Pro", image: PHONE_TABLE, baseEstimate: 28200 },
  ],
  google: [
    { id: "pixel-8-pro", name: "Pixel 8 Pro", image: PHONE_TABLE, baseEstimate: 52000 },
    { id: "pixel-7", name: "Pixel 7", image: PHONE_TABLE, baseEstimate: 28900 },
  ],
  sony: [
    { id: "xperia-1-v", name: "Xperia 1 V", image: PHONE_TABLE, baseEstimate: 49500 },
  ],
};

export const STORAGE_OPTIONS = ["128 GB", "256 GB", "512 GB", "1 TB"];
export const RAM_OPTIONS = ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];

// 4-step questionnaire — each question carries an icon name (lucide-react)
export const QUESTIONNAIRE_STEPS = [
  {
    id: "functionality",
    title: "Basic Functionality",
    subtitle: "Tell us how your phone performs the basics.",
    type: "yesno",
    questions: [
      { id: "calls", label: "Can your phone make & receive calls clearly?", icon: "Phone", impact: 0 },
      { id: "touchscreen", label: "Is the touchscreen fully responsive?", icon: "Hand", impact: 0 },
      { id: "originalScreen", label: "Is the screen original (never replaced by a local shop)?", icon: "Monitor", impact: 0 },
    ],
  },
  {
    id: "screen-body",
    title: "Screen & Body Condition",
    subtitle: "Inspect your phone's physical state.",
    type: "yesno",
    questions: [
      { id: "screenBreak", label: "Any breaks or scratches on the screen?", icon: "AlertTriangle", impact: 1800, invert: true },
      { id: "deadSpot", label: "Dead spots, lines, or discoloration on the display?", icon: "Layers", impact: 1200, invert: true },
      { id: "bodyDent", label: "Scratches or dents on the body?", icon: "Scissors", impact: 900, invert: true },
      { id: "panelMissing", label: "Any phone panel missing or broken?", icon: "AlertOctagon", impact: 1500, invert: true },
    ],
  },
  {
    id: "components",
    title: "Functional Components",
    subtitle: "Tap every component that is working correctly.",
    type: "selectall",
    questions: [
      { id: "frontCam", label: "Front Camera", icon: "Camera", impact: 600 },
      { id: "backCam", label: "Back Camera", icon: "Aperture", impact: 900 },
      { id: "volumeBtn", label: "Volume Buttons", icon: "Volume2", impact: 300 },
      { id: "fingerprint", label: "Fingerprint Sensor", icon: "Fingerprint", impact: 600 },
      { id: "wifi", label: "WiFi", icon: "Wifi", impact: 700 },
      { id: "speaker", label: "Speaker", icon: "Speaker", impact: 500 },
      { id: "silentBtn", label: "Silent / Mute Switch", icon: "VolumeX", impact: 300 },
      { id: "faceSensor", label: "Face Sensor", icon: "ScanFace", impact: 600 },
      { id: "powerBtn", label: "Power Button", icon: "Power", impact: 400 },
      { id: "chargingPort", label: "Charging Port", icon: "Plug", impact: 800 },
      { id: "microphone", label: "Microphone", icon: "Mic", impact: 500 },
      { id: "bluetooth", label: "Bluetooth", icon: "Bluetooth", impact: 500 },
      { id: "vibrator", label: "Vibrator", icon: "Activity", impact: 200 },
      { id: "proximity", label: "Proximity Sensor", icon: "Radar", impact: 300 },
      { id: "battery", label: "Battery Health above 80%", icon: "BatteryCharging", impact: 1500 },
    ],
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Original accessories help us pay you more.",
    type: "yesno",
    questions: [
      { id: "originalBox", label: "Do you have the original box with matching IMEI?", icon: "Package", impact: 500 },
      { id: "originalCharger", label: "Original charger and cable in working condition?", icon: "PlugZap", impact: 400 },
    ],
  },
];

// Buy marketplace (Kochi pickup)
export const MARKETPLACE = [
  { id: "m1", model: "iPhone 14 Pro", brand: "Apple", storage: "256 GB", ram: "8 GB", variant: "256 GB · 8 GB", price: 64999, mrp: 119900, image: IPHONE_IMG, grade: "Superb", store: "MG Road, Kochi", color: "Deep Purple", warranty: "6 months", rating: 4.7 },
  { id: "m2", model: "Galaxy S23 Ultra", brand: "Samsung", storage: "512 GB", ram: "12 GB", variant: "512 GB · 12 GB", price: 71499, mrp: 124999, image: SAMSUNG_IMG, grade: "Like New", store: "Edappally, Kochi", color: "Phantom Black", warranty: "6 months", rating: 4.9 },
  { id: "m3", model: "iPhone 13", brand: "Apple", storage: "128 GB", ram: "6 GB", variant: "128 GB · 6 GB", price: 39299, mrp: 69900, image: IPHONE_IMG, grade: "Good", store: "Kakkanad, Kochi", color: "Midnight", warranty: "3 months", rating: 4.4 },
  { id: "m4", model: "OnePlus 11", brand: "OnePlus", storage: "256 GB", ram: "16 GB", variant: "256 GB · 16 GB", price: 38800, mrp: 61999, image: PHONE_TABLE, grade: "Superb", store: "Vyttila, Kochi", color: "Titan Black", warranty: "6 months", rating: 4.6 },
  { id: "m5", model: "Pixel 8 Pro", brand: "Google", storage: "128 GB", ram: "12 GB", variant: "128 GB · 12 GB", price: 56400, mrp: 106999, image: PHONE_TABLE, grade: "Like New", store: "Panampilly Nagar, Kochi", color: "Obsidian", warranty: "6 months", rating: 4.8 },
  { id: "m6", model: "iPhone 12", brand: "Apple", storage: "128 GB", ram: "4 GB", variant: "128 GB · 4 GB", price: 32499, mrp: 65900, image: IPHONE_IMG, grade: "Good", store: "Fort Kochi", color: "Blue", warranty: "3 months", rating: 4.3 },
  { id: "m7", model: "Galaxy Z Flip5", brand: "Samsung", storage: "256 GB", ram: "8 GB", variant: "256 GB · 8 GB", price: 58999, mrp: 99999, image: SAMSUNG_IMG, grade: "Superb", store: "MG Road, Kochi", color: "Mint", warranty: "6 months", rating: 4.5 },
  { id: "m8", model: "Xiaomi 13 Pro", brand: "Xiaomi", storage: "256 GB", ram: "12 GB", variant: "256 GB · 12 GB", price: 41200, mrp: 79999, image: PHONE_TABLE, grade: "Superb", store: "Edappally, Kochi", color: "Ceramic White", warranty: "6 months", rating: 4.5 },
  { id: "m9", model: "iPhone 15 Pro", brand: "Apple", storage: "512 GB", ram: "8 GB", variant: "512 GB · 8 GB", price: 99999, mrp: 159900, image: IPHONE_IMG, grade: "Like New", store: "MG Road, Kochi", color: "Natural Titanium", warranty: "12 months", rating: 4.9 },
  { id: "m10", model: "Galaxy S22", brand: "Samsung", storage: "128 GB", ram: "8 GB", variant: "128 GB · 8 GB", price: 29800, mrp: 72999, image: SAMSUNG_IMG, grade: "Good", store: "Kakkanad, Kochi", color: "Phantom White", warranty: "3 months", rating: 4.2 },
  { id: "m11", model: "OnePlus Nord 3", brand: "OnePlus", storage: "128 GB", ram: "8 GB", variant: "128 GB · 8 GB", price: 19999, mrp: 33999, image: PHONE_TABLE, grade: "Superb", store: "Vyttila, Kochi", color: "Misty Green", warranty: "6 months", rating: 4.4 },
  { id: "m12", model: "Pixel 7", brand: "Google", storage: "256 GB", ram: "8 GB", variant: "256 GB · 8 GB", price: 33500, mrp: 69999, image: PHONE_TABLE, grade: "Good", store: "Panampilly Nagar, Kochi", color: "Snow", warranty: "3 months", rating: 4.3 },
];

// Seller dashboard mocks
export const SELLER_LISTINGS = [
  { id: "G-204A", model: "iPhone 13 · 128 GB", image: IPHONE_IMG, status: "Listed", mg: 32100, currentBid: 36400, daysRemaining: 14, statusColor: "#34C759", margin: 4300, listedOn: "12 Feb 2026" },
  { id: "G-198F", model: "Galaxy S22 · 256 GB", image: SAMSUNG_IMG, status: "Sold", mg: 26800, currentBid: 30500, daysRemaining: 0, statusColor: "#0066CC", margin: 3700, listedOn: "02 Feb 2026" },
  { id: "G-211B", model: "OnePlus 11 · 256 GB", image: PHONE_TABLE, status: "Under Inspection", mg: 0, currentBid: 0, daysRemaining: 21, statusColor: "#FF9500", margin: 0, listedOn: "18 Feb 2026" },
];

// Kochi stores
export const STORES = [
  { id: "s1", city: "Kochi", area: "MG Road Flagship", address: "MG Road, near Pavithran Road, Ernakulam · 682011", hours: "10:30 AM – 9:30 PM", phone: "+91 484 4 100 100" },
  { id: "s2", city: "Kochi", area: "Edappally Mall", address: "Lulu Mall, Ground Floor, Edappally · 682024", hours: "10:00 AM – 10:30 PM", phone: "+91 484 4 100 200" },
  { id: "s3", city: "Kochi", area: "Kakkanad Hub", address: "Infopark Phase 1, near SmartCity · 682030", hours: "10:30 AM – 9:00 PM", phone: "+91 484 4 100 300" },
  { id: "s4", city: "Kochi", area: "Vyttila", address: "Mobility Hub Road, near Vyttila Junction · 682019", hours: "10:30 AM – 9:30 PM", phone: "+91 484 4 100 400" },
  { id: "s5", city: "Kochi", area: "Panampilly Nagar", address: "Panampilly Avenue, near South Junction · 682036", hours: "11:00 AM – 9:00 PM", phone: "+91 484 4 100 500" },
  { id: "s6", city: "Kochi", area: "Fort Kochi", address: "Princess Street, near Santa Cruz Basilica · 682001", hours: "11:00 AM – 8:30 PM", phone: "+91 484 4 100 600" },
];

// FAQs about the MG model
export const FAQS = [
  { q: "What is the Minimum Guarantee (MG)?", a: "MG is a fair upfront price we pay you the day you walk in. It's based on your phone's exact configuration and condition after a 15-minute inspection at any GRAFFITI store." },
  { q: "How is the bonus / profit share calculated?", a: "If your phone sells above MG within the 21-day window, your bonus = Selling Price − MG − Platform Fee. The bonus is transferred to your bank account after the buyer's return period ends." },
  { q: "What happens if my phone doesn't sell in 21 days?", a: "You keep the full MG. Ownership of the phone transfers to GRAFFITI and no further action is needed from you. We then liquidate it through our B2B network." },
  { q: "Which mobile phones does GRAFFITI accept?", a: "Premium mobile phones from Apple, Samsung, OnePlus, Google, Xiaomi and Sony. Phones must be functional, like-new in appearance, and have original screen and battery." },
  { q: "How is my personal data wiped from the phone?", a: "Our technicians factory-reset every phone and run a certified data-erasure tool that overwrites all storage blocks. You can also de-link your Apple/Google account at the store with us." },
  { q: "How long does the MG payout take?", a: "After your phone clears primary inspection (about 15 minutes), the MG is transferred to your bank account the same business day via UPI or NEFT." },
  { q: "Are GRAFFITI's certified buy-side phones safe?", a: "Every certified phone passes a 64-point inspection, has its IMEI cleared against carrier and police databases, and ships with a 1-day in-store return policy." },
  { q: "Do you support delivery for the Buy section?", a: "Currently, buyers pick up in-store at any of our 6 Kochi locations. Doorstep delivery across Kerala is rolling out in Q3 2026." },
  { q: "Is COD available?", a: "All buy-side transactions are prepaid (UPI / card / netbanking). COD is not available right now to keep prices low and inspections airtight." },
];

// Testimonials
export const TESTIMONIALS = [
  { id: "t1", name: "Anjali Menon", role: "Product Designer · Kochi", quote: "Walked into the MG Road store with my iPhone 12. Got an honest quote, MG was in my account before I reached home. Earned a ₹4,300 bonus three weeks later.", initial: "A" },
  { id: "t2", name: "Rahul Krishnan", role: "Founder · Kakkanad", quote: "GRAFFITI is the first trade-in I trust. The 21-day resale window is genius — you don't gamble on timing, you just get paid.", initial: "R" },
  { id: "t3", name: "Sneha Pillai", role: "Doctor · Edappally", quote: "Bought a certified Galaxy S23 Ultra from the Edappally store. Felt brand-new, packed like a flagship. Saved ₹50K.", initial: "S" },
];

// Platform stats (for animated counters)
export const PLATFORM_STATS = [
  { id: "devices", value: 18420, label: "Phones traded", suffix: "+" },
  { id: "payouts", value: 9.2, label: "Crore paid out", prefix: "₹", suffix: "Cr+" },
  { id: "stores", value: 6, label: "Kochi stores" },
  { id: "rating", value: 4.9, label: "Avg. seller rating", suffix: "/5" },
];

export const HOW_IT_WORKS = [
  { n: "01", title: "Get an instant valuation", body: "Pick your phone, answer a few quick questions, and receive a transparent estimated range within a minute.", icon: "Sparkles" },
  { n: "02", title: "Expert inspection", body: "Visit a GRAFFITI store or send it through our courier. A certified technician completes a 15-minute verification.", icon: "ShieldCheck" },
  { n: "03", title: "Receive your MG", body: "Once approved, your guaranteed Minimum Guarantee lands in your bank account the same business day.", icon: "Banknote" },
  { n: "04", title: "Listed for 21 days", body: "We list your phone on the GRAFFITI marketplace for 21 days at a market-optimised price.", icon: "Calendar" },
  { n: "05", title: "Track your phone", body: "Watch the listing status, current price, days remaining and your potential profit share — all from your dashboard.", icon: "LineChart" },
  { n: "06", title: "Earn more when it sells", body: "Bonus = Selling Price − MG − Platform Fee. Paid after the buyer's return window closes.", icon: "TrendingUp" },
  { n: "07", title: "If unsold, you keep the MG", body: "After 21 days the phone transfers to us. You keep the MG. No effort, no awkward returns.", icon: "Check" },
];

export const HERO_IMG = "https://images.pexels.com/photos/34018284/pexels-photo-34018284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
export const STORE_IMG = "https://images.unsplash.com/photo-1760774999553-2eb0292ae82d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwbW9kZXJuJTIwZWxlY3Ryb25pY3MlMjBzdG9yZXxlbnwwfHx8fDE3ODE0MjQwMDB8MA&ixlib=rb-4.1.0&q=85";

export const formatINR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });

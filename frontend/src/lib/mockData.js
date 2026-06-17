// Mock data for ReCell demo platform
import { FaApple } from "react-icons/fa";
import { SiSamsung, SiSony, SiOneplus, SiXiaomi, SiGoogle } from "react-icons/si";

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

// 4-step questionnaire definition (matches the spec)
export const QUESTIONNAIRE_STEPS = [
  {
    id: "functionality",
    title: "Basic Functionality",
    subtitle: "Tell us how your device performs the basics.",
    questions: [
      { id: "calls", label: "Can your device make & receive calls?", impact: 0 },
      { id: "touchscreen", label: "Is the touchscreen fully responsive?", impact: 0 },
      { id: "originalScreen", label: "Is the screen original (never replaced by a local shop)?", impact: 0 },
    ],
  },
  {
    id: "screen-body",
    title: "Screen & Body Condition",
    subtitle: "Inspect your device's physical state.",
    questions: [
      { id: "screenBreak", label: "Any breaks or scratches on the screen?", impact: 1800, invert: true },
      { id: "deadSpot", label: "Dead spots, visible lines, or discoloration?", impact: 1200, invert: true },
      { id: "bodyDent", label: "Scratches or dents on the body?", impact: 900, invert: true },
      { id: "panelMissing", label: "Any device panel missing or broken?", impact: 1500, invert: true },
    ],
  },
  {
    id: "components",
    title: "Functional Components",
    subtitle: "Select all components working correctly.",
    questions: [
      { id: "frontCam", label: "Front Camera", impact: 600 },
      { id: "backCam", label: "Back Camera", impact: 900 },
      { id: "volumeBtn", label: "Volume Buttons", impact: 300 },
      { id: "fingerprint", label: "Fingerprint Sensor", impact: 600 },
      { id: "wifi", label: "WiFi", impact: 700 },
      { id: "speaker", label: "Speaker", impact: 500 },
      { id: "silentBtn", label: "Silent / Mute Switch", impact: 300 },
      { id: "faceSensor", label: "Face Sensor", impact: 600 },
      { id: "powerBtn", label: "Power Button", impact: 400 },
      { id: "chargingPort", label: "Charging Port", impact: 800 },
      { id: "microphone", label: "Microphone", impact: 500 },
      { id: "bluetooth", label: "Bluetooth", impact: 500 },
      { id: "vibrator", label: "Vibrator", impact: 200 },
      { id: "proximity", label: "Proximity Sensor", impact: 300 },
      { id: "battery", label: "Battery Health above 80%", impact: 1500 },
    ],
    selectAll: true,
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Original accessories help us pay you more.",
    questions: [
      { id: "originalBox", label: "Do you have the original box with matching IMEI?", impact: 500 },
    ],
  },
];

// Marketplace / Buy listings
export const MARKETPLACE = [
  {
    id: "m1", model: "iPhone 14 Pro", brand: "Apple", variant: "256 GB · 8 GB", price: 64999, mrp: 119900,
    image: IPHONE_IMG, grade: "Superb", store: "Mumbai · Bandra", color: "Deep Purple",
  },
  {
    id: "m2", model: "Galaxy S23 Ultra", brand: "Samsung", variant: "512 GB · 12 GB", price: 71499, mrp: 124999,
    image: SAMSUNG_IMG, grade: "Like New", store: "Bengaluru · Indiranagar", color: "Phantom Black",
  },
  {
    id: "m3", model: "iPhone 13", brand: "Apple", variant: "128 GB · 6 GB", price: 39299, mrp: 69900,
    image: IPHONE_IMG, grade: "Good", store: "Delhi · Saket", color: "Midnight",
  },
  {
    id: "m4", model: "OnePlus 11", brand: "OnePlus", variant: "256 GB · 16 GB", price: 38800, mrp: 61999,
    image: PHONE_TABLE, grade: "Superb", store: "Pune · Koregaon Park", color: "Titan Black",
  },
  {
    id: "m5", model: "Pixel 8 Pro", brand: "Google", variant: "128 GB · 12 GB", price: 56400, mrp: 106999,
    image: PHONE_TABLE, grade: "Like New", store: "Hyderabad · Jubilee Hills", color: "Obsidian",
  },
  {
    id: "m6", model: "iPhone 12", brand: "Apple", variant: "128 GB · 4 GB", price: 32499, mrp: 65900,
    image: IPHONE_IMG, grade: "Good", store: "Chennai · Nungambakkam", color: "Blue",
  },
  {
    id: "m7", model: "Galaxy Z Flip5", brand: "Samsung", variant: "256 GB · 8 GB", price: 58999, mrp: 99999,
    image: SAMSUNG_IMG, grade: "Superb", store: "Mumbai · BKC", color: "Mint",
  },
  {
    id: "m8", model: "Xiaomi 13 Pro", brand: "Xiaomi", variant: "256 GB · 12 GB", price: 41200, mrp: 79999,
    image: PHONE_TABLE, grade: "Superb", store: "Bengaluru · Whitefield", color: "Ceramic White",
  },
];

// Seller dashboard mocks
export const SELLER_LISTINGS = [
  {
    id: "L-204A", model: "iPhone 13 · 128 GB", image: IPHONE_IMG,
    status: "Listed", mg: 32100, currentBid: 36400, daysRemaining: 14,
    statusColor: "#34C759", margin: 4300, listedOn: "12 Feb 2026",
  },
  {
    id: "L-198F", model: "Galaxy S22 · 256 GB", image: SAMSUNG_IMG,
    status: "Sold", mg: 26800, currentBid: 30500, daysRemaining: 0,
    statusColor: "#0066CC", margin: 3700, listedOn: "02 Feb 2026",
  },
  {
    id: "L-211B", model: "OnePlus 11 · 256 GB", image: PHONE_TABLE,
    status: "Under Inspection", mg: 0, currentBid: 0, daysRemaining: 21,
    statusColor: "#FF9500", margin: 0, listedOn: "18 Feb 2026",
  },
];

export const STORES = [
  { id: "s1", city: "Mumbai", area: "Bandra West", address: "Linking Road, opp. National College", hours: "10:30 AM – 9:00 PM" },
  { id: "s2", city: "Bengaluru", area: "Indiranagar", address: "100ft Road, near CMH Junction", hours: "10:30 AM – 9:30 PM" },
  { id: "s3", city: "Delhi", area: "Saket", address: "Select Citywalk, Ground Floor", hours: "11:00 AM – 10:00 PM" },
  { id: "s4", city: "Pune", area: "Koregaon Park", address: "North Main Road, Lane 7", hours: "11:00 AM – 9:30 PM" },
  { id: "s5", city: "Hyderabad", area: "Jubilee Hills", address: "Road no. 36, near Apollo", hours: "10:30 AM – 9:30 PM" },
  { id: "s6", city: "Chennai", area: "Nungambakkam", address: "Khader Nawaz Khan Road", hours: "11:00 AM – 9:00 PM" },
];

export const STORE_IMG = "https://images.unsplash.com/photo-1760774999553-2eb0292ae82d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwbW9kZXJuJTIwZWxlY3Ryb25pY3MlMjBzdG9yZXxlbnwwfHx8fDE3ODE0MjQwMDB8MA&ixlib=rb-4.1.0&q=85";
export const HERO_IMG = "https://images.pexels.com/photos/34018284/pexels-photo-34018284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const formatINR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });

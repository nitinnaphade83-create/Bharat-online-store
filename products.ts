import { Category, Product } from "./types";

export const CATEGORIES: { slug: Category; label: string; icon: string }[] = [
  { slug: "cases-covers", label: "Cases & Covers", icon: "phone_android" },
  { slug: "tempered-glass", label: "Tempered Glass", icon: "shield" },
  { slug: "chargers-adapters", label: "Chargers & Adapters", icon: "bolt" },
  { slug: "cables", label: "Fast Cables", icon: "cable" },
  { slug: "tws-audio", label: "TWS & Audio", icon: "headphones" },
  { slug: "power-banks", label: "Power Banks", icon: "battery_charging_full" },
  { slug: "smartwatches", label: "Smartwatches", icon: "watch" },
  { slug: "car-holders", label: "Car Holders", icon: "directions_car" },
  { slug: "repair-spares", label: "Repair Spares", icon: "construction" }
];

// ---------------------------------------------------------------------------
// REAL PRODUCTS — Aarya Mobile Store
// Prices are what you gave me. Ratings/reviews are set to 0 (hidden on the
// site) rather than made up, since these are new listings with no reviews
// yet. Add real MRP values once you decide on strikethrough discount
// pricing. Replace the Unsplash `image` URLs with your own photos whenever
// you have them — just drop the files in /public/products/ and update the
// path here.
// ---------------------------------------------------------------------------
export const PRODUCTS: Product[] = [
  {
    id: "r1",
    slug: "mobile-back-case",
    name: "Mobile Back Case",
    shortDescription: "Protective back cover, multiple phone models available",
    category: "cases-covers",
    brand: "Aarya Mobile Store",
    price: 200,
    mrp: 200,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1601593346740-925612772716?w=800&q=80"],
    compatibleWith: ["Most smartphone models - confirm your model on WhatsApp"],
    colors: [],
    inStock: true,
    description:
      "Durable back case for everyday protection. Available for various phone models - message us on WhatsApp with your phone model to confirm fit and colour options.",
    specs: [
      { label: "Type", value: "Back cover case" },
      { label: "Fit", value: "Model-specific - confirm on WhatsApp" }
    ]
  },
  {
    id: "r2",
    slug: "mobile-charger",
    name: "Mobile Charger",
    shortDescription: "Wall charger for everyday use",
    category: "chargers-adapters",
    brand: "Aarya Mobile Store",
    price: 300,
    mrp: 300,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"],
    compatibleWith: ["Most Android and iPhone models"],
    colors: [],
    inStock: true,
    description:
      "Reliable wall charger for everyday charging. Ask us on WhatsApp about connector type (Type-C / Micro-USB / Lightning) and wattage options in stock.",
    specs: [
      { label: "Type", value: "Wall charger" },
      { label: "Connector options", value: "Confirm on WhatsApp" }
    ]
  },
  {
    id: "r3",
    slug: "charging-cable",
    name: "Charging Cable",
    shortDescription: "Everyday charging and data cable",
    category: "cables",
    brand: "Aarya Mobile Store",
    price: 50,
    mrp: 50,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1591290619762-c30fc7e8b9f7?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1591290619762-c30fc7e8b9f7?w=800&q=80"],
    compatibleWith: ["Type-C, Micro-USB and Lightning options available"],
    colors: [],
    inStock: true,
    description:
      "Everyday charging cable, available in multiple connector types. Message us to confirm which type fits your device.",
    specs: [
      { label: "Type", value: "Charging / data cable" },
      { label: "Connector options", value: "Type-C / Micro-USB / Lightning" }
    ]
  },
  {
    id: "r4",
    slug: "power-bank",
    name: "Power Bank",
    shortDescription: "Portable charger for on-the-go power",
    category: "power-banks",
    brand: "Aarya Mobile Store",
    price: 500,
    mrp: 500,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80"],
    compatibleWith: ["Most USB-charged devices"],
    colors: [],
    inStock: true,
    description:
      "Compact power bank to keep your phone charged on the go. Ask in-store or on WhatsApp for available capacity options.",
    specs: [
      { label: "Type", value: "Portable power bank" },
      { label: "Capacity", value: "Confirm available options in-store" }
    ]
  },

  // ---------------------------------------------------------------------
  // PLACEHOLDER PRODUCTS — you haven't given me items for these categories
  // yet, so these are generic filler to keep the site fully populated.
  // Replace or remove them once you share real products for these
  // categories (tempered glass, TWS/audio, smartwatches, car holders).
  // ---------------------------------------------------------------------
  {
    id: "s1",
    slug: "tempered-glass-screen-protector",
    name: "Tempered Glass Screen Protector",
    shortDescription: "Scratch-resistant screen protection",
    category: "tempered-glass",
    brand: "Aarya Mobile Store",
    price: 150,
    mrp: 150,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80"],
    compatibleWith: ["Most smartphone models - confirm your model on WhatsApp"],
    colors: [],
    inStock: true,
    description: "Scratch-resistant tempered glass, fitted for your specific phone model in-store.",
    specs: [{ label: "Type", value: "Tempered glass screen protector" }]
  },
  {
    id: "s2",
    slug: "wired-earphones",
    name: "Wired Earphones",
    shortDescription: "Everyday earphones with mic",
    category: "tws-audio",
    brand: "Aarya Mobile Store",
    price: 250,
    mrp: 250,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"],
    compatibleWith: ["Most smartphones with 3.5mm or Type-C audio"],
    colors: [],
    inStock: true,
    description: "Everyday wired earphones with built-in mic for calls and music.",
    specs: [{ label: "Type", value: "Wired earphones" }]
  },
  {
    id: "s3",
    slug: "digital-smartwatch",
    name: "Digital Smartwatch",
    shortDescription: "Basic fitness and notification tracking",
    category: "smartwatches",
    brand: "Aarya Mobile Store",
    price: 1200,
    mrp: 1200,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"],
    compatibleWith: ["Android", "iOS"],
    colors: [],
    inStock: true,
    description: "Entry-level smartwatch with step tracking and phone notifications.",
    specs: [{ label: "Type", value: "Smartwatch" }]
  },
  {
    id: "s4",
    slug: "car-mobile-holder",
    name: "Car Mobile Holder",
    shortDescription: "Dashboard mount for hands-free driving",
    category: "car-holders",
    brand: "Aarya Mobile Store",
    price: 250,
    mrp: 250,
    rating: 0,
    reviewCount: 0,
    image: "https://images.unsplash.com/photo-1621252179027-9b8ee0c1de08?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1621252179027-9b8ee0c1de08?w=800&q=80"],
    compatibleWith: ["4 - 7 inch phones"],
    colors: [],
    inStock: true,
    description: "Simple dashboard mount for hands-free navigation while driving.",
    specs: [{ label: "Type", value: "Car dashboard holder" }]
  }
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  const flagged = PRODUCTS.filter((p) => p.bestSeller);
  return flagged.length > 0 ? flagged : PRODUCTS.slice(0, 4);
}

export function getNewArrivals(): Product[] {
  const flagged = PRODUCTS.filter((p) => p.newArrival);
  return flagged.length > 0 ? flagged : PRODUCTS.slice(4, 8);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

export function formatINR(amount: number): string {
  return `\u20b9${amount.toLocaleString("en-IN")}`;
}

export function discountPercent(price: number, mrp: number): number {
  if (mrp <= 0 || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

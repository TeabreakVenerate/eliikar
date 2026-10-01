/* ==========================================================================
   BLOOM BY E — CAMPUS ESSENTIALS CATALOG
   Humanized, realistic product copy without marketing fluff.
   ========================================================================== */

// 1. CAMPUS PACKAGES & KITS
const CAMPUS_PACKAGES = [
  {
    id: "dorm-room-kit",
    collectionKey: "dorm",
    name: "Dorm Room Kit",
    badge: "Dorm Life",
    price: 28300,
    priceFormatted: "₦28,300",
    description: "Complete room setup with storage, fragrance, vines, and plushie to make your hostel room comfortable.",
    images: [
      "pictures/dorm-kit-main.jpg",
      "pictures/dorm-kit-topdown.jpg"
    ],
    items: [
      "Storage box (₦8,200)",
      "Plushie + perfume (₦9,500)",
      "2 sachet air fresheners (₦6,000)",
      "2 room vines (₦4,600)"
    ],
    components: [
      { name: "Storage Box", price: 8200 },
      { name: "Plushie + Perfume", price: 9500 },
      { name: "2 Sachet Air Fresheners", price: 6000 },
      { name: "2 Room Vines", price: 4600 }
    ]
  },
  {
    id: "academia-aesthetic-package",
    collectionKey: "academia",
    name: "Academia Aesthetic Package",
    badge: "Study Caddy",
    price: 19300,
    priceFormatted: "₦19,300",
    description: "Multi-compartment desk caddy stocked with study stationery, pastel highlighters, pens, mini stapler, and air freshener.",
    images: [
      "pictures/academia-kit-main.jpg",
      "pictures/academia-kit-detail.jpg"
    ],
    items: [
      "Desk caddy storage box (₦6,200)",
      "Air freshener (₦3,000)",
      "Pastel highlighters (₦3,800)",
      "Mini stapler (₦2,500)",
      "3 pens pack (₦2,100)",
      "1 mechanical pencil (₦1,700)",
      "Mentos (complimentary)"
    ],
    components: [
      { name: "Desk Caddy Storage Box", price: 6200 },
      { name: "Air Freshener", price: 3000 },
      { name: "Pastel Highlighters", price: 3800 },
      { name: "Mini Stapler", price: 2500 },
      { name: "3 Pens Pack", price: 2100 },
      { name: "1 Mechanical Pencil", price: 1700 },
      { name: "Mentos", price: 0 }
    ]
  }
];

// Backwards-compatibility aliases for studio configurator
const JEWELRY_TIERS = CAMPUS_PACKAGES;
const STUDY_TIERS = CAMPUS_PACKAGES;

// 2. SINGLE ITEMS (A LA CARTE)
const CAMPUS_INDIVIDUAL_PRODUCTS = [
  {
    id: "prod-dorm-storage-box",
    name: "Dorm Storage Box",
    category: "Storage",
    price: 8200,
    priceFormatted: "₦8,200",
    badge: "Spacious",
    image: "pictures/dorm-kit-topdown.jpg",
    description: "Sturdy multi-purpose storage box for hostel desks, toiletries, or personal items.",
    specs: "Durable fabric & handles"
  },
  {
    id: "prod-desk-caddy-box",
    name: "Desk Caddy Storage Box",
    category: "Desk",
    price: 6200,
    priceFormatted: "₦6,200",
    badge: "Desktop",
    image: "pictures/academia-kit-main.jpg",
    description: "Compact desktop caddy with compartments to organize pens, highlighters, and accessories.",
    specs: "Multi-slot caddy"
  },
  {
    id: "prod-plushie-perfume",
    name: "Plushie + Perfume",
    category: "Comfort & Fragrance",
    price: 9500,
    priceFormatted: "₦9,500",
    badge: "Set",
    image: "pictures/dorm-kit-main.jpg",
    description: "Cute desk companion plushie paired with long-lasting room and fabric perfume.",
    specs: "2-piece bundle"
  },
  {
    id: "prod-sachet-air-fresheners-pair",
    name: "2 Sachet Air Fresheners",
    category: "Fragrance",
    price: 6000,
    priceFormatted: "₦6,000",
    badge: "2-Pack",
    image: "pictures/dorm-kit-main.jpg",
    description: "Long-lasting hanging sachet air fresheners for hostel wardrobes and bed spaces.",
    specs: "Pack of 2 sachets"
  },
  {
    id: "prod-sachet-air-freshener-single",
    name: "Sachet Air Freshener",
    category: "Fragrance",
    price: 3000,
    priceFormatted: "₦3,000",
    badge: "Single",
    image: "pictures/academia-kit-main.jpg",
    description: "Single sachet air freshener for fresh wardrobe or study desk scent.",
    specs: "1 sachet"
  },
  {
    id: "prod-room-vines",
    name: "2 Room Vines",
    category: "Decor",
    price: 4600,
    priceFormatted: "₦4,600",
    badge: "Decor",
    image: "pictures/dorm-kit-main.jpg",
    description: "Aesthetic green room vines to drape over your bed frame, walls, or study desk.",
    specs: "2 decorative strands"
  },
  {
    id: "prod-pastel-highlighters",
    name: "Pastel Highlighters",
    category: "Stationery",
    price: 3800,
    priceFormatted: "₦3,800",
    badge: "Study",
    image: "pictures/academia-kit-detail.jpg",
    description: "Set of smooth pastel highlighters that do not bleed through notebook paper.",
    specs: "Pastel palette"
  },
  {
    id: "prod-mini-stapler",
    name: "Mini Stapler",
    category: "Stationery",
    price: 2500,
    priceFormatted: "₦2,500",
    badge: "Handy",
    image: "pictures/academia-kit-detail.jpg",
    description: "Pocket-sized desktop stapler for university assignments and handouts.",
    specs: "Includes staple pins"
  },
  {
    id: "prod-pens-pack",
    name: "3 Pens Pack",
    category: "Stationery",
    price: 2100,
    priceFormatted: "₦2,100",
    badge: "Writing",
    image: "pictures/academia-kit-detail.jpg",
    description: "Smooth-flowing ballpoint pens for lecture notes and exams.",
    specs: "3 pens"
  },
  {
    id: "prod-mech-pencil",
    name: "Mechanical Pencil",
    category: "Stationery",
    price: 1700,
    priceFormatted: "₦1,700",
    badge: "Drafting",
    image: "pictures/academia-kit-detail.jpg",
    description: "Ergonomic mechanical pencil for diagrams, calculations, and neat note taking.",
    specs: "Refillable 0.5mm/0.7mm"
  }
];

function formatNaira(num) {
  return "₦" + Number(num || 0).toLocaleString();
}

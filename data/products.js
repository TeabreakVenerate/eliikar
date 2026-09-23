/* ==========================================================================
   ELIKAR CRAFTS — CAMPUS LIFE BACK-TO-SCHOOL CATALOG
   Authentic user-specified tiers: Jewelry Boxes & Campus Study/Desk Kits
   ========================================================================== */

// 1. JEWELRY BOX TIERS (Exact User Specification)
const JEWELRY_TIERS = [
  {
    id: "jewelry-tier-1",
    name: "Jewelry Box (Tier 1)",
    price: 13000,
    priceFormatted: "₦13,000",
    badge: "Free Face Masks",
    description: "Compact luxury dorm jewelry organizer with curated golden essentials & complimentary skincare face masks.",
    items: [
      "The Keepsake Velvet Jewelry Box",
      "Elegance Pendant Necklace",
      "Pair of Classic Hoop/Stud Earrings",
      "Delicate Layering Bracelet",
      "✨ Complimentary Hydrating Face Masks (Bonus)"
    ]
  },
  {
    id: "jewelry-tier-2",
    name: "Jewelry Box (Tier 2)",
    price: 18500,
    priceFormatted: "₦18,500",
    badge: "Most Popular",
    description: "Expanded multi-compartment jewelry case with complete accessory layering set for campus lectures and dates.",
    items: [
      "The Deluxe Multi-Tier Jewelry Box",
      "1x Statement Pendant Necklace",
      "2x Pairs of Campus Earrings (Studs & Huggies)",
      "2x Stackable Wrist Bracelets",
      "1x Adjustable Minimalist Gold Ring"
    ]
  },
  {
    id: "jewelry-tier-3",
    name: "Jewelry Box (Tier 3)",
    price: 27500,
    priceFormatted: "₦27,500",
    badge: "Ultimate Luxury",
    description: "Grand lockable university jewelry archive with full luxury styling suite and itemized luxury pieces.",
    itemized: [
      { name: "The Grand Lockable Box", val: "₦7,000" },
      { name: "2x Statement Necklaces", val: "₦7,000" },
      { name: "2x Pairs of Earrings", val: "₦3,000" },
      { name: "1x Luxury Bracelet", val: "₦2,000" },
      { name: "Complete Ring Set", val: "₦3,500" }
    ],
    items: [
      "The Grand Lockable Box (₦7,000 value)",
      "2x Premium Statement Necklaces (₦7,000 value)",
      "2x Designer Earring Pairs (₦3,000 value)",
      "1x Elegant Chain Bracelet (₦2,000 value)",
      "1x Full Statement Ring Set (₦3,500 value)"
    ]
  }
];

// 2. STUDY & CAMPUS STATIONERY TIERS (Exact User Specification)
const STUDY_TIERS = [
  {
    id: "study-tier-1",
    name: "Campus Stationery Kit (Tier 1)",
    price: 12500,
    priceFormatted: "₦12,500",
    badge: "Daily Lecture Kit",
    description: "Essential desk and lecture stationery essentials for note-taking, project binding, and revision.",
    items: [
      "Mini Portable Desk Stapler with extra pins",
      "Multi-color Pastel Sticky Notes bundle",
      "Chisel-tip Aesthetic Highlighters (Pastel pack)",
      "Set of Smooth Quick-dry Stylish Gel Pens",
      "Heavy-duty Double Sided Tape roll"
    ]
  },
  {
    id: "study-tier-2",
    name: "Scholar Desk & Lamp Kit (Tier 2)",
    price: 26000,
    priceFormatted: "₦26,000",
    badge: "Night Study Ready",
    description: "Hostel night-study survival kit featuring rechargeable eye-care lamp, calculator, and planners.",
    items: [
      "Mini Portable Desk Stapler with pins",
      "Rechargeable Eye-Care Reading Lamp (3 brightness modes)",
      "Cute Aesthetic Hardcover Notebooks & Semester Planners",
      "Scientific / Natural Display Calculator for lectures & exams"
    ]
  },
  {
    id: "study-tier-3",
    name: "Complete Dorm Suite with Reading Table (Tier 3)",
    price: 45000,
    priceFormatted: "₦45,000",
    badge: "Full Dorm Setup",
    description: "The complete university room upgrade featuring a folding bed/desk reading table, reading lamp, and calculator.",
    items: [
      "Foldable Ergonomic Dorm Reading Table (with tablet/cup slot)",
      "Rechargeable Long-battery Reading Lamp",
      "Cute Hardcover Aesthetic Notebooks Set",
      "Natural Display Scientific Calculator",
      "Heavy-duty Double Sided Tape for posters & cables"
    ]
  }
];

// 3. INDIVIDUAL A LA CARTE CAMPUS PRODUCTS
const CAMPUS_INDIVIDUAL_PRODUCTS = [
  {
    id: "prod-reading-table",
    name: "Foldable Ergonomic Dorm Reading Table",
    category: "Furniture",
    price: 18500,
    priceFormatted: "₦18,500",
    stream: "stream-a",
    leadTime: "Pre-Order Resumption Queue",
    badge: "Hostel Favorite",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23F4EFEB'/><rect x='80' y='110' width='240' height='40' rx='8' fill='%23B8860B'/><rect x='110' y='125' width='70' height='10' rx='4' fill='%230B1528'/><circle cx='280' cy='130' r='10' fill='%230B1528'/><line x1='100' y1='150' x2='80' y2='220' stroke='%230B1528' stroke-width='8' stroke-linecap='round'/><line x1='300' y1='150' x2='320' y2='220' stroke='%230B1528' stroke-width='8' stroke-linecap='round'/><text x='200' y='270' font-family='sans-serif' font-size='13' font-weight='800' fill='%230B1528' text-anchor='middle'>FOLDABLE READING TABLE (BED/DESK)</text></svg>",
    description: "Anti-slip legs with tablet slot and cup holder. Fits easily on hostel bunk beds or study corners.",
    specs: "60 x 40 cm • Cup holder • Phone/iPad groove"
  },
  {
    id: "prod-reading-lamp",
    name: "3-Mode Rechargeable LED Reading Lamp",
    category: "Lighting",
    price: 9500,
    priceFormatted: "₦9,500",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    badge: "Blackout Proof",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23EBF1FA'/><circle cx='200' cy='210' r='35' fill='%2313223E'/><path d='M200 210 Q200 130 150 110' stroke='%2313223E' stroke-width='10' fill='none' stroke-linecap='round'/><ellipse cx='145' cy='105' rx='35' ry='16' fill='%23B8860B'/><polygon points='115,115 60,200 230,200 175,115' fill='%23D4A017' fill-opacity='0.18'/><text x='200' y='270' font-family='sans-serif' font-size='13' font-weight='800' fill='%2313223E' text-anchor='middle'>RECHARGEABLE STUDY LAMP (USB-C)</text></svg>",
    description: "Touch switch with warm, white, and daylight modes. 10 hours runtime per charge on low brightness.",
    specs: "USB-C Fast Recharge • Flexible 360 goose-neck"
  },
  {
    id: "prod-calculator",
    name: "Natural Display Scientific Calculator",
    category: "Tech & Math",
    price: 11000,
    priceFormatted: "₦11,000",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    badge: "Exam Approved",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FAF8F5'/><rect x='130' y='60' width='140' height='190' rx='12' fill='%231E2024'/><rect x='145' y='80' width='110' height='40' rx='4' fill='%23D4DBC8'/><text x='152' y='105' font-family='monospace' font-size='15' fill='%23000'>sin(45) = √2/2</text><g fill='%23B8860B'><circle cx='155' cy='140' r='7'/><circle cx='180' cy='140' r='7'/><circle cx='205' cy='140' r='7'/><circle cx='230' cy='140' r='7'/></g><g fill='%235F6B7A'><circle cx='155' cy='165' r='8'/><circle cx='180' cy='165' r='8'/><circle cx='205' cy='165' r='8'/><circle cx='230' cy='165' r='8'/><circle cx='155' cy='190' r='8'/><circle cx='180' cy='190' r='8'/><circle cx='205' cy='190' r='8'/><circle cx='230' cy='190' r='8'/></g><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='800' fill='%230B1528' text-anchor='middle'>NATURAL DISPLAY CALCULATOR</text></svg>",
    description: "Full fractional and calculus display. Suitable for Engineering, Sciences, and Social Sciences.",
    specs: "417 functions • Hard slide-on cover included"
  },
  {
    id: "prod-cute-notebooks",
    name: "Cute Aesthetic Hardcover Notebooks & Planner",
    category: "Stationery",
    price: 6500,
    priceFormatted: "₦6,500",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    badge: "100 GSM Paper",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FDF6E2'/><rect x='110' y='75' width='130' height='170' rx='8' fill='%237A1C30'/><rect x='150' y='85' width='130' height='170' rx='8' fill='%230B1528'/><line x1='165' y1='85' x2='165' y2='255' stroke='%23C9A84C' stroke-width='4'/><text x='215' y='140' font-family='sans-serif' font-size='12' font-weight='700' fill='%23FFF' text-anchor='middle'>SEMESTER</text><text x='215' y='160' font-family='sans-serif' font-size='12' font-weight='700' fill='%23C9A84C' text-anchor='middle'>JOURNAL</text><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='800' fill='%230B1528' text-anchor='middle'>CUTE NOTEBOOKS &amp; PLANNERS</text></svg>",
    description: "Thick ink-proof paper that prevents bleed-through from highlighters and fountain pens.",
    specs: "B5 spiral binding • 160 lined/dotted pages"
  },
  {
    id: "prod-stationery-essentials",
    name: "Mini Stapler, Highlighters & Sticky Notes Pack",
    category: "Stationery",
    price: 5500,
    priceFormatted: "₦5,500",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    badge: "Study Tidy",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FFFDF5'/><rect x='100' y='120' width='80' height='40' rx='6' fill='%23B8860B'/><rect x='200' y='100' width='60' height='60' rx='4' fill='%23FDE68A'/><rect x='270' y='90' width='25' height='90' rx='4' fill='%23A7F3D0'/><text x='200' y='270' font-family='sans-serif' font-size='13' font-weight='800' fill='%230B1528' text-anchor='middle'>STAPLER, HIGHLIGHTERS &amp; TAPE</text></svg>",
    description: "Includes mini pastel stapler, sticky index tabs, highlighters, stylish gel pens, and double sided tape.",
    specs: "5-in-1 stationery combination"
  },
  {
    id: "prod-jewelry-box-individual",
    name: "The Velvet University Jewelry Box",
    category: "Accessories",
    price: 7000,
    priceFormatted: "₦7,000",
    stream: "stream-a",
    leadTime: "Pre-Order Resumption Queue",
    badge: "Keepsake",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FAF7F2'/><rect x='110' y='90' width='180' height='130' rx='14' fill='%237A1C30'/><circle cx='200' cy='155' r='10' fill='%23C9A84C'/><rect x='110' y='150' width='180' height='6' fill='%23C9A84C'/><text x='200' y='270' font-family='sans-serif' font-size='13' font-weight='800' fill='%237A1C30' text-anchor='middle'>VELVET CAMPUS JEWELRY BOX</text></svg>",
    description: "Anti-tarnish velvet lining with dedicated ring rolls, necklace hooks, and earring cards.",
    specs: "Compact for hostel locker • Dust-proof lock"
  }
];

// Helper to format currency
function formatNaira(num) {
  return "₦" + num.toLocaleString();
}

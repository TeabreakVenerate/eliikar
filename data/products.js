/* ==========================================================================
   ELIKAR — CAMPUS ESSENTIALS CATALOG
   Humanized, realistic product copy without marketing fluff.
   ========================================================================== */

// 1. JEWELRY BOX TIERS
const JEWELRY_TIERS = [
  {
    id: "jewelry-tier-1",
    name: "Jewelry Box (Tier 1)",
    price: 13000,
    priceFormatted: "₦13,000",
    badge: "Free Face Masks",
    description: "Comes with the box, a necklace, earring, bracelet, and complimentary face masks.",
    items: [
      "The box",
      "Necklace",
      "Earring",
      "Bracelet",
      "Complimentary face masks"
    ]
  },
  {
    id: "jewelry-tier-2",
    name: "Jewelry Box (Tier 2)",
    price: 18500,
    priceFormatted: "₦18,500",
    badge: "Tier 2",
    description: "Comes with the box, 1 necklace, 2 earrings, 2 bracelets, and 1 ring.",
    items: [
      "The box",
      "Necklace (1)",
      "Earring (2)",
      "Bracelet (2)",
      "Ring (1)"
    ]
  },
  {
    id: "jewelry-tier-3",
    name: "Jewelry Box (Tier 3)",
    price: 27500,
    priceFormatted: "₦27,500",
    badge: "Tier 3",
    description: "Complete set with itemized breakdown.",
    itemized: [
      { name: "The box", val: "₦7,000" },
      { name: "2 • Necklace", val: "₦7,000" },
      { name: "2 • Earring", val: "₦3,000" },
      { name: "1 • Bracelet", val: "₦2,000" },
      { name: "Ring (1 set)", val: "₦3,500" }
    ],
    items: [
      "The box (₦7,000)",
      "2 • Necklace (₦7,000)",
      "2 • Earring (₦3,000)",
      "1 • Bracelet (₦2,000)",
      "Ring (1 set) (₦3,500)"
    ]
  }
];

// 2. STUDY & CAMPUS STATIONERY TIERS
const STUDY_TIERS = [
  {
    id: "study-tier-1",
    name: "Study Kit (Tier 1)",
    price: 12500,
    priceFormatted: "₦12,500",
    badge: "Tier 1",
    description: "Basic desk supplies for classes and assignments.",
    items: [
      "Mini stapler",
      "Sticky notes",
      "Highlighters",
      "Stylish pens",
      "Double sided tape"
    ]
  },
  {
    id: "study-tier-2",
    name: "Study Kit (Tier 2)",
    price: 26000,
    priceFormatted: "₦26,000",
    badge: "Tier 2",
    description: "Includes a reading lamp, natural display calculator, and notebooks.",
    items: [
      "Mini stapler",
      "Reading lamp",
      "Cute notebooks & planners",
      "Calculator (natural display)"
    ]
  },
  {
    id: "study-tier-3",
    name: "Study Kit (Tier 3)",
    price: 45000,
    priceFormatted: "₦45,000",
    badge: "Tier 3",
    description: "Includes a foldable reading table for your bed or room, reading lamp, and calculator.",
    items: [
      "Reading table",
      "Reading lamp",
      "Cute notebooks",
      "Calculator",
      "Double sided tape"
    ]
  }
];

// 3. INDIVIDUAL ITEMS
const CAMPUS_INDIVIDUAL_PRODUCTS = [
  {
    id: "prod-reading-table",
    name: "Reading Table",
    category: "Desk",
    price: 18500,
    priceFormatted: "₦18,500",
    stream: "stream-a",
    leadTime: "Pre-order",
    badge: "Foldable",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23F4EFEB'/><rect x='80' y='110' width='240' height='40' rx='8' fill='%23B8860B'/><rect x='110' y='125' width='70' height='10' rx='4' fill='%230B1528'/><circle cx='280' cy='130' r='10' fill='%230B1528'/><line x1='100' y1='150' x2='80' y2='220' stroke='%230B1528' stroke-width='8' stroke-linecap='round'/><line x1='300' y1='150' x2='320' y2='220' stroke='%230B1528' stroke-width='8' stroke-linecap='round'/><text x='200' y='270' font-family='sans-serif' font-size='14' font-weight='700' fill='%230B1528' text-anchor='middle'>FOLDABLE READING TABLE</text></svg>",
    description: "Foldable bed and desk table with a slot for a tablet or phone and cup holder.",
    specs: "Lightweight and easy to pack"
  },
  {
    id: "prod-reading-lamp",
    name: "Reading Lamp",
    category: "Lighting",
    price: 9500,
    priceFormatted: "₦9,500",
    stream: "stream-b",
    leadTime: "Ready to ship",
    badge: "Rechargeable",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23EBF1FA'/><circle cx='200' cy='210' r='35' fill='%2313223E'/><path d='M200 210 Q200 130 150 110' stroke='%2313223E' stroke-width='10' fill='none' stroke-linecap='round'/><ellipse cx='145' cy='105' rx='35' ry='16' fill='%23B8860B'/><polygon points='115,115 60,200 230,200 175,115' fill='%23D4A017' fill-opacity='0.18'/><text x='200' y='270' font-family='sans-serif' font-size='14' font-weight='700' fill='%2313223E' text-anchor='middle'>RECHARGEABLE READING LAMP</text></svg>",
    description: "Rechargeable desk lamp with adjustable light brightness. Useful during power cuts.",
    specs: "Charges via USB"
  },
  {
    id: "prod-calculator",
    name: "Calculator (Natural Display)",
    category: "Tech",
    price: 11000,
    priceFormatted: "₦11,000",
    stream: "stream-b",
    leadTime: "Ready to ship",
    badge: "Scientific",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FAF8F5'/><rect x='130' y='60' width='140' height='190' rx='12' fill='%231E2024'/><rect x='145' y='80' width='110' height='40' rx='4' fill='%23D4DBC8'/><text x='152' y='105' font-family='monospace' font-size='15' fill='%23000'>sin(45) = √2/2</text><g fill='%23B8860B'><circle cx='155' cy='140' r='7'/><circle cx='180' cy='140' r='7'/><circle cx='205' cy='140' r='7'/><circle cx='230' cy='140' r='7'/></g><g fill='%235F6B7A'><circle cx='155' cy='165' r='8'/><circle cx='180' cy='165' r='8'/><circle cx='205' cy='165' r='8'/><circle cx='230' cy='165' r='8'/><circle cx='155' cy='190' r='8'/><circle cx='180' cy='190' r='8'/><circle cx='205' cy='190' r='8'/><circle cx='230' cy='190' r='8'/></g><text x='200' y='275' font-family='sans-serif' font-size='14' font-weight='700' fill='%230B1528' text-anchor='middle'>SCIENTIFIC CALCULATOR</text></svg>",
    description: "Standard natural textbook display calculator for science and math courses.",
    specs: "Comes with slide-on case"
  },
  {
    id: "prod-cute-notebooks",
    name: "Cute Notebooks & Planners",
    category: "Stationery",
    price: 6500,
    priceFormatted: "₦6,500",
    stream: "stream-b",
    leadTime: "Ready to ship",
    badge: "Notebook",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FDF6E2'/><rect x='110' y='75' width='130' height='170' rx='8' fill='%237A1C30'/><rect x='150' y='85' width='130' height='170' rx='8' fill='%230B1528'/><line x1='165' y1='85' x2='165' y2='255' stroke='%23C9A84C' stroke-width='4'/><text x='215' y='140' font-family='sans-serif' font-size='12' font-weight='700' fill='%23FFF' text-anchor='middle'>SEMESTER</text><text x='215' y='160' font-family='sans-serif' font-size='12' font-weight='700' fill='%23C9A84C' text-anchor='middle'>NOTEBOOK</text><text x='200' y='275' font-family='sans-serif' font-size='14' font-weight='700' fill='%230B1528' text-anchor='middle'>NOTEBOOKS &amp; PLANNERS</text></svg>",
    description: "Hardcover notebooks with clean lined pages for semester lecture notes.",
    specs: "Pack of 2"
  },
  {
    id: "prod-stationery-essentials",
    name: "Mini Stapler, Highlighters & Sticky Notes",
    category: "Stationery",
    price: 5500,
    priceFormatted: "₦5,500",
    stream: "stream-b",
    leadTime: "Ready to ship",
    badge: "Desk Pack",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FFFDF5'/><rect x='100' y='120' width='80' height='40' rx='6' fill='%23B8860B'/><rect x='200' y='100' width='60' height='60' rx='4' fill='%23FDE68A'/><rect x='270' y='90' width='25' height='90' rx='4' fill='%23A7F3D0'/><text x='200' y='270' font-family='sans-serif' font-size='14' font-weight='700' fill='%230B1528' text-anchor='middle'>STAPLER, HIGHLIGHTERS, TAPE</text></svg>",
    description: "Mini desk stapler, sticky notes, pastel highlighters, pens, and double sided tape.",
    specs: "5-piece set"
  },
  {
    id: "prod-jewelry-box-individual",
    name: "Jewelry Box",
    category: "Accessories",
    price: 7000,
    priceFormatted: "₦7,000",
    stream: "stream-a",
    leadTime: "Pre-order",
    badge: "The Box",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FAF7F2'/><rect x='110' y='90' width='180' height='130' rx='14' fill='%237A1C30'/><circle cx='200' cy='155' r='10' fill='%23C9A84C'/><rect x='110' y='150' width='180' height='6' fill='%23C9A84C'/><text x='200' y='270' font-family='sans-serif' font-size='14' font-weight='700' fill='%237A1C30' text-anchor='middle'>JEWELRY BOX</text></svg>",
    description: "Storage box with compartments for necklaces, earrings, and rings.",
    specs: "Compact size for hostel desks"
  }
];

function formatNaira(num) {
  return "₦" + num.toLocaleString();
}

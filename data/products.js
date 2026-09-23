/* ==========================================================================
   ELIKAR CRAFTS — BACK TO SCHOOL PRODUCT CATALOG & BUNDLE DATA
   Authentic handcrafted school accessories, bows, scrunchies, and bundles.
   ========================================================================== */

const SCHOOL_PALETTES = [
  {
    id: "navy-gold",
    name: "Classic Academy",
    primary: "#0F1E36",
    secondary: "#D4A017",
    label: "Navy & Gold",
    schools: "King's College, Corona, Vivian Fowler, Chrisland"
  },
  {
    id: "wine-grey",
    name: "Royal Heritage",
    primary: "#7A1C30",
    secondary: "#94A3B8",
    label: "Wine & Slate Grey",
    schools: "Queen's College, Greensprings, Loyola Jesuit"
  },
  {
    id: "green-gold",
    name: "Emerald Scholar",
    primary: "#164E35",
    secondary: "#EAB308",
    label: "Forest Green & Gold",
    schools: "Atlantic Hall, Grange School, Meadow Hall"
  },
  {
    id: "royal-white",
    name: "Prestige Blue",
    primary: "#1D4ED8",
    secondary: "#FFFFFF",
    label: "Royal Blue & White",
    schools: "Children's International School, Day Waterman"
  },
  {
    id: "black-gold",
    name: "Regal Xing Tribute",
    primary: "#121212",
    secondary: "#C9A84C",
    label: "Midnight & Imperial Gold",
    schools: "British International School, Lead City"
  }
];

const BUNDLE_TIERS = [
  {
    id: "starter",
    name: "Smart Scholar Starter Pack",
    price: 8500,
    priceFormatted: "₦8,500",
    badge: "Popular Essentials",
    serves: "Kindergarten & Primary (Term 1 Prep)",
    includes: [
      "2x Handcrafted School Grosgrain Hair Bows (Anti-fray seal)",
      "3x Snag-free School Uniform Scrunchies (Cotton & Satin blend)",
      "1x Custom Embroidered Child Name Ribbon Tag",
      "1x Classroom-Safe Non-Slip Hair Clip"
    ],
    dispatchNotice: "Dispatched in 72 hours with photo proof"
  },
  {
    id: "deluxe",
    name: "Complete Term Prep Deluxe Kit",
    price: 15500,
    priceFormatted: "₦15,500",
    badge: "Most Ordered",
    serves: "Primary & Junior High (Full 3-Month Rotation)",
    includes: [
      "4x Double-Layered Academy Hair Bows (Uniform match)",
      "6x High-Tension Snag-Free Scrunchies (Gym + Everyday)",
      "2x Monogrammed Embroidered Ribbon School Bag Tags",
      "2x Pearl & Gold Resin Hair Grip Claws",
      "1x Elikar Water-Resistant Pouch with Name Card"
    ],
    dispatchNotice: "Custom batch ready before school resumption"
  },
  {
    id: "boarding",
    name: "Boarding House Mega Reserve",
    price: 26500,
    priceFormatted: "₦26,500",
    badge: "Maximum Value",
    serves: "Boarding Students (Guaranteed Full Term Supply)",
    includes: [
      "8x Hand-stitched Uniform Bows (Assembly & Sunday Chapel sets)",
      "12x Heavy-Duty Snag-Free Scrunchies (Numbered laundry tags)",
      "4x Personalized Waterproof Embroidered Tags",
      "4x French Grip Claws & Headbands (Head-ache free band)",
      "1x Premium Keepsake Tin Case with Child's Name"
    ],
    dispatchNotice: "Complimentary gift-wrapping + priority WhatsApp dispatch"
  }
];

const SCHOOL_PRODUCTS = [
  {
    id: "bow-academy-classic",
    name: "The Academy Classic Bow (Pair)",
    category: "Hair Bows",
    price: 3500,
    priceFormatted: "₦3,500",
    stream: "stream-a",
    leadTime: "Pre-order (3-5 days)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23F4EFEB'/><circle cx='200' cy='150' r='90' fill='%230B1528' fill-opacity='0.08'/><path d='M150 110 C120 80, 80 120, 150 150 C80 180, 120 220, 150 190 Z' fill='%2313223E'/><path d='M250 110 C280 80, 320 120, 250 150 C320 180, 280 220, 250 190 Z' fill='%2313223E'/><rect x='185' y='130' width='30' height='40' rx='6' fill='%23B8860B'/><path d='M180 160 L140 230 L165 235 L195 170 Z' fill='%2313223E'/><path d='M220 160 L260 230 L235 235 L205 170 Z' fill='%2313223E'/><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%230B1528' text-anchor='middle'>ACADEMY GROSGRAIN PAIR</text></svg>",
    badge: "Uniform Match",
    description: "Hand-creased double grosgrain ribbon with stainless steel alligator clip. Will not rust or snag fine hair.",
    specs: "3.5 inch width • Anti-fray sealed edge • Pair of 2"
  },
  {
    id: "scrunchie-cloud-bundle",
    name: "6-Piece Snag-Free Cloud Scrunchies",
    category: "Scrunchies",
    price: 4500,
    priceFormatted: "₦4,500",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23EBF1FA'/><circle cx='160' cy='140' r='55' stroke='%2313223E' stroke-width='22' fill='none'/><circle cx='235' cy='155' r='50' stroke='%23B8860B' stroke-width='20' fill='none'/><circle cx='195' cy='175' r='45' stroke='%237A1C30' stroke-width='18' fill='none'/><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%2313223E' text-anchor='middle'>HIGH-TENSION SATIN SET (6-PACK)</text></svg>",
    badge: "Best Seller",
    description: "Reinforced elastic core tested for over 500 stretches. Ultra-soft mulberry satin prevents ponytail breakage.",
    specs: "Includes 6 scrunchies • 2x Navy, 2x Gold, 2x White"
  },
  {
    id: "tag-monogram-embroidery",
    name: "Custom Embroidered Name Bag Tag",
    category: "Personalized",
    price: 3000,
    priceFormatted: "₦3,000",
    stream: "stream-a",
    leadTime: "Pre-order (Custom Stitched)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FFFDF5'/><rect x='100' y='100' width='200' height='85' rx='12' fill='%230B1528' stroke='%23B8860B' stroke-width='3'/><circle cx='125' cy='142' r='8' fill='%23B8860B'/><text x='215' y='135' font-family='sans-serif' font-size='16' font-weight='800' fill='%23FFFFFF' text-anchor='middle'>KAMSI OKAFOR</text><text x='215' y='158' font-family='sans-serif' font-size='11' font-weight='600' fill='%23D4A017' text-anchor='middle'>GRADE 4 • GREENSPRINGS</text><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%230B1528' text-anchor='middle'>WOVEN EMBROIDERED TAG</text></svg>",
    badge: "Lost-Proof",
    description: "Durable military-grade canvas ribbon with high-contrast stitched gold lettering and sturdy brass keyring.",
    specs: "5 x 1.25 inches • Waterproof canvas • Gold lettering"
  },
  {
    id: "headband-no-pinch",
    name: "Comfort-Flex Uniform Alice Band",
    category: "Headbands",
    price: 2800,
    priceFormatted: "₦2,800",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FDF6E2'/><path d='M130 180 C130 100, 270 100, 270 180' stroke='%2313223E' stroke-width='24' stroke-linecap='round' fill='none'/><path d='M130 180 C130 100, 270 100, 270 180' stroke='%23D4A017' stroke-width='6' stroke-dasharray='10 14' fill='none'/><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%230B1528' text-anchor='middle'>NO-HEADACHE PADDED BAND</text></svg>",
    badge: "Zero Pinch",
    description: "Memory-foam cushioned headband wrapped in breathable cotton grosgrain. Zero pressure behind delicate ears.",
    specs: "Fits ages 4–16 • Anti-slip tooth comb lining"
  },
  {
    id: "claws-school-grade",
    name: "Matte Uniform Hair Claws (Trio)",
    category: "Hair Clips",
    price: 3200,
    priceFormatted: "₦3,200",
    stream: "stream-b",
    leadTime: "Ready to Ship (24h)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23F4EFEB'/><rect x='130' y='110' width='60' height='70' rx='10' fill='%231E345D'/><circle cx='160' cy='145' r='10' fill='%23FAF8F5'/><rect x='210' y='110' width='60' height='70' rx='10' fill='%237A1C30'/><circle cx='240' cy='145' r='10' fill='%23FAF8F5'/><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%230B1528' text-anchor='middle'>CLASSROOM-SAFE MATTE CLAWS (3-PK)</text></svg>",
    badge: "Playground Safe",
    description: "Unbreakable acrylic compound designed for active physical education, playground running, and thick natural curls.",
    specs: "3 medium claws (Navy, Wine, Tortoise) • Heavy duty spring"
  },
  {
    id: "kit-prefect-chapel",
    name: "Prefect & Chapel Silk Ribbons Kit",
    category: "Formal & Chapel",
    price: 5500,
    priceFormatted: "₦5,500",
    stream: "stream-a",
    leadTime: "Pre-order (Custom Stitched)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23FAF8F5'><rect width='400' height='300' fill='%23FFFDF5'/><path d='M200 90 L240 180 L200 170 L160 180 Z' fill='%237A1C30'/><circle cx='200' cy='115' r='15' fill='%23D4A017'/><polygon points='200,105 204,113 213,114 206,120 208,129 200,124 192,129 194,120 187,114 196,113' fill='%23FFFFFF'/><text x='200' y='275' font-family='sans-serif' font-size='13' font-weight='700' fill='%237A1C30' text-anchor='middle'>PREFECT CEREMONIAL RIBBON</text></svg>",
    badge: "Ceremonial Grade",
    description: "Double satin ceremonial ribbons with gold embroidered crest insignia. Tailored for school prefects and chapel days.",
    specs: "Includes 2 ribbon pins & lapel rosette • Gold-plated pin"
  }
];

// Helper to format currency
function formatNaira(num) {
  return "₦" + num.toLocaleString();
}

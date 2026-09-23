/* ==========================================================================
   VARIANT 3: EDITORIAL HERITAGE (TANG BOWS CAMPUS ATELIER)
   Artisan craftsmanship, itemized tier transparency, and luxury typography.
   ========================================================================== */

function variantEditorialHeritage() {
  return `
    <div class="v3-wrapper" style="min-height: 100vh; background-color: #0B0E14; color: #FAF8F5;">
      <style>
        .v3-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(11, 14, 20, 0.88);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
          padding: 1.1rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .v3-logo {
          font-family: var(--font-display);
          font-size: 1.2rem;
          letter-spacing: 0.2em;
          color: #C9A84C;
          text-transform: uppercase;
          cursor: pointer;
        }
        .v3-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .v3-nav-links a {
          color: #D6D6D6;
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 200ms ease;
        }
        .v3-nav-links a:hover {
          color: #C9A84C;
        }

        /* Hero */
        .v3-hero {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
        }
        .v3-gold-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(180deg, transparent, #C9A84C);
          margin-bottom: 1.5rem;
        }
        .v3-hero-sub {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 1rem;
        }
        .v3-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.15;
          max-width: 880px;
          margin-bottom: 1.25rem;
        }
        .v3-hero-title em {
          font-style: italic;
          color: #E8C97A;
        }
        .v3-hero-desc {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          color: #9A9A9A;
          max-width: 640px;
          margin-bottom: 2.5rem;
        }
        .v3-btn-gold {
          background: #C9A84C;
          color: #0B0E14;
          padding: 0.85rem 2.2rem;
          font-family: var(--font-display);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          border: none;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: background-color 200ms ease;
        }
        .v3-btn-gold:hover {
          background: #E8C97A;
        }

        /* Showcase Grid */
        .v3-showcase {
          max-width: 1100px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }
        .v3-tiers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2.5rem;
        }
        .v3-tier-box {
          background: #11151E;
          border: 1px solid rgba(201, 168, 76, 0.2);
          padding: 2.2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .v3-tier-box.highlight {
          border-color: #C9A84C;
          background: #141924;
          box-shadow: 0 10px 30px rgba(201, 168, 76, 0.1);
        }
        .v3-tier-header {
          border-bottom: 1px solid rgba(201, 168, 76, 0.15);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }
        .v3-tier-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 400;
          color: #FFF;
        }
        .v3-tier-price {
          font-family: var(--font-display);
          font-size: 1.7rem;
          color: #E8C97A;
          margin-top: 0.4rem;
        }

        .v3-itemized-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          font-size: 0.85rem;
        }
        .v3-itemized-table td {
          padding: 6px 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
          color: #BBB;
        }
        .v3-itemized-table td.cost {
          text-align: right;
          color: #E8C97A;
          font-weight: 600;
        }

        /* Philosophy */
        .v3-philosophy {
          background: #080A0E;
          border-top: 1px solid rgba(201, 168, 76, 0.15);
          border-bottom: 1px solid rgba(201, 168, 76, 0.15);
          padding: 6rem 2rem;
          text-align: center;
        }
        .v3-quote {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-style: italic;
          color: #FAF8F5;
          max-width: 820px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v3-header">
        <div class="v3-logo" onclick="window.smoothScrollTo('v3-hero')">
          ELIKAR CRAFTS &amp; CAMPUS
        </div>
        <ul class="v3-nav-links">
          <li><a href="#v3-jewelry" onclick="window.smoothScrollTo('v3-jewelry')">Jewelry Boxes</a></li>
          <li><a href="#v3-study" onclick="window.smoothScrollTo('v3-study')">Study Suites</a></li>
          <li><a href="#v3-philosophy" onclick="window.smoothScrollTo('v3-philosophy')">Craft Note</a></li>
        </ul>
      </header>

      <!-- Hero -->
      <section class="v3-hero" id="v3-hero">
        <div class="v3-gold-line"></div>
        <p class="v3-hero-sub">The Campus Collection — Est. Lagos, Nigeria</p>
        <h1 class="v3-hero-title">
          Curated Jewelry Boxes &amp; <em>Dorm Study Suites</em>
        </h1>
        <p class="v3-hero-desc">
          "Dorm rooms are where dreams are shaped. Equip yourself with elegance, calm lighting, and tools built for academic triumph."
        </p>
        <button class="v3-btn-gold" onclick="window.smoothScrollTo('v3-jewelry')">
          <span>Explore Campus Tiers</span>
        </button>
      </section>

      <!-- JEWELRY BOXES SECTION -->
      <section class="v3-showcase" id="v3-jewelry">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.25em; color: #C9A84C; text-transform: uppercase;">Collection One</span>
          <h2 style="font-family: var(--font-serif); font-size: 2.5rem; font-weight: 300; margin-top: 0.5rem;">
            Curated Velvet <em>Jewelry Boxes</em>
          </h2>
          <div style="width: 40px; height: 1px; background: #C9A84C; margin: 1rem auto;"></div>
        </div>

        <div class="v3-tiers-grid">
          <!-- Tier 1 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase;">Tier 1 Starter</span>
                <h3 class="v3-tier-title">Jewelry Box (Tier 1)</h3>
                <div class="v3-tier-price">₦13,000</div>
              </div>
              <p style="font-size: 0.85rem; color: #888; margin-bottom: 1rem;">
                Essential layering pieces + special complimentary skincare bonus.
              </p>
              <table class="v3-itemized-table">
                <tr><td>The Keepsake Velvet Box</td><td class="cost">Included</td></tr>
                <tr><td>1x Statement Necklace</td><td class="cost">Included</td></tr>
                <tr><td>1x Earring Pair</td><td class="cost">Included</td></tr>
                <tr><td>1x Delicate Bracelet</td><td class="cost">Included</td></tr>
                <tr><td style="color: #E8C97A;">✨ Complimentary Face Masks</td><td class="cost" style="color: #34D399;">Free</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Jewelry Box (Tier 1)', '₦13,000')">
              Pre-Order Tier 1
            </button>
          </div>

          <!-- Tier 2 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase;">Tier 2 Expanded</span>
                <h3 class="v3-tier-title">Jewelry Box (Tier 2)</h3>
                <div class="v3-tier-price">₦18,500</div>
              </div>
              <p style="font-size: 0.85rem; color: #888; margin-bottom: 1rem;">
                Full accessory layering suite with matching rings and earrings.
              </p>
              <table class="v3-itemized-table">
                <tr><td>The Deluxe Multi-Tier Box</td><td class="cost">Included</td></tr>
                <tr><td>1x Statement Necklace</td><td class="cost">Included</td></tr>
                <tr><td>2x Earring Pairs</td><td class="cost">Included</td></tr>
                <tr><td>2x Stackable Bracelets</td><td class="cost">Included</td></tr>
                <tr><td>1x Minimalist Gold Ring</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Jewelry Box (Tier 2)', '₦18,500')">
              Pre-Order Tier 2
            </button>
          </div>

          <!-- Tier 3 (Itemized Transparency) -->
          <div class="v3-tier-box highlight">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #E8C97A; text-transform: uppercase;">Tier 3 Grand Archive</span>
                <h3 class="v3-tier-title">Jewelry Box (Tier 3)</h3>
                <div class="v3-tier-price">₦27,500</div>
              </div>
              <p style="font-size: 0.85rem; color: #CCC; margin-bottom: 1rem;">
                Transparent itemized pricing with the grand lockable archive box.
              </p>
              <table class="v3-itemized-table">
                <tr><td>The Grand Lockable Box</td><td class="cost">₦7,000</td></tr>
                <tr><td>2 • Statement Necklaces</td><td class="cost">₦7,000</td></tr>
                <tr><td>2 • Designer Earring Pairs</td><td class="cost">₦3,000</td></tr>
                <tr><td>1 • Luxury Bracelet</td><td class="cost">₦2,000</td></tr>
                <tr><td>1 • Ring (Full Set)</td><td class="cost">₦3,500</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center; background: #E8C97A;" onclick="window.v3OrderTier('Jewelry Box (Tier 3 Grand Set)', '₦27,500')">
              Pre-Order Tier 3 Grand
            </button>
          </div>
        </div>
      </section>

      <!-- STUDY & DESK SUITES SECTION -->
      <section class="v3-showcase" id="v3-study" style="border-top: 1px solid rgba(201, 168, 76, 0.15);">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.25em; color: #C9A84C; text-transform: uppercase;">Collection Two</span>
          <h2 style="font-family: var(--font-serif); font-size: 2.5rem; font-weight: 300; margin-top: 0.5rem;">
            Hostel Study &amp; <em>Stationery Suites</em>
          </h2>
          <div style="width: 40px; height: 1px; background: #C9A84C; margin: 1rem auto;"></div>
        </div>

        <div class="v3-tiers-grid">
          <!-- Study Tier 1 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase;">Study Tier 1</span>
                <h3 class="v3-tier-title">Stationery Essentials</h3>
                <div class="v3-tier-price">₦12,500</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Mini Desk Stapler</td><td class="cost">Included</td></tr>
                <tr><td>Sticky Notes (Pastel Bundle)</td><td class="cost">Included</td></tr>
                <tr><td>Highlighters Set</td><td class="cost">Included</td></tr>
                <tr><td>Stylish Quick-Dry Pens</td><td class="cost">Included</td></tr>
                <tr><td>Double Sided Tape</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Stationery Essentials (Tier 1)', '₦12,500')">
              Order Stationery Kit
            </button>
          </div>

          <!-- Study Tier 2 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase;">Study Tier 2</span>
                <h3 class="v3-tier-title">Scholar Tech &amp; Lamp</h3>
                <div class="v3-tier-price">₦26,000</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Mini Desk Stapler</td><td class="cost">Included</td></tr>
                <tr><td>Rechargeable Reading Lamp</td><td class="cost">Included</td></tr>
                <tr><td>Cute Notebooks &amp; Planners</td><td class="cost">Included</td></tr>
                <tr><td>Calculator (Natural Display)</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Scholar Tech & Lamp (Tier 2)', '₦26,000')">
              Order Scholar Kit
            </button>
          </div>

          <!-- Study Tier 3 -->
          <div class="v3-tier-box highlight">
            <div>
              <div class="v3-tier-header">
                <span style="font-size: 0.7rem; letter-spacing: 0.2em; color: #E8C97A; text-transform: uppercase;">Study Tier 3 Ultimate</span>
                <h3 class="v3-tier-title">Dorm Suite &amp; Reading Table</h3>
                <div class="v3-tier-price">₦45,000</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Foldable Reading Table (Bed/Desk)</td><td class="cost">Included</td></tr>
                <tr><td>Rechargeable Reading Lamp</td><td class="cost">Included</td></tr>
                <tr><td>Cute Aesthetic Notebooks</td><td class="cost">Included</td></tr>
                <tr><td>Calculator (Natural Display)</td><td class="cost">Included</td></tr>
                <tr><td>Double Sided Heavy Tape</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.5rem; width: 100%; justify-content: center; background: #E8C97A;" onclick="window.v3OrderTier('Complete Dorm Suite with Reading Table (Tier 3)', '₦45,000')">
              Pre-Order Full Suite
            </button>
          </div>
        </div>
      </section>

      <!-- Craft Philosophy Note -->
      <section class="v3-philosophy" id="v3-philosophy">
        <div style="font-size: 1.8rem; margin-bottom: 1rem;">🎀 📚</div>
        <p class="v3-quote">
          "University life is demanding enough. Your dorm room should feel like a sanctuary of calm organization, sparkling confidence, and dependable tools."
        </p>
        <p style="font-size: 0.85rem; letter-spacing: 0.25em; text-transform: uppercase; color: #8A8A8A;">Elikar Crafts Campus Studio • Lagos, Nigeria</p>
      </section>
    </div>
  `;
}

// Global Event Handlers for Variant 3
window.v3OrderTier = function(tierName, price) {
  window.showToast(`Selected "${tierName}" (${price}) for WhatsApp order!`);
  const msg = `Hello Elikar Campus!%0A%0AI would like to pre-order for Back-to-School / Resumption:%0A• Package: ${encodeURIComponent(tierName)} (${price})%0A%0APlease provide bank details and delivery schedule for my campus move-in.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

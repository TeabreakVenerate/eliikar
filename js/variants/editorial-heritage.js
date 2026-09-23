/* ==========================================================================
   VARIANT 3: EDITORIAL HERITAGE (TANG BOWS INSPIRED)
   High-craft artisan storytelling, serif typography, and curated gift boxes.
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

        /* Hero Section */
        .v3-hero {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          position: relative;
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
          max-width: 860px;
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
          max-width: 620px;
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

        /* Philosophy & Pillars */
        .v3-philosophy {
          padding: 6rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 800px) {
          .v3-philosophy { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        .v3-quote {
          font-family: var(--font-serif);
          font-size: 1.7rem;
          font-style: italic;
          line-height: 1.55;
          color: #FAF8F5;
          border-left: 2px solid #C9A84C;
          padding-left: 1.75rem;
        }
        .v3-pillar-item {
          margin-bottom: 1.75rem;
        }
        .v3-pillar-num {
          font-family: var(--font-display);
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          color: #C9A84C;
          margin-bottom: 0.35rem;
        }
        .v3-pillar-text {
          font-size: 0.95rem;
          color: #C2C2C2;
          line-height: 1.6;
        }

        /* Curated Combo Section */
        .v3-combos-section {
          background: #11151E;
          border-top: 1px solid rgba(201, 168, 76, 0.15);
          border-bottom: 1px solid rgba(201, 168, 76, 0.15);
          padding: 5rem 2rem;
        }
        .v3-combos-inner {
          max-width: 1040px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 850px) {
          .v3-combos-inner { grid-template-columns: 1fr; gap: 2rem; }
        }
        .v3-combo-box {
          background: #0B0E14;
          border: 1px solid rgba(201, 168, 76, 0.25);
          padding: 2.5rem;
          position: relative;
        }
        .v3-combo-box::before {
          content: 'SCHOLAR';
          font-family: var(--font-display);
          font-size: 4rem;
          color: rgba(201, 168, 76, 0.05);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
        }
        .v3-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          position: relative;
          z-index: 2;
        }
        .v3-tag {
          background: rgba(201, 168, 76, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.3);
          color: #E8C97A;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          text-transform: uppercase;
        }

        /* Products Grid */
        .v3-collection {
          max-width: 1100px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }
        .v3-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .v3-prod-card {
          background: #11151E;
          border: 1px solid rgba(201, 168, 76, 0.15);
          padding: 1.5rem;
          position: relative;
          transition: border-color 200ms ease;
        }
        .v3-prod-card:hover {
          border-color: #C9A84C;
        }
        .v3-prod-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        /* Founder note */
        .v3-artisan {
          background: #07090D;
          padding: 5rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(201, 168, 76, 0.15);
        }
        .v3-artisan-inner {
          max-width: 700px;
          margin: 0 auto;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v3-header">
        <div class="v3-logo" onclick="window.smoothScrollTo('v3-hero')">
          ELIKAR CRAFTS
        </div>
        <ul class="v3-nav-links">
          <li><a href="#v3-philosophy" onclick="window.smoothScrollTo('v3-philosophy')">Craft Values</a></li>
          <li><a href="#v3-combos" onclick="window.smoothScrollTo('v3-combos')">Gift Packages</a></li>
          <li><a href="#v3-collection" onclick="window.smoothScrollTo('v3-collection')">Collection</a></li>
        </ul>
      </header>

      <!-- Hero Section -->
      <section class="v3-hero" id="v3-hero">
        <div class="v3-gold-line"></div>
        <p class="v3-hero-sub">The Atelier — Est. Lagos, Nigeria</p>
        <h1 class="v3-hero-title">
          School Accessories That Outlast <em>The Term</em>
        </h1>
        <p class="v3-hero-desc">
          "Every bow, ribbon, and scrunchie is engineered for active school days and hand-stitched with love."
        </p>
        <button class="v3-btn-gold" onclick="window.smoothScrollTo('v3-combos')">
          <span>Explore Scholar Packages</span>
        </button>
      </section>

      <!-- Philosophy & 3 Pillars -->
      <section class="v3-philosophy" id="v3-philosophy">
        <div class="v3-quote">
          "Children deserve accessories made with the same dignity and durability as heirloom pieces. We refuse to make disposable hair items that snap by midterm."
        </div>
        <div>
          <div class="v3-pillar-item">
            <p class="v3-pillar-num">01 — UNIFORM ACCURACY</p>
            <p class="v3-pillar-text">Precision color-matching for Lagos, Abuja, and international schools without tacky mass-market plastic prints.</p>
          </div>
          <div class="v3-pillar-item">
            <p class="v3-pillar-num">02 — DURABILITY GUARANTEE</p>
            <p class="v3-pillar-text">Double heat-welded ribbon edges that resist fraying after dozens of playground sessions and washing cycles.</p>
          </div>
          <div class="v3-pillar-item">
            <p class="v3-pillar-num">03 — DIGNIFIED PRESENTATION</p>
            <p class="v3-pillar-text">Hand-packaged in personalized keepsake cases with student monograms and custom note cards.</p>
          </div>
        </div>
      </section>

      <!-- Curated Combos Box -->
      <section class="v3-combos-section" id="v3-combos">
        <div class="v3-combos-inner">
          <div class="v3-combo-box">
            <div class="v3-tag-cloud">
              <span class="v3-tag">Academy Bows</span>
              <span class="v3-tag">Snag-Free Scrunchies</span>
              <span class="v3-tag">Embroidered Bag Tag</span>
              <span class="v3-tag">No-Headache Alice Band</span>
              <span class="v3-tag">Waterproof Pouch</span>
              <span class="v3-tag">Resin Hair Claws</span>
              <span class="v3-tag">Handwritten Blessing Card</span>
            </div>
          </div>
          <div>
            <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase;">Curated Box</span>
            <h2 style="font-family: var(--font-serif); font-size: 2.4rem; font-weight: 300; margin: 0.5rem 0 1rem;">
              The Complete Term Prep <em>Scholar Gift Box</em>
            </h2>
            <p style="font-size: 0.95rem; color: #A0A0A0; line-height: 1.7; margin-bottom: 1.5rem;">
              Assembled with intention for parents who want a stress-free start to the academic year. Available in standard ₦15,500 and boarding house reserve tiers.
            </p>
            <button class="v3-btn-gold" onclick="window.v3ConsultOrder()">
              <span>Pre-Order Gift Box (WhatsApp)</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Handcrafted Collection Grid -->
      <section class="v3-collection" id="v3-collection">
        <div style="text-align: center;">
          <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.25em; color: #C9A84C; text-transform: uppercase;">The Archive</span>
          <h2 style="font-family: var(--font-serif); font-size: 2.4rem; font-weight: 300; margin-top: 0.5rem;">
            Handcrafted with <em>Precision</em>
          </h2>
          <div style="width: 40px; height: 1px; background: #C9A84C; margin: 1rem auto;"></div>
        </div>

        <div class="v3-products-grid">
          ${SCHOOL_PRODUCTS.map(prod => `
            <div class="v3-prod-card">
              <img src="${prod.image}" alt="${prod.name}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                <span style="font-size: 0.7rem; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase;">${prod.category}</span>
                <span style="font-size: 0.7rem; color: #9A9A9A;">${prod.leadTime}</span>
              </div>
              <h4 style="font-family: var(--font-serif); font-size: 1.3rem; font-weight: 400; margin-bottom: 0.4rem;">${prod.name}</h4>
              <p style="font-size: 0.85rem; color: #8A8A8A; line-height: 1.5; margin-bottom: 1rem;">${prod.specs}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(201, 168, 76, 0.2); padding-top: 0.8rem;">
                <span style="font-family: var(--font-display); font-size: 1.15rem; color: #E8C97A;">${prod.priceFormatted}</span>
                <button class="v3-btn-gold" style="padding: 0.4rem 0.9rem; font-size: 0.7rem;" onclick="window.v3ConsultItem('${prod.name}', '${prod.priceFormatted}')">Commission</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Artisan Studio Note -->
      <section class="v3-artisan">
        <div class="v3-artisan-inner">
          <div style="font-size: 1.8rem; margin-bottom: 1rem;">🎀</div>
          <p style="font-family: var(--font-serif); font-size: 1.4rem; font-style: italic; color: #E8C97A; margin-bottom: 1rem;">
            "A child's confidence on the first day of school is built on feeling cared for in every detail."
          </p>
          <p style="font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: #8A8A8A;">Elikar Crafts Studio • Lagos</p>
        </div>
      </section>
    </div>
  `;
}

// Global Event Handlers for Variant 3
window.v3ConsultOrder = function() {
  window.showToast("Opening WhatsApp consultation for Scholar Gift Box...");
  const msg = "Hello Elikar Crafts!%0A%0AI would like to consult with the artisan regarding the Curated Scholar Gift Box for Back to School resumption. Please share customisation slots.";
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

window.v3ConsultItem = function(name, price) {
  window.showToast(`Selected "${name}" for bespoke commission!`);
  const msg = `Hello Elikar Crafts!%0A%0AI am interested in commissioning "${encodeURIComponent(name)}" (${price}) for the upcoming school session.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

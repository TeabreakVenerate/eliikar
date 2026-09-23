/* ==========================================================================
   VARIANT 3: EDITORIAL HERITAGE
   Clean, humanized editorial layout inspired by Tang Bows.
   ========================================================================== */

function variantEditorialHeritage() {
  return `
    <div class="v3-wrapper" style="min-height: 100vh; background-color: #0F172A; color: #FAF8F5;">
      <style>
        .v3-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
          padding: 1.1rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .v3-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          letter-spacing: 0.15em;
          color: #E2E8F0;
          text-transform: uppercase;
          cursor: pointer;
        }
        .v3-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .v3-nav-links a {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          transition: color 150ms ease;
        }
        .v3-nav-links a:hover {
          color: #FFFFFF;
        }

        .v3-hero {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 5rem 2rem 3rem;
        }
        .v3-hero-sub {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }
        .v3-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 300;
          line-height: 1.15;
          max-width: 800px;
          margin-bottom: 1rem;
        }
        .v3-hero-desc {
          font-size: 1.05rem;
          color: #CBD5E1;
          max-width: 580px;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .v3-btn-gold {
          background: #E2E8F0;
          color: #0F172A;
          padding: 0.8rem 1.8rem;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 150ms ease;
        }
        .v3-btn-gold:hover {
          background: #FFFFFF;
        }

        .v3-showcase {
          max-width: 1040px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }
        .v3-tiers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 1.75rem;
          margin-top: 2rem;
        }
        .v3-tier-box {
          background: #1E293B;
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .v3-tier-header {
          border-bottom: 1px solid #334155;
          padding-bottom: 0.85rem;
          margin-bottom: 1rem;
        }
        .v3-tier-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFF;
        }
        .v3-tier-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: #F8FAFC;
          margin-top: 0.35rem;
        }

        .v3-itemized-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.75rem 0;
          font-size: 0.85rem;
        }
        .v3-itemized-table td {
          padding: 6px 0;
          border-bottom: 1px dashed #334155;
          color: #CBD5E1;
        }
        .v3-itemized-table td.cost {
          text-align: right;
          color: #94A3B8;
          font-weight: 600;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v3-header">
        <div class="v3-logo" onclick="window.smoothScrollTo('v3-hero')">
          Elikar
        </div>
        <ul class="v3-nav-links">
          <li><a href="#v3-jewelry" onclick="window.smoothScrollTo('v3-jewelry')">Jewelry Boxes</a></li>
          <li><a href="#v3-study" onclick="window.smoothScrollTo('v3-study')">Study Kits</a></li>
        </ul>
      </header>

      <!-- Hero -->
      <section class="v3-hero" id="v3-hero">
        <p class="v3-hero-sub">Back to School</p>
        <h1 class="v3-hero-title">
          Jewelry boxes and study essentials for students
        </h1>
        <p class="v3-hero-desc">
          Order your campus sets in advance so everything is ready when you get to your hostel.
        </p>
        <button class="v3-btn-gold" onclick="window.smoothScrollTo('v3-jewelry')">
          <span>See Packages</span>
        </button>
      </section>

      <!-- JEWELRY BOXES -->
      <section class="v3-showcase" id="v3-jewelry">
        <div style="margin-bottom: 1.5rem;">
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 400;">
            Jewelry Boxes
          </h2>
          <p style="font-size: 0.95rem; color: #94A3B8; margin-top: 0.25rem;">Three tiers available for pre-order.</p>
        </div>

        <div class="v3-tiers-grid">
          <!-- Tier 1 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Jewelry Box (Tier 1)</h3>
                <div class="v3-tier-price">₦13,000</div>
              </div>
              <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 0.75rem;">
                Includes complimentary face masks.
              </p>
              <table class="v3-itemized-table">
                <tr><td>The box</td><td class="cost">Included</td></tr>
                <tr><td>Necklace</td><td class="cost">Included</td></tr>
                <tr><td>Earring</td><td class="cost">Included</td></tr>
                <tr><td>Bracelet</td><td class="cost">Included</td></tr>
                <tr><td style="color: #38BDF8;">Complimentary face masks</td><td class="cost" style="color: #38BDF8;">Free</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Jewelry Box (Tier 1)', '₦13,000')">
              Order Tier 1
            </button>
          </div>

          <!-- Tier 2 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Jewelry Box (Tier 2)</h3>
                <div class="v3-tier-price">₦18,500</div>
              </div>
              <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 0.75rem;">
                Includes earrings, bracelets, and a ring.
              </p>
              <table class="v3-itemized-table">
                <tr><td>The box</td><td class="cost">Included</td></tr>
                <tr><td>Necklace (1)</td><td class="cost">Included</td></tr>
                <tr><td>Earring (2)</td><td class="cost">Included</td></tr>
                <tr><td>Bracelet (2)</td><td class="cost">Included</td></tr>
                <tr><td>Ring (1)</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Jewelry Box (Tier 2)', '₦18,500')">
              Order Tier 2
            </button>
          </div>

          <!-- Tier 3 -->
          <div class="v3-tier-box" style="border-color: #64748B;">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Jewelry Box (Tier 3)</h3>
                <div class="v3-tier-price">₦27,500</div>
              </div>
              <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 0.75rem;">
                Itemized cost breakdown:
              </p>
              <table class="v3-itemized-table">
                <tr><td>The box</td><td class="cost">₦7,000</td></tr>
                <tr><td>2 • Necklace</td><td class="cost">₦7,000</td></tr>
                <tr><td>2 • Earring</td><td class="cost">₦3,000</td></tr>
                <tr><td>1 • Bracelet</td><td class="cost">₦2,000</td></tr>
                <tr><td>Ring (1 set)</td><td class="cost">₦3,500</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Jewelry Box (Tier 3)', '₦27,500')">
              Order Tier 3
            </button>
          </div>
        </div>
      </section>

      <!-- STUDY KITS -->
      <section class="v3-showcase" id="v3-study" style="border-top: 1px solid #1E293B;">
        <div style="margin-bottom: 1.5rem;">
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 400;">
            Study Kits
          </h2>
          <p style="font-size: 0.95rem; color: #94A3B8; margin-top: 0.25rem;">Stationery, reading lamps, calculators, and folding tables.</p>
        </div>

        <div class="v3-tiers-grid">
          <!-- Study Tier 1 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Study Kit (Tier 1)</h3>
                <div class="v3-tier-price">₦12,500</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Mini stapler</td><td class="cost">Included</td></tr>
                <tr><td>Sticky notes</td><td class="cost">Included</td></tr>
                <tr><td>Highlighters</td><td class="cost">Included</td></tr>
                <tr><td>Stylish pens</td><td class="cost">Included</td></tr>
                <tr><td>Double sided tape</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Study Kit (Tier 1)', '₦12,500')">
              Order Tier 1
            </button>
          </div>

          <!-- Study Tier 2 -->
          <div class="v3-tier-box">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Study Kit (Tier 2)</h3>
                <div class="v3-tier-price">₦26,000</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Mini stapler</td><td class="cost">Included</td></tr>
                <tr><td>Reading lamp</td><td class="cost">Included</td></tr>
                <tr><td>Cute notebooks &amp; planners</td><td class="cost">Included</td></tr>
                <tr><td>Calculator (natural display)</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Study Kit (Tier 2)', '₦26,000')">
              Order Tier 2
            </button>
          </div>

          <!-- Study Tier 3 -->
          <div class="v3-tier-box" style="border-color: #64748B;">
            <div>
              <div class="v3-tier-header">
                <h3 class="v3-tier-title">Study Kit (Tier 3)</h3>
                <div class="v3-tier-price">₦45,000</div>
              </div>
              <table class="v3-itemized-table">
                <tr><td>Reading table</td><td class="cost">Included</td></tr>
                <tr><td>Reading lamp</td><td class="cost">Included</td></tr>
                <tr><td>Cute notebooks</td><td class="cost">Included</td></tr>
                <tr><td>Calculator</td><td class="cost">Included</td></tr>
                <tr><td>Double sided tape</td><td class="cost">Included</td></tr>
              </table>
            </div>
            <button class="v3-btn-gold" style="margin-top: 1.25rem; width: 100%; justify-content: center;" onclick="window.v3OrderTier('Study Kit (Tier 3)', '₦45,000')">
              Order Tier 3
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}

window.v3OrderTier = function(tierName, price) {
  window.showToast(`Selected ${tierName}`);
  const msg = `Hello Elikar!%0A%0AI would like to order ${encodeURIComponent(tierName)} (${price}). Please let me know how to pay and give delivery details.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

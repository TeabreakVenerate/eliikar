/* ==========================================================================
   VARIANT 2: DUAL STREAM (CAMPUS LOGISTICS & URGENCY SPLIT)
   Stream A: Advance Resumption Pre-Order (Tier 3 Furniture, Tables & Grand Boxes)
   Stream B: 24h Campus Express (Tier 1 Stationery, Reading Lamps, Calculators)
   ========================================================================== */

function variantDualStream() {
  return `
    <div class="v2-wrapper" style="min-height: 100vh; background-color: #FAF7F2; color: #1E1B18;">
      <style>
        .v2-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(250, 247, 242, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #E5DFD7;
          padding: 0.85rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .v2-brand {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          cursor: pointer;
        }
        .v2-brand span {
          color: #B45309;
        }
        
        .v2-stream-tabs {
          display: flex;
          gap: 0.5rem;
          background: #ECE5DA;
          padding: 4px;
          border-radius: 999px;
        }
        .v2-tab-btn {
          padding: 0.45rem 1.15rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background-color 150ms ease-out, color 150ms ease-out;
          background: transparent;
          color: #5C554E;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .v2-tab-btn.stream-a-btn.active {
          background: var(--elikar-navy-900);
          color: white;
        }
        .v2-tab-btn.stream-b-btn.active {
          background: #B45309;
          color: white;
        }

        .v2-hero {
          text-align: center;
          padding: 3rem 1.5rem 2rem;
          max-width: 840px;
          margin: 0 auto;
        }
        .v2-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.18;
          color: #1E1B18;
        }
        .v2-hero p {
          font-size: 1.05rem;
          color: #665E55;
          margin-top: 0.75rem;
        }

        .v2-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 1rem 1.5rem 5rem;
        }

        .v2-stream-block {
          border-radius: 20px;
          padding: 2.25rem;
          margin-bottom: 3.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .v2-stream-a {
          background: #F3F6FB;
          border: 1px solid #D0DCED;
        }
        .v2-stream-b {
          background: #FEF8ED;
          border: 1px solid #FDE68A;
        }

        .v2-stream-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .v2-stream-badge {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          letter-spacing: 0.06em;
        }
        .v2-badge-a {
          background: var(--elikar-navy-900);
          color: white;
        }
        .v2-badge-b {
          background: #B45309;
          color: white;
        }

        .v2-stream-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .v2-stream-card {
          background: #FFFFFF;
          border-radius: 14px;
          overflow: hidden;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
        }
        .v2-stream-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .v2-items-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0.75rem 0;
          padding: 0.75rem;
          background: #FAFAFA;
          border-radius: 8px;
        }
        .v2-items-checklist li {
          font-size: 0.78rem;
          color: #4B5563;
        }
        .v2-items-checklist li strong {
          color: #111827;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v2-header">
        <div class="v2-brand" onclick="window.smoothScrollTo('v2-hero')">
          ELIKAR <span>DUAL-STREAM</span>
        </div>
        
        <div class="v2-stream-tabs">
          <button class="v2-tab-btn stream-a-btn active" onclick="window.v2JumpStream('stream-a')">
            ⏳ Stream A: Resumption Pre-Order
          </button>
          <button class="v2-tab-btn stream-b-btn" onclick="window.v2JumpStream('stream-b')">
            ⚡ Stream B: 24h Campus Rush
          </button>
        </div>
      </header>

      <!-- Hero Header -->
      <div class="v2-hero" id="v2-hero">
        <h1>Two Dedicated Campus Order Streams</h1>
        <p>Pre-order full reading tables and grand jewelry tiers before campus resumption, or order 24h instant dispatch study lamps, calculators, and lecture stationery.</p>
      </div>

      <main class="v2-container">
        <!-- STREAM A: Advance Resumption Pre-Orders -->
        <section id="stream-a" class="v2-stream-block v2-stream-a">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge v2-badge-a">Stream A • Advance Resumption Queue</span>
              <h2 style="font-family: var(--font-display); font-size: 1.7rem; font-weight: 800; color: var(--elikar-navy-900); margin-top: 0.35rem;">
                Hostel Move-In Suites &amp; Grand Jewelry Tiers
              </h2>
            </div>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--elikar-navy-700);">
              📦 Scheduled Delivery for Move-In Week
            </span>
          </div>

          <div class="v2-stream-grid">
            <!-- Study Tier 3 (Reading Table Suite) -->
            <div class="v2-stream-card" style="border: 2px solid var(--elikar-gold-500);">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-gold-600); text-transform: uppercase;">Study Suite</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: var(--elikar-gold-100); color: var(--elikar-gold-600); padding: 2px 6px; border-radius: 4px;">Tier 3 Ultimate</span>
                </div>
                <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--elikar-navy-900); margin: 0.35rem 0;">
                  Complete Dorm Suite with Reading Table
                </h4>
                <p style="font-size: 0.82rem; color: #555;">
                  The ultimate hostel room setup for comfortable study on bed or desk.
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ <strong>Foldable Ergonomic Reading Table</strong></li>
                  <li>✓ <strong>Rechargeable Long-Life Reading Lamp</strong></li>
                  <li>✓ <strong>Cute Aesthetic Notebooks Set</strong></li>
                  <li>✓ <strong>Natural Display Calculator</strong></li>
                  <li>✓ <strong>Double Sided Heavy-Duty Tape</strong></li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.3rem; color: var(--elikar-navy-900);">₦45,000</span>
                <button style="padding: 0.55rem 1.1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 0.82rem;" onclick="window.v2BookPreorder('Complete Dorm Suite with Reading Table (Tier 3)', '₦45,000')">
                  Pre-Order Suite
                </button>
              </div>
            </div>

            <!-- Jewelry Tier 3 -->
            <div class="v2-stream-card" style="border: 2px solid var(--elikar-navy-800);">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-navy-700); text-transform: uppercase;">Jewelry Box</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: #E0E7FF; color: #3730A3; padding: 2px 6px; border-radius: 4px;">Tier 3 Grand</span>
                </div>
                <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--elikar-navy-900); margin: 0.35rem 0;">
                  Jewelry Box (Tier 3) Grand Set
                </h4>
                <p style="font-size: 0.82rem; color: #555;">
                  Grand lockable university jewelry archive with full styling suite.
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ <strong>The Box</strong> (₦7,000 value)</li>
                  <li>✓ <strong>2x Necklaces</strong> (₦7,000 value)</li>
                  <li>✓ <strong>2x Earring Pairs</strong> (₦3,000 value)</li>
                  <li>✓ <strong>1x Bracelet</strong> (₦2,000 value)</li>
                  <li>✓ <strong>Ring (1 full set)</strong> (₦3,500 value)</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.3rem; color: var(--elikar-navy-900);">₦27,500</span>
                <button style="padding: 0.55rem 1.1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 0.82rem;" onclick="window.v2BookPreorder('Jewelry Box (Tier 3) Grand Set', '₦27,500')">
                  Pre-Order Box
                </button>
              </div>
            </div>

            <!-- Jewelry Tier 2 -->
            <div class="v2-stream-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-navy-700); text-transform: uppercase;">Jewelry Box</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: #F1F5F9; color: #475569; padding: 2px 6px; border-radius: 4px;">Tier 2 Popular</span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--elikar-navy-900); margin: 0.35rem 0;">
                  Jewelry Box (Tier 2)
                </h4>
                <p style="font-size: 0.82rem; color: #555;">
                  Expanded multi-tier organizer with full lecture layering set.
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ The Box</li>
                  <li>✓ 1x Necklace</li>
                  <li>✓ 2x Earring Pairs</li>
                  <li>✓ 2x Bracelets</li>
                  <li>✓ 1x Ring</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: var(--elikar-navy-900);">₦18,500</span>
                <button style="padding: 0.5rem 0.95rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2BookPreorder('Jewelry Box (Tier 2)', '₦18,500')">
                  Reserve Slot
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- STREAM B: 24h Campus Rush Dispatch -->
        <section id="stream-b" class="v2-stream-block v2-stream-b">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge v2-badge-b">Stream B • Instant Campus Dispatch</span>
              <h2 style="font-family: var(--font-display); font-size: 1.7rem; font-weight: 800; color: #92400E; margin-top: 0.35rem;">
                Stationery Essentials, Reading Lamps &amp; Tier 1 Kits
              </h2>
            </div>
            <span style="font-size: 0.85rem; font-weight: 700; color: #92400E;">
              ⚡ Ready Stock in Studio (24h Delivery to Hostels)
            </span>
          </div>

          <div class="v2-stream-grid">
            <!-- Jewelry Tier 1 with Face Masks -->
            <div class="v2-stream-card" style="border: 2px solid #F59E0B;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #B45309; text-transform: uppercase;">Jewelry Box</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: #FEF3C7; color: #B45309; padding: 2px 6px; border-radius: 4px;">Tier 1 Starter</span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.35rem 0; color: #1E1B18;">
                  Jewelry Box (Tier 1)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Includes complimentary hydrating skincare face masks!
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ The Keepsake Velvet Box</li>
                  <li>✓ 1x Necklace</li>
                  <li>✓ 1x Earring Pair</li>
                  <li>✓ 1x Bracelet</li>
                  <li>✨ <strong>Complimentary Face Masks (Free)</strong></li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #FDE68A; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #92400E;">₦13,000</span>
                <button style="padding: 0.5rem 0.95rem; background: #B45309; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Jewelry Box (Tier 1 with Face Masks)', '₦13,000')">
                  Instant Buy
                </button>
              </div>
            </div>

            <!-- Study Tier 1 Stationery Kit -->
            <div class="v2-stream-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #B45309; text-transform: uppercase;">Stationery Suite</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: #FEF3C7; color: #B45309; padding: 2px 6px; border-radius: 4px;">Tier 1 Essentials</span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.35rem 0; color: #1E1B18;">
                  Campus Stationery Kit (Tier 1)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Complete 5-piece study and project binding set.
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ Mini Stapler</li>
                  <li>✓ Sticky Notes</li>
                  <li>✓ Highlighters (Pastel pack)</li>
                  <li>✓ Stylish Pens</li>
                  <li>✓ Double Sided Tape</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #FDE68A; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #92400E;">₦12,500</span>
                <button style="padding: 0.5rem 0.95rem; background: #B45309; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Campus Stationery Kit (Tier 1)', '₦12,500')">
                  Instant Buy
                </button>
              </div>
            </div>

            <!-- Study Tier 2 Scholar Desk Kit -->
            <div class="v2-stream-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #B45309; text-transform: uppercase;">Study Suite</span>
                  <span style="font-size: 0.7rem; font-weight: 800; background: #FEF3C7; color: #B45309; padding: 2px 6px; border-radius: 4px;">Tier 2 Scholar</span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.35rem 0; color: #1E1B18;">
                  Scholar Desk &amp; Lamp Kit (Tier 2)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Night study survival setup for blackout-prone hostels.
                </p>
                <ul class="v2-items-checklist">
                  <li>✓ Mini Stapler</li>
                  <li>✓ Rechargeable Reading Lamp</li>
                  <li>✓ Cute Notebooks &amp; Planners</li>
                  <li>✓ Natural Display Calculator</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #FDE68A; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #92400E;">₦26,000</span>
                <button style="padding: 0.5rem 0.95rem; background: #B45309; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Scholar Desk & Lamp Kit (Tier 2)', '₦26,000')">
                  Instant Buy
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

// Global Event Handlers for Variant 2
window.v2JumpStream = function(streamId) {
  const target = document.getElementById(streamId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('.v2-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (streamId === 'stream-a') {
    document.querySelector('.stream-a-btn')?.classList.add('active');
  } else {
    document.querySelector('.stream-b-btn')?.classList.add('active');
  }
};

window.v2BookPreorder = function(name, price) {
  window.showToast(`Selected "${name}" (${price}) for Stream A Pre-Order!`);
  const msg = `Hello Elikar Campus!%0A%0AI would like to pre-order for Semester Resumption:%0A• Package: ${encodeURIComponent(name)} (${price})%0A• Request: Advance move-in delivery to my hostel%0A%0APlease send payment details and confirm my reservation.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

window.v2InstantOrder = function(name, price) {
  window.showToast(`Selected "${name}" (${price}) for 24h Campus Dispatch!`);
  const msg = `Hello Elikar Campus!%0A%0AI need 24h Instant Dispatch to campus:%0A• Item: ${encodeURIComponent(name)} (${price})%0A%0APlease confirm immediate stock availability and delivery fee.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

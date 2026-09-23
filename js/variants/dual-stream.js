/* ==========================================================================
   VARIANT 2: DUAL STREAM
   Realistic split between Pre-Orders for Resumption and Fast Delivery.
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
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          cursor: pointer;
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
        }
        .v2-tab-btn.stream-a-btn.active {
          background: var(--elikar-navy-900);
          color: white;
        }
        .v2-tab-btn.stream-b-btn.active {
          background: #334155;
          color: white;
        }

        .v2-hero {
          text-align: center;
          padding: 3rem 1.5rem 1.5rem;
          max-width: 760px;
          margin: 0 auto;
        }
        .v2-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          font-weight: 800;
          line-height: 1.2;
          color: #1E1B18;
        }
        .v2-hero p {
          font-size: 1rem;
          color: #665E55;
          margin-top: 0.5rem;
        }

        .v2-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1rem 1.5rem 5rem;
        }

        .v2-stream-block {
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 3rem;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
        }

        .v2-stream-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .v2-stream-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: #F1F5F9;
          color: #334155;
        }

        .v2-stream-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1.25rem;
        }

        .v2-stream-card {
          background: #FAFAFA;
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #E5E7EB;
        }

        .v2-items-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0.75rem 0;
          padding: 0.75rem;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
        }
        .v2-items-checklist li {
          font-size: 0.8rem;
          color: #4B5563;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v2-header">
        <div class="v2-brand" onclick="window.smoothScrollTo('v2-hero')">
          Elikar
        </div>
        
        <div class="v2-stream-tabs">
          <button class="v2-tab-btn stream-a-btn active" onclick="window.v2JumpStream('stream-a')">
            Resumption Pre-Order
          </button>
          <button class="v2-tab-btn stream-b-btn" onclick="window.v2JumpStream('stream-b')">
            Ready to Ship
          </button>
        </div>
      </header>

      <!-- Hero Header -->
      <div class="v2-hero" id="v2-hero">
        <h1>Order before school resumes</h1>
        <p>Pre-order full sets and reading tables for resumption week, or order individual items for immediate delivery.</p>
      </div>

      <main class="v2-container">
        <!-- STREAM A -->
        <section id="stream-a" class="v2-stream-block">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge">Pre-Order for Resumption</span>
              <h2 style="font-size: 1.4rem; font-weight: 800; color: #111827; margin-top: 0.35rem;">
                Hostel Kits &amp; Tier Packages
              </h2>
            </div>
            <span style="font-size: 0.85rem; color: #64748B;">Delivered to your hostel on arrival</span>
          </div>

          <div class="v2-stream-grid">
            <!-- Study Tier 3 -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Study Kit</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #111827; margin: 0.25rem 0;">
                  Study Kit (Tier 3)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Includes the foldable bed/desk reading table and lamp.
                </p>
                <ul class="v2-items-checklist">
                  <li>• Reading table</li>
                  <li>• Reading lamp</li>
                  <li>• Cute notebooks</li>
                  <li>• Calculator</li>
                  <li>• Double sided tape</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦45,000</span>
                <button style="padding: 0.5rem 1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2BookPreorder('Study Kit (Tier 3)', '₦45,000')">
                  Pre-Order
                </button>
              </div>
            </div>

            <!-- Jewelry Tier 3 -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Jewelry Box</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #111827; margin: 0.25rem 0;">
                  Jewelry Box (Tier 3)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Full jewelry collection with itemized pieces.
                </p>
                <ul class="v2-items-checklist">
                  <li>• The box (₦7,000)</li>
                  <li>• 2 • Necklace (₦7,000)</li>
                  <li>• 2 • Earring (₦3,000)</li>
                  <li>• 1 • Bracelet (₦2,000)</li>
                  <li>• Ring (1 set) (₦3,500)</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦27,500</span>
                <button style="padding: 0.5rem 1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2BookPreorder('Jewelry Box (Tier 3)', '₦27,500')">
                  Pre-Order
                </button>
              </div>
            </div>

            <!-- Jewelry Tier 2 -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Jewelry Box</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #111827; margin: 0.25rem 0;">
                  Jewelry Box (Tier 2)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Contains the box, necklace, earrings, bracelets, and ring.
                </p>
                <ul class="v2-items-checklist">
                  <li>• The box</li>
                  <li>• Necklace (1)</li>
                  <li>• Earring (2)</li>
                  <li>• Bracelet (2)</li>
                  <li>• Ring (1)</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦18,500</span>
                <button style="padding: 0.5rem 1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2BookPreorder('Jewelry Box (Tier 2)', '₦18,500')">
                  Pre-Order
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- STREAM B -->
        <section id="stream-b" class="v2-stream-block">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge">Ready to Ship</span>
              <h2 style="font-size: 1.4rem; font-weight: 800; color: #111827; margin-top: 0.35rem;">
                Immediate Delivery
              </h2>
            </div>
            <span style="font-size: 0.85rem; color: #64748B;">Dispatched promptly</span>
          </div>

          <div class="v2-stream-grid">
            <!-- Jewelry Tier 1 with Face Masks -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Jewelry Box</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.25rem 0; color: #111827;">
                  Jewelry Box (Tier 1)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Includes complimentary face masks.
                </p>
                <ul class="v2-items-checklist">
                  <li>• The box</li>
                  <li>• Necklace</li>
                  <li>• Earring</li>
                  <li>• Bracelet</li>
                  <li>• Complimentary face masks</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦13,000</span>
                <button style="padding: 0.5rem 1rem; background: #25D366; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Jewelry Box (Tier 1)', '₦13,000')">
                  Order Now
                </button>
              </div>
            </div>

            <!-- Study Tier 1 -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Study Kit</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.25rem 0; color: #111827;">
                  Study Kit (Tier 1)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Pens, notes, highlighters, stapler, and tape.
                </p>
                <ul class="v2-items-checklist">
                  <li>• Mini stapler</li>
                  <li>• Sticky notes</li>
                  <li>• Highlighters</li>
                  <li>• Stylish pens</li>
                  <li>• Double sided tape</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦12,500</span>
                <button style="padding: 0.5rem 1rem; background: #25D366; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Study Kit (Tier 1)', '₦12,500')">
                  Order Now
                </button>
              </div>
            </div>

            <!-- Study Tier 2 -->
            <div class="v2-stream-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: #4B5563;">Study Kit</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.25rem 0; color: #111827;">
                  Study Kit (Tier 2)
                </h4>
                <p style="font-size: 0.82rem; color: #64748B;">
                  Includes reading lamp and calculator.
                </p>
                <ul class="v2-items-checklist">
                  <li>• Mini stapler</li>
                  <li>• Reading lamp</li>
                  <li>• Cute notebooks &amp; planners</li>
                  <li>• Calculator (natural display)</li>
                </ul>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E5E7EB; padding-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.2rem; color: #111827;">₦26,000</span>
                <button style="padding: 0.5rem 1rem; background: #25D366; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('Study Kit (Tier 2)', '₦26,000')">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

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
  window.showToast(`Selected "${name}" (${price})`);
  const msg = `Hello Elikar!%0A%0AI would like to pre-order ${encodeURIComponent(name)} (${price}) for resumption. Please send details on how to reserve.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

window.v2InstantOrder = function(name, price) {
  window.showToast(`Selected "${name}" (${price})`);
  const msg = `Hello Elikar!%0A%0AI would like to order ${encodeURIComponent(name)} (${price}). Please confirm if this can be delivered right away.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

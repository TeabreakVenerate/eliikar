/* ==========================================================================
   VARIANT 2: DUAL STREAM (LOGISTICS & URGENCY SPLIT)
   Modeled directly on Cakes by Nessa Variant 8: Dual Stream Architecture.
   Stream A: 7-14 Day Custom Uniform Pre-Order vs Stream B: 24h Ready-to-Ship Essentials.
   ========================================================================== */

function variantDualStream() {
  const streamAProducts = SCHOOL_PRODUCTS.filter(p => p.stream === "stream-a");
  const streamBProducts = SCHOOL_PRODUCTS.filter(p => p.stream === "stream-b");

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
        
        /* Dual Stream Quick Jump Nav */
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

        /* Stream Block Architecture */
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
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
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
        .v2-card-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 0.85rem;
        }

        /* Batch Progress Bar */
        .v2-batch-tracker {
          background: rgba(255,255,255,0.7);
          border-radius: 10px;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0,0,0,0.05);
          flex-wrap: wrap;
        }
        .v2-bar-track {
          flex: 1;
          min-width: 140px;
          height: 8px;
          background: #E2E8F0;
          border-radius: 999px;
          overflow: hidden;
        }
        .v2-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #13223E, #B8860B);
          border-radius: 999px;
        }
      </style>

      <!-- Sticky Header with Dual Stream Tabs -->
      <header class="v2-header">
        <div class="v2-brand" onclick="window.smoothScrollTo('v2-hero')">
          ELIKAR <span>DUAL-STREAM</span>
        </div>
        
        <div class="v2-stream-tabs">
          <button class="v2-tab-btn stream-a-btn active" onclick="window.v2JumpStream('stream-a')">
            ⏳ Stream A: Custom Pre-Order
          </button>
          <button class="v2-tab-btn stream-b-btn" onclick="window.v2JumpStream('stream-b')">
            ⚡ Stream B: 24h Essentials
          </button>
        </div>
      </header>

      <!-- Hero Header -->
      <div class="v2-hero" id="v2-hero">
        <h1>Two Dedicated Workshop Streams</h1>
        <p>Choose between customized, monogrammed Back-to-School term kits prepared in advance batches, or fast-track same-day dispatch for everyday uniform accessories.</p>
      </div>

      <main class="v2-container">
        <!-- STREAM A: Custom Pre-Order Queue (7-14 Days) -->
        <section id="stream-a" class="v2-stream-block v2-stream-a">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge v2-badge-a">Stream A • Bespoke Queue</span>
              <h2 style="font-family: var(--font-display); font-size: 1.7rem; font-weight: 800; color: var(--elikar-navy-900); margin-top: 0.35rem;">
                Custom School Color Sets &amp; Monograms
              </h2>
            </div>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--elikar-navy-700);">
              📅 Resumption Production Batch #1
            </span>
          </div>

          <!-- Capacity Bar -->
          <div class="v2-batch-tracker">
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--elikar-navy-900);">
              Queue Status: <strong>82% Booked</strong> (Only 18 Custom Slots Remaining)
            </span>
            <div class="v2-bar-track">
              <div class="v2-bar-fill" style="width: 82%;"></div>
            </div>
            <span style="font-size: 0.78rem; font-weight: 800; color: #B45309;">Closing Friday Midnight</span>
          </div>

          <!-- Stream A Products Grid -->
          <div class="v2-stream-grid">
            <!-- Full Deluxe Kit Feature -->
            <div class="v2-stream-card" style="border: 2px solid var(--elikar-gold-500); grid-column: span 1;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-gold-600); text-transform: uppercase;">Flagship Kit</span>
                <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--elikar-navy-900); margin: 0.25rem 0;">Complete Term Prep Deluxe Kit</h4>
                <p style="font-size: 0.82rem; color: #555; line-height: 1.45; margin-bottom: 0.75rem;">
                  4x uniform bows, 6x satin scrunchies, 2x monogrammed bag tags, 2x resin claws in custom school colors.
                </p>
                <div style="font-size: 0.75rem; color: var(--elikar-navy-700); font-weight: 700; margin-bottom: 0.5rem;">
                  Includes Child Name Tag Embroidery
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 0.75rem; margin-top: 0.75rem;">
                <span style="font-weight: 800; font-size: 1.25rem; color: var(--elikar-navy-900);">₦15,500</span>
                <button style="padding: 0.55rem 1rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 0.82rem;" onclick="window.v2BookPreorder('Complete Term Prep Deluxe Kit', '₦15,500')">
                  Book Slot
                </button>
              </div>
            </div>

            ${streamAProducts.map(item => `
              <div class="v2-stream-card">
                <div>
                  <img src="${item.image}" alt="${item.name}" class="v2-card-img img-skeleton" onload="this.classList.remove('img-skeleton')">
                  <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-navy-700); text-transform: uppercase;">${item.category}</span>
                  <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.2rem 0; color: #1E1B18;">${item.name}</h4>
                  <p style="font-size: 0.82rem; color: #64748B; margin-bottom: 0.5rem;">${item.description}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #F1F5F9; padding-top: 0.6rem; margin-top: 0.5rem;">
                  <span style="font-weight: 800; font-size: 1.15rem; color: var(--elikar-navy-900);">${item.priceFormatted}</span>
                  <button style="padding: 0.5rem 0.95rem; background: var(--elikar-navy-900); color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2BookPreorder('${item.name}', '${item.priceFormatted}')">
                    Pre-Order
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- STREAM B: 24h Ready-to-Ship Essentials -->
        <section id="stream-b" class="v2-stream-block v2-stream-b">
          <div class="v2-stream-header">
            <div>
              <span class="v2-stream-badge v2-badge-b">Stream B • Instant Dispatch</span>
              <h2 style="font-family: var(--font-display); font-size: 1.7rem; font-weight: 800; color: #92400E; margin-top: 0.35rem;">
                Ready-to-Ship School Essentials
              </h2>
            </div>
            <span style="font-size: 0.85rem; font-weight: 700; color: #92400E;">
              ⚡ Ready Stock in Studio (24h Lagos Dispatch)
            </span>
          </div>

          <div class="v2-stream-grid">
            ${streamBProducts.map(item => `
              <div class="v2-stream-card">
                <div>
                  <img src="${item.image}" alt="${item.name}" class="v2-card-img img-skeleton" onload="this.classList.remove('img-skeleton')">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #B45309; text-transform: uppercase;">${item.category}</span>
                  <h4 style="font-size: 1.05rem; font-weight: 800; margin: 0.2rem 0; color: #1E1B18;">${item.name}</h4>
                  <p style="font-size: 0.82rem; color: #64748B; margin-bottom: 0.5rem;">${item.description}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #F1F5F9; padding-top: 0.6rem; margin-top: 0.5rem;">
                  <span style="font-weight: 800; font-size: 1.15rem; color: #92400E;">${item.priceFormatted}</span>
                  <button style="padding: 0.5rem 0.95rem; background: #B45309; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.8rem;" onclick="window.v2InstantOrder('${item.name}', '${item.priceFormatted}')">
                    Instant Buy
                  </button>
                </div>
              </div>
            `).join('')}
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

  // Update tabs
  document.querySelectorAll('.v2-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (streamId === 'stream-a') {
    document.querySelector('.stream-a-btn')?.classList.add('active');
  } else {
    document.querySelector('.stream-b-btn')?.classList.add('active');
  }
};

window.v2BookPreorder = function(name, price) {
  window.showToast(`Selected "${name}" (${price}) for Stream A Pre-Order!`);
  const msg = `Hello Elikar Crafts!%0A%0AI would like to reserve a slot in Stream A Pre-Order:%0A• Item: ${encodeURIComponent(name)} (${price})%0A• Term: September 2026 Back to School Resumption%0A%0APlease send bank details and color customisation options.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

window.v2InstantOrder = function(name, price) {
  window.showToast(`Selected "${name}" (${price}) for Stream B 24h dispatch!`);
  const msg = `Hello Elikar Crafts!%0A%0AI would like to order from Stream B (24h Ready-to-Ship):%0A• Item: ${encodeURIComponent(name)} (${price})%0A%0APlease confirm immediate stock availability and delivery fee.`;
  setTimeout(() => {
    window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
  }, 400);
};

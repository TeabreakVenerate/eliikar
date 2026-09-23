/* ==========================================================================
   VARIANT 1: BESPOKE STUDIO (CAMPUS LIFE CONFIGURATOR)
   Interactive 3-step builder for Jewelry Boxes and Study/Desk Suites.
   ========================================================================== */

function variantBespokeStudio() {
  if (!window.v1State) {
    window.v1State = {
      collection: 'jewelry', // 'jewelry' or 'study'
      tierIndex: 1,          // Tier 2 by default
      studentName: "Damilola Adeleke",
      hall: "Queen Idia Hall, University of Ibadan"
    };
  }

  const currentTiers = window.v1State.collection === 'jewelry' ? JEWELRY_TIERS : STUDY_TIERS;
  const currentTier = currentTiers[window.v1State.tierIndex] || currentTiers[0];

  return `
    <div class="v1-wrapper" style="min-height: 100vh; background-color: var(--elikar-cream); color: var(--elikar-charcoal);">
      <style>
        .v1-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--elikar-border);
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .v1-brand {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.08em;
          color: var(--elikar-navy-900);
          cursor: pointer;
        }
        .v1-brand span {
          color: var(--elikar-gold-500);
        }
        .v1-nav-pills {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .v1-nav-btn {
          font-size: 0.825rem;
          font-weight: 700;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          border: 1px solid var(--elikar-border);
          background: var(--elikar-white);
          color: var(--elikar-charcoal);
        }
        .v1-nav-btn.primary {
          background: var(--elikar-navy-900);
          color: var(--elikar-white);
          border-color: var(--elikar-navy-900);
        }

        .v1-hero {
          text-align: center;
          padding: 3rem 1.5rem 2rem;
          max-width: 840px;
          margin: 0 auto;
        }
        .v1-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--elikar-gold-100);
          color: var(--elikar-gold-600);
          border: 1px solid rgba(184, 134, 11, 0.25);
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.85rem;
        }
        .v1-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4.2vw, 3rem);
          font-weight: 700;
          line-height: 1.18;
          color: var(--elikar-navy-900);
        }
        .v1-hero p {
          font-size: 1.05rem;
          color: var(--elikar-slate);
          margin-top: 0.85rem;
          line-height: 1.6;
        }

        /* 3-Step Interactive Configurator Card */
        .v1-studio-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 1.5rem 4rem;
        }
        .v1-studio-card {
          background: var(--elikar-white);
          border: 1px solid var(--elikar-border);
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(11, 21, 40, 0.06);
          padding: 2.25rem;
        }
        .v1-builder-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 880px) {
          .v1-builder-grid { grid-template-columns: 1fr; }
        }

        .v1-step-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--elikar-navy-900);
          color: var(--elikar-white);
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .v1-step-title {
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          margin-bottom: 0.65rem;
        }

        /* Collection Switcher Buttons */
        .v1-collection-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        .v1-coll-btn {
          padding: 0.85rem;
          border-radius: 12px;
          border: 2px solid var(--elikar-border);
          background: var(--elikar-cream);
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--elikar-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 180ms ease-out;
        }
        .v1-coll-btn.selected {
          border-color: var(--elikar-navy-900);
          background: var(--elikar-navy-900);
          color: white;
        }

        /* Tier Selector Cards */
        .v1-tier-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        .v1-tier-card {
          border: 2px solid var(--elikar-border);
          background: var(--elikar-white);
          border-radius: 14px;
          padding: 1rem 1.15rem;
          cursor: pointer;
          transition: border-color var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .v1-tier-card:hover {
          border-color: var(--elikar-gold-500);
        }
        .v1-tier-card.selected {
          border-color: var(--elikar-gold-500);
          background: var(--elikar-gold-50);
        }
        .v1-tier-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
        }
        .v1-tier-items-summary {
          font-size: 0.78rem;
          color: var(--elikar-slate);
          margin-top: 4px;
          line-height: 1.4;
        }
        .v1-tier-price {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          white-space: nowrap;
        }

        /* Inputs */
        .v1-input-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .v1-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--elikar-border);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          background: #FAFAFA;
        }
        .v1-input:focus {
          background: #FFF;
          border-color: var(--elikar-navy-900);
        }

        /* Live Preview Plate */
        .v1-preview-box {
          background: linear-gradient(145deg, #13223E 0%, #0B1528 100%);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          color: var(--elikar-white);
          position: sticky;
          top: 90px;
          box-shadow: 0 16px 40px rgba(11, 21, 40, 0.25);
        }
        .v1-plate-visual {
          width: 100%;
          min-height: 220px;
          background: rgba(255,255,255,0.04);
          border: 1px dashed rgba(255,255,255,0.25);
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          margin-bottom: 1.25rem;
        }
        .v1-plate-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .v1-included-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 0.5rem;
          text-align: left;
        }
        .v1-included-item {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .v1-included-item span {
          color: var(--elikar-gold-400);
          font-weight: 800;
        }

        .v1-monogram-tag {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFF;
          padding: 0.35rem 0.8rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(212, 160, 23, 0.4);
          display: inline-block;
          margin-top: 0.75rem;
        }

        .v1-preview-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--elikar-gold-400);
          margin: 0.5rem 0 1rem;
        }
        .v1-cta-btn {
          width: 100%;
          padding: 0.9rem;
          background: var(--elikar-gold-500);
          color: var(--elikar-navy-900);
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 16px rgba(184, 134, 11, 0.35);
        }
        .v1-cta-btn:hover {
          background: var(--elikar-gold-400);
        }

        /* Catalog Section Below */
        .v1-catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .v1-product-card {
          background: var(--elikar-white);
          border: 1px solid var(--elikar-border);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
        }
        .v1-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .v1-card-img {
          width: 100%;
          height: 180px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 1rem;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v1-header">
        <div class="v1-brand" onclick="window.smoothScrollTo('v1-hero')">
          ELIKAR <span>CAMPUS</span>
        </div>
        <div class="v1-nav-pills">
          <button class="v1-nav-btn primary" onclick="window.smoothScrollTo('studio-builder')">Bespoke Studio</button>
          <button class="v1-nav-btn" onclick="window.smoothScrollTo('catalog-section')">Campus Essentials</button>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="v1-hero" id="v1-hero">
        <span class="v1-badge">🎓 Back to Campus 2026 Pre-Order Studio</span>
        <h1>Curated Campus Jewelry Boxes &amp; Study Room Suites</h1>
        <p>Pre-order your semester essentials: luxury velvet jewelry boxes, natural display calculators, rechargeable reading lamps, and folding dorm reading tables delivered to your hostel.</p>
      </section>

      <!-- 3-STEP PINNED STUDIO BUILDER -->
      <main class="v1-studio-container">
        <section id="studio-builder" class="v1-studio-card">
          <div class="v1-builder-grid">
            <!-- Left Form Controls -->
            <div>
              <!-- Step 1: Collection Selection -->
              <div style="margin-bottom: 1.75rem;">
                <span class="v1-step-badge">Step 1</span>
                <h3 class="v1-step-title">Select Campus Collection</h3>
                <div class="v1-collection-switch">
                  <button class="v1-coll-btn ${window.v1State.collection === 'jewelry' ? 'selected' : ''}" onclick="window.v1SetCollection('jewelry', this)">
                    💎 Jewelry Box Suites
                  </button>
                  <button class="v1-coll-btn ${window.v1State.collection === 'study' ? 'selected' : ''}" onclick="window.v1SetCollection('study', this)">
                    📚 Study &amp; Desk Suites
                  </button>
                </div>
              </div>

              <!-- Step 2: Choose Tier -->
              <div style="margin-bottom: 1.75rem;">
                <span class="v1-step-badge">Step 2</span>
                <h3 class="v1-step-title">Select Your Package Tier</h3>
                <div class="v1-tier-grid" id="v1TierContainer">
                  ${currentTiers.map((tier, idx) => `
                    <div class="v1-tier-card ${idx === window.v1State.tierIndex ? 'selected' : ''}" onclick="window.v1SelectTierIndex(${idx}, this)">
                      <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="v1-tier-name">${tier.name}</span>
                          <span style="font-size: 0.68rem; font-weight: 800; background: var(--elikar-navy-100); color: var(--elikar-navy-900); padding: 2px 6px; border-radius: 4px;">${tier.badge}</span>
                        </div>
                        <div class="v1-tier-items-summary">${tier.items.slice(0, 3).join(', ')}...</div>
                      </div>
                      <div class="v1-tier-price">${tier.priceFormatted}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Step 3: Student Details & Hostel Move-In -->
              <div>
                <span class="v1-step-badge">Step 3</span>
                <h3 class="v1-step-title">Student &amp; Hostel Delivery Details</h3>
                <div class="v1-input-row">
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--elikar-slate); display: block; margin-bottom: 4px;">Student Full Name</label>
                    <input type="text" class="v1-input" id="v1StudentInput" value="${window.v1State.studentName}" maxlength="35" oninput="window.v1UpdateStudentName(this.value)" placeholder="e.g. Tolani Balogun">
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--elikar-slate); display: block; margin-bottom: 4px;">University &amp; Hall of Residence (Hostel / Room)</label>
                    <input type="text" class="v1-input" id="v1HallInput" value="${window.v1State.hall}" maxlength="60" oninput="window.v1UpdateHall(this.value)" placeholder="e.g. Moremi Hall, Unilag">
                  </div>
                </div>
                <span style="font-size: 0.75rem; color: var(--elikar-slate); display: block; margin-top: 4px;">
                  Orders are dispatched with student verification tag directly to campus hostels during move-in week.
                </span>
              </div>
            </div>

            <!-- Right: Live Visualizer Plate -->
            <div class="v1-preview-box">
              <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: var(--elikar-gold-400); display: block; margin-bottom: 0.85rem;">Live Package Breakdown</span>
              
              <div class="v1-plate-visual" id="v1VisualPlate">
                <div class="v1-plate-badge-row">
                  <span style="font-size: 1.1rem; font-weight: 800;" id="v1LiveTierTitle">${currentTier.name}</span>
                  <span style="font-size: 0.72rem; font-weight: 800; background: var(--elikar-gold-500); color: var(--elikar-navy-900); padding: 2px 8px; border-radius: 999px;" id="v1LiveBadge">${currentTier.badge}</span>
                </div>
                
                <p style="font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-bottom: 0.5rem;" id="v1LiveDesc">${currentTier.description}</p>
                
                <ul class="v1-included-list" id="v1LiveList">
                  ${currentTier.items.map(item => `
                    <li class="v1-included-item"><span>✓</span> ${item}</li>
                  `).join('')}
                </ul>

                <div class="v1-monogram-tag" id="v1LiveStudentTag">
                  🎓 Recipient: ${window.v1State.studentName || 'Student'} • ${window.v1State.hall || 'Campus Move-In'}
                </div>
              </div>

              <div class="v1-preview-price" id="v1PreviewPrice">${currentTier.priceFormatted}</div>
              
              <button class="v1-cta-btn" onclick="window.v1CheckoutWhatsApp()">
                <span>📲 Pre-Order Package on WhatsApp</span>
              </button>
              
              <div style="font-size: 0.72rem; color: #34D399; font-weight: 700; margin-top: 0.85rem; text-align: center;">
                ✓ Move-In Week Delivery Guarantee • Student Photo Verification
              </div>
            </div>
          </div>
        </section>

        <!-- Individual Campus Essentials Below -->
        <section id="catalog-section" style="margin-top: 5rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="v1-badge">Individual Study &amp; Dorm Gear</span>
              <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--elikar-navy-900);">A la Carte Campus Gear</h2>
            </div>
            <p style="font-size: 0.85rem; color: var(--elikar-slate); max-width: 420px;">Pair extra reading lamps, calculators, or notebooks with your tier package.</p>
          </div>

          <div class="v1-catalog-grid">
            ${CAMPUS_INDIVIDUAL_PRODUCTS.map(prod => `
              <div class="v1-product-card">
                <div>
                  <img src="${prod.image}" alt="${prod.name}" class="v1-card-img img-skeleton" onload="this.classList.remove('img-skeleton')">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <span style="font-size: 0.72rem; font-weight: 800; color: var(--elikar-gold-600); text-transform: uppercase;">${prod.category}</span>
                    <span style="font-size: 0.72rem; font-weight: 700; background: var(--elikar-navy-50); color: var(--elikar-navy-900); padding: 2px 8px; border-radius: 999px;">${prod.badge}</span>
                  </div>
                  <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--elikar-navy-900); margin-bottom: 0.35rem;">${prod.name}</h4>
                  <p style="font-size: 0.82rem; color: var(--elikar-slate); line-height: 1.45; margin-bottom: 0.6rem;">${prod.description}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--elikar-border); padding-top: 0.75rem; margin-top: 0.5rem;">
                  <span style="font-weight: 800; font-size: 1.15rem; color: var(--elikar-navy-900);">${prod.priceFormatted}</span>
                  <button class="v1-nav-btn primary" onclick="window.v1QuickAdd('${prod.name}', '${prod.priceFormatted}')">Add to Order</button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </main>
    </div>
  `;
}

// Global Event Handlers for Variant 1
window.v1SetCollection = function(colName, el) {
  window.v1State.collection = colName;
  window.v1State.tierIndex = 0; // Reset to tier 1 of that collection

  // Re-render stage smoothly
  if (typeof mountCurrent === 'function') {
    mountCurrent();
  } else {
    const stage = document.getElementById('stage');
    if (stage) stage.innerHTML = variantBespokeStudio();
  }

  window.showToast(`Switched to ${colName === 'jewelry' ? 'Jewelry Box Suites' : 'Study & Desk Suites'}`);
};

window.v1SelectTierIndex = function(idx, el) {
  window.v1State.tierIndex = idx;
  const currentTiers = window.v1State.collection === 'jewelry' ? JEWELRY_TIERS : STUDY_TIERS;
  const tier = currentTiers[idx] || currentTiers[0];

  // Update UI selection
  document.querySelectorAll('.v1-tier-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');

  // Update Preview visualizer
  const title = document.getElementById('v1LiveTierTitle');
  const badge = document.getElementById('v1LiveBadge');
  const desc = document.getElementById('v1LiveDesc');
  const list = document.getElementById('v1LiveList');
  const price = document.getElementById('v1PreviewPrice');

  if (title) title.innerText = tier.name;
  if (badge) badge.innerText = tier.badge;
  if (desc) desc.innerText = tier.description;
  if (price) price.innerText = tier.priceFormatted;

  if (list) {
    list.innerHTML = tier.items.map(item => `<li class="v1-included-item"><span>✓</span> ${item}</li>`).join('');
  }

  window.showToast(`Selected: ${tier.name} (${tier.priceFormatted})`);
};

window.v1UpdateStudentName = function(val) {
  window.v1State.studentName = val;
  const tag = document.getElementById('v1LiveStudentTag');
  if (tag) {
    tag.innerText = `🎓 Recipient: ${val.trim() || 'Student'} • ${window.v1State.hall || 'Campus Move-In'}`;
  }
};

window.v1UpdateHall = function(val) {
  window.v1State.hall = val;
  const tag = document.getElementById('v1LiveStudentTag');
  if (tag) {
    tag.innerText = `🎓 Recipient: ${window.v1State.studentName || 'Student'} • ${val.trim() || 'Campus Move-In'}`;
  }
};

window.v1QuickAdd = function(name, price) {
  window.showToast(`Added ${name} (${price}) to campus order!`);
};

window.v1CheckoutWhatsApp = function() {
  const s = window.v1State;
  const currentTiers = s.collection === 'jewelry' ? JEWELRY_TIERS : STUDY_TIERS;
  const tier = currentTiers[s.tierIndex] || currentTiers[0];

  const itemsList = tier.items.map(i => `  • ${i}`).join('%0A');

  const msg = `Hello Elikar Campus!%0A%0AI would like to pre-order for Semester Resumption:%0A%0A📦 *Package:* ${encodeURIComponent(tier.name)} (${tier.priceFormatted})%0A${itemsList}%0A%0A🎓 *Student Name:* ${encodeURIComponent(s.studentName || 'Not specified')}%0A🏢 *University / Hostel:* ${encodeURIComponent(s.hall || 'Not specified')}%0A%0APlease confirm my pre-order slot and bank details for move-in week delivery.`;

  window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
};

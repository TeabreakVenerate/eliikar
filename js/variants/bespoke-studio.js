/* ==========================================================================
   VARIANT 1: BESPOKE STUDIO
   Realistic 3-step builder for Jewelry Boxes and Study Kits.
   ========================================================================== */

function variantBespokeStudio() {
  if (!window.v1State) {
    window.v1State = {
      collection: 'jewelry',
      tierIndex: 0,
      studentName: "Tolani",
      hall: "Moremi Hall"
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
          font-size: 1.3rem;
          letter-spacing: 0.05em;
          color: var(--elikar-navy-900);
          cursor: pointer;
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
          max-width: 780px;
          margin: 0 auto;
        }
        .v1-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #EBF1FA;
          color: var(--elikar-navy-900);
          border: 1px solid #CBD5E1;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
        }
        .v1-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--elikar-navy-900);
        }
        .v1-hero p {
          font-size: 1rem;
          color: var(--elikar-slate);
          margin-top: 0.65rem;
          line-height: 1.5;
        }

        /* Configurator Card */
        .v1-studio-container {
          max-width: 1020px;
          margin: 0 auto;
          padding: 0 1.5rem 4rem;
        }
        .v1-studio-card {
          background: var(--elikar-white);
          border: 1px solid var(--elikar-border);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          padding: 2rem;
        }
        .v1-builder-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.25rem;
          align-items: start;
        }
        @media (max-width: 880px) {
          .v1-builder-grid { grid-template-columns: 1fr; }
        }

        .v1-step-badge {
          display: inline-flex;
          align-items: center;
          background: var(--elikar-navy-900);
          color: var(--elikar-white);
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .v1-step-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          margin-bottom: 0.65rem;
        }

        /* Collection Buttons */
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
          cursor: pointer;
          transition: all 150ms ease-out;
          text-align: center;
        }
        .v1-coll-btn.selected {
          border-color: var(--elikar-navy-900);
          background: var(--elikar-navy-900);
          color: white;
        }

        /* Tier Cards */
        .v1-tier-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        .v1-tier-card {
          border: 2px solid var(--elikar-border);
          background: var(--elikar-white);
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          cursor: pointer;
          transition: border-color 150ms ease-out, background-color 150ms ease-out;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .v1-tier-card:hover {
          border-color: #94A3B8;
        }
        .v1-tier-card.selected {
          border-color: var(--elikar-navy-900);
          background: #F8FAFC;
        }
        .v1-tier-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
        }
        .v1-tier-items-summary {
          font-size: 0.78rem;
          color: var(--elikar-slate);
          margin-top: 3px;
          line-height: 1.4;
        }
        .v1-tier-price {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          white-space: nowrap;
        }

        .v1-input-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .v1-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--elikar-border);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          background: #FAFAFA;
        }
        .v1-input:focus {
          background: #FFF;
          border-color: var(--elikar-navy-900);
        }

        /* Live Preview */
        .v1-preview-box {
          background: #111827;
          border-radius: 16px;
          padding: 1.75rem;
          color: var(--elikar-white);
          position: sticky;
          top: 90px;
        }
        .v1-plate-visual {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
        }
        .v1-plate-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .v1-included-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 0.5rem;
          text-align: left;
        }
        .v1-included-item {
          font-size: 0.8rem;
          color: #E2E8F0;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .v1-included-item span {
          color: #38BDF8;
          font-weight: 700;
        }

        .v1-monogram-tag {
          font-size: 0.82rem;
          color: #94A3B8;
          margin-top: 0.75rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .v1-preview-price {
          font-size: 1.8rem;
          font-weight: 800;
          color: #F8FAFC;
          margin: 0.5rem 0 1rem;
        }
        .v1-cta-btn {
          width: 100%;
          padding: 0.85rem;
          background: #24A1DE;
          color: #FFFFFF;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 14px rgba(36, 161, 222, 0.3);
          transition: background-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
        }
        .v1-cta-btn:hover {
          background: #1F90C7;
        }

        /* Catalog Grid */
        .v1-catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .v1-product-card {
          background: var(--elikar-white);
          border: 1px solid var(--elikar-border);
          border-radius: 14px;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .v1-card-img {
          width: 100%;
          height: 170px;
          border-radius: 8px;
          object-fit: cover;
          margin-bottom: 0.85rem;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v1-header">
        <div class="v1-brand" onclick="window.smoothScrollTo('v1-hero')">
          Elikar
        </div>
        <div class="v1-nav-pills">
          <button class="v1-nav-btn primary" onclick="window.smoothScrollTo('studio-builder')">Order Packages</button>
          <button class="v1-nav-btn" onclick="window.smoothScrollTo('catalog-section')">Single Items</button>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="v1-hero" id="v1-hero">
        <span class="v1-badge">Back to School Pre-Orders</span>
        <h1>Pre-order your campus packages</h1>
        <p>Pick a jewelry box or a study kit for campus resumption. We deliver before classes start.</p>
      </section>

      <!-- 3-STEP STUDIO BUILDER -->
      <main class="v1-studio-container">
        <section id="studio-builder" class="v1-studio-card">
          <div class="v1-builder-grid">
            <!-- Left Controls -->
            <div>
              <!-- Step 1: Collection -->
              <div style="margin-bottom: 1.5rem;">
                <span class="v1-step-badge">Step 1</span>
                <h3 class="v1-step-title">Choose what you want to order</h3>
                <div class="v1-collection-switch">
                  <button class="v1-coll-btn ${window.v1State.collection === 'jewelry' ? 'selected' : ''}" onclick="window.v1SetCollection('jewelry', this)">
                    Stacked
                  </button>
                  <button class="v1-coll-btn ${window.v1State.collection === 'study' ? 'selected' : ''}" onclick="window.v1SetCollection('study', this)">
                    Academia
                  </button>
                </div>
              </div>

              <!-- Step 2: Tier -->
              <div style="margin-bottom: 1.5rem;">
                <span class="v1-step-badge">Step 2</span>
                <h3 class="v1-step-title">Select a tier</h3>
                <div class="v1-tier-grid" id="v1TierContainer">
                  ${currentTiers.map((tier, idx) => `
                    <div class="v1-tier-card ${idx === window.v1State.tierIndex ? 'selected' : ''}" onclick="window.v1SelectTierIndex(${idx}, this)">
                      <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="v1-tier-name">${tier.name}</span>
                          <span style="font-size: 0.7rem; font-weight: 700; background: #F1F5F9; color: #334155; padding: 2px 6px; border-radius: 4px;">${tier.badge}</span>
                        </div>
                        <div class="v1-tier-items-summary">${tier.items.join(' • ')}</div>
                      </div>
                      <div class="v1-tier-price">${tier.priceFormatted}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Step 3: Delivery Info -->
              <div>
                <span class="v1-step-badge">Step 3</span>
                <h3 class="v1-step-title">Your name and campus location</h3>
                <div class="v1-input-row">
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: var(--elikar-slate); display: block; margin-bottom: 4px;">Name</label>
                    <input type="text" class="v1-input" id="v1StudentInput" value="${window.v1State.studentName}" maxlength="35" oninput="window.v1UpdateStudentName(this.value)" placeholder="e.g. Tolani">
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 600; color: var(--elikar-slate); display: block; margin-bottom: 4px;">School / Hostel / Hall</label>
                    <input type="text" class="v1-input" id="v1HallInput" value="${window.v1State.hall}" maxlength="60" oninput="window.v1UpdateHall(this.value)" placeholder="e.g. Moremi Hall, Unilag">
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Preview -->
            <div class="v1-preview-box">
              <span style="font-size: 0.75rem; font-weight: 700; color: #94A3B8; display: block; margin-bottom: 0.75rem;">Order Preview</span>
              
              <div class="v1-plate-visual" id="v1VisualPlate">
                <div class="v1-plate-badge-row">
                  <span style="font-size: 1.05rem; font-weight: 800;" id="v1LiveTierTitle">${currentTier.name}</span>
                  <span style="font-size: 0.72rem; font-weight: 700; background: rgba(255,255,255,0.15); color: #FFF; padding: 2px 8px; border-radius: 999px;" id="v1LiveBadge">${currentTier.badge}</span>
                </div>
                
                <p style="font-size: 0.8rem; color: #94A3B8; margin-bottom: 0.5rem;" id="v1LiveDesc">${currentTier.description}</p>
                
                <ul class="v1-included-list" id="v1LiveList">
                  ${currentTier.items.map(item => `
                    <li class="v1-included-item"><span>•</span> ${item}</li>
                  `).join('')}
                </ul>

                <div class="v1-monogram-tag" id="v1LiveStudentTag">
                  Delivery to: ${window.v1State.studentName || 'Student'} (${window.v1State.hall || 'Campus'})
                </div>
              </div>

              <div class="v1-preview-price" id="v1PreviewPrice">${currentTier.priceFormatted}</div>
              
              <button class="v1-cta-btn" onclick="window.v1CheckoutTelegram()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span>Order via Telegram</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Single Items Section -->
        <section id="catalog-section" style="margin-top: 4rem;">
          <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--elikar-navy-900);">Single Items</h2>
            <p style="font-size: 0.88rem; color: var(--elikar-slate);">Order individual study supplies or reading tables.</p>
          </div>

          <div class="v1-catalog-grid">
            ${CAMPUS_INDIVIDUAL_PRODUCTS.map(prod => `
              <div class="v1-product-card">
                <div>
                  <img src="${prod.image}" alt="${prod.name}" class="v1-card-img img-skeleton" onload="this.classList.remove('img-skeleton')">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                    <span style="font-size: 0.72rem; font-weight: 700; color: var(--elikar-slate);">${prod.category}</span>
                    <span style="font-size: 0.72rem; font-weight: 600; background: #F1F5F9; color: #334155; padding: 2px 8px; border-radius: 999px;">${prod.badge}</span>
                  </div>
                  <h4 style="font-size: 1rem; font-weight: 800; color: var(--elikar-navy-900); margin-bottom: 0.35rem;">${prod.name}</h4>
                  <p style="font-size: 0.82rem; color: var(--elikar-slate); line-height: 1.4; margin-bottom: 0.6rem;">${prod.description}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--elikar-border); padding-top: 0.75rem; margin-top: 0.5rem;">
                  <span style="font-weight: 800; font-size: 1.1rem; color: var(--elikar-navy-900);">${prod.priceFormatted}</span>
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

// Event Handlers
window.v1SetCollection = function(colName, el) {
  window.v1State.collection = colName;
  window.v1State.tierIndex = 0;

  const stage = document.getElementById('stage');
  if (stage) stage.innerHTML = variantBespokeStudio();

  window.showToast(`Switched to ${colName === 'jewelry' ? 'Stacked' : 'Academia'}`);
};

window.v1SelectTierIndex = function(idx, el) {
  window.v1State.tierIndex = idx;
  const currentTiers = window.v1State.collection === 'jewelry' ? JEWELRY_TIERS : STUDY_TIERS;
  const tier = currentTiers[idx] || currentTiers[0];

  document.querySelectorAll('.v1-tier-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');

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
    list.innerHTML = tier.items.map(item => `<li class="v1-included-item"><span>•</span> ${item}</li>`).join('');
  }

  window.showToast(`Selected: ${tier.name}`);
};

window.v1UpdateStudentName = function(val) {
  window.v1State.studentName = val;
  const tag = document.getElementById('v1LiveStudentTag');
  if (tag) {
    tag.innerText = `Delivery to: ${val.trim() || 'Student'} (${window.v1State.hall || 'Campus'})`;
  }
};

window.v1UpdateHall = function(val) {
  window.v1State.hall = val;
  const tag = document.getElementById('v1LiveStudentTag');
  if (tag) {
    tag.innerText = `Delivery to: ${window.v1State.studentName || 'Student'} (${val.trim() || 'Campus'})`;
  }
};

window.v1QuickAdd = function(name, price) {
  window.showToast(`Added ${name} (${price})`);
};

window.v1CheckoutTelegram = function() {
  const s = window.v1State;
  const currentTiers = s.collection === 'jewelry' ? JEWELRY_TIERS : STUDY_TIERS;
  const tier = currentTiers[s.tierIndex] || currentTiers[0];
  const collectionLabel = s.collection === 'jewelry' ? 'Stacked' : 'Academia';

  const itemsList = tier.items.map(i => `  - ${i}`).join('\n');

  const orderSummary = `Hello Elikar!\n\nI would like to order from *${collectionLabel}*:\n\n*${tier.name}* — ${tier.priceFormatted}\n${itemsList}\n\nName: ${s.studentName || 'Not stated'}\nLocation: ${s.hall || 'Not stated'}\n\nPlease let me know how to make payment.`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(orderSummary).catch(() => {});
  }

  window.showToast("Order copied to clipboard! Opening Telegram...");

  setTimeout(() => {
    window.open('https://t.me/ElisabethAwadje', '_blank');
  }, 350);
};

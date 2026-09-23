/* ==========================================================================
   VARIANT 1: BESPOKE STUDIO (CONFIGURATOR-FIRST)
   Inspired by Cakes by Nessa Bespoke Studio with dynamic live visualizer.
   ========================================================================== */

function variantBespokeStudio() {
  // Initial default state
  if (!window.v1State) {
    window.v1State = {
      palette: SCHOOL_PALETTES[0],
      tier: BUNDLE_TIERS[1], // Deluxe by default
      studentName: "Adaeze Okonkwo",
      grade: "Primary 4"
    };
  }

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
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          max-width: 820px;
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

        /* Palette Swatches */
        .v1-palette-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }
        .v1-palette-chip {
          border: 2px solid var(--elikar-border);
          background: var(--elikar-cream);
          border-radius: 12px;
          padding: 0.7rem 0.6rem;
          cursor: pointer;
          text-align: left;
          transition: transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out);
        }
        .v1-palette-chip:hover {
          border-color: var(--elikar-gold-400);
        }
        .v1-palette-chip.selected {
          border-color: var(--elikar-navy-900);
          background: var(--elikar-gold-50);
          box-shadow: 0 0 0 2px var(--elikar-gold-400);
        }
        .v1-color-dots {
          display: flex;
          gap: 4px;
          margin-bottom: 0.4rem;
        }
        .v1-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .v1-palette-name {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          line-height: 1.2;
        }
        .v1-palette-sub {
          font-size: 0.68rem;
          color: var(--elikar-slate);
          margin-top: 2px;
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
          padding: 0.9rem 1.1rem;
          cursor: pointer;
          transition: border-color var(--duration-fast) var(--ease-out);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .v1-tier-card:hover {
          border-color: var(--elikar-navy-700);
        }
        .v1-tier-card.selected {
          border-color: var(--elikar-gold-500);
          background: var(--elikar-gold-50);
        }
        .v1-tier-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
        }
        .v1-tier-meta {
          font-size: 0.75rem;
          color: var(--elikar-slate);
          margin-top: 2px;
        }
        .v1-tier-price {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
          text-align: right;
        }

        /* Inputs */
        .v1-input-row {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        @media (max-width: 600px) {
          .v1-input-row { grid-template-columns: 1fr; }
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
          text-align: center;
          position: sticky;
          top: 90px;
          box-shadow: 0 16px 40px rgba(11, 21, 40, 0.25);
        }
        .v1-plate-visual {
          width: 100%;
          height: 200px;
          background: rgba(255,255,255,0.04);
          border: 1px dashed rgba(255,255,255,0.2);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 1.25rem;
          padding: 1rem;
          overflow: hidden;
        }
        .v1-plate-bow-badge {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
          transition: background-color 200ms ease;
        }
        .v1-monogram-tag {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #FFF;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(212, 160, 23, 0.4);
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .v1-grade-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--elikar-gold-400);
          margin-top: 0.35rem;
          letter-spacing: 0.05em;
        }
        .v1-preview-price {
          font-size: 1.8rem;
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
          ELIKAR <span>ACADEMY</span>
        </div>
        <div class="v1-nav-pills">
          <button class="v1-nav-btn primary" onclick="window.smoothScrollTo('studio-builder')">Bespoke Studio</button>
          <button class="v1-nav-btn" onclick="window.smoothScrollTo('catalog-section')">Essentials Menu</button>
        </div>
      </header>

      <!-- Hero Briefing -->
      <section class="v1-hero" id="v1-hero">
        <span class="v1-badge">✨ Back to School 2026 Bespoke Pre-Order</span>
        <h1>Handcrafted Uniform Bows &amp; Personalized Scholar Kits</h1>
        <p>Color-matched to your child's exact school uniform with anti-fray hand-sealed ribbons, high-tension snag-free scrunchies, and custom embroidered name tags.</p>
      </section>

      <!-- 3-STEP PINNED STUDIO BUILDER -->
      <main class="v1-studio-container">
        <section id="studio-builder" class="v1-studio-card">
          <div class="v1-builder-grid">
            <!-- Left Configurator Form -->
            <div>
              <!-- Step 1: Uniform Color Theme -->
              <div style="margin-bottom: 2rem;">
                <span class="v1-step-badge">Step 1</span>
                <h3 class="v1-step-title">Select Uniform Color Palette</h3>
                <p style="font-size: 0.8rem; color: var(--elikar-slate); margin-bottom: 0.75rem;">Ribbons and scrunchies will be hand-dyed and matched to these uniform shades.</p>
                
                <div class="v1-palette-grid">
                  ${SCHOOL_PALETTES.map((pal, idx) => `
                    <div class="v1-palette-chip ${pal.id === window.v1State.palette.id ? 'selected' : ''}" onclick="window.v1SelectPalette('${pal.id}', this)">
                      <div class="v1-color-dots">
                        <span class="v1-dot" style="background-color: ${pal.primary}"></span>
                        <span class="v1-dot" style="background-color: ${pal.secondary}"></span>
                      </div>
                      <div class="v1-palette-name">${pal.label}</div>
                      <div class="v1-palette-sub">${pal.name}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Step 2: Bundle Tier Selection -->
              <div style="margin-bottom: 2rem;">
                <span class="v1-step-badge">Step 2</span>
                <h3 class="v1-step-title">Choose Term Preparation Pack</h3>
                
                <div class="v1-tier-grid">
                  ${BUNDLE_TIERS.map(tier => `
                    <div class="v1-tier-card ${tier.id === window.v1State.tier.id ? 'selected' : ''}" onclick="window.v1SelectTier('${tier.id}', this)">
                      <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                          <span class="v1-tier-name">${tier.name}</span>
                          <span style="font-size: 0.68rem; font-weight: 800; background: var(--elikar-navy-100); color: var(--elikar-navy-900); padding: 2px 6px; border-radius: 4px;">${tier.badge}</span>
                        </div>
                        <div class="v1-tier-meta">${tier.serves}</div>
                      </div>
                      <div class="v1-tier-price">${tier.priceFormatted}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Step 3: Student Personalization -->
              <div>
                <span class="v1-step-badge">Step 3</span>
                <h3 class="v1-step-title">Custom Embroidery &amp; Bag Tag</h3>
                <div class="v1-input-row">
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--elikar-slate); display: block; margin-bottom: 4px;">Student Full Name</label>
                    <input type="text" class="v1-input" id="v1StudentInput" value="${window.v1State.studentName}" maxlength="30" oninput="window.v1UpdateStudentName(this.value)" placeholder="e.g. Kamsi Okafor">
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--elikar-slate); display: block; margin-bottom: 4px;">Grade / Class</label>
                    <input type="text" class="v1-input" id="v1GradeInput" value="${window.v1State.grade}" maxlength="20" oninput="window.v1UpdateGrade(this.value)" placeholder="e.g. Grade 4">
                  </div>
                </div>
                <span style="font-size: 0.75rem; color: var(--elikar-slate); display: block; margin-top: 4px;">Letters are stitched in heavy gold metallic thread onto the waterproof tag.</span>
              </div>
            </div>

            <!-- Right: Live Visualizer Plate -->
            <div class="v1-preview-box">
              <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: var(--elikar-gold-400); display: block; margin-bottom: 0.85rem;">Live Bespoke Visualizer</span>
              
              <div class="v1-plate-visual" id="v1VisualPlate" style="border-color: ${window.v1State.palette.secondary};">
                <div class="v1-plate-bow-badge" id="v1BowBadge" style="background-color: ${window.v1State.palette.primary};">
                  🎀
                </div>
                <div class="v1-monogram-tag" id="v1LiveTag">
                  ${window.v1State.studentName || 'STUDENT NAME'}
                </div>
                <div class="v1-grade-tag" id="v1LiveGrade">
                  ${window.v1State.grade ? '• ' + window.v1State.grade + ' •' : '• ACADEMY EDITION •'}
                </div>
                <div style="font-size: 0.68rem; color: rgba(255,255,255,0.7); margin-top: 8px;" id="v1LiveColorText">
                  Palette: ${window.v1State.palette.label}
                </div>
              </div>

              <div style="font-size: 1rem; font-weight: 800;" id="v1PreviewTierTitle">${window.v1State.tier.name}</div>
              <div class="v1-preview-price" id="v1PreviewPrice">${window.v1State.tier.priceFormatted}</div>
              
              <button class="v1-cta-btn" onclick="window.v1CheckoutWhatsApp()">
                <span>📲 Pre-Order Bundle on WhatsApp</span>
              </button>
              
              <div style="font-size: 0.72rem; color: #34D399; font-weight: 700; margin-top: 0.85rem;">
                ✓ Photo proof sent before dispatch • 3-Year Durability Guarantee
              </div>
            </div>
          </div>
        </section>

        <!-- Compact Uniform Essentials Catalog Below -->
        <section id="catalog-section" style="margin-top: 5rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="v1-badge">Individual School Essentials</span>
              <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--elikar-navy-900);">A la Carte School Accessories</h2>
            </div>
            <p style="font-size: 0.85rem; color: var(--elikar-slate); max-width: 420px;">Pair extra items with your bespoke scholar kit for siblings and daily sports rotations.</p>
          </div>

          <div class="v1-catalog-grid">
            ${SCHOOL_PRODUCTS.map(prod => `
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
window.v1SelectPalette = function(paletteId, el) {
  const pal = SCHOOL_PALETTES.find(p => p.id === paletteId);
  if (!pal) return;
  window.v1State.palette = pal;

  // Update UI chips
  document.querySelectorAll('.v1-palette-chip').forEach(chip => chip.classList.remove('selected'));
  if (el) el.classList.add('selected');

  // Update live preview visualizer
  const visual = document.getElementById('v1VisualPlate');
  const badge = document.getElementById('v1BowBadge');
  const colorText = document.getElementById('v1LiveColorText');
  if (visual) visual.style.borderColor = pal.secondary;
  if (badge) badge.style.backgroundColor = pal.primary;
  if (colorText) colorText.innerText = `Palette: ${pal.label}`;

  window.showToast(`Selected uniform theme: ${pal.label}`);
};

window.v1SelectTier = function(tierId, el) {
  const tier = BUNDLE_TIERS.find(t => t.id === tierId);
  if (!tier) return;
  window.v1State.tier = tier;

  // Update tier cards
  document.querySelectorAll('.v1-tier-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');

  // Update preview
  const title = document.getElementById('v1PreviewTierTitle');
  const price = document.getElementById('v1PreviewPrice');
  if (title) title.innerText = tier.name;
  if (price) price.innerText = tier.priceFormatted;

  window.showToast(`Selected pack: ${tier.name}`);
};

window.v1UpdateStudentName = function(val) {
  window.v1State.studentName = val;
  const tag = document.getElementById('v1LiveTag');
  if (tag) tag.innerText = val.trim() || 'STUDENT NAME';
};

window.v1UpdateGrade = function(val) {
  window.v1State.grade = val;
  const tag = document.getElementById('v1LiveGrade');
  if (tag) tag.innerText = val.trim() ? `• ${val.trim()} •` : '• ACADEMY EDITION •';
};

window.v1QuickAdd = function(name, price) {
  window.showToast(`Added ${name} (${price}) to pre-order list!`);
};

window.v1CheckoutWhatsApp = function() {
  const s = window.v1State;
  const msg = `Hello Elikar Crafts!%0A%0AI would like to pre-order the Back-to-School Bespoke Scholar Kit:%0A%0A• Package: ${encodeURIComponent(s.tier.name)} (${s.tier.priceFormatted})%0A• School Colors: ${encodeURIComponent(s.palette.label)}%0A• Student Name: ${encodeURIComponent(s.studentName || 'Not specified')}%0A• Grade/Class: ${encodeURIComponent(s.grade || 'Not specified')}%0A%0APlease confirm my production slot for school resumption.`;
  window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
};

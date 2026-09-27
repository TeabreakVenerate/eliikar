/* ==========================================================================
   ELIKAR — BESPOKE STUDIO PACKAGE CONFIGURATOR
   Featuring real product photography, itemized breakdown, and cart integration.
   ========================================================================== */

function variantBespokeStudio() {
  if (!window.v1State) {
    window.v1State = {
      packageIndex: 0,
      activeImageIndex: 0
    };
  }

  const packages = CAMPUS_PACKAGES;
  const currentPkg = packages[window.v1State.packageIndex] || packages[0];
  const activeImage = currentPkg.images[window.v1State.activeImageIndex] || currentPkg.images[0];

  return `
    <div class="v1-wrapper" style="min-height: 100vh; background-color: var(--elikar-cream); color: var(--elikar-charcoal);">
      <style>
        .v1-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(250, 248, 245, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--elikar-border);
          padding: 0.9rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .v1-brand {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: 0.04em;
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
          cursor: pointer;
          transition: all 150ms ease-out;
        }
        .v1-nav-btn:hover {
          border-color: var(--elikar-navy-900);
        }
        .v1-nav-btn.primary {
          background: var(--elikar-navy-900);
          color: var(--elikar-white);
          border-color: var(--elikar-navy-900);
        }
        .v1-nav-cart-btn {
          background: var(--elikar-gold-100);
          border: 1px solid var(--elikar-gold-500);
          color: var(--elikar-navy-900);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 800;
        }

        .v1-hero {
          text-align: center;
          padding: 3.5rem 1.5rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .v1-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #EBF1FA;
          color: var(--elikar-navy-900);
          border: 1px solid #CBD5E1;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          margin-bottom: 0.9rem;
        }
        .v1-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 2.9rem);
          font-weight: 700;
          line-height: 1.18;
          color: var(--elikar-navy-900);
        }
        .v1-hero p {
          font-size: 1.05rem;
          color: var(--elikar-slate);
          margin-top: 0.75rem;
          line-height: 1.55;
        }

        /* Configurator Card */
        .v1-studio-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 1.5rem 4rem;
        }
        .v1-studio-card {
          background: var(--elikar-white);
          border: 1px solid var(--elikar-border);
          border-radius: 20px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
          padding: 2.25rem;
        }
        .v1-builder-grid {
          display: grid;
          grid-template-columns: 1.15fr 1.05fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .v1-builder-grid { grid-template-columns: 1fr; }
        }

        /* Package Switcher Tabs */
        .v1-package-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .v1-pkg-tab {
          padding: 0.95rem 1rem;
          border-radius: 12px;
          border: 2px solid var(--elikar-border);
          background: var(--elikar-cream);
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--elikar-charcoal);
          cursor: pointer;
          transition: all 150ms ease-out;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .v1-pkg-tab.selected {
          border-color: var(--elikar-navy-900);
          background: var(--elikar-navy-900);
          color: #FFF;
        }
        .v1-pkg-tab-sub {
          font-size: 0.75rem;
          opacity: 0.8;
          font-weight: 500;
        }

        /* Gallery Viewer */
        .v1-gallery {
          margin-bottom: 1.5rem;
        }
        .v1-main-img-box {
          width: 100%;
          height: 380px;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          position: relative;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .v1-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 250ms ease-out;
        }
        .v1-thumbs-row {
          display: flex;
          gap: 0.65rem;
          margin-top: 0.75rem;
        }
        .v1-thumb-btn {
          width: 72px;
          height: 72px;
          border-radius: 8px;
          border: 2px solid var(--elikar-border);
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          background: var(--elikar-parchment);
          transition: border-color 150ms ease;
        }
        .v1-thumb-btn.active {
          border-color: var(--elikar-navy-900);
          box-shadow: 0 0 0 2px var(--elikar-gold-500);
        }
        .v1-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Package Details Column */
        .v1-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .v1-pkg-badge-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .v1-pkg-badge {
          background: var(--elikar-gold-100);
          color: var(--elikar-gold-600);
          border: 1px solid var(--elikar-gold-500);
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .v1-pkg-title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
        }
        .v1-pkg-desc {
          font-size: 0.95rem;
          color: var(--elikar-slate);
          line-height: 1.5;
        }
        .v1-pkg-price-tag {
          font-size: 2.1rem;
          font-weight: 800;
          color: var(--elikar-navy-900);
        }

        /* Item Checklist Card */
        .v1-checklist-box {
          background: #F8FAFC;
          border: 1px solid var(--elikar-border);
          border-radius: 12px;
          padding: 1.25rem;
        }
        .v1-checklist-title {
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--elikar-navy-900);
          margin-bottom: 0.75rem;
        }
        .v1-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .v1-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #334155;
          font-weight: 600;
        }
        .v1-check-item svg {
          color: #10B981;
          flex-shrink: 0;
        }

        /* Package Action Buttons */
        .v1-actions-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .btn-add-package {
          width: 100%;
          padding: 0.95rem;
          background: var(--elikar-navy-900);
          color: #FFF;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(11, 21, 40, 0.2);
          cursor: pointer;
        }
        .btn-add-package:hover {
          background: var(--elikar-navy-800);
        }

        /* Catalog Grid */
        .v1-catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.35rem;
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
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .v1-product-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .v1-card-img {
          width: 100%;
          height: 180px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 0.85rem;
          background: var(--elikar-parchment);
        }

        /* Footer styling */
        .v1-footer {
          border-top: 1px solid var(--elikar-border);
          padding: 2.5rem 1.5rem;
          text-align: center;
          color: var(--elikar-slate);
          font-size: 0.85rem;
          background: var(--elikar-white);
          margin-top: 5rem;
        }
        .v1-footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .v1-footer-links a {
          color: var(--elikar-navy-900);
          font-weight: 700;
          text-decoration: none;
        }
      </style>

      <!-- Sticky Header -->
      <header class="v1-header">
        <div class="v1-brand" onclick="window.smoothScrollTo('v1-hero')">
          Elikar
        </div>
        <div class="v1-nav-pills">
          <button class="v1-nav-btn primary" onclick="window.smoothScrollTo('studio-builder')">Packages</button>
          <button class="v1-nav-btn" onclick="window.smoothScrollTo('catalog-section')">Single Items</button>
          <button class="v1-nav-btn v1-nav-cart-btn" onclick="window.openCart()">
            <span>🛒 Cart</span>
            <span class="cart-badge-count" style="display: none;">0</span>
          </button>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="v1-hero" id="v1-hero">
        <span class="v1-badge">Campus Resumption Essentials</span>
        <h1>Pre-order your dorm &amp; study setup</h1>
        <p>Curated packages and a la carte supplies for university living. Order online and receive delivery directly on campus.</p>
      </section>

      <!-- 2-PACKAGE STUDIO BUILDER -->
      <main class="v1-studio-container">
        <section id="studio-builder" class="v1-studio-card">
          <!-- Package Selector Tabs -->
          <div class="v1-package-tabs">
            ${packages.map((pkg, idx) => `
              <div class="v1-pkg-tab ${idx === window.v1State.packageIndex ? 'selected' : ''}" onclick="window.v1SelectPackage(${idx})">
                <span>${pkg.name}</span>
                <span class="v1-pkg-tab-sub">${pkg.priceFormatted} • ${pkg.badge}</span>
              </div>
            `).join('')}
          </div>

          <div class="v1-builder-grid">
            <!-- Left: Photo Gallery -->
            <div class="v1-gallery">
              <div class="v1-main-img-box">
                <img id="v1MainDisplayImg" src="${activeImage}" alt="${currentPkg.name}" class="v1-main-img img-skeleton" onload="this.classList.remove('img-skeleton')">
              </div>
              <div class="v1-thumbs-row">
                ${currentPkg.images.map((imgSrc, imgIdx) => `
                  <button type="button" class="v1-thumb-btn ${imgIdx === window.v1State.activeImageIndex ? 'active' : ''}" onclick="window.v1SelectImage(${imgIdx})">
                    <img src="${imgSrc}" alt="${currentPkg.name} angle ${imgIdx + 1}" class="v1-thumb-img">
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Right: Details, Pricing, Checklist & Action -->
            <div class="v1-details-col">
              <div class="v1-pkg-badge-row">
                <span class="v1-pkg-badge">${currentPkg.badge}</span>
                <span style="font-size: 0.8rem; color: #64748B; font-weight: 600;">Full Kit Pre-Order</span>
              </div>

              <div>
                <h2 class="v1-pkg-title">${currentPkg.name}</h2>
                <p class="v1-pkg-desc">${currentPkg.description}</p>
              </div>

              <div class="v1-pkg-price-tag">${currentPkg.priceFormatted}</div>

              <!-- Included Components Checklist -->
              <div class="v1-checklist-box">
                <div class="v1-checklist-title">Package Components Included:</div>
                <ul class="v1-checklist">
                  ${currentPkg.items.map(item => `
                    <li class="v1-check-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Add to Cart CTA -->
              <div class="v1-actions-wrap">
                <button type="button" class="btn-add-package" onclick="window.v1AddCurrentPackageToCart()">
                  <span>🛒 Add Package to Cart</span>
                  <span>(${currentPkg.priceFormatted})</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Single Items (A La Carte) Section -->
        <section id="catalog-section" style="margin-top: 4.5rem;">
          <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: gap;">
            <div>
              <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--elikar-navy-900);">Single Items (A La Carte)</h2>
              <p style="font-size: 0.9rem; color: var(--elikar-slate); margin-top: 4px;">Need just one or two items? Pick individual supplies and add them to your cart.</p>
            </div>
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
                  <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--elikar-navy-900); margin-bottom: 0.35rem;">${prod.name}</h4>
                  <p style="font-size: 0.82rem; color: var(--elikar-slate); line-height: 1.45; margin-bottom: 0.6rem;">${prod.description}</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--elikar-border); padding-top: 0.85rem; margin-top: 0.5rem;">
                  <span style="font-weight: 800; font-size: 1.15rem; color: var(--elikar-navy-900);">${prod.priceFormatted}</span>
                  <button type="button" class="v1-nav-btn primary" onclick="window.addToCart(${JSON.stringify(prod).replace(/"/g, '&quot;')})">Add to Cart</button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="v1-footer">
        <div class="v1-footer-links">
          <a href="#v1-hero">Top of Page</a>
          <a href="#studio-builder">Packages</a>
          <a href="#catalog-section">Single Items</a>
        </div>
        <p>&copy; ${new Date().getFullYear()} Elikar. Back to school dorm &amp; campus essentials.</p>
      </footer>
    </div>
  `;
}

// Controller Handlers
window.v1SelectPackage = function(index) {
  window.v1State.packageIndex = index;
  window.v1State.activeImageIndex = 0;

  const stage = document.getElementById('stage');
  if (stage) stage.innerHTML = variantBespokeStudio();
  window.renderCartUI();
};

window.v1SelectImage = function(imgIndex) {
  window.v1State.activeImageIndex = imgIndex;
  const currentPkg = CAMPUS_PACKAGES[window.v1State.packageIndex];
  const imgSrc = currentPkg.images[imgIndex];

  const mainImg = document.getElementById('v1MainDisplayImg');
  if (mainImg) {
    mainImg.src = imgSrc;
  }

  document.querySelectorAll('.v1-thumb-btn').forEach((btn, idx) => {
    if (idx === imgIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

window.v1AddCurrentPackageToCart = function() {
  const currentPkg = CAMPUS_PACKAGES[window.v1State.packageIndex];
  window.addToCart(currentPkg, true);
};

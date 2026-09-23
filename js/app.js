/* ==========================================================================
   ELIKAR CRAFTS — PROTOTYPE HARNESS CONTROLLER
   Implements exact specification from PICKER.MD & Emil Kowalski Principles
   ========================================================================== */

// 1. Register Variant Render Functions in Picker Order
const variants = [
  variantBespokeStudio,      // Variant 1: Bespoke Studio
  variantDualStream,         // Variant 2: Dual Stream
  variantEditorialHeritage   // Variant 3: Editorial Heritage
];

// 2. Global Utility Helpers
window.smoothScrollTo = function(id) {
  if (!id) return;
  const cleanId = (typeof id === 'string' && id.startsWith('#')) ? id.slice(1) : id;
  const el = document.getElementById(cleanId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.showToast = function(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'elikar-toast enter';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <span class="elikar-toast-icon">✨</span>
    <span>${msg}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation (Emil Kowalski sub-300ms transition)
  requestAnimationFrame(() => {
    toast.classList.remove('enter');
  });

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.add('enter');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3200);
};

// 3. Harness Initialization (Verbatim contract from PICKER.MD)
document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('stage');
  const picker = document.querySelector('.proto-picker');
  const highlight = picker.querySelector('.proto-picker-highlight');
  const items = [...picker.querySelectorAll('.proto-picker-item:not(.proto-picker-replay)')];
  const replay = picker.querySelector('.proto-picker-replay');
  let current = 0;

  function moveHighlight() {
    const el = items[current];
    if (!el || !highlight) return;
    highlight.style.width = el.offsetWidth + 'px';
    highlight.style.transform = `translateX(${el.offsetLeft}px)`;
  }

  function mount(i) {
    if (!stage || !variants[i]) return;
    stage.innerHTML = '';
    // Clear first, render next frame, so entrance animations re-run
    requestAnimationFrame(() => {
      stage.innerHTML = variants[i]();
      // Scroll to top on variant switch
      window.scrollTo(0, 0);
    });
  }

  function setActive(i) {
    if (i < 0 || i >= variants.length) return;
    current = i;
    items.forEach((el, j) => {
      el.toggleAttribute('data-active', j === i);
      if (j === i) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
    moveHighlight();
    const url = new URL(location);
    url.searchParams.set('v', i + 1);
    history.replaceState(null, '', url);
    mount(i);
  }

  items.forEach((el, i) => el.addEventListener('click', () => setActive(i)));
  replay?.addEventListener('click', () => mount(current));
  window.addEventListener('resize', moveHighlight);

  // Keyboard navigation contract
  document.addEventListener('keydown', (e) => {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const num = parseInt(e.key, 10);
    if (num >= 1 && num <= variants.length) {
      setActive(num - 1);
    } else if (e.key === 'ArrowRight') {
      setActive((current + 1) % variants.length);
    } else if (e.key === 'ArrowLeft') {
      setActive((current - 1 + variants.length) % variants.length);
    } else if (e.key === 'r' || e.key === 'R') {
      mount(current);
    }
  });

  // Initial mount from URL or default to 1
  const initialVariant = (parseInt(new URLSearchParams(location.search).get('v'), 10) || 1) - 1;
  setActive(initialVariant >= 0 && initialVariant < variants.length ? initialVariant : 0);

  // Enable the slide only after first paint, so load doesn't animate.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      picker.setAttribute('data-ready', '');
      moveHighlight();
    });
  });
});

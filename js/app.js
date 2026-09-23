/* ==========================================================================
   ELIKAR — PRODUCTION APP RUNNER
   Mounts the selected Bespoke Studio experience directly.
   ========================================================================== */

// 1. Smooth Scrolling Helper
window.smoothScrollTo = function(id) {
  if (!id) return;
  const cleanId = (typeof id === 'string' && id.startsWith('#')) ? id.slice(1) : id;
  const el = document.getElementById(cleanId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// 2. Toast Notification Helper
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

  requestAnimationFrame(() => {
    toast.classList.remove('enter');
  });

  setTimeout(() => {
    toast.classList.add('enter');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3000);
};

// 3. Mount Bespoke Studio on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('stage');
  if (stage && typeof variantBespokeStudio === 'function') {
    stage.innerHTML = variantBespokeStudio();
  }
});

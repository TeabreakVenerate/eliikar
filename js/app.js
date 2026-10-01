/* ==========================================================================
   BLOOM BY E — PRODUCTION APP RUNNER & SHOPPING CART CONTROLLER
   Integrated with Dual-Routing (WhatsApp & Telegram), Persistent Order Ledger,
   and Automated Email Dispatch to ei.oluwasemilore.on@gmail.com.
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
  }, 3200);
};

// ==========================================================================
// 3. SHOPPING CART ENGINE
// ==========================================================================
window.cart = [];

// Load cart from localStorage
function loadCart() {
  try {
    const saved = localStorage.getItem('bloom_cart') || localStorage.getItem('auralyn_cart') || localStorage.getItem('elikar_cart');
    if (saved) {
      window.cart = JSON.parse(saved);
    }
  } catch (e) {
    window.cart = [];
  }
}

// Save cart to localStorage
function saveCart() {
  try {
    localStorage.setItem('bloom_cart', JSON.stringify(window.cart));
  } catch (e) {}
}

// Add Item to Cart (Default showDrawer = false to prevent auto-popup)
window.addToCart = function(product, showDrawer = false) {
  if (!product || !product.id) return;

  const existingIndex = window.cart.findIndex(i => i.id === product.id);
  if (existingIndex > -1) {
    window.cart[existingIndex].quantity += 1;
  } else {
    window.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted || formatNaira(product.price),
      image: product.image || (product.images && product.images[0]) || '',
      quantity: 1
    });
  }

  saveCart();
  window.renderCartUI();
  window.showToast(`Added ${product.name} to cart`);

  if (showDrawer) {
    window.openCart();
  }
};

// Remove Item from Cart
window.removeFromCart = function(productId) {
  window.cart = window.cart.filter(i => i.id !== productId);
  saveCart();
  window.renderCartUI();
};

// Update Item Quantity
window.updateCartQuantity = function(productId, delta) {
  const item = window.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    window.removeFromCart(productId);
    return;
  }

  saveCart();
  window.renderCartUI();
};

// Calculate Cart Totals
window.getCartTotal = function() {
  return window.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

window.getCartItemCount = function() {
  return window.cart.reduce((sum, item) => sum + item.quantity, 0);
};

// Open & Close Cart Drawer
window.openCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
};

// Render Cart UI
window.renderCartUI = function() {
  const totalCount = window.getCartItemCount();
  const totalPrice = window.getCartTotal();

  // Badges
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.innerText = totalCount;
    b.style.display = totalCount > 0 ? 'inline-block' : 'none';
  });

  const emptyState = document.getElementById('cartEmptyState');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const checkoutSection = document.getElementById('cartCheckoutSection');
  const totalPriceEl = document.getElementById('cartTotalPrice');

  if (totalPriceEl) {
    totalPriceEl.innerText = formatNaira(totalPrice);
  }

  if (!itemsContainer) return;

  if (window.cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (checkoutSection) checkoutSection.style.display = 'none';
    itemsContainer.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = 'block';

  itemsContainer.innerHTML = window.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img img-skeleton" onload="this.classList.remove('img-skeleton')">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-unit-price">${item.priceFormatted} each</div>
        <div class="cart-item-actions">
          <button type="button" class="qty-btn" onclick="window.updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="window.updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button type="button" class="cart-item-remove-btn" onclick="window.removeFromCart('${item.id}')">Remove</button>
    </div>
  `).join('');
};

// ==========================================================================
// 4. PERSISTENT ORDERS LEDGER & EMAIL DISPATCH
// ==========================================================================
const EMAIL_RECIPIENT = "ei.oluwasemilore.on@gmail.com";
const WHATSAPP_PHONE = "2349026080961"; // +234 902 608 0961
const TELEGRAM_HANDLE = "https://t.me/ElisabethAwadje";

/// Save order into localStorage ledger
function saveOrderToLedger(order) {
  try {
    const existingOrders = JSON.parse(localStorage.getItem('bloom_orders') || localStorage.getItem('auralyn_orders') || localStorage.getItem('elikar_orders') || '[]');
    existingOrders.unshift(order);
    localStorage.setItem('bloom_orders', JSON.stringify(existingOrders));
  } catch (e) {
    console.error('Failed to save order to ledger:', e);
  }
}

// Send automated email to ei.oluwasemilore.on@gmail.com
async function dispatchOrderEmail(order) {
  const itemsSummary = order.items.map(i => `${i.name} (Qty: ${i.quantity}) - ₦${(i.price * i.quantity).toLocaleString()}`).join('\n');

  const payload = {
    _subject: `New Bloom by E Order #${order.id} - ${order.customer.name}`,
    "Order ID": order.id,
    "Order Date": order.dateFormatted,
    "Customer Name": order.customer.name,
    "WhatsApp Number": order.customer.phone,
    "Email Address": order.customer.email,
    "Hostel / Location": order.customer.hostel,
    "Special Notes": order.customer.notes || "None",
    "Items Ordered": itemsSummary,
    "Total Amount": order.totalFormatted,
    "Checkout Channel": order.channel
  };

  try {
    // FormSubmit AJAX endpoint sends formatted email directly to recipient
    await fetch(`https://formsubmit.co/ajax/${EMAIL_RECIPIENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn('Email dispatch non-blocking notification:', err);
  }
}

// Generate unique order reference
function generateOrderId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 5; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `BBE-${rand}`;
}

// Validate Customer Inputs
function validateCustomerForm() {
  const nameInput = document.getElementById('checkoutCustomerName');
  const phoneInput = document.getElementById('checkoutCustomerPhone');
  const emailInput = document.getElementById('checkoutCustomerEmail');
  const hostelInput = document.getElementById('checkoutCustomerHostel');
  const notesInput = document.getElementById('checkoutCustomerNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const hostel = hostelInput ? hostelInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert('Please enter your full name for order delivery.');
    if (nameInput) nameInput.focus();
    return null;
  }

  if (!phone || phone.length < 7) {
    alert('Please enter a valid phone or WhatsApp number so we can confirm your order.');
    if (phoneInput) phoneInput.focus();
    return null;
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address for your order confirmation receipt.');
    if (emailInput) emailInput.focus();
    return null;
  }

  if (!hostel) {
    alert('Please enter your university, hall of residence, or hostel room.');
    if (hostelInput) hostelInput.focus();
    return null;
  }

  return { name, phone, email, hostel, notes };
}

// ==========================================================================
// 5. CHECKOUT ROUTERS: WHATSAPP & TELEGRAM
// ==========================================================================

// Route A: WhatsApp Checkout
window.checkoutViaWhatsApp = async function() {
  if (window.cart.length === 0) {
    window.showToast("Your cart is empty. Add items first!");
    return;
  }

  const customer = validateCustomerForm();
  if (!customer) return;

  const orderId = generateOrderId();
  const orderTotal = window.getCartTotal();
  const dateFormatted = new Date().toLocaleString('en-NG', { dateStyle: 'medium', timeStyle: 'short' });

  const order = {
    id: orderId,
    timestamp: new Date().toISOString(),
    dateFormatted: dateFormatted,
    customer: customer,
    items: window.cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
    totalAmount: orderTotal,
    totalFormatted: formatNaira(orderTotal),
    channel: 'WhatsApp',
    status: 'Pending'
  };

  // 1. Save to internal ledger
  saveOrderToLedger(order);

  // 2. Dispatch email to ei.oluwasemilore.on@gmail.com
  dispatchOrderEmail(order);

  // 3. Compose WhatsApp message per client specification:
  // Starts with: "Hello Bloom by E! I'm interested in this:"
  const itemsText = order.items.map(i => `• ${i.name} (x${i.quantity}) — ₦${(i.price * i.quantity).toLocaleString()}`).join('\n');

  const waMessage = 
`Hello Bloom by E! I'm interested in this:

*Order Reference:* #${orderId}
----------------------------------
*Items in Cart:*
${itemsText}

*Total:* ${order.totalFormatted}
----------------------------------
*Customer Information:*
• Name: ${customer.name}
• WhatsApp: ${customer.phone}
• Email: ${customer.email}
• Campus / Hostel: ${customer.hostel}
${customer.notes ? `• Special Instructions: ${customer.notes}\n` : ''}
Please confirm availability and share payment details. Thank you!`;

  window.showToast("Opening WhatsApp with your order...");

  // Clear cart and close drawer
  window.cart = [];
  saveCart();
  window.renderCartUI();
  window.closeCart();

  setTimeout(() => {
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
  }, 400);
};

// Route B: Telegram Checkout
window.checkoutViaTelegram = async function() {
  if (window.cart.length === 0) {
    window.showToast("Your cart is empty. Add items first!");
    return;
  }

  const customer = validateCustomerForm();
  if (!customer) return;

  const orderId = generateOrderId();
  const orderTotal = window.getCartTotal();
  const dateFormatted = new Date().toLocaleString('en-NG', { dateStyle: 'medium', timeStyle: 'short' });

  const order = {
    id: orderId,
    timestamp: new Date().toISOString(),
    dateFormatted: dateFormatted,
    customer: customer,
    items: window.cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
    totalAmount: orderTotal,
    totalFormatted: formatNaira(orderTotal),
    channel: 'Telegram',
    status: 'Pending'
  };

  // 1. Save to internal ledger
  saveOrderToLedger(order);

  // 2. Dispatch email to ei.oluwasemilore.on@gmail.com
  dispatchOrderEmail(order);

  // 3. Compose Telegram message
  const itemsText = order.items.map(i => `• ${i.name} (x${i.quantity}) — ₦${(i.price * i.quantity).toLocaleString()}`).join('\n');

  const tgMessage = 
`Hello Bloom by E! I'm interested in this:

Order Reference: #${orderId}
----------------------------------
Items in Cart:
${itemsText}

Total: ${order.totalFormatted}
----------------------------------
Customer Information:
• Name: ${customer.name}
• WhatsApp/Phone: ${customer.phone}
• Email: ${customer.email}
• Campus / Hostel: ${customer.hostel}
${customer.notes ? `• Notes: ${customer.notes}\n` : ''}
Please confirm availability and share payment details. Thank you!`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tgMessage).catch(() => {});
  }

  window.showToast("Order copied to clipboard! Opening Telegram...");

  // Clear cart and close drawer
  window.cart = [];
  saveCart();
  window.renderCartUI();
  window.closeCart();

  setTimeout(() => {
    window.open(TELEGRAM_HANDLE, '_blank');
  }, 450);
};

// ==========================================================================
// 6. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  const stage = document.getElementById('stage');
  if (stage && typeof variantBespokeStudio === 'function') {
    stage.innerHTML = variantBespokeStudio();
  }

  window.renderCartUI();
});

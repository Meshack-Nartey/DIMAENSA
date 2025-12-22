// Order System JavaScript

// Menu items data
const menuItems = [
  // Local Dishes
  { id: 1, name: 'Fufu Delight Package (Goat, Tilapia)', price: 90, category: 'Local Dishes' },
  { id: 2, name: 'Fufu Delight Package (Goat)', price: 80, category: 'Local Dishes' },
  { id: 3, name: 'Banku & Chicken (Pieces)', price: 85, category: 'Local Dishes' },
  { id: 4, name: 'Banku & Grilled Tilapia & Pepper', price: 130, category: 'Local Dishes' },
  { id: 5, name: 'Banku & Grilled Tilapia (Medium)', price: 90, category: 'Local Dishes' },
  { id: 6, name: 'Banku & Soup', price: 80, category: 'Local Dishes' },
  { id: 7, name: 'Banku & Fried Tilapia & Pepper', price: 60, category: 'Local Dishes' },
  { id: 8, name: 'Banku & Grilled Tilapia with Assorted Pepper', price: 130, category: 'Local Dishes' },
  { id: 9, name: 'Kokonte Package (Goat meat, Tuna/Salmon)', price: 80, category: 'Local Dishes' },
  { id: 10, name: 'Kokonte Package (Goat meat, Tuna/Salmon)', price: 90, category: 'Local Dishes' },
  
  // Rice Dishes
  { id: 11, name: 'Plain Rice & Chicken Wings & Kelewele', price: 80, category: 'Rice Dishes' },
  { id: 12, name: 'Plain Rice & Goat Pepper Soup (Ayidzin)', price: 90, category: 'Rice Dishes' },
  { id: 13, name: 'Beef & Vegetable Jollof', price: 50, category: 'Rice Dishes' },
  { id: 14, name: 'Beef & Vegetable Jollof + Charcoal Grilled Wings', price: 70, category: 'Rice Dishes' },
  { id: 15, name: 'Beef & Vegetable Jollof + Charcoal Grilled Wings & Fried Eggs', price: 100, category: 'Rice Dishes' },
  { id: 16, name: 'Beef & Vegetable Jollof + Fried Tilapia (Half)', price: 120, category: 'Rice Dishes' },
  { id: 17, name: 'Beef Jollof & Grilled Tilapia', price: 150, category: 'Rice Dishes' },
  { id: 18, name: 'Beef Jollof & Grilled Tilapia with Kelewele', price: 170, category: 'Rice Dishes' },
  { id: 19, name: 'Beef Fried Rice', price: 50, category: 'Rice Dishes' },
  { id: 20, name: 'Beef Fried Rice & Chicken Wings', price: 70, category: 'Rice Dishes' },
  { id: 21, name: 'Beef Fried Rice + Charcoal Grilled Chicken Wings & Fried Eggs', price: 100, category: 'Rice Dishes' },
  { id: 22, name: 'Beef Fried Rice + Fried Tilapia (Half)', price: 80, category: 'Rice Dishes' },
  { id: 23, name: 'Beef Fried Rice & Grilled Tilapia', price: 150, category: 'Rice Dishes' },
  { id: 24, name: 'Beef Fried Rice & Grilled Tilapia with Kelewele', price: 170, category: 'Rice Dishes' },
  
  // Soups
  { id: 25, name: 'Groundnut / Peanut Butter Soup', price: 40, category: 'Soups' },
  { id: 26, name: 'Light Soup', price: 35, category: 'Soups' },
  { id: 27, name: 'Palmnut Soup', price: 40, category: 'Soups' },
  { id: 28, name: 'Green Soup (Kontomire Soup)', price: 45, category: 'Soups' },
  { id: 29, name: 'Chicken Soup', price: 40, category: 'Soups' },
  { id: 30, name: 'Goat Meat Light Soup', price: 50, category: 'Soups' },
  
  // Extras
  { id: 31, name: 'Charcoal Grilled Chicken', price: 55, category: 'Extras' },
  { id: 32, name: 'Charcoal Grilled Fish (Tilapia)', price: 60, category: 'Extras' },
  { id: 33, name: 'Grilled Lamb Chops', price: 75, category: 'Extras' },
  { id: 34, name: 'Kelewele (Spicy Fried Plantain)', price: 25, category: 'Extras' },
  { id: 35, name: 'Fried Plantain', price: 20, category: 'Extras' },
];

// Payment numbers - Update these with actual numbers
const PAYMENT_NUMBERS = {
  mtn: '0500 123 456',
  vodafone: '0205 678 901',
};

// Delivery fee in cedis
const DELIVERY_FEE = 5;

// Cart state
let cart = [];

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem('dimaensa_cart');
  cart = saved ? JSON.parse(saved) : [];
  updateCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('dimaensa_cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(itemId, quantity) {
  quantity = Math.max(1, parseInt(quantity) || 1);
  
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;
  
  const cartItem = cart.find(i => i.id === itemId);
  
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: itemId,
      name: item.name,
      price: item.price,
      quantity: quantity,
    });
  }
  
  saveCart();
  updateCart();
  showNotification(`${item.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCart();
}

// Update quantity in cart
function updateQuantity(itemId, quantity) {
  quantity = Math.max(1, parseInt(quantity) || 1);
  const item = cart.find(i => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    saveCart();
    updateCart();
  }
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

// Calculate subtotal
function getSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Calculate total with delivery
function getTotal() {
  return getSubtotal() + (cart.length > 0 ? DELIVERY_FEE : 0);
}

// Update cart display
function updateCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('subtotal');
  const deliveryFeeEl = document.getElementById('delivery-fee');
  const totalEl = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  // Clear and rebuild cart items
  cartItemsEl.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">No items in cart</p>';
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.5';
    checkoutBtn.style.cursor = 'not-allowed';
  } else {
    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <p class="cart-item-name">${item.name}</p>
        <span class="cart-item-qty">x${item.quantity}</span>
        <span class="cart-item-price">¢${item.price * item.quantity}</span>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      `;
      cartItemsEl.appendChild(itemEl);
    });
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';
  }
  
  // Update summary
  const subtotal = getSubtotal();
  subtotalEl.textContent = `¢${subtotal}`;
  deliveryFeeEl.textContent = cart.length > 0 ? `¢${DELIVERY_FEE}` : `¢0`;
  totalEl.textContent = `¢${getTotal()}`;
  
  // Add remove handlers
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });
}

// Render menu items
function renderMenuItems() {
  const container = document.getElementById('menu-items');
  
  // Group items by category
  const categories = {};
  menuItems.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });
  
  // Render each category
  Object.entries(categories).forEach(([category, items]) => {
    const categoryEl = document.createElement('div');
    categoryEl.style.marginBottom = '20px';
    
    const titleEl = document.createElement('h3');
    titleEl.style.cssText = 'margin: 16px 0 12px; color: #8B5E3C; border-bottom: 2px solid #C8A97E; padding-bottom: 8px;';
    titleEl.textContent = category;
    categoryEl.appendChild(titleEl);
    
    items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item-card';
      itemEl.innerHTML = `
        <div class="menu-item-info">
          <p class="menu-item-name">${item.name}</p>
          <div class="menu-item-bottom">
            <p class="menu-item-price">¢${item.price}</p>
            <div class="menu-item-actions">
              <input type="number" class="quantity-input" value="1" min="1" data-id="${item.id}">
              <button class="add-to-cart-btn" data-id="${item.id}">Add</button>
            </div>
          </div>
        </div>
      `;
      categoryEl.appendChild(itemEl);
    });
    
    container.appendChild(categoryEl);
  });
  
  // Add event listeners
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = parseInt(btn.dataset.id);
      const quantityInput = btn.parentElement.querySelector(`input[data-id="${itemId}"]`);
      const quantity = parseInt(quantityInput.value) || 1;
      addToCart(itemId, quantity);
      quantityInput.value = '1';
    });
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #8B5E3C, #4A3A2A);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    z-index: 3000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Add styles for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Modal functions
function openCheckoutModal() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!');
    return;
  }
  document.getElementById('checkout-modal').classList.remove('hidden');
  updateCheckoutModal();
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function updateCheckoutModal() {
  const checkoutItemsEl = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const deliveryEl = document.getElementById('checkout-delivery');
  const totalEl = document.getElementById('checkout-total');
  
  checkoutItemsEl.innerHTML = '';
  
  cart.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'checkout-item';
    itemEl.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>¢${item.price * item.quantity}</span>
    `;
    checkoutItemsEl.appendChild(itemEl);
  });
  
  const subtotal = getSubtotal();
  subtotalEl.textContent = `¢${subtotal}`;
  deliveryEl.textContent = `¢${DELIVERY_FEE}`;
  totalEl.textContent = `¢${getTotal()}`;
}

function generateOrderId() {
  return 'ORD-' + Date.now().toString().slice(-6);
}

function completeOrder() {
  const nameEl = document.getElementById('customer-name');
  const phoneEl = document.getElementById('customer-phone');
  const addressEl = document.getElementById('customer-address');
  const emailEl = document.getElementById('customer-email');
  
  // Validate required fields
  if (!nameEl.value || !phoneEl.value || !addressEl.value) {
    showNotification('Please fill in all required fields');
    return;
  }
  
  // Generate order ID and receipt
  const orderId = generateOrderId();
  const now = new Date();
  const dateStr = now.toLocaleString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Prepare receipt data
  const receiptData = {
    orderId,
    date: dateStr,
    customerName: nameEl.value,
    customerPhone: phoneEl.value,
    customerEmail: emailEl.value,
    customerAddress: addressEl.value,
    items: cart,
    subtotal: getSubtotal(),
    deliveryFee: DELIVERY_FEE,
    total: getTotal(),
  };
  
  // Save order to localStorage (for persistence)
  localStorage.setItem(`order_${orderId}`, JSON.stringify(receiptData));
  
  // Close checkout modal and show receipt
  closeCheckoutModal();
  showReceipt(receiptData);
}

function showReceipt(data) {
  const modal = document.getElementById('receipt-modal');
  
  // Update receipt content
  document.getElementById('receipt-order-id').textContent = data.orderId;
  document.getElementById('receipt-date').textContent = data.date;
  document.getElementById('receipt-customer-name').textContent = data.customerName;
  document.getElementById('receipt-customer-address').textContent = data.customerAddress;
  document.getElementById('receipt-customer-phone').textContent = data.customerPhone;
  
  // Populate items table
  const itemsTable = document.getElementById('receipt-items-table');
  itemsTable.innerHTML = '';
  data.items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>¢${item.price}</td>
      <td>¢${item.price * item.quantity}</td>
    `;
    itemsTable.appendChild(row);
  });
  
  // Update summary
  document.getElementById('receipt-subtotal').textContent = `¢${data.subtotal}`;
  document.getElementById('receipt-delivery-fee').textContent = `¢${data.deliveryFee}`;
  document.getElementById('receipt-total').textContent = `¢${data.total}`;
  
  // Show first payment number
  document.getElementById('receipt-payment-number').textContent = PAYMENT_NUMBERS.mtn;
  
  modal.classList.remove('hidden');
}

function printReceipt() {
  window.print();
}

function closeReceipt() {
  document.getElementById('receipt-modal').classList.add('hidden');
  clearCart();
  
  // Reset form
  document.getElementById('delivery-form').reset();
  
  // Show success message and redirect after delay
  showNotification('Order confirmed! You will receive a confirmation SMS soon.');
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Render menu
  renderMenuItems();
  loadCart();
  
  // Checkout button
  document.getElementById('checkout-btn').addEventListener('click', openCheckoutModal);
  
  // Modal close buttons
  document.querySelector('#checkout-modal .modal-close').addEventListener('click', closeCheckoutModal);
  document.querySelector('#receipt-modal .modal-close').addEventListener('click', closeReceipt);
  
  // Complete order button
  document.getElementById('complete-order-btn').addEventListener('click', completeOrder);
  
  // Receipt buttons
  document.getElementById('print-receipt-btn').addEventListener('click', printReceipt);
  document.getElementById('close-receipt-btn').addEventListener('click', closeReceipt);
  
  // Close modals on backdrop click
  document.getElementById('checkout-modal').addEventListener('click', (e) => {
    if (e.target.id === 'checkout-modal') closeCheckoutModal();
  });
  
  document.getElementById('receipt-modal').addEventListener('click', (e) => {
    if (e.target.id === 'receipt-modal') closeReceipt();
  });
  
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});

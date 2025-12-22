// Order System JavaScript with Transaction ID and Location Sharing

// Menu items data
const menuItems = [
  // Local Dishes
  { id: 1, name: 'Fufu Delight Package (Goat, Tilapia)', price: 90, category: 'local' },
  { id: 2, name: 'Fufu Delight Package (Goat)', price: 80, category: 'local' },
  { id: 3, name: 'Banku & Chicken (Pieces)', price: 85, category: 'local' },
  { id: 4, name: 'Banku & Grilled Tilapia & Pepper', price: 130, category: 'local' },
  { id: 5, name: 'Banku & Grilled Tilapia (Medium)', price: 90, category: 'local' },
  { id: 6, name: 'Banku & Soup', price: 80, category: 'local' },
  { id: 7, name: 'Banku & Fried Tilapia & Pepper', price: 60, category: 'local' },
  { id: 8, name: 'Banku & Grilled Tilapia with Assorted Pepper', price: 130, category: 'local' },
  { id: 9, name: 'Kokonte Package (Goat meat, Tuna/Salmon)', price: 80, category: 'local' },
  { id: 10, name: 'Kokonte Package (Goat meat, Tuna/Salmon)', price: 90, category: 'local' },
  
  // Rice Dishes
  { id: 11, name: 'Plain Rice & Chicken Wings & Kelewele', price: 80, category: 'rice' },
  { id: 12, name: 'Plain Rice & Goat Pepper Soup', price: 90, category: 'rice' },
  { id: 13, name: 'Beef & Vegetable Jollof', price: 50, category: 'rice' },
  { id: 14, name: 'Beef & Vegetable Jollof + Charcoal Grilled Wings', price: 70, category: 'rice' },
  { id: 15, name: 'Beef & Vegetable Jollof + Wings & Fried Eggs', price: 100, category: 'rice' },
  { id: 16, name: 'Beef & Vegetable Jollof + Fried Tilapia (Half)', price: 120, category: 'rice' },
  { id: 17, name: 'Beef Jollof & Grilled Tilapia', price: 150, category: 'rice' },
  { id: 18, name: 'Beef Jollof & Grilled Tilapia with Kelewele', price: 170, category: 'rice' },
  { id: 19, name: 'Beef Fried Rice', price: 50, category: 'rice' },
  { id: 20, name: 'Beef Fried Rice & Chicken Wings', price: 70, category: 'rice' },
  
  // Soups
  { id: 25, name: 'Groundnut / Peanut Butter Soup', price: 40, category: 'soups' },
  { id: 26, name: 'Light Soup', price: 35, category: 'soups' },
  { id: 27, name: 'Palmnut Soup', price: 40, category: 'soups' },
  { id: 28, name: 'Green Soup (Kontomire Soup)', price: 45, category: 'soups' },
  { id: 29, name: 'Chicken Soup', price: 40, category: 'soups' },
  { id: 30, name: 'Goat Meat Light Soup', price: 50, category: 'soups' },
  
  // Drinks
  { id: 40, name: 'Club Beer', price: 25, category: 'drinks' },
  { id: 41, name: 'Star Beer', price: 22, category: 'drinks' },
  { id: 42, name: 'Guinness', price: 20, category: 'drinks' },
  { id: 43, name: 'Fanta', price: 10, category: 'drinks' },
  { id: 44, name: 'Coca-Cola', price: 10, category: 'drinks' },
  { id: 45, name: 'Sprite', price: 10, category: 'drinks' },
  { id: 46, name: 'Water', price: 4, category: 'drinks' },
];

// Cart management
let cart = [];
const DELIVERY_FEE = 5;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems('all');
  setupEventListeners();
  loadCartFromStorage();
  updateCart();
});

// Setup event listeners
function setupEventListeners() {
  // Category buttons
  document.querySelectorAll('.order-menu-column .order-menu-items').length === 0 && initializeMenuDisplay();
  
  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openCheckout);
  }

  // Location button
  const locationBtn = document.getElementById('location-btn');
  if (locationBtn) {
    locationBtn.addEventListener('click', getLocation);
  }

  // Close checkout modal
  const closeCheckout = document.querySelector('.modal-close');
  if (closeCheckout) {
    closeCheckout.addEventListener('click', closeCheckoutModal);
  }

  // Complete order form
  const orderForm = document.getElementById('order-submission-form');
  if (orderForm) {
    orderForm.addEventListener('submit', prepareOrderSubmission);
  }

  // Clear cart
  const clearBtn = document.getElementById('clear-cart');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearCart);
  }
}

// Initialize menu display
function initializeMenuDisplay() {
  const menuSection = document.querySelector('.order-menu-column');
  if (!menuSection) return;

  // Create category buttons if they don't exist
  const categoriesDiv = document.createElement('div');
  categoriesDiv.className = 'order-categories';
  categoriesDiv.innerHTML = `
    <button class="category-btn active" data-category="all">All Items</button>
    <button class="category-btn" data-category="local">Local Dishes</button>
    <button class="category-btn" data-category="rice">Rice Dishes</button>
    <button class="category-btn" data-category="soups">Soups</button>
    <button class="category-btn" data-category="drinks">Drinks</button>
  `;
  
  menuSection.insertBefore(categoriesDiv, menuSection.querySelector('#menu-items'));
  
  // Add category filter listeners
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderMenuItems(e.target.dataset.category);
    });
  });
}

// Render menu items
function renderMenuItems(category) {
  const container = document.getElementById('menu-items');
  if (!container) return;

  const filtered = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="order-menu-item">
      <div class="item-info">
        <h4>${item.name}</h4>
        <span class="item-price">¢${item.price}</span>
      </div>
      <div class="item-actions">
        <button class="btn btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// Add item to cart
function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existingItem = cart.find(c => c.id === itemId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCartToStorage();
  updateCart();
  showNotification(`${item.name} added to cart`);
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCartToStorage();
  updateCart();
}

// Update quantity
function updateQuantity(itemId, quantity) {
  const item = cart.find(c => c.id === itemId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCartToStorage();
    updateCart();
  }
}

// Update cart display
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const subtotalSpan = document.getElementById('subtotal');
  const totalSpan = document.getElementById('total');
  const deliveryFeeSpan = document.getElementById('delivery-fee');

  if (!cartItemsDiv) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    subtotalSpan.textContent = '¢0';
    totalSpan.textContent = '¢5';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;

  cartItemsDiv.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>¢${item.price} x ${item.quantity} = ¢${item.price * item.quantity}</span>
      </div>
      <div class="cart-item-actions">
        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
      </div>
    </div>
  `).join('');

  subtotalSpan.textContent = `¢${subtotal}`;
  deliveryFeeSpan.textContent = `¢${DELIVERY_FEE}`;
  totalSpan.textContent = `¢${total}`;
}

// Clear entire cart
function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    saveCartToStorage();
    updateCart();
  }
}

// Open checkout modal
function openCheckout() {
  if (cart.length === 0) {
    alert('Please add items to your cart first');
    return;
  }

  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  modal.classList.remove('hidden');

  // Update checkout summary
  updateCheckoutSummary();
}

// Update checkout summary
function updateCheckoutSummary() {
  const summaryDiv = document.getElementById('checkout-items');
  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutDelivery = document.getElementById('checkout-delivery');
  const checkoutTotal = document.getElementById('checkout-total');

  if (!summaryDiv) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;

  summaryDiv.innerHTML = cart.map(item => `
    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
      <span>${item.name} x${item.quantity}</span>
      <span>¢${item.price * item.quantity}</span>
    </div>
  `).join('');

  checkoutSubtotal.textContent = `¢${subtotal}`;
  checkoutDelivery.textContent = `¢${DELIVERY_FEE}`;
  checkoutTotal.textContent = `¢${total}`;
}

// Close checkout modal
function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Get location from browser
function getLocation() {
  if (!navigator.geolocation) {
    alert('Your browser does not support location access. Please enter your address manually.');
    return;
  }

  const locationBtn = document.getElementById('location-btn');
  const originalText = locationBtn.textContent;
  locationBtn.textContent = '⏳ Getting location...';
  locationBtn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
      const addressInput = document.getElementById('customer-address') || document.getElementById('delivery-address');
      const coordinates = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
      
      if (addressInput) {
        addressInput.value = coordinates;
        addressInput.dataset.mapUrl = mapUrl;
      }
      
      // Store map location for submission
      const mapLocationInput = document.getElementById('hidden-map-location');
      if (mapLocationInput) {
        mapLocationInput.value = `GPS: ${coordinates}\nMap: ${mapUrl}`;
      }

      locationBtn.textContent = '✓ Location captured';
      setTimeout(() => {
        locationBtn.textContent = originalText;
        locationBtn.disabled = false;
      }, 2000);
    },
    (error) => {
      console.error('Geolocation error:', error);
      alert('Unable to get your location. Please check your browser permissions and try again.');
      locationBtn.textContent = originalText;
      locationBtn.disabled = false;
    }
  );
}

// Prepare order submission
function prepareOrderSubmission(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const customerName = document.getElementById('customer-name').value;
  const customerPhone = document.getElementById('customer-phone').value;
  const customerEmail = document.getElementById('customer-email').value || 'not provided';
  const deliveryAddress = document.getElementById('customer-address').value || document.getElementById('delivery-address').value;
  const specialInstructions = document.getElementById('special-instructions').value || 'None';
  const momoNumber = document.getElementById('momo-number').value;
  const transactionId = document.getElementById('transaction-id').value;
  const deliveryType = document.getElementById('delivery-type').value;

  // Validate required fields
  if (!customerName || !customerPhone || !deliveryAddress || !momoNumber || !transactionId || !deliveryType) {
    alert('Please fill in all required fields including Transaction ID');
    return;
  }

  // Prepare order data
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;

  const orderItems = cart.map(item => 
    `${item.name} x${item.quantity} = ¢${item.price * item.quantity}`
  ).join('\n');

  // Fill hidden form fields
  document.getElementById('hidden-order-items').value = orderItems;
  document.getElementById('hidden-customer-name').value = customerName;
  document.getElementById('hidden-customer-phone').value = customerPhone;
  document.getElementById('hidden-customer-email').value = customerEmail;
  document.getElementById('hidden-delivery-address').value = deliveryAddress;
  document.getElementById('hidden-special-instructions').value = specialInstructions;
  document.getElementById('hidden-momo-number').value = momoNumber;
  document.getElementById('hidden-transaction-id').value = transactionId;
  document.getElementById('hidden-delivery-type').value = deliveryType;
  document.getElementById('hidden-order-total').value = `¢${total}`;

  // Submit form
  document.getElementById('order-submission-form').submit();

  // Clear cart after submission
  setTimeout(() => {
    cart = [];
    saveCartToStorage();
  }, 1000);
}

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem('dimaensa_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
  const stored = localStorage.getItem('dimaensa_cart');
  if (stored) {
    try {
      cart = JSON.parse(stored);
    } catch (e) {
      console.error('Error loading cart:', e);
      cart = [];
    }
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary, #8B5E3C);
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

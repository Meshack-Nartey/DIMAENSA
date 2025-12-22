# How the Ordering System Works - User Guide

## Step-by-Step Walkthrough

### 1. **Visit the Order Page**
   - Link: Click "Order Online" button on home page OR use `order.html`
   - Hero section at top with "Order Your Favorite Ghanaian Dishes"
   - Subtitle: "Quick ordering, fast delivery to your doorstep"

### 2. **Browse Menu Items**
   **Left Side - Menu Column:**
   - Items organized by category:
     - **Local Dishes** (Fufu, Banku, Kokonte)
     - **Rice Dishes** (Jollof, Fried Rice)
     - **Soups** (Various traditional soups)
     - **Extras** (Grilled items, sides)
   
   Each item shows:
   - Dish name
   - Price in cedis (¢)
   - Quantity selector (number input)
   - "Add" button

### 3. **Add Items to Cart**
   - Select quantity for desired item
   - Click "Add" button
   - Toast notification confirms: "Item added to cart!"
   - Item appears in right-side cart instantly

### 4. **Review Cart** (Right Side - Sticky Cart)
   - Shows all added items with quantities
   - Displays subtotal (sum of all items)
   - Shows delivery fee (¢5 when cart has items)
   - **Total** at bottom in large text
   
   For each item in cart:
   - Item name
   - Quantity (x3, x2, etc.)
   - Total price for that item
   - Remove button (✕) to delete item

### 5. **Proceed to Checkout**
   - Click "Proceed to Checkout" button
   - Opens modal dialog with delivery form:
   
   **Required Fields:**
   - Full Name
   - Phone Number
   - Delivery Address
   
   **Optional Fields:**
   - Email
   - Special Instructions (e.g., "no onions, extra spicy")

### 6. **Review Order Summary**
   In checkout modal, see:
   - All ordered items listed
   - Item name, quantity, and total price
   - Subtotal
   - Delivery fee breakdown
   - **Grand Total**

### 7. **Payment Instructions Display**
   Checkout shows mobile money payment details:
   ```
   PAYMENT INSTRUCTIONS
   
   Mobile Money Payment
   ├─ MTN Mobile Money: 0500 123 456
   ├─ Vodafone Cash: 0205 678 901
   
   Steps:
   1. Send payment to the number above
   2. Reply with your confirmation code
   3. Receive receipt via WhatsApp/SMS
   4. Food delivered in 30-45 minutes
   ```

### 8. **Complete Order**
   - Click "Complete Order" button
   - System generates unique Order ID (e.g., ORD-234567)
   - Validation checks:
     - Name field filled
     - Phone field filled
     - Address field filled
   - Receipt modal opens

### 9. **View Receipt**
   Professional receipt shows:
   ```
   ┌─────────────────────────┐
   │   DIMAENSA RESTAURANT   │
   │   Thank you for order!  │
   └─────────────────────────┘
   
   Order ID: ORD-234567
   Date: 12/22/2025, 3:45 PM
   Est. Delivery: 30-45 minutes
   
   ─── DELIVERY TO ───
   John Doe
   Nima, Accra
   0550 123 456
   
   ─── ITEMS ───
   Item Name          Qty  Unit   Total
   Fufu Delight         1    ¢90    ¢90
   Jollof Rice          2    ¢50   ¢100
   
   ─── TOTALS ───
   Subtotal:              ¢190
   Delivery Fee:           ¢5
   ─────────────────────────
   TOTAL AMOUNT:         ¢195
   
   ─── PAYMENT STATUS ───
   STATUS: PENDING
   
   Please complete payment to:
   0500 123 456 (MTN Mobile Money)
   
   Reply with confirmation code.
   ```

### 10. **Print Receipt (Optional)**
   - Click "Print Receipt" button
   - Opens browser print dialog
   - Can save as PDF or print to paper
   - Professional receipt formatting

### 11. **Complete Payment**
   - Customer has receipt with order details
   - Send payment to mobile money number shown
   - Amount to send: ¢195 (or total shown on receipt)
   - Restaurant receives payment confirmation
   - Customer receives confirmation SMS/WhatsApp

### 12. **Food Delivery**
   - Restaurant prepares food (typically 15-30 min)
   - Delivery person collects from restaurant
   - Food delivered within 30-45 minutes
   - Customer receives confirmation message

## Cart Management

### Adding Items
- Type quantity (default: 1)
- Click "Add" button
- Notification shows confirmation
- Cart updates in real-time

### Removing Items
- Click "✕" button next to item in cart
- Item removed immediately
- Totals recalculate

### Clearing Entire Cart
- (Not visible button, but data stored)
- Closing browser doesn't lose cart
- Cart persists until checkout or manual clear

## Special Features

### Cart Persistence
- Your cart is saved in browser
- If you leave and come back later, items still there
- Each browser has separate cart
- Clear cache to reset

### Delivery Fee Logic
- ¢5 delivery fee only added when cart has items
- ¢0 delivery fee if cart is empty
- Automatically included in total

### Order Storage
- Each completed order stored with unique ID
- Can retrieve past orders (future enhancement)
- Order details include timestamp and customer info

### Responsive Design
- Works perfectly on mobile phones
- Stack layout: menu above, cart below on small screens
- Touch-friendly buttons and inputs
- Same features as desktop version

## Payment Numbers

**For Testing/Demo:**
- MTN Mobile Money: 0500 123 456
- Vodafone Cash: 0205 678 901

*Update these numbers in `order.js` file to use real business numbers*

## Tips for Best Experience

1. **Check Address Carefully** - Ensures correct delivery location
2. **Add Special Instructions** - For dietary preferences or modifications
3. **Keep Phone Nearby** - You'll receive payment confirmation SMS
4. **Have Mobile Money Ready** - Complete payment within 10 minutes of placing order
5. **Take Note of Order ID** - Reference number for any inquiries

## Common Scenarios

### Scenario 1: Forgot Item
- Click back to menu, add more items
- Cart keeps existing items
- Click "Proceed to Checkout" again

### Scenario 2: Change Quantity
- Use remove button (✕) to delete item
- Re-add with correct quantity

### Scenario 3: Change Delivery Address
- Just enter correct address at checkout
- Can use same order session

### Scenario 4: Lost Receipt
- All orders saved in browser localStorage
- Can be retrieved programmatically
- Print from browser history if needed

## Technical Details (For Admin)

### Browser Storage
- Cart stored as JSON in `dimaensa_cart` key
- Order stored as JSON in `order_{orderId}` key
- Located in browser's Local Storage
- Persists across browser sessions
- Cleared when cache is cleared

### Data Structure
```javascript
// Cart item
{
  id: 1,
  name: "Fufu Delight Package (Goat, Tilapia)",
  price: 90,
  quantity: 2
}

// Completed order
{
  orderId: "ORD-234567",
  date: "12/22/2025, 3:45 PM",
  customerName: "John Doe",
  customerPhone: "0550 123 456",
  customerEmail: "john@example.com",
  customerAddress: "Nima, Accra",
  items: [...cart items...],
  subtotal: 190,
  deliveryFee: 5,
  total: 195
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Items not appearing | Refresh page, check JS file loaded |
| Cart empty after reload | Check if localStorage is enabled |
| Receipt not printing | Use Ctrl+P or Cmd+P, select "Save as PDF" |
| Payment number not visible | Scroll down in checkout modal |
| Delivery address field blank | Type address manually, system doesn't autofill |

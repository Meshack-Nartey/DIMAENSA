# Restaurant Staff Guide - Online Ordering System

## What to Expect

When a customer completes an order online, you will receive an email at **aethelisgh@gmail.com** (during testing) containing:

### Email Contents Structure:

```
From: Customer [through FormSubmit.co]
To: aethelisgh@gmail.com

Customer Name: [Full Name]
Phone: [Phone Number]

ORDER ITEMS:
- Item 1 x Quantity = Price
- Item 2 x Quantity = Price
- [continues for all items]

DELIVERY DETAILS:
- Address: [Address or GPS coordinates]
- Type: Delivery or Pickup
- Special Instructions: [Any notes]

PAYMENT INFORMATION:
- Subtotal: ¢XXX
- Delivery Fee: ¢5
- Total: ¢XXX

- Customer Mobile Money: [Phone Number]
- Transaction ID: [Code from payment confirmation]

MAP LOCATION:
GPS: [Latitude, Longitude]
Map: [Google Maps link if available]
```

---

## Processing an Order

### 1. Check Email
- Monitor aethelisgh@gmail.com for incoming orders
- Subject: "New Food Order from Dimaensa"

### 2. Verify Payment
- Look for the **Transaction ID** in the order email
- Check if payment was received on the Mobile Money account: **0532411380**
- Verify amount matches order total
- Transaction ID should match the one provided in email

### 3. Confirm Receipt
- Reply to customer or send SMS/WhatsApp confirming:
  - Order received
  - Payment verified
  - Expected preparation time
  - Estimated delivery time

### 4. Prepare Order
- Group items by cooking method
- Start with items requiring longest cooking
- Prepare items fresh to minimize wait time

### 5. Deliver/Pickup
- **If Delivery**: Use GPS coordinates provided to navigate to address
  - Contact customer when arriving
  - Confirm items before handover
- **If Pickup**: Customer comes to restaurant
  - Prepare items in advance for pickup time

---

## Important Fields to Check

### Priority Fields:
1. **Transaction ID** - Must be provided and verified
2. **Delivery Address** - May be GPS coordinates or text address
3. **Delivery Type** - "Delivery" or "Pickup"
4. **Total Amount** - Matches what customer sent

### Customer Contact:
- **Phone Number** - Required
- **Mobile Money Number** - For verification purposes

---

## GPS Coordinates on Map

If customer shared location, you'll receive:
```
MAP LOCATION:
GPS: 5.612345, -0.214567
Map: https://maps.google.com/?q=5.612345,-0.214567
```

**How to use:**
1. Click the Map link directly, OR
2. Go to Google Maps
3. Enter the GPS coordinates in search
4. Maps will show customer's exact location
5. Get directions from restaurant

---

## Payment Verification Checklist

Before preparing order, verify:
- [ ] Transaction ID is provided
- [ ] Amount sent matches order total
- [ ] Mobile Money account received payment (0532411380)
- [ ] Transaction is recent (same day)
- [ ] No duplicate orders from same customer

---

## Common Issues & Solutions

### Issue: No Transaction ID Provided
- **Action**: Contact customer via phone
- **Message**: "Please provide your Mobile Money transaction ID to confirm your order"

### Issue: GPS Coordinates Instead of Address
- **Action**: Use Google Maps to get directions
- **Google Maps**: Click the map link or enter coordinates

### Issue: Amount Doesn't Match
- **Action**: Contact customer to clarify
- **Possible cause**: Delivery fee miscalculation

### Issue: Pickup Order
- **Action**: Ask customer when they'll arrive
- **Prepare**: Wait until pickup time to prepare

---

## Delivery Tips

### With GPS Coordinates:
1. Use Google Maps with coordinates
2. Call customer when arriving
3. Verify address matches GPS location
4. Get customer signature/confirmation if needed

### With Text Address:
1. Use address as-is
2. Call before leaving to confirm
3. Ask for directions/landmarks
4. Wait for customer if not home

---

## Information to Send to Customer After Order Confirmed:

```
Thank you for your order! 🙏

Order #: [From email]
Total: ¢XXX
Estimated Delivery: 30-45 minutes

We received your payment. ✓

You will receive another message with:
- Confirmation of payment verification
- Your delivery driver details (if applicable)
- Tracking information

Contact us:
📞 0532411380
💬 WhatsApp: 0242001247
📧 dimaensa83@gmail.com

Thank you! 🍽️ Dimaensa Restaurant
```

---

## Daily Workflow

### Morning/Opening
- [ ] Verify MTN Mobile Money account is active
- [ ] Check email inbox for overnight orders
- [ ] Update "Order Online" availability status

### During Service Hours
- [ ] Check email every 5-10 minutes for new orders
- [ ] Verify payments immediately upon receipt
- [ ] Start preparation within 5 minutes of confirmation
- [ ] Keep customer updated on status

### Closing
- [ ] Process any pending orders
- [ ] Send completion confirmations
- [ ] Document all orders in sales system
- [ ] Close MTN Mobile Money account securely

---

## Contact Information

### Payment Account:
- **MTN Mobile Money Number**: 0532411380
- **Account Owner**: Dimaensa Restaurant

### Customer Support Email:
- **aethelisgh@gmail.com** (Testing phase)
- **dimaensa83@gmail.com** (Customer-facing)

### Restaurant Contact:
- **Phone**: 0532411380
- **WhatsApp**: 0242001247
- **Hours**: 10:30 AM – 11:00 PM

---

## Success Metrics

Track these metrics to measure ordering system performance:

- **Order Volume**: Orders per day
- **Payment Success Rate**: % of orders with valid transaction IDs
- **Fulfillment Time**: Minutes from order to delivery
- **Customer Satisfaction**: Repeat orders, feedback

---

## Future Enhancements

Once testing is complete, consider:
- [ ] SMS notifications to restaurant
- [ ] WhatsApp order notifications
- [ ] Automated payment verification
- [ ] Integration with POS system
- [ ] Real-time order tracking for customers
- [ ] Kitchen display system (KDS)
- [ ] Driver/delivery management


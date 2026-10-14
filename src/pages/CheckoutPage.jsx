import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';
import {
  Building2,
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  FileText,
  AlertCircle,
  Lock,
  ArrowRight,
  Info
} from 'lucide-react';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    cartCount,
    cartSubtotal,
    bulkDiscountAmount,
    couponDiscountAmount,
    gstAmount,
    baseShipping,
    grandTotal,
    placeOrder,
    showToast
  } = useCart();

  // Form State
  const [companyName, setCompanyName] = useState('Nexus Dynamics India Pvt Ltd');
  const [gstin, setGstin] = useState('27AABCN1234F1Z9');
  const [contactName, setContactName] = useState('Sunil Verma');
  const [contactEmail, setContactEmail] = useState('procurement@nexusdynamics.in');
  const [contactPhone, setContactPhone] = useState('+91 98765 43210');

  // Address
  const [addressLine, setAddressLine] = useState('Tower B, 7th Floor, Mindspace Business Park');
  const [city, setCity] = useState('Navi Mumbai');
  const [stateName, setStateName] = useState('Maharashtra');
  const [pinCode, setPinCode] = useState('400706');
  const [deliveryNotes, setDeliveryNotes] = useState('Deliver to 7th floor admin reception. Mon-Fri 9am-6pm.');

  // Delivery & Payment
  const [deliveryType, setDeliveryType] = useState('standard'); // 'standard' | 'priority'
  const [paymentMethod, setPaymentMethod] = useState('corporate-card'); // 'corporate-card' | 'net-30-po' | 'net-banking' | 'upi'
  const [poNumber, setPoNumber] = useState('PO-2026-NEX-089');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h2>Your Cart is Empty</h2>
        <p className="text-subtle mt-2">Cannot proceed to checkout without items.</p>
        <Link to="/products" className="btn btn-primary mt-4">
          Browse Catalog
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!companyName.trim() || !contactEmail.trim() || !addressLine.trim() || !pinCode.trim()) {
      showToast('Please fill all required business and address fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Trigger confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore if canvas-confetti fails
    }

    setTimeout(() => {
      const orderData = {
        billing: {
          companyName,
          gstin: gstin.toUpperCase(),
          contactName,
          email: contactEmail,
          phone: contactPhone
        },
        shipping: {
          addressLine,
          city,
          state: stateName,
          pinCode,
          deliveryNotes,
          deliveryType
        },
        paymentMethod,
        poNumber: paymentMethod === 'net-30-po' ? poNumber : null
      };

      const completedOrder = placeOrder(orderData);
      showToast(`Order ${completedOrder.orderId} Confirmed!`, 'success');
      navigate(`/order-success/${completedOrder.orderId}`);
    }, 600);
  };

  return (
    <div className="checkout-page-root">
      {/* 1. Header Banner */}
      <div className="checkout-header-bar">
        <div className="container flex-between">
          <div>
            <span className="cart-eyebrow">Secure Enterprise Settlement</span>
            <h1 className="checkout-h1">Corporate B2B Checkout</h1>
          </div>
          <div className="checkout-secure-badge">
            <Lock size={15} /> 256-bit Simulated SSL
          </div>
        </div>
      </div>

      <div className="container checkout-container">
        {/* Prototype Scope Banner */}
        <div className="checkout-demo-alert">
          <AlertCircle size={18} className="text-blue" />
          <span>
            <strong>Demo Prototype Notice:</strong> No real payment transactions or financial credentials are processed. This simulation creates a persistent order in LocalStorage and issues a downloadable GST invoice.
          </span>
        </div>

        <form onSubmit={handlePlaceOrder} className="checkout-grid">
          {/* Left Column: Multi-Step Corporate Form */}
          <div className="checkout-form-column">
            {/* Step 1: Corporate Billing Details */}
            <div className="checkout-card">
              <div className="checkout-card-header">
                <span className="step-number-pill">1</span>
                <div>
                  <h3 className="card-title">Corporate Billing & GST Details</h3>
                  <p className="card-sub">GSTIN used to issue your 18% Input Tax Credit tax invoice.</p>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="company-name">Company / Entity Name *</label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    placeholder="e.g. Infosys Ltd"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company-gstin">Corporate GSTIN (15-digit)</label>
                  <input
                    id="company-gstin"
                    type="text"
                    maxLength={15}
                    placeholder="e.g. 27AABCN1234F1Z9"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                  />
                </div>
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label htmlFor="proc-officer">Procurement Officer *</label>
                  <input
                    id="proc-officer"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work-email">Work Email *</label>
                  <input
                    id="work-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Phone / Extension *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Office Address */}
            <div className="checkout-card mt-6">
              <div className="checkout-card-header">
                <span className="step-number-pill">2</span>
                <div>
                  <h3 className="card-title">Office Dispatch Address</h3>
                  <p className="card-sub">Commercial premises location for courier or pallet drop.</p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address-line">Building, Floor, Suite, Street Address *</label>
                <input
                  id="address-line"
                  type="text"
                  required
                  placeholder="e.g. Level 5, Building 4A, DLF Cyber Park"
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                />
              </div>

              <div className="form-grid-3">
                <div className="form-group">
                  <label htmlFor="addr-city">City *</label>
                  <input
                    id="addr-city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="addr-state">State *</label>
                  <input
                    id="addr-state"
                    type="text"
                    required
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="addr-pin">Postal PIN Code *</label>
                  <input
                    id="addr-pin"
                    type="text"
                    maxLength={6}
                    required
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="delivery-notes">Gate Entry / Reception Instructions</label>
                <input
                  id="delivery-notes"
                  type="text"
                  placeholder="e.g. Leave with security desk after 10 AM, ask for Sunil Verma"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                />
              </div>
            </div>

            {/* Step 3: Simulated Payment Method */}
            <div className="checkout-card mt-6">
              <div className="checkout-card-header">
                <span className="step-number-pill">3</span>
                <div>
                  <h3 className="card-title">Commercial Settlement Method</h3>
                  <p className="card-sub">Select preferred payment method (Simulated Prototype).</p>
                </div>
              </div>

              <div className="payment-options-grid">
                {/* Option 1: Corporate Card */}
                <label className={`payment-method-tile ${paymentMethod === 'corporate-card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'corporate-card'}
                    onChange={() => setPaymentMethod('corporate-card')}
                  />
                  <div className="method-tile-content">
                    <CreditCard size={20} className="text-blue" />
                    <span className="method-name">Corporate Credit Card</span>
                    <span className="method-desc">Amex, Visa Corporate, Mastercard</span>
                  </div>
                </label>

                {/* Option 2: Net-30 Purchase Order (PO) */}
                <label className={`payment-method-tile ${paymentMethod === 'net-30-po' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'net-30-po'}
                    onChange={() => setPaymentMethod('net-30-po')}
                  />
                  <div className="method-tile-content">
                    <FileText size={20} className="text-emerald" />
                    <span className="method-name">Net 30 Purchase Order</span>
                    <span className="method-desc">Enterprise terms for registered entities</span>
                  </div>
                </label>

                {/* Option 3: Corporate Net Banking */}
                <label className={`payment-method-tile ${paymentMethod === 'net-banking' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'net-banking'}
                    onChange={() => setPaymentMethod('net-banking')}
                  />
                  <div className="method-tile-content">
                    <Building2 size={20} className="text-indigo" />
                    <span className="method-name">Corporate Net Banking</span>
                    <span className="method-desc">HDFC Corporate, ICICI, SBI</span>
                  </div>
                </label>

                {/* Option 4: Corporate UPI */}
                <label className={`payment-method-tile ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <div className="method-tile-content">
                    <CheckCircle2 size={20} className="text-cyan" />
                    <span className="method-name">Corporate UPI / QR</span>
                    <span className="method-desc">Instant company QR invoice</span>
                  </div>
                </label>
              </div>

              {/* Conditional Sub-forms */}
              {paymentMethod === 'net-30-po' && (
                <div className="payment-detail-box">
                  <div className="form-group">
                    <label htmlFor="po-number">Company Purchase Order (PO) Reference Number *</label>
                    <input
                      id="po-number"
                      type="text"
                      required
                      placeholder="e.g. PO-2026-NEX-089"
                      value={poNumber}
                      onChange={(e) => setPoNumber(e.target.value)}
                    />
                    <span className="form-hint">
                      This PO number will be printed on your official GST tax invoice.
                    </span>
                  </div>
                </div>
              )}

              {paymentMethod === 'corporate-card' && (
                <div className="payment-detail-box">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Simulated Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expiry / CVV</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                      />
                    </div>
                  </div>
                  <span className="form-hint text-xs">
                    * Demo mode active. No actual transaction will occur.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Review Sidebar */}
          <div className="checkout-summary-column">
            <div className="checkout-review-card">
              <h3 className="review-title">Order Items ({cartCount})</h3>

              <div className="review-items-list">
                {cart.map((item) => (
                  <div key={item.product.id} className="review-item-row">
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="review-item-info">
                      <span className="review-item-title line-clamp-1">{item.product.name}</span>
                      <span className="review-item-sku">SKU: {item.product.sku}</span>
                      <span className="review-item-qty">Qty: {item.quantity} units</span>
                    </div>
                    <div className="review-item-price">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="divider-line my-3"></div>

              {/* Totals */}
              <div className="review-totals">
                <div className="total-line">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                {bulkDiscountAmount > 0 && (
                  <div className="total-line text-emerald">
                    <span>Volume Savings:</span>
                    <span>-₹{bulkDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {couponDiscountAmount > 0 && (
                  <div className="total-line text-emerald">
                    <span>Coupon Savings:</span>
                    <span>-₹{couponDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="total-line text-blue">
                  <span>GST (18% ITC):</span>
                  <span>+₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="total-line">
                  <span>Commercial Dispatch:</span>
                  <span>{baseShipping === 0 ? <strong className="text-emerald">FREE</strong> : `₹${baseShipping}`}</span>
                </div>

                <div className="grand-total-row">
                  <div>
                    <span className="font-bold">Grand Total (INR):</span>
                    <span className="block text-xs text-subtle">Includes 18% GST</span>
                  </div>
                  <span className="grand-val">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-block btn-lg mt-4"
              >
                {isSubmitting ? (
                  <span>Generating Tax Invoice...</span>
                ) : (
                  <>
                    <CheckCircle2 size={18} /> Confirm & Place Business Order
                  </>
                )}
              </button>

              <div className="review-compliance-notes">
                <div className="flex items-center gap-1 text-xs text-subtle">
                  <ShieldCheck size={14} className="text-blue" />
                  <span>GST Tax Invoice generated immediately on confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

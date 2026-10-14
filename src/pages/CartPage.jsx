import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  ShoppingCart,
  Trash2,
  Heart,
  ArrowRight,
  ShieldCheck,
  Tag,
  Building2,
  Truck,
  RotateCcw,
  CheckCircle2,
  FileDown,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';

export const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    bulkDiscountPercent,
    bulkDiscountAmount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscountAmount,
    gstRate,
    gstAmount,
    baseShipping,
    grandTotal,
    toggleWishlist,
    isInWishlist
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [pinEstimate, setPinEstimate] = useState(null);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    applyCoupon(couponInput);
    setCouponInput('');
  };

  const handleCheckPin = (e) => {
    e.preventDefault();
    if (pinCode.length >= 6) {
      setPinEstimate({
        pin: pinCode,
        days: '2 — 3 Business Days',
        city: 'Verified Logistics Delivery Zone'
      });
    }
  };

  const handlePrintCart = () => {
    window.print();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-root">
        <div className="container py-16 text-center">
          <div className="empty-cart-icon-circle">
            <ShoppingCart size={48} className="text-blue" />
          </div>
          <h2 className="text-2xl font-bold mt-4">Your Corporate Cart is Empty</h2>
          <p className="text-subtle max-w-md mx-auto mt-2">
            Add business laptops, ergonomic monitors, laser printers, or bulk copier paper reams to initiate your procurement order.
          </p>
          <div className="empty-cart-actions mt-6 flex justify-center gap-4">
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Product Catalog <ArrowRight size={18} />
            </Link>
            <Link to="/orders" className="btn btn-outline btn-lg">
              View Past Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-root">
      {/* 1. Header Banner */}
      <div className="cart-header-bar">
        <div className="container flex-between">
          <div>
            <span className="cart-eyebrow">Procurement Summary</span>
            <h1 className="cart-h1">Corporate Shopping Cart ({cartCount} items)</h1>
          </div>
          <button className="clear-cart-link" onClick={clearCart}>
            <RotateCcw size={14} /> Clear Cart
          </button>
        </div>
      </div>

      <div className="container cart-body-container">
        <div className="cart-layout-grid">
          {/* Left Column: Cart Items List */}
          <div className="cart-items-column">
            {/* Bulk savings banner if eligible */}
            {bulkDiscountPercent > 0 && (
              <div className="bulk-savings-applied-banner">
                <Sparkles size={18} className="text-emerald" />
                <div>
                  <strong>{bulkDiscountPercent}% Volume Tier Applied!</strong>
                  <p className="text-xs">
                    You saved ₹{bulkDiscountAmount.toLocaleString('en-IN')} on corporate volume ordering.
                  </p>
                </div>
              </div>
            )}

            <div className="cart-items-table">
              {cart.map((item) => {
                const lineTotal = item.product.price * item.quantity;
                const isWishlisted = isInWishlist(item.product.id);

                return (
                  <div key={item.product.id} className="cart-item-row">
                    <div className="cart-item-media">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>

                    <div className="cart-item-details">
                      <div className="item-meta-line">
                        <span className="cat-chip">{item.product.category}</span>
                        <span className="sku-chip">SKU: {item.product.sku}</span>
                      </div>

                      <h3 className="item-title">
                        <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                      </h3>

                      <div className="item-unit-pricing">
                        <span className="unit-price">
                          ₹{item.product.price.toLocaleString('en-IN')} each
                        </span>
                        <span className="gst-itc-pill">18% GST ITC Eligible</span>
                      </div>

                      <div className="cart-item-actions-row">
                        {/* Quantity Controls */}
                        <div className="cart-qty-control">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            max={item.product.stock}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.product.id, e.target.value)
                            }
                            aria-label="Quantity"
                          />
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Save to Wishlist */}
                        <button
                          className="item-action-btn"
                          onClick={() => toggleWishlist(item.product)}
                        >
                          <Heart
                            size={15}
                            fill={isWishlisted ? '#e11d48' : 'none'}
                            color={isWishlisted ? '#e11d48' : 'currentColor'}
                          />
                          <span>{isWishlisted ? 'Saved' : 'Save for Later'}</span>
                        </button>

                        {/* Remove */}
                        <button
                          className="item-action-btn text-rose"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 size={15} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-linetotal">
                      <span className="linetotal-label">Item Total:</span>
                      <span className="linetotal-val">₹{lineTotal.toLocaleString('en-IN')}</span>
                      <span className="excl-gst-hint">
                        (Excl. GST: ₹{Math.round(lineTotal / 1.18).toLocaleString('en-IN')})
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Estimator Card */}
            <div className="cart-delivery-estimator-card">
              <div className="estimator-head">
                <Truck size={18} className="text-blue" />
                <div>
                  <h4 className="font-semibold text-sm">Delivery PIN Code Estimator</h4>
                  <p className="text-xs text-subtle">
                    Check standard transit times to your commercial facility.
                  </p>
                </div>
              </div>
              <form onSubmit={handleCheckPin} className="estimator-form">
                <div className="pin-input-wrap">
                  <MapPin size={16} />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Office PIN (e.g. 110001)"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                <button type="submit" className="btn btn-secondary btn-sm">
                  Estimate
                </button>
              </form>

              {pinEstimate && (
                <div className="pin-result-banner">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>
                    Estimated dispatch to PIN <strong>{pinEstimate.pin}</strong>: <strong>{pinEstimate.days}</strong> (Express Commercial Courier).
                  </span>
                </div>
              )}
            </div>

            {/* Print Cart Summary for Internal Approval */}
            <div className="cart-approval-card">
              <div className="flex items-center gap-3">
                <FileDown size={20} className="text-blue" />
                <div>
                  <h5 className="font-semibold text-sm">Need Departmental PO Approval?</h5>
                  <p className="text-xs text-subtle">
                    Generate an instant printable cart quotation to submit to your finance / approval manager.
                  </p>
                </div>
              </div>
              <button className="btn btn-outline btn-sm" onClick={handlePrintCart}>
                Print Cart Summary
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout */}
          <div className="cart-summary-column">
            <div className="order-summary-card">
              <h3 className="summary-title">Corporate Order Summary</h3>

              {/* Promo Coupon Form */}
              <div className="coupon-block">
                {appliedCoupon ? (
                  <div className="applied-coupon-pill">
                    <div>
                      <span className="coupon-code-badge">{appliedCoupon.code}</span>
                      <p className="coupon-desc">{appliedCoupon.description}</p>
                    </div>
                    <button className="remove-coupon-btn" onClick={removeCoupon}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="coupon-form">
                    <div className="coupon-input-wrap">
                      <Tag size={15} />
                      <input
                        type="text"
                        placeholder="Coupon (e.g. OFFICE10, BULK5)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-sm">
                      Apply
                    </button>
                  </form>
                )}
                <div className="sample-coupons-hint">
                  Try <strong>OFFICE10</strong> (10% off) or <strong>FREESHIP</strong>
                </div>
              </div>

              {/* Price Calculations */}
              <div className="summary-lines">
                <div className="summary-line">
                  <span>Subtotal ({cartCount} items):</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                {bulkDiscountAmount > 0 && (
                  <div className="summary-line text-emerald">
                    <span>Volume Tier Discount ({bulkDiscountPercent}%):</span>
                    <span>-₹{bulkDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {couponDiscountAmount > 0 && (
                  <div className="summary-line text-emerald">
                    <span>Coupon Discount:</span>
                    <span>-₹{couponDiscountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="summary-line text-blue">
                  <span>Estimated 18% GST (ITC Eligible):</span>
                  <span>+₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="summary-line">
                  <span>Corporate Surface Shipping:</span>
                  <span>{baseShipping === 0 ? <strong className="text-emerald">FREE</strong> : `₹${baseShipping}`}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-grand-total">
                  <div>
                    <span className="grand-label">Grand Total (INR):</span>
                    <span className="grand-tax-hint">Inclusive of all applicable taxes</span>
                  </div>
                  <span className="grand-total-val">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                className="btn btn-primary btn-block btn-lg mt-4"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Corporate Checkout <ArrowRight size={18} />
              </button>

              <div className="summary-assurance-footer">
                <ShieldCheck size={16} className="text-blue" />
                <span>GST Tax Invoicing & Purchase Order (PO) Supported</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  CheckCircle2,
  Printer,
  FileText,
  Package,
  Building2,
  Truck,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const { getOrder } = useCart();

  const order = getOrder(orderId);

  const handlePrintInvoice = () => {
    window.print();
  };

  if (!order) {
    return (
      <div className="container py-16 text-center">
        <h2>Order Confirmation</h2>
        <p className="text-subtle mt-2">Order ID: <strong>{orderId}</strong></p>
        <p className="text-subtle mt-1">Thank you for your business procurement order.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/orders" className="btn btn-primary">
            View All Orders
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Delivery date estimate (3 business days from now)
  const estDate = new Date();
  estDate.setDate(estDate.getDate() + 3);
  const formattedDeliveryDate = estDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="order-success-page-root">
      {/* 1. Header Banner */}
      <div className="success-banner">
        <div className="container text-center">
          <div className="success-icon-badge">
            <CheckCircle2 size={44} className="text-emerald" />
          </div>
          <span className="success-eyebrow">Corporate Order Confirmed</span>
          <h1 className="success-title">Thank You for Your Business Order!</h1>
          <p className="success-order-id">
            Order Reference: <strong>{order.orderId}</strong>
          </p>
          <div className="success-meta-pills">
            <span className="meta-pill">
              <Calendar size={14} /> Est. Delivery: {formattedDeliveryDate}
            </span>
            <span className="meta-pill">
              <Building2 size={14} /> Billed to: {order.billing.companyName}
            </span>
            <span className="meta-pill">
              <ShieldCheck size={14} /> 18% GST Input Credit Invoice Ready
            </span>
          </div>

          <div className="success-actions-row no-print">
            <button className="btn btn-primary" onClick={handlePrintInvoice}>
              <Printer size={16} /> Print / Download GST Tax Invoice
            </button>
            <Link to="/orders" className="btn btn-outline">
              <Package size={16} /> View in Order History
            </Link>
            <Link to="/products" className="btn btn-ghost">
              Continue Procurement <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Simulated Printable GST Tax Invoice Component */}
      <div className="container invoice-preview-container">
        <div className="invoice-paper" id="gst-invoice-sheet">
          {/* Invoice Header */}
          <div className="invoice-header-row">
            <div className="invoice-seller">
              <div className="brand-logo mb-2">
                <Building2 size={24} className="brand-icon" />
                <span className="brand-name">Office<span className="text-blue">Kart</span></span>
              </div>
              <p className="seller-address">
                OfficeKart Commercial Solutions Pvt Ltd<br />
                Level 8, DLF Cyber Park, Gurugram, HR 122002<br />
                GSTIN: <strong>07AAAFO0192A1Z4</strong><br />
                State: Haryana (Code: 07)
              </p>
            </div>

            <div className="invoice-title-block">
              <h2 className="tax-invoice-heading">TAX INVOICE</h2>
              <span className="tax-rule-sub">(ORIGINAL FOR RECIPIENT — B2B SUPPLY)</span>
              <table className="invoice-meta-table">
                <tbody>
                  <tr>
                    <th>Invoice No:</th>
                    <td className="font-mono">{order.orderId}</td>
                  </tr>
                  <tr>
                    <th>Invoice Date:</th>
                    <td>{new Date(order.createdAt).toLocaleDateString('en-IN')}</td>
                  </tr>
                  <tr>
                    <th>PO Reference:</th>
                    <td className="font-mono">{order.payment.poNumber || 'N/A (Card/UPI)'}</td>
                  </tr>
                  <tr>
                    <th>Payment Mode:</th>
                    <td>{order.payment.method}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="invoice-divider"></div>

          {/* Bill To & Ship To Grid */}
          <div className="invoice-parties-grid">
            <div className="party-box">
              <h4 className="party-title">Bill To (Buyer):</h4>
              <p className="party-content">
                <strong>{order.billing.companyName}</strong><br />
                Attn: {order.billing.contactName} ({order.billing.email})<br />
                GSTIN: <strong className="font-mono">{order.billing.gstin || 'UNREGISTERED'}</strong><br />
                Phone: {order.billing.phone}
              </p>
            </div>

            <div className="party-box">
              <h4 className="party-title">Ship To (Premises):</h4>
              <p className="party-content">
                {order.shipping.addressLine}<br />
                {order.shipping.city}, {order.shipping.state} — {order.shipping.pinCode}<br />
                Delivery Instructions: {order.shipping.deliveryNotes || 'Standard Reception'}
              </p>
            </div>
          </div>

          {/* Line Items Table with HSN codes & GST */}
          <div className="invoice-table-wrapper">
            <table className="invoice-items-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description of Goods</th>
                  <th>SKU</th>
                  <th>HSN</th>
                  <th>Qty</th>
                  <th>Unit Rate (₹)</th>
                  <th>Taxable Amt (₹)</th>
                  <th>GST %</th>
                  <th>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => {
                  const lineTotal = item.product.price * item.quantity;
                  const taxable = Math.round(lineTotal / 1.18);
                  return (
                    <tr key={item.product.id}>
                      <td>{index + 1}</td>
                      <td>
                        <strong>{item.product.name}</strong>
                      </td>
                      <td className="font-mono text-xs">{item.product.sku}</td>
                      <td className="font-mono text-xs">{item.product.hsnCode || '847130'}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.product.price.toLocaleString('en-IN')}</td>
                      <td>₹{taxable.toLocaleString('en-IN')}</td>
                      <td>18%</td>
                      <td>₹{lineTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Invoice Summary & Tax Split */}
          <div className="invoice-bottom-grid">
            <div className="invoice-tax-breakup">
              <h5 className="font-bold text-xs uppercase mb-2">GST Tax Split (18% ITC Eligible):</h5>
              <div className="tax-split-row">
                <span>Central GST (CGST 9%):</span>
                <span>₹{Math.round(order.summary.gstAmount / 2).toLocaleString('en-IN')}</span>
              </div>
              <div className="tax-split-row">
                <span>State GST (SGST 9%):</span>
                <span>₹{Math.round(order.summary.gstAmount / 2).toLocaleString('en-IN')}</span>
              </div>
              <div className="tax-split-row font-semibold text-blue">
                <span>Total GST Component:</span>
                <span>₹{order.summary.gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <p className="tax-notes mt-2 text-xs text-subtle">
                Tax is payable on reverse charge: NO. Certified that the particulars given above are true and correct.
              </p>
            </div>

            <div className="invoice-totals-box">
              <div className="summary-row">
                <span>Subtotal (Catalog):</span>
                <span>₹{order.summary.subtotal.toLocaleString('en-IN')}</span>
              </div>
              {order.summary.bulkDiscountAmount > 0 && (
                <div className="summary-row text-emerald">
                  <span>Volume Tier ({order.summary.bulkDiscountPercent}%):</span>
                  <span>-₹{order.summary.bulkDiscountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              {order.summary.couponDiscountAmount > 0 && (
                <div className="summary-row text-emerald">
                  <span>Coupon Discount:</span>
                  <span>-₹{order.summary.couponDiscountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping & Handling:</span>
                <span>{order.summary.shippingFee === 0 ? 'FREE' : `₹${order.summary.shippingFee}`}</span>
              </div>
              <div className="invoice-grand-row">
                <span>Grand Total (INR):</span>
                <span className="invoice-grand-price">
                  ₹{order.summary.grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Invoice Footer Signatory */}
          <div className="invoice-signatory-row">
            <div className="terms-block">
              <strong>Terms & Conditions:</strong>
              <ol className="terms-list text-xs text-subtle">
                <li>Commercial goods supplied are covered under OEM onsite warranty.</li>
                <li>Eligible for 18% Input Tax Credit under Section 16 of the CGST Act.</li>
                <li>OfficeKart Customer Helpline: 1800-890-PROC</li>
              </ol>
            </div>
            <div className="signatory-block text-right">
              <span className="text-xs text-subtle">For OfficeKart Commercial Solutions Pvt Ltd</span>
              <div className="signature-stamp">
                <span className="digital-stamp">AUTHORIZED SIGNATORY</span>
              </div>
              <span className="text-xs text-subtle">Authorized Representative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Package,
  FileText,
  Clock,
  Building2,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const OrderHistoryPage = () => {
  const navigate = useNavigate();
  const { orders, addToCart, showToast } = useCart();

  const handleReorder = (order) => {
    order.items.forEach((item) => {
      addToCart(item.product, item.quantity);
    });
    showToast(`Added ${order.items.length} items from ${order.orderId} to cart!`, 'success');
    navigate('/cart');
  };

  return (
    <div className="order-history-page-root">
      {/* 1. Header Bar */}
      <div className="history-header-bar">
        <div className="container flex-between">
          <div>
            <span className="history-eyebrow">Enterprise Procurement Management</span>
            <h1 className="history-h1">Corporate Order History & GST Invoices</h1>
          </div>
          <Link to="/products" className="btn btn-primary btn-sm">
            + New Procurement Order
          </Link>
        </div>
      </div>

      <div className="container history-container">
        {orders.length === 0 ? (
          <div className="history-empty-card text-center py-16">
            <div className="empty-icon-circle mx-auto">
              <Package size={44} className="text-blue" />
            </div>
            <h3 className="text-xl font-bold mt-4">No Past Corporate Orders Found</h3>
            <p className="text-subtle max-w-md mx-auto mt-2">
              Orders placed during your session will appear here with downloadable GST invoices, HSN breakdowns, and one-click reordering.
            </p>
            <div className="mt-6">
              <Link to="/products" className="btn btn-primary">
                Browse Office IT & Stationery Catalog <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="orders-stack">
            {orders.map((order) => {
              const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div key={order.orderId} className="order-history-card">
                  {/* Order Top Bar */}
                  <div className="order-top-bar">
                    <div className="order-id-group">
                      <span className="order-id-label">ORDER ID:</span>
                      <span className="order-id-val font-mono">{order.orderId}</span>
                      <span className="order-status-badge">
                        <Clock size={13} /> {order.status}
                      </span>
                    </div>

                    <div className="order-top-actions">
                      <Link
                        to={`/order-success/${order.orderId}`}
                        className="btn btn-outline btn-sm"
                      >
                        <FileText size={15} /> View / Print Tax Invoice
                      </Link>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleReorder(order)}
                      >
                        <RotateCcw size={15} /> Reorder Items
                      </button>
                    </div>
                  </div>

                  {/* Order Meta Strip */}
                  <div className="order-meta-strip">
                    <div className="meta-col">
                      <span className="label">Date Placed:</span>
                      <span className="val">{orderDate}</span>
                    </div>
                    <div className="meta-col">
                      <span className="label">Billed Entity:</span>
                      <span className="val">{order.billing.companyName}</span>
                    </div>
                    <div className="meta-col">
                      <span className="label">GSTIN:</span>
                      <span className="val font-mono">{order.billing.gstin || 'Unregistered'}</span>
                    </div>
                    <div className="meta-col">
                      <span className="label">Grand Total:</span>
                      <span className="val font-bold text-blue">
                        ₹{order.summary.grandTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="order-items-preview">
                    {order.items.map((item) => (
                      <div key={item.product.id} className="history-item-mini">
                        <img src={item.product.image} alt={item.product.name} />
                        <div className="history-item-info">
                          <Link
                            to={`/product/${item.product.id}`}
                            className="item-name font-semibold text-sm line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <div className="item-specs-sub">
                            <span className="sku-tag">SKU: {item.product.sku}</span>
                            <span>Qty: {item.quantity}</span>
                            <span>₹{item.product.price.toLocaleString('en-IN')} each</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Strip */}
                  <div className="order-footer-strip">
                    <div className="footer-left-info">
                      <ShieldCheck size={16} className="text-blue" />
                      <span className="text-xs text-subtle">
                        GST Component: ₹{order.summary.gstAmount.toLocaleString('en-IN')} (Eligible for 18% Input Tax Credit)
                      </span>
                    </div>
                    <span className="dispatch-dest text-xs text-subtle">
                      Dispatch To: {order.shipping.city}, {order.shipping.state}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

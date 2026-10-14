import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Building2, CheckCircle2, Calculator, Sparkles, Phone, Mail, FileText } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const BulkQuoteModal = () => {
  const { quoteModalOpen, closeQuoteModal, quoteItem, showToast } = useCart();

  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState(quoteItem?.category || 'Laptops & Computers');
  const [targetQuantity, setTargetQuantity] = useState(25);
  const [notes, setNotes] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [generatedQuoteRef, setGeneratedQuoteRef] = useState('');

  if (!quoteModalOpen) return null;

  // Calculate estimated savings based on quantity
  let estimatedDiscount = 5;
  if (targetQuantity >= 50) estimatedDiscount = 15;
  else if (targetQuantity >= 20) estimatedDiscount = 12;
  else if (targetQuantity >= 10) estimatedDiscount = 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName.trim() || !workEmail.trim()) {
      showToast('Please provide Company Name and Work Email', 'error');
      return;
    }

    const ref = `OK-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedQuoteRef(ref);
    setQuoteSubmitted(true);
    showToast(`Quote Request ${ref} submitted successfully!`, 'success');
  };

  const resetAndClose = () => {
    setQuoteSubmitted(false);
    setCompanyName('');
    setWorkEmail('');
    setPhoneNumber('');
    setNotes('');
    closeQuoteModal();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-dialog bulk-quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {quoteSubmitted ? (
          <div className="quote-success-view">
            <div className="quote-success-icon">
              <CheckCircle2 size={56} className="text-emerald" />
            </div>
            <h2>Corporate Quotation Generated!</h2>
            <p className="quote-ref-badge">Reference ID: <strong>{generatedQuoteRef}</strong></p>
            <p className="quote-success-desc">
              Thank you, <strong>{companyName}</strong>. Our Enterprise Procurement Desk has registered your RFQ for <strong>{targetQuantity} units</strong> in <strong>{category}</strong> with an estimated <strong>{estimatedDiscount}% bulk procurement saving</strong>.
            </p>
            <div className="quote-summary-box">
              <div className="summary-row">
                <span>Account Assigned:</span>
                <strong>Enterprise Accounts Desk (North India)</strong>
              </div>
              <div className="summary-row">
                <span>GST Tax Credit Invoice:</span>
                <strong>Eligible (18% ITC)</strong>
              </div>
              <div className="summary-row">
                <span>Response SLA:</span>
                <strong>Within 2 Business Hours</strong>
              </div>
            </div>
            <button className="btn btn-primary btn-block mt-4" onClick={resetAndClose}>
              Back to Catalog
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <div className="modal-badge">
                <Building2 size={15} /> B2B Volume Procurement
              </div>
              <h2 className="modal-title">Request Bulk Corporate Quotation</h2>
              <p className="modal-subtitle">
                Procuring for 10+ workstations, office floors, or quarterly stationery replenishment? Get tiered corporate pricing & GST invoices.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              {quoteItem && (
                <div className="selected-product-banner">
                  <img src={quoteItem.image} alt={quoteItem.name} className="mini-thumb" />
                  <div>
                    <span className="text-xs text-subtle">Selected Item:</span>
                    <div className="font-semibold text-sm line-clamp-1">{quoteItem.name}</div>
                    <span className="sku-badge">SKU: {quoteItem.sku}</span>
                  </div>
                </div>
              )}

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="comp-name">Company / Organization *</label>
                  <div className="input-with-icon">
                    <Building2 size={16} />
                    <input
                      id="comp-name"
                      type="text"
                      required
                      placeholder="e.g. Acme Technologies Pvt Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="work-email">Work Email *</label>
                  <div className="input-with-icon">
                    <Mail size={16} />
                    <input
                      id="work-email"
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="contact-phone">Contact Phone</label>
                  <div className="input-with-icon">
                    <Phone size={16} />
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="quote-category">Procurement Category</label>
                  <select
                    id="quote-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="flex-between">
                  <label htmlFor="target-qty">Target Quantity: <strong>{targetQuantity} units</strong></label>
                  <span className="savings-highlight">
                    <Sparkles size={14} /> Est. Tier Discount: {estimatedDiscount}% OFF
                  </span>
                </div>
                <input
                  id="target-qty"
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={targetQuantity}
                  onChange={(e) => setTargetQuantity(parseInt(e.target.value, 10))}
                  className="range-slider"
                />
                <div className="range-ticks">
                  <span>5 units (5%)</span>
                  <span>20 units (12%)</span>
                  <span>50+ units (15%)</span>
                  <span>250 units</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-notes">Requirements / Delivery Specifications</label>
                <textarea
                  id="quote-notes"
                  rows="2"
                  placeholder="Mention delivery location, GSTIN requirements, or target delivery dates..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={resetAndClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <FileText size={16} /> Generate Corporate Quotation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

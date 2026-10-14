import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BusinessProcurementSection } from '../components/BusinessProcurementSection';
import {
  Building2,
  FileCheck2,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Calculator,
  Laptop,
  BookOpen,
  Layers,
  Award,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const ProcurementPage = () => {
  const { openQuoteModal } = useCart();

  return (
    <div className="procurement-page-root">
      {/* 1. Page Header */}
      <div className="procurement-header-banner">
        <div className="container text-center">
          <div className="section-badge mx-auto">
            <Building2 size={16} /> Enterprise Procurement Program
          </div>
          <h1 className="procurement-h1">
            Corporate IT & Stationery Supply Simplified
          </h1>
          <p className="procurement-lead">
            Eliminate vendor fragmentation, streamline purchase order reconciliation, and access guaranteed 18% GST Input Tax Credit on every order.
          </p>

          <div className="procurement-header-actions mt-6 flex justify-center gap-4">
            <button className="btn btn-primary btn-lg" onClick={() => openQuoteModal()}>
              <Sparkles size={18} /> Request Custom Corporate RFQ
            </button>
            <Link to="/products" className="btn btn-outline btn-lg">
              Explore Centralized Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Full Procurement Section & Interactive Volume Calculator */}
      <BusinessProcurementSection />

      {/* 3. Detailed Procurement Workflow */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">How It Works</div>
            <h2 className="section-title">4-Step Corporate Procurement Flow</h2>
            <p className="section-sub">
              Designed for administrative heads, facility managers, and IT infrastructure leads.
            </p>
          </div>

          <div className="workflow-steps-grid">
            <div className="workflow-step-card">
              <span className="step-circle">01</span>
              <h4>Browse & Select SKUs</h4>
              <p>
                Choose from verified enterprise laptops, monitors, laser copiers, and high-brightness A4 paper with published HSN codes and inventory counts.
              </p>
            </div>

            <div className="workflow-step-card">
              <span className="step-circle">02</span>
              <h4>Automated Volume Rebates</h4>
              <p>
                Add 5 to 50+ units to your cart. Tiered discounts (5%, 8%, 12%) automatically calculate without back-and-forth negotiation emails.
              </p>
            </div>

            <div className="workflow-step-card">
              <span className="step-circle">03</span>
              <h4>B2B Checkout & PO Tagging</h4>
              <p>
                Enter your company GSTIN and internal PO Reference. Choose corporate cards, Net 30 simulated PO terms, or company net banking.
              </p>
            </div>

            <div className="workflow-step-card">
              <span className="step-circle">04</span>
              <h4>Dispatched with GST Invoice</h4>
              <p>
                Download a fully compliant 18% ITC tax invoice with CGST + SGST / IGST breakdown ready for your accounts payable desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate FAQ */}
      <section className="procurement-faq-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">Procurement FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-q">Can we claim full 18% GST Input Tax Credit (ITC)?</h4>
              <p className="faq-a">
                Yes. All commercial IT equipment and office stationery sold on OfficeKart come with official tax invoices bearing your corporate GSTIN and respective HSN codes for seamless GSTR-2B reconciliation.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-q">How does Net 30 Purchase Order (PO) settlement work in this demo?</h4>
              <p className="faq-a">
                During checkout, select "Net 30 Purchase Order" and provide your company's internal PO reference number. The order is logged with your PO reference and saved to your LocalStorage order history.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-q">Are laptop warranties commercial or consumer grade?</h4>
              <p className="faq-a">
                All business laptops and workstation towers on OfficeKart include commercial 3-Year comprehensive onsite manufacturer warranties covering enterprise hardware replacement.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-q">What is the delivery timeline for high-volume paper pallets?</h4>
              <p className="faq-a">
                High-volume shipments (10+ reams/cartons) are dispatched via scheduled commercial surface cargo with liftgate assistance, typically reaching major metropolitan tech parks within 2 to 4 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

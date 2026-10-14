import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import {
  Building2,
  ShieldCheck,
  Truck,
  CreditCard,
  FileCheck2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

export const Footer = () => {
  const navigate = useNavigate();
  const { setSelectedCategory, openQuoteModal } = useCart();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* 1. Value Proposition Highlights Bar */}
      <div className="footer-highlights-bar">
        <div className="container">
          <div className="footer-highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon-wrap">
                <FileCheck2 size={24} className="text-blue" />
              </div>
              <div className="highlight-text">
                <h4>GST Compliant Invoicing</h4>
                <p>18% Input Tax Credit (ITC) for registered businesses with HSN codes</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-wrap">
                <Truck size={24} className="text-blue" />
              </div>
              <div className="highlight-text">
                <h4>Express Office Delivery</h4>
                <p>Free standard dispatch on orders over ₹999. Pallet drops available.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-wrap">
                <ShieldCheck size={24} className="text-blue" />
              </div>
              <div className="highlight-text">
                <h4>Enterprise Warranty</h4>
                <p>3-Year OEM commercial onsite coverage & 7-day office return policy</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon-wrap">
                <CreditCard size={24} className="text-blue" />
              </div>
              <div className="highlight-text">
                <h4>Flexible B2B Settlement</h4>
                <p>Corporate credit cards, Net 30 purchase orders & UPI supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="footer-main-content">
        <div className="container">
          <div className="footer-columns-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-col brand-col">
              <div className="brand-logo footer-logo">
                <Building2 size={24} className="brand-icon" />
                <span className="brand-name">Office<span className="text-blue">Kart</span></span>
              </div>
              <p className="footer-about-text">
                OfficeKart is India's premier B2B corporate procurement platform. We equip enterprise workforces, startups, and institutions with commercial IT hardware, networking systems, and bulk office stationery.
              </p>
              <div className="footer-contact-info">
                <div className="contact-line">
                  <MapPin size={15} />
                  <span>Level 8, Cyber City Tech Park, DLF Phase II, Gurugram, India</span>
                </div>
                <div className="contact-line">
                  <Phone size={15} />
                  <span>Corporate Procurement: +91 (0124) 489-7000</span>
                </div>
                <div className="contact-line">
                  <Mail size={15} />
                  <span>b2b-procurement@officekart.in</span>
                </div>
              </div>
            </div>

            {/* Column 2: Product Categories (1-5) */}
            <div className="footer-col">
              <h5 className="footer-col-title">IT & Electronics</h5>
              <ul className="footer-links-list">
                {CATEGORIES.slice(0, 5).map((cat) => (
                  <li key={cat.id}>
                    <button
                      className="footer-link-btn"
                      onClick={() => handleCategoryClick(cat.name)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Product Categories (6-10) */}
            <div className="footer-col">
              <h5 className="footer-col-title">Stationery & Supplies</h5>
              <ul className="footer-links-list">
                {CATEGORIES.slice(5).map((cat) => (
                  <li key={cat.id}>
                    <button
                      className="footer-link-btn"
                      onClick={() => handleCategoryClick(cat.name)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Corporate Solutions */}
            <div className="footer-col">
              <h5 className="footer-col-title">Procurement Solutions</h5>
              <ul className="footer-links-list">
                <li>
                  <button className="footer-link-btn" onClick={() => openQuoteModal()}>
                    Request Bulk Quote (RFQ)
                  </button>
                </li>
                <li>
                  <Link to="/procurement" className="footer-link-btn">
                    Business Buyer Program
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="footer-link-btn">
                    Demo Order Tracking & Invoices
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="footer-link-btn">
                    Full Centralized Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="footer-link-btn">
                    Corporate Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Prototype Scope Note */}
          <div className="footer-prototype-disclaimer">
            <div className="disclaimer-badge">Prototype Demo Notice</div>
            <p>
              This is a client-facing frontend prototype for <strong>OfficeKart</strong>. Demonstrates responsive B2B shopping, catalog filtering, cart state, simulated GST invoicing, and LocalStorage order persistence. Real credit cards, banking credentials, inventory sync, and actual parcel delivery tracking are simulated.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <div className="copyright-text">
            © {new Date().getFullYear()} OfficeKart Commercial Solutions Pvt Ltd. All rights reserved.
          </div>
          <div className="bottom-bar-badges">
            <span className="compliance-tag">ISO 9001:2015 Certified Supply Chain</span>
            <span className="compliance-tag">GSTIN: 07AAAFO0192A1Z4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

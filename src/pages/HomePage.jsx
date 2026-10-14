import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { BusinessProcurementSection } from '../components/BusinessProcurementSection';
import {
  Building2,
  Search,
  ArrowRight,
  ShieldCheck,
  Truck,
  FileCheck2,
  Percent,
  CheckCircle2,
  Sparkles,
  Layers,
  Laptop,
  BookOpen,
  ChevronRight,
  Headphones,
  Award
} from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();
  const { setSelectedCategory, openQuoteModal, setSearchQuery } = useCart();
  const [activeTab, setActiveTab] = useState('all');

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate('/products');
  };

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  const itProducts = PRODUCTS.filter((p) =>
    [
      'Laptops & Computers',
      'Monitors & Displays',
      'Printers & Scanners',
      'Computer Accessories',
      'Networking Equipment',
      'Storage & Data Devices'
    ].includes(p.category)
  ).slice(0, 4);

  const stationeryProducts = PRODUCTS.filter((p) =>
    [
      'Office Stationery',
      'Paper & Notebooks',
      'Writing Instruments',
      'Office Organization & Supplies'
    ].includes(p.category)
  ).slice(0, 4);

  return (
    <div className="home-page-root">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Building2 size={16} /> India's Premier B2B Office Store
            </div>
            <h1 className="hero-title">
              Consolidated Office IT Equipment & Corporate Stationery
            </h1>
            <p className="hero-subtitle">
              Equip your corporate workforces, branch offices, and procurement teams with enterprise-grade IT hardware and bulk desk supplies with guaranteed 18% GST Input Tax Credit.
            </p>

            {/* Quick Hero Search & Actions */}
            <div className="hero-action-buttons">
              <Link to="/products" className="btn btn-primary btn-lg">
                Browse Full Catalog <ArrowRight size={18} />
              </Link>
              <button
                className="btn btn-outline btn-lg"
                onClick={() => openQuoteModal()}
              >
                <Sparkles size={18} /> Request Bulk Quote
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="hero-trust-bar">
              <div className="trust-pill">
                <ShieldCheck size={16} className="text-blue" />
                <span>GST Invoicing (18% ITC)</span>
              </div>
              <div className="trust-pill">
                <Truck size={16} className="text-blue" />
                <span>Express Pan-India Dispatch</span>
              </div>
              <div className="trust-pill">
                <Award size={16} className="text-blue" />
                <span>Commercial Onsite Warranty</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="procurement-hero-card">
              <div className="card-top-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="window-title">B2B Procurement Hub — Live Catalog</span>
              </div>

              <div className="hero-promo-item">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
                  alt="Commercial Laptop"
                  className="hero-promo-img"
                />
                <div className="hero-promo-info">
                  <span className="sku-tag">SKU: OK-IT-LAP-001</span>
                  <h4>ThinkPro Elite 15.6" Business Laptop</h4>
                  <p className="price-tag">₹68,990 <span className="mrp-strike">₹84,990</span></p>
                  <span className="gst-saved-pill">Save ₹12,418 on 18% GST ITC</span>
                </div>
              </div>

              <div className="hero-card-divider"></div>

              <div className="hero-quick-stats">
                <div className="stat-cell">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Verified Commercial SKUs</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Core Office Categories</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-number">Up to 15%</span>
                  <span className="stat-label">Tiered Volume Rebate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. All 10 Office Procurement Categories Showcase */}
      <section className="section-categories">
        <div className="container">
          <div className="section-head flex-between">
            <div>
              <div className="section-badge">10 Standard Categories</div>
              <h2 className="section-title">Explore Departmental Categories</h2>
              <p className="section-sub">
                From server-grade networking cables to heavy-duty paper punches.
              </p>
            </div>
            <Link
              to="/products"
              className="view-all-link"
              onClick={() => setSelectedCategory('All')}
            >
              <span>View All Products</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="categories-grid-10">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="cat-card-media">
                  <img src={category.image} alt={category.name} loading="lazy" />
                  <span className="cat-badge">{category.badge}</span>
                </div>
                <div className="cat-card-body">
                  <h3 className="cat-title">{category.name}</h3>
                  <p className="cat-desc line-clamp-2">{category.description}</p>
                  <div className="cat-card-footer">
                    <span className="cat-count">{category.itemCount} Items</span>
                    <span className="cat-action-arrow">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Corporate Deals */}
      <section className="section-featured-products">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">
              <Sparkles size={15} /> Top Corporate Picks
            </div>
            <h2 className="section-title">Featured Procurement Deals</h2>
            <p className="section-sub">
              High-volume favorites trusted by IT managers, administrative heads, and facility executives.
            </p>
          </div>

          <div className="product-grid-4">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/products" className="btn btn-secondary btn-lg">
              Explore All 20 Commercial SKUs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Dual Tabs Section: IT Equipment vs. Office Stationery */}
      <section className="section-tabs-showcase">
        <div className="container">
          <div className="tabs-header-wrap">
            <div className="tabs-pill-container">
              <button
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                <Layers size={16} /> All Corporate Essentials
              </button>
              <button
                className={`tab-btn ${activeTab === 'it' ? 'active' : ''}`}
                onClick={() => setActiveTab('it')}
              >
                <Laptop size={16} /> IT Infrastructure & Peripherals
              </button>
              <button
                className={`tab-btn ${activeTab === 'stationery' ? 'active' : ''}`}
                onClick={() => setActiveTab('stationery')}
              >
                <BookOpen size={16} /> Paper, Writing & Desk Stationery
              </button>
            </div>
          </div>

          <div className="product-grid-4 mt-6">
            {activeTab === 'it' &&
              itProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            {activeTab === 'stationery' &&
              stationeryProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            {activeTab === 'all' &&
              PRODUCTS.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* 5. Business Procurement & Volume Calculator Section */}
      <BusinessProcurementSection />

      {/* 6. Why Enterprise Buyers Rely on OfficeKart */}
      <section className="section-why-us">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">The OfficeKart Standard</div>
            <h2 className="section-title">Built for Procurement Transparency</h2>
            <p className="section-sub">
              Modern businesses need predictability, rapid logistics, and rock-solid tax compliance.
            </p>
          </div>

          <div className="features-grid-3">
            <div className="feature-box">
              <div className="feature-icon">
                <FileCheck2 size={26} className="text-blue" />
              </div>
              <h3>Automated 18% GST Invoicing</h3>
              <p>
                Every transaction includes your verified corporate GSTIN, standard HSN codes, and exact CGST+SGST/IGST breakdown for immediate tax credit reconciliation.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <Percent size={26} className="text-emerald" />
              </div>
              <h3>Transparent Volume Tiers</h3>
              <p>
                No haggling or prolonged negotiation. Tiered discounts (5%, 8%, 12%) automatically activate in your cart as unit volumes scale up.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <Building2 size={26} className="text-indigo" />
              </div>
              <h3>Net 30 Purchase Orders (PO)</h3>
              <p>
                Simulate enterprise purchase order approval workflows with PO reference tracking and unified monthly billing settlement for verified accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Corporate Brand / Procurement Banner */}
      <section className="corporate-banner-cta">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-text">
              <span className="cta-sub">Ready to optimize your office supply chain?</span>
              <h2>Start Your Corporate Procurement Setup Today</h2>
              <p>
                Get access to bulk discounted catalog pricing, priority dispatch slots, and dedicated key account support.
              </p>
            </div>
            <div className="cta-banner-actions">
              <button
                className="btn btn-white btn-lg"
                onClick={() => openQuoteModal()}
              >
                Request Custom RFQ
              </button>
              <Link to="/products" className="btn btn-ghost-white btn-lg">
                View Full Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

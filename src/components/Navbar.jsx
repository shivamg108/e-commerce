import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import {
  Search,
  ShoppingCart,
  Heart,
  Building2,
  Package,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';

export const Navbar = () => {
  const navigate = useNavigate();
  const {
    cartCount,
    cartSubtotal,
    wishlist,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    openQuoteModal
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchFilterCategory, setSearchFilterCategory] = useState('All');
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Close search recommendations on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Filter recommendations based on live search
  const filteredSuggestions = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const query = searchQuery.toLowerCase();
        const matchesCategory =
          searchFilterCategory === 'All' || p.category === searchFilterCategory;
        const matchesText =
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query);
        return matchesCategory && matchesText;
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchFocused(false);
    if (searchFilterCategory !== 'All') {
      setSelectedCategory(searchFilterCategory);
    }
    navigate('/products');
  };

  const handleSelectSuggestion = (product) => {
    setSearchFocused(false);
    navigate(`/product/${product.id}`);
  };

  const handleCategoryNav = (catName) => {
    setSelectedCategory(catName);
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/products');
  };

  return (
    <header className="header-root">
      {/* 1. Corporate Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <span className="announcement-badge">
              <ShieldCheck size={13} /> GST Invoice Guaranteed
            </span>
            <span className="announcement-text">
              18% Input Tax Credit (ITC) on all Business IT & Stationery Orders
            </span>
          </div>
          <div className="announcement-right">
            <span className="announcement-link" onClick={() => openQuoteModal()}>
              <Sparkles size={13} /> Request Bulk Quote (5+ Units)
            </span>
            <span className="divider-dot">•</span>
            <Link to="/orders" className="announcement-link">
              <Clock size={13} /> Track Demo Orders
            </Link>
            <span className="divider-dot">•</span>
            <span className="announcement-helpline">Corporate Desk: 1800-890-PROC</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="main-navbar">
        <div className="container nav-container">
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* OfficeKart Logo */}
          <Link to="/" className="brand-logo" onClick={() => setSelectedCategory('All')}>
            <div className="brand-icon-wrap">
              <Building2 size={22} className="brand-icon" />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">Office<span className="text-blue">Kart</span></span>
              <span className="brand-tagline">Corporate IT & Stationery</span>
            </div>
          </Link>

          {/* Search-First Form */}
          <div className="nav-search-container" ref={searchContainerRef}>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-category-select-wrap">
                <select
                  value={searchFilterCategory}
                  onChange={(e) => setSearchFilterCategory(e.target.value)}
                  className="search-category-select"
                  aria-label="Filter search by category"
                >
                  <option value="All">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="select-arrow-icon" />
              </div>

              <div className="search-input-wrap">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search laptops, laser printers, A4 paper, or SKU (e.g. OK-IT-LAP-001)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  className="search-input"
                  aria-label="Search products and SKU"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <button type="submit" className="search-submit-btn" aria-label="Submit search">
                <Search size={18} />
                <span className="search-btn-text">Search</span>
              </button>
            </form>

            {/* Live Autocomplete Suggestions Dropdown */}
            {searchFocused && (
              <div className="search-dropdown-results">
                {searchQuery.trim().length > 0 ? (
                  filteredSuggestions.length > 0 ? (
                    <div>
                      <div className="suggestion-header">
                        <span>Matching Products & SKUs</span>
                        <span className="text-xs text-subtle">{filteredSuggestions.length} found</span>
                      </div>
                      {filteredSuggestions.map((product) => (
                        <div
                          key={product.id}
                          className="suggestion-item"
                          onClick={() => handleSelectSuggestion(product)}
                        >
                          <img src={product.image} alt={product.name} className="suggestion-thumb" />
                          <div className="suggestion-info">
                            <span className="suggestion-title">{product.name}</span>
                            <div className="suggestion-meta">
                              <span className="suggestion-sku">SKU: {product.sku}</span>
                              <span className="suggestion-cat">{product.category}</span>
                            </div>
                          </div>
                          <div className="suggestion-price">
                            ₹{product.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                      ))}
                      <div className="suggestion-footer" onClick={handleSearchSubmit}>
                        <span>View all matching results for "{searchQuery}"</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  ) : (
                    <div className="search-no-results">
                      <p>No products found matching "<strong>{searchQuery}</strong>".</p>
                      <span className="text-xs text-subtle">Try searching by category or SKU number.</span>
                    </div>
                  )
                ) : (
                  <div className="search-recent-prompts">
                    <span className="text-xs font-semibold text-subtle">Quick Corporate Searches:</span>
                    <div className="quick-search-tags">
                      {['Business Laptop', 'A4 Copier Paper', 'Laser Printer', 'Cat6 Cable', 'Wireless Mouse'].map((term) => (
                        <button
                          key={term}
                          type="button"
                          className="quick-search-pill"
                          onClick={() => {
                            setSearchQuery(term);
                            navigate('/products');
                            setSearchFocused(false);
                          }}
                        >
                          <Search size={12} /> {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Action Icons & Controls */}
          <div className="nav-actions">
            {/* Bulk RFQ button */}
            <button
              onClick={() => openQuoteModal()}
              className="bulk-rfq-nav-btn"
              title="Request Corporate Bulk Quotation"
            >
              <FileText size={16} />
              <span className="nav-btn-text">Bulk Quote</span>
            </button>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="nav-icon-link" title="Procurement Wishlist">
              <div className="icon-badge-wrapper">
                <Heart size={21} />
                {wishlist.length > 0 && (
                  <span className="nav-badge wishlist-badge">{wishlist.length}</span>
                )}
              </div>
              <span className="nav-link-label">Saved</span>
            </Link>

            {/* Order History */}
            <Link to="/orders" className="nav-icon-link" title="Corporate Order History">
              <Package size={21} />
              <span className="nav-link-label">Orders</span>
            </Link>

            {/* Shopping Cart */}
            <Link to="/cart" className="nav-cart-btn" title="Corporate Shopping Cart">
              <div className="icon-badge-wrapper">
                <ShoppingCart size={22} />
                {cartCount > 0 && <span className="nav-badge cart-badge">{cartCount}</span>}
              </div>
              <div className="nav-cart-info">
                <span className="cart-label">Cart</span>
                <span className="cart-total-amount">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Secondary Category Bar */}
      <nav className="secondary-category-nav" aria-label="Product Categories">
        <div className="container subnav-container">
          {/* All Categories Dropdown Trigger */}
          <div className="all-categories-dropdown-wrap">
            <button
              className="all-categories-trigger"
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              aria-expanded={categoryDropdownOpen}
            >
              <Menu size={16} />
              <span>All 10 Categories</span>
              <ChevronDown size={14} className={`dropdown-arrow ${categoryDropdownOpen ? 'rotated' : ''}`} />
            </button>

            {categoryDropdownOpen && (
              <div className="category-popover-menu">
                <div className="category-menu-header">
                  <span>Procurement Categories</span>
                  <button
                    className="close-popover-btn"
                    onClick={() => setCategoryDropdownOpen(false)}
                    aria-label="Close categories"
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="category-menu-list">
                  <div
                    className={`category-menu-item ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => handleCategoryNav('All')}
                  >
                    <span>All Products ({PRODUCTS.length})</span>
                  </div>
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className={`category-menu-item ${selectedCategory === cat.name ? 'active' : ''}`}
                      onClick={() => handleCategoryNav(cat.name)}
                    >
                      <div className="cat-menu-item-text">
                        <span className="cat-item-name">{cat.name}</span>
                        <span className="cat-item-desc">{cat.description}</span>
                      </div>
                      <span className="cat-count-pill">{cat.itemCount} items</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Category Quick Links Horizontal Scroller */}
          <div className="category-quick-pills">
            <button
              className={`cat-pill ${selectedCategory === 'All' ? 'cat-pill-active' : ''}`}
              onClick={() => handleCategoryNav('All')}
            >
              All Items
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-pill ${selectedCategory === cat.name ? 'cat-pill-active' : ''}`}
                onClick={() => handleCategoryNav(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Right Links */}
          <div className="subnav-right-links">
            <Link to="/procurement" className="subnav-link">
              <Building2 size={14} /> Business Advantage
            </Link>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <Building2 size={20} className="brand-icon" />
                <span className="brand-name">Office<span className="text-blue">Kart</span></span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <div className="mobile-search-section">
                <form onSubmit={handleSearchSubmit} className="mobile-search-form">
                  <input
                    type="text"
                    placeholder="Search products or SKU..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" aria-label="Search">
                    <Search size={16} />
                  </button>
                </form>
              </div>

              <div className="mobile-section-heading">Office Categories</div>
              <div className="mobile-cat-list">
                <button
                  className={`mobile-cat-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => handleCategoryNav('All')}
                >
                  All Products ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className={`mobile-cat-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                    onClick={() => handleCategoryNav(cat.name)}
                  >
                    <span>{cat.name}</span>
                    <span className="badge-light">{cat.itemCount}</span>
                  </button>
                ))}
              </div>

              <div className="mobile-section-heading">Corporate Services</div>
              <div className="mobile-nav-links">
                <button
                  className="mobile-service-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                >
                  <FileText size={16} /> Request Bulk Corporate Quotation
                </button>
                <Link
                  to="/procurement"
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Building2 size={16} /> Business Procurement Hub
                </Link>
                <Link
                  to="/orders"
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Package size={16} /> Order History & GST Invoices
                </Link>
                <Link
                  to="/wishlist"
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart size={16} /> Saved Items ({wishlist.length})
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

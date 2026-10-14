import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  Grid,
  List,
  RotateCcw,
  Check,
  Star,
  ShieldCheck,
  PackageCheck,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  } = useCart();

  // Filter States
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [priceTier, setPriceTier] = useState('all'); // 'all', 'under1k', '1k-5k', '5k-20k', 'above20k'
  const [minRating, setMinRating] = useState(0); // 0, 4.0, 4.5, 4.8
  const [inStockOnly, setInStockOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating', 'discount', 'name'
  const [layoutView, setLayoutView] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync global search with local
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Handle URL category param if present
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [searchParams, setSelectedCategory]);

  // Main Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Search Query (Matches Name, SKU, Brand or Category)
      const q = localSearch.trim().toLowerCase();
      if (q) {
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSku = product.sku.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesBrand = product.brand?.toLowerCase().includes(q);
        if (!matchesName && !matchesSku && !matchesCategory && !matchesBrand) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory && selectedCategory !== 'All') {
        if (product.category !== selectedCategory) {
          return false;
        }
      }

      // 3. Price Tier
      if (priceTier === 'under1k' && product.price >= 1000) return false;
      if (priceTier === '1k-5k' && (product.price < 1000 || product.price > 5000)) return false;
      if (priceTier === '5k-20k' && (product.price < 5000 || product.price > 20000)) return false;
      if (priceTier === 'above20k' && product.price <= 20000) return false;

      // 4. Rating Filter
      if (minRating > 0 && product.rating < minRating) return false;

      // 5. In Stock Only
      if (inStockOnly && product.stock <= 0) return false;

      // 6. Featured Only
      if (featuredOnly && !product.featured) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return b.discount - a.discount;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // default 'featured'
      if (a.featured === b.featured) return b.rating - a.rating;
      return a.featured ? -1 : 1;
    });
  }, [localSearch, selectedCategory, priceTier, minRating, inStockOnly, featuredOnly, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setLocalSearch('');
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceTier('all');
    setMinRating(0);
    setInStockOnly(false);
    setFeaturedOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    localSearch.trim() !== '' ||
    selectedCategory !== 'All' ||
    priceTier !== 'all' ||
    minRating > 0 ||
    inStockOnly ||
    featuredOnly ||
    sortBy !== 'featured';

  return (
    <div className="product-listing-root">
      {/* 1. Header Banner with Search Bar & Quick Categories */}
      <div className="catalog-header-bar">
        <div className="container">
          <div className="catalog-title-row">
            <div>
              <span className="catalog-eyebrow">Enterprise Procurement Catalog</span>
              <h1 className="catalog-h1">
                {selectedCategory === 'All' ? 'All Corporate Office Products' : selectedCategory}
              </h1>
            </div>

            {/* Quick in-page Search & SKU input */}
            <div className="catalog-search-inline">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Filter by product name or SKU (e.g. OK-IT-LAP-001)..."
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setSearchQuery(e.target.value);
                }}
              />
              {localSearch && (
                <button
                  className="clear-search-btn"
                  onClick={() => {
                    setLocalSearch('');
                    setSearchQuery('');
                  }}
                  aria-label="Clear Search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Quick Horizontal Category Chips */}
          <div className="catalog-chips-scroll">
            <button
              className={`catalog-chip ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`catalog-chip ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid (Sidebar + Product Listings) */}
      <div className="container catalog-body-container">
        {/* Controls Bar */}
        <div className="catalog-controls-bar">
          <div className="controls-left">
            <button
              className="btn btn-outline btn-sm mobile-filter-btn"
              onClick={() => setMobileFilterOpen(true)}
            >
              <Filter size={15} /> Filters ({hasActiveFilters ? 'Active' : 'All'})
            </button>
            <span className="results-count-text">
              Showing <strong>{filteredProducts.length}</strong> of <strong>{PRODUCTS.length}</strong> products
            </span>
            {hasActiveFilters && (
              <button className="reset-filters-link" onClick={resetFilters}>
                <RotateCcw size={13} /> Clear all filters
              </button>
            )}
          </div>

          <div className="controls-right">
            {/* Sort Selector */}
            <div className="sort-selector-wrapper">
              <span className="sort-label">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Sort products"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount (%)</option>
                <option value="name">Name (A - Z)</option>
              </select>
            </div>

            {/* Grid / List View Toggle */}
            <div className="view-toggle-group">
              <button
                className={`view-toggle-btn ${layoutView === 'grid' ? 'active' : ''}`}
                onClick={() => setLayoutView('grid')}
                aria-label="Grid View"
                title="Grid View"
              >
                <Grid size={16} />
              </button>
              <button
                className={`view-toggle-btn ${layoutView === 'list' ? 'active' : ''}`}
                onClick={() => setLayoutView('list')}
                aria-label="List View"
                title="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="catalog-layout-grid">
          {/* Desktop Filter Sidebar */}
          <aside className="catalog-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header">
                <span className="sidebar-title">
                  <SlidersHorizontal size={16} /> Filter Products
                </span>
                {hasActiveFilters && (
                  <button className="reset-link-sm" onClick={resetFilters}>
                    Clear
                  </button>
                )}
              </div>

              {/* 1. Category Filter */}
              <div className="filter-group">
                <h4 className="filter-heading">Category</h4>
                <div className="filter-category-list">
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="categoryFilter"
                      checked={selectedCategory === 'All'}
                      onChange={() => setSelectedCategory('All')}
                    />
                    <span>All Products ({PRODUCTS.length})</span>
                  </label>
                  {CATEGORIES.map((cat) => (
                    <label key={cat.id} className="radio-filter-label">
                      <input
                        type="radio"
                        name="categoryFilter"
                        checked={selectedCategory === cat.name}
                        onChange={() => setSelectedCategory(cat.name)}
                      />
                      <span className="line-clamp-1">{cat.name} ({cat.itemCount})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Price Range Filter */}
              <div className="filter-group">
                <h4 className="filter-heading">Price Range</h4>
                <div className="filter-options-list">
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="priceTier"
                      checked={priceTier === 'all'}
                      onChange={() => setPriceTier('all')}
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="priceTier"
                      checked={priceTier === 'under1k'}
                      onChange={() => setPriceTier('under1k')}
                    />
                    <span>Under ₹1,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="priceTier"
                      checked={priceTier === '1k-5k'}
                      onChange={() => setPriceTier('1k-5k')}
                    />
                    <span>₹1,000 — ₹5,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="priceTier"
                      checked={priceTier === '5k-20k'}
                      onChange={() => setPriceTier('5k-20k')}
                    />
                    <span>₹5,000 — ₹20,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="priceTier"
                      checked={priceTier === 'above20k'}
                      onChange={() => setPriceTier('above20k')}
                    />
                    <span>Over ₹20,000</span>
                  </label>
                </div>
              </div>

              {/* 3. Availability Filter */}
              <div className="filter-group">
                <h4 className="filter-heading">Stock Availability</h4>
                <label className="checkbox-filter-label">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

              {/* 4. Featured Only */}
              <div className="filter-group">
                <h4 className="filter-heading">Promotions</h4>
                <label className="checkbox-filter-label">
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                  />
                  <span>Featured B2B Deals</span>
                </label>
              </div>

              {/* 5. Customer Rating Filter */}
              <div className="filter-group">
                <h4 className="filter-heading">Minimum Rating</h4>
                <div className="filter-options-list">
                  {[
                    { val: 0, label: 'All Ratings' },
                    { val: 4.8, label: '4.8 ★ & Above' },
                    { val: 4.5, label: '4.5 ★ & Above' },
                    { val: 4.0, label: '4.0 ★ & Above' }
                  ].map((r) => (
                    <label key={r.val} className="radio-filter-label">
                      <input
                        type="radio"
                        name="ratingFilter"
                        checked={minRating === r.val}
                        onChange={() => setMinRating(r.val)}
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* B2B Assurance Card */}
              <div className="sidebar-b2b-badge">
                <ShieldCheck size={20} className="text-blue" />
                <div>
                  <strong>GST ITC Invoicing</strong>
                  <p className="text-xs text-subtle">
                    Download official HSN-tagged tax invoices for input tax credit.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Cards Container */}
          <main className="catalog-products-main">
            {filteredProducts.length > 0 ? (
              <div className={layoutView === 'grid' ? 'product-grid-3' : 'product-list-stack'}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    layout={layoutView}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products-found">
                <div className="empty-icon-wrap">
                  <Search size={40} className="text-subtle" />
                </div>
                <h3>No Products Found</h3>
                <p>
                  No items match your filter criteria or search query: "<strong>{localSearch}</strong>".
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary" onClick={resetFilters}>
                    <RotateCcw size={16} /> Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileFilterOpen(false)}>
          <div className="mobile-drawer filter-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="sidebar-title">
                <SlidersHorizontal size={18} /> Filters
              </span>
              <button
                className="modal-close-btn"
                onClick={() => setMobileFilterOpen(false)}
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              {/* Category */}
              <div className="filter-group">
                <h4 className="filter-heading">Category</h4>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full select-input"
                >
                  <option value="All">All Categories ({PRODUCTS.length})</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.itemCount})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Tier */}
              <div className="filter-group">
                <h4 className="filter-heading">Price</h4>
                <div className="filter-options-list">
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="mPriceTier"
                      checked={priceTier === 'all'}
                      onChange={() => setPriceTier('all')}
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="mPriceTier"
                      checked={priceTier === 'under1k'}
                      onChange={() => setPriceTier('under1k')}
                    />
                    <span>Under ₹1,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="mPriceTier"
                      checked={priceTier === '1k-5k'}
                      onChange={() => setPriceTier('1k-5k')}
                    />
                    <span>₹1,000 — ₹5,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="mPriceTier"
                      checked={priceTier === '5k-20k'}
                      onChange={() => setPriceTier('5k-20k')}
                    />
                    <span>₹5,000 — ₹20,000</span>
                  </label>
                  <label className="radio-filter-label">
                    <input
                      type="radio"
                      name="mPriceTier"
                      checked={priceTier === 'above20k'}
                      onChange={() => setPriceTier('above20k')}
                    />
                    <span>Over ₹20,000</span>
                  </label>
                </div>
              </div>

              {/* Stock */}
              <div className="filter-group">
                <label className="checkbox-filter-label">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

              {/* Featured */}
              <div className="filter-group">
                <label className="checkbox-filter-label">
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                  />
                  <span>Featured Deals Only</span>
                </label>
              </div>
            </div>

            <div className="mobile-drawer-footer">
              <button className="btn btn-secondary" onClick={resetFilters}>
                Clear All
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setMobileFilterOpen(false)}
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

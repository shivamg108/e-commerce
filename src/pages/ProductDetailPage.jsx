import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, SAMPLE_REVIEWS, BULK_DISCOUNT_TIERS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingCart,
  Zap,
  Heart,
  Share2,
  Copy,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Building2,
  FileCheck2,
  Sparkles,
  ChevronRight,
  Info,
  Layers,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    showToast,
    openQuoteModal
  } = useCart();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [copiedSku, setCopiedSku] = useState(false);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'reviews' | 'procurement'
  
  // Review form state
  const [userReviews, setUserReviews] = useState(SAMPLE_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewCompany, setNewReviewCompany] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary mt-4">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const priceExclGst = Math.round(product.price / 1.18);
  const gstCreditAmount = product.price - priceExclGst;

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleCopySku = () => {
    navigator.clipboard.writeText(product.sku);
    setCopiedSku(true);
    showToast(`SKU ${product.sku} copied to clipboard!`, 'info');
    setTimeout(() => setCopiedSku(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) {
      showToast('Please enter your name and review', 'error');
      return;
    }
    const newRev = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor,
      designation: 'Procurement Specialist',
      company: newReviewCompany || 'Verified Enterprise Buyer',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment,
      verified: true
    };
    setUserReviews([newRev, ...userReviews]);
    setShowReviewModal(false);
    setNewReviewAuthor('');
    setNewReviewCompany('');
    setNewReviewComment('');
    showToast('Thank you! Corporate review published.', 'success');
  };

  return (
    <div className="product-detail-root">
      {/* 1. Breadcrumbs */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products">Catalog</Link>
            <ChevronRight size={14} />
            <Link to={`/products?category=${encodeURIComponent(product.category)}`}>
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span className="current-crumb line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. Main Product Info Layout */}
      <div className="container detail-main-container">
        <div className="detail-grid">
          {/* Left Column: Image Gallery */}
          <div className="detail-gallery-col">
            <div className="main-image-viewport">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="main-detail-img"
              />
              <span className="detail-discount-tag">Save {product.discount}%</span>
              <button
                className={`detail-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Save to Wishlist"
                title={isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
              >
                <Heart
                  size={20}
                  fill={isWishlisted ? '#e11d48' : 'none'}
                  color={isWishlisted ? '#e11d48' : '#64748b'}
                />
              </button>
            </div>

            {/* Thumbnails row */}
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-strip">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${selectedImage === imgUrl ? 'active' : ''}`}
                    onClick={() => setSelectedImage(imgUrl)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`${product.name} preview ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Enterprise Assurance Callout */}
            <div className="assurance-box">
              <div className="assurance-row">
                <ShieldCheck size={20} className="text-blue" />
                <div>
                  <strong>GST Tax Credit Guarantee</strong>
                  <p className="text-xs text-subtle">
                    Official HSN {product.hsnCode || '8471'} B2B invoice automatically generated with 18% Input Tax Credit.
                  </p>
                </div>
              </div>
              <div className="assurance-row">
                <Truck size={20} className="text-blue" />
                <div>
                  <strong>Safe Pallet & Office Dispatch</strong>
                  <p className="text-xs text-subtle">
                    Dispatched from Mumbai / NCR logistics hub with tamper-evident corporate packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Overview, Pricing, Quantity & Buying Actions */}
          <div className="detail-info-col">
            <div className="meta-badge-row">
              <span className="product-category-chip">{product.category}</span>
              <div className="sku-copy-pill" onClick={handleCopySku} title="Click to copy SKU">
                <span className="sku-text">SKU: {product.sku}</span>
                {copiedSku ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
              </div>
              {product.featured && (
                <span className="b2b-verified-badge">
                  <Sparkles size={12} /> B2B Preferred
                </span>
              )}
            </div>

            <h1 className="detail-title">{product.name}</h1>

            {/* Ratings & Stock Row */}
            <div className="detail-ratings-stock-row">
              <div className="rating-pill">
                <span>{product.rating}</span>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
              </div>
              <span className="review-link-text">
                {product.reviewCount} verified enterprise reviews
              </span>
              <span className="divider-dot">•</span>
              <span className="stock-tag-pill in-stock">
                <Check size={14} /> In Stock ({product.stock} units ready)
              </span>
            </div>

            {/* Pricing Card */}
            <div className="detail-pricing-card">
              <div className="price-top-line">
                <span className="detail-mrp-strike">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="detail-discount-percent">
                  {product.discount}% Corporate Discount
                </span>
              </div>

              <div className="detail-final-price">
                ₹{product.price.toLocaleString('en-IN')}
                <span className="gst-inclusive-label">(Incl. 18% GST)</span>
              </div>

              <div className="tax-credit-breakdown-card">
                <div className="breakdown-line">
                  <span>Excl. 18% GST Base Cost:</span>
                  <strong>₹{priceExclGst.toLocaleString('en-IN')}</strong>
                </div>
                <div className="breakdown-line text-blue">
                  <span>Eligible GST Input Tax Credit (18% ITC):</span>
                  <strong>+₹{gstCreditAmount.toLocaleString('en-IN')}</strong>
                </div>
                <div className="text-xs text-subtle mt-1">
                  * Input tax credit offsets your business GST liability directly.
                </div>
              </div>
            </div>

            {/* Bulk Volume Tier Discount Box */}
            <div className="bulk-tier-banner">
              <div className="bulk-tier-header">
                <div className="flex items-center gap-1">
                  <Building2 size={16} className="text-blue" />
                  <strong>Volume Procurement Discounts</strong>
                </div>
                <button
                  className="bulk-rfq-link"
                  onClick={() => openQuoteModal(product)}
                >
                  Request RFQ (50+ units)
                </button>
              </div>
              <div className="bulk-tiers-grid">
                {BULK_DISCOUNT_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`tier-col ${quantity >= tier.minQty && quantity <= tier.maxQty ? 'active-tier' : ''}`}
                  >
                    <span className="tier-range">
                      {tier.minQty}{tier.maxQty > 1000 ? '+' : `-${tier.maxQty}`} units
                    </span>
                    <span className="tier-savings">
                      {tier.discountPercent === 0 ? 'Standard' : `${tier.discountPercent}% OFF`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="purchase-controls-box">
              <div className="qty-selector-container">
                <label className="qty-label">Order Quantity:</label>
                <div className="qty-control-group">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setQuantity(isNaN(val) ? 1 : Math.max(1, Math.min(product.stock, val)));
                    }}
                    className="qty-number-input"
                    aria-label="Product quantity"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Quick Bulk Presets */}
                <div className="quick-qty-buttons">
                  {[1, 5, 10, 20].map((q) => (
                    <button
                      key={q}
                      type="button"
                      className={`preset-qty-btn ${quantity === q ? 'active' : ''}`}
                      onClick={() => setQuantity(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main CTAs */}
              <div className="detail-action-buttons">
                <button
                  className="btn btn-primary btn-lg flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} /> Add to Corporate Cart
                </button>
                <button
                  className="btn btn-emerald btn-lg flex-1"
                  onClick={handleBuyNow}
                >
                  <Zap size={18} /> Buy Now (Direct Checkout)
                </button>
              </div>
            </div>

            {/* Quick Description Snippet */}
            <div className="detail-desc-snippet">
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {/* 3. Detailed Specifications & Reviews Tabs */}
        <div className="detail-tabs-section">
          <div className="detail-tab-nav">
            <button
              className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              <Layers size={16} /> Technical Specifications
            </button>
            <button
              className={`detail-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <MessageSquare size={16} /> Enterprise Reviews ({userReviews.length})
            </button>
            <button
              className={`detail-tab-btn ${activeTab === 'procurement' ? 'active' : ''}`}
              onClick={() => setActiveTab('procurement')}
            >
              <Building2 size={16} /> B2B Delivery & Warranty
            </button>
          </div>

          <div className="detail-tab-content">
            {/* Tab 1: Specifications */}
            {activeTab === 'specs' && (
              <div className="specs-tab-view">
                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <th className="spec-label-col">Brand / Manufacturer</th>
                        <td className="spec-val-col">{product.brand || 'Commercial Grade'}</td>
                      </tr>
                      <tr>
                        <th className="spec-label-col">Catalog SKU</th>
                        <td className="spec-val-col font-mono">{product.sku}</td>
                      </tr>
                      <tr>
                        <th className="spec-label-col">Harmonized System (HSN)</th>
                        <td className="spec-val-col font-mono">{product.hsnCode || '847130'}</td>
                      </tr>
                      {Object.entries(product.specifications || {}).map(([key, val]) => (
                        <tr key={key}>
                          <th className="spec-label-col">{key}</th>
                          <td className="spec-val-col">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Reviews */}
            {activeTab === 'reviews' && (
              <div className="reviews-tab-view">
                <div className="reviews-header-row">
                  <div>
                    <h3 className="text-xl font-bold">Verified Corporate Reviews</h3>
                    <p className="text-sm text-subtle">
                      Real feedback from verified procurement heads and office administrative officers.
                    </p>
                  </div>
                  <button
                    className="btn btn-outline"
                    onClick={() => setShowReviewModal(true)}
                  >
                    Write a Corporate Review
                  </button>
                </div>

                <div className="reviews-list">
                  {userReviews.map((rev) => (
                    <div key={rev.id} className="review-card">
                      <div className="review-card-head">
                        <div className="reviewer-info">
                          <span className="reviewer-name">{rev.author}</span>
                          <span className="reviewer-company">
                            {rev.designation} • {rev.company}
                          </span>
                        </div>
                        <div className="review-rating-block">
                          <div className="rating-pill">
                            <span>{rev.rating}</span>
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                          </div>
                          <span className="review-date">{rev.date}</span>
                        </div>
                      </div>
                      <p className="review-text">{rev.comment}</p>
                      {rev.verified && (
                        <div className="verified-purchase-badge">
                          <ShieldCheck size={13} /> Verified Corporate Procurement
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Procurement & Warranty Policies */}
            {activeTab === 'procurement' && (
              <div className="procurement-tab-view">
                <div className="procurement-policy-grid">
                  <div className="policy-card">
                    <h4>B2B GST Tax Compliance</h4>
                    <p>
                      Enter your 15-character GSTIN during checkout to receive automated B2B invoices with clear CGST, SGST, and IGST components matching government e-invoicing standards.
                    </p>
                  </div>
                  <div className="policy-card">
                    <h4>Pan-India Office Dispatch</h4>
                    <p>
                      Orders above ₹999 qualify for complimentary surface logistics. Express air freight and dedicated pallet drops to your reception desk are available.
                    </p>
                  </div>
                  <div className="policy-card">
                    <h4>OEM Commercial Warranty</h4>
                    <p>
                      All office IT hardware includes official manufacturer commercial onsite warranty. OfficeKart will arrange warranty claims and replacement components.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Related Products from the Same Category */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="section-head flex-between">
              <div>
                <span className="section-badge">Same Category</span>
                <h2 className="section-title">Related {product.category}</h2>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="view-all-link"
              >
                <span>View All In Category</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="product-grid-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="modal-backdrop" onClick={() => setShowReviewModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Write a Corporate Review</h3>
              <p className="modal-subtitle">
                Share your procurement experience with <strong>{product.name}</strong>.
              </p>
            </div>
            <form onSubmit={handleAddReview} className="quote-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Iyer"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Company / Organization Name</label>
                <input
                  type="text"
                  placeholder="e.g. Infosys, Pune Branch"
                  value={newReviewCompany}
                  onChange={(e) => setNewReviewCompany(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Rating (1 to 5 Stars)</label>
                <select
                  value={newReviewRating}
                  onChange={(e) => setNewReviewRating(parseInt(e.target.value, 10))}
                >
                  <option value={5}>5 Stars - Outstanding Corporate Equipment</option>
                  <option value={4}>4 Stars - High Quality & Good Value</option>
                  <option value={3}>3 Stars - Satisfactory</option>
                  <option value={2}>2 Stars - Below Expectations</option>
                  <option value={1}>1 Star - Poor Quality</option>
                </select>
              </div>

              <div className="form-group">
                <label>Feedback & Performance Details *</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Comment on build quality, office utility, dispatch speed, and GST invoicing..."
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowReviewModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

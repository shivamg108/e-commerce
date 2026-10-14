import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Heart, ShieldCheck, Eye, Check } from 'lucide-react';

export const ProductCard = ({ product, layout = 'grid' }) => {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, openQuoteModal } = useCart();
  const isWishlisted = isInWishlist(product.id);

  // Price without GST for corporate comparison
  const priceExclGst = Math.round(product.price / 1.18);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleBulkQuote = (e) => {
    e.stopPropagation();
    openQuoteModal(product);
  };

  if (layout === 'list') {
    return (
      <div className="product-card-list" onClick={handleCardClick}>
        <div className="list-img-wrapper">
          <img src={product.image} alt={product.name} loading="lazy" />
          {product.featured && <span className="featured-badge">Featured</span>}
          <button
            className={`wishlist-btn-corner ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label="Toggle Wishlist"
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={16} fill={isWishlisted ? '#e11d48' : 'none'} color={isWishlisted ? '#e11d48' : '#64748b'} />
          </button>
        </div>

        <div className="list-body">
          <div className="list-header">
            <span className="product-cat-tag">{product.category}</span>
            <span className="product-sku-tag">SKU: {product.sku}</span>
          </div>

          <h3 className="product-title">{product.name}</h3>

          <p className="product-desc-snippet line-clamp-2">{product.description}</p>

          <div className="list-specs-preview">
            {Object.entries(product.specifications || {}).slice(0, 3).map(([key, val]) => (
              <span key={key} className="spec-pill">
                <strong>{key}:</strong> {val}
              </span>
            ))}
          </div>

          <div className="product-rating-row">
            <div className="rating-pill">
              <span>{product.rating}</span>
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
            </div>
            <span className="review-count">({product.reviewCount} corporate reviews)</span>
            <span className="stock-indicator in-stock">
              <Check size={13} /> In Stock ({product.stock} units)
            </span>
          </div>
        </div>

        <div className="list-action-col">
          <div className="pricing-box">
            <div className="discount-row">
              <span className="discount-tag">{product.discount}% OFF</span>
              <span className="orig-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="current-price">₹{product.price.toLocaleString('en-IN')}</div>
            <div className="gst-note">Excl. 18% GST: ₹{priceExclGst.toLocaleString('en-IN')}</div>
            <div className="gst-itc-badge">
              <ShieldCheck size={12} /> GST ITC Eligible
            </div>
          </div>

          <div className="list-btn-group">
            <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
              <ShoppingCart size={15} /> Add to Cart
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleBulkQuote}>
              Bulk Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Layout
  return (
    <div className="product-card-grid" onClick={handleCardClick}>
      {/* Product Image & Badges */}
      <div className="card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        
        {product.featured && <span className="featured-badge">Featured B2B</span>}
        
        <span className="discount-badge-corner">-{product.discount}%</span>

        <button
          className={`wishlist-btn-corner ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label="Save to Wishlist"
          title={isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
        >
          <Heart size={16} fill={isWishlisted ? '#e11d48' : 'none'} color={isWishlisted ? '#e11d48' : '#64748b'} />
        </button>

        <div className="card-quick-overlay">
          <span>Click to view technical specifications</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-meta-row">
          <span className="product-cat-tag">{product.category}</span>
          <span className="product-sku-tag">{product.sku}</span>
        </div>

        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Ratings & Stock Availability */}
        <div className="product-rating-row">
          <div className="rating-pill">
            <span>{product.rating}</span>
            <Star size={12} fill="#f59e0b" color="#f59e0b" />
          </div>
          <span className="review-count">({product.reviewCount})</span>
          <span className="stock-indicator in-stock">
            <Check size={12} /> In Stock ({product.stock})
          </span>
        </div>

        {/* Pricing & GST breakdown */}
        <div className="pricing-box">
          <div className="price-top-row">
            <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="orig-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="gst-note">
            Excl. GST: ₹{priceExclGst.toLocaleString('en-IN')} (ITC 18%)
          </div>
        </div>

        {/* Actions */}
        <div className="card-action-row">
          <button
            className="btn btn-primary btn-sm btn-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={15} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

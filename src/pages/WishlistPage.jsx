import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

export const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlist, moveToCart, removeFromWishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="empty-icon-circle mx-auto">
          <Heart size={44} className="text-subtle" />
        </div>
        <h2 className="text-2xl font-bold mt-4">Your Saved Items List is Empty</h2>
        <p className="text-subtle max-w-md mx-auto mt-2">
          Save business laptops, monitors, or office supplies to your corporate wishlist for later review or departmental approval.
        </p>
        <div className="mt-6">
          <Link to="/products" className="btn btn-primary btn-lg">
            Explore Office Catalog <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page-root">
      <div className="catalog-header-bar">
        <div className="container flex-between">
          <div>
            <span className="catalog-eyebrow">Saved For Procurement</span>
            <h1 className="catalog-h1">Corporate Wishlist ({wishlist.length} items)</h1>
          </div>
          <Link to="/products" className="btn btn-outline btn-sm">
            Continue Browsing
          </Link>
        </div>
      </div>

      <div className="container py-8">
        <div className="product-grid-4">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-card-wrapper">
              <ProductCard product={product} />
              <div className="wishlist-action-bar">
                <button
                  className="btn btn-primary btn-sm flex-1"
                  onClick={() => moveToCart(product)}
                >
                  <ShoppingCart size={14} /> Move to Cart
                </button>
                <button
                  className="btn btn-ghost-danger btn-sm"
                  onClick={() => removeFromWishlist(product.id)}
                  title="Remove from saved list"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

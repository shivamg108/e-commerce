import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('officekart_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('officekart_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders state persisted to localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('officekart_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search & Global Category Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // B2B Bulk Quotation modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteItem, setQuoteItem] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('officekart_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('officekart_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('officekart_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  // Toast helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        const newQty = updated[existingIndex].quantity + qty;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity: qty }];
      }
    });
    showToast(`Added ${qty}x ${product.name} to Cart`, 'success');
  };

  const updateQuantity = (productId, newQuantity) => {
    const qty = parseInt(newQuantity, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from Wishlist`, 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added ${product.name} to Wishlist`, 'success');
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const moveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  // Financial calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Corporate Bulk Quantity Tier Discount Calculation
  // Tier: 5-9 units = 5%, 10-19 units = 8%, 20+ units = 12%
  const getBulkDiscountPercent = () => {
    if (cartCount >= 20) return 12;
    if (cartCount >= 10) return 8;
    if (cartCount >= 5) return 5;
    return 0;
  };

  const bulkDiscountPercent = getBulkDiscountPercent();
  const bulkDiscountAmount = Math.round((cartSubtotal * bulkDiscountPercent) / 100);

  // Coupons
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'OFFICE10') {
      setAppliedCoupon({ code: 'OFFICE10', discountPercent: 10, description: '10% Corporate Procurement Discount' });
      showToast('Coupon OFFICE10 applied (10% OFF)!', 'success');
      return { success: true };
    } else if (cleanCode === 'BULK5') {
      setAppliedCoupon({ code: 'BULK5', discountPercent: 5, description: '5% Extra Business Savings' });
      showToast('Coupon BULK5 applied (5% OFF)!', 'success');
      return { success: true };
    } else if (cleanCode === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', freeShipping: true, description: 'Complimentary Express Air Dispatch' });
      showToast('Free Express Shipping Coupon applied!', 'success');
      return { success: true };
    } else {
      showToast('Invalid coupon code. Try OFFICE10 or BULK5', 'error');
      return { success: false, message: 'Invalid coupon code' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const couponDiscountAmount = appliedCoupon?.discountPercent
    ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
    : 0;

  // 18% GST calculation (Standard Indian GST on IT & Office Goods)
  const taxableAmount = Math.max(0, cartSubtotal - bulkDiscountAmount - couponDiscountAmount);
  const gstRate = 0.18;
  const gstAmount = Math.round(taxableAmount * gstRate);

  // Shipping Calculation (Free over ₹999, else ₹99)
  const baseShipping = cartSubtotal >= 999 || appliedCoupon?.freeShipping || cart.length === 0 ? 0 : 99;

  const grandTotal = Math.max(0, taxableAmount + gstAmount + baseShipping);

  // Orders
  const placeOrder = (orderDetails) => {
    const orderId = `OK-ORD-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      createdAt: new Date().toISOString(),
      items: [...cart],
      summary: {
        itemCount: cartCount,
        subtotal: cartSubtotal,
        bulkDiscountPercent,
        bulkDiscountAmount,
        couponCode: appliedCoupon?.code || null,
        couponDiscountAmount,
        taxableAmount,
        gstRate: 18,
        gstAmount,
        shippingFee: baseShipping,
        grandTotal
      },
      billing: orderDetails.billing,
      shipping: orderDetails.shipping,
      payment: {
        method: orderDetails.paymentMethod,
        poNumber: orderDetails.poNumber || null,
        status: 'Confirmed (Payment Simulated - Demo)'
      },
      status: 'Order Confirmed - Dispatch Scheduled'
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    return newOrder;
  };

  const getOrder = (orderId) => {
    return orders.find((o) => o.orderId === orderId);
  };

  // Bulk Quote Modal handlers
  const openQuoteModal = (item = null) => {
    setQuoteItem(item);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteItem(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        bulkDiscountPercent,
        bulkDiscountAmount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        couponDiscountAmount,
        gstRate,
        gstAmount,
        baseShipping,
        grandTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        moveToCart,
        orders,
        placeOrder,
        getOrder,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        toasts,
        showToast,
        removeToast,
        quoteModalOpen,
        quoteItem,
        openQuoteModal,
        closeQuoteModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

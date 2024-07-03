import React, { useState } from 'react';
import { useCart } from './CartContext';  // Import the cart context
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();  // Get the cart items from the context
  const [showCartItems, setShowCartItems] = useState(false);  // State to toggle cart visibility

  const toggleCartItems = () => {
    setShowCartItems(!showCartItems);
  };

  return (
    <div className="cart-container">
      <div className="cart-icon" onClick={toggleCartItems}>
        🛒
        <span className="cart-count">{cart.length}</span>
      </div>
      {showCartItems && (
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <div>{item.name}</div>
                  <div className="price">Price: Rs{item.price}</div>
                </div>
              </div>
            ))
          )}
          <Link to="/checkout" className="checkout-button">Go to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

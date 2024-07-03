import React from 'react';
import { useCart } from './CartContext';  // Import the cart context
const Checkout = () => {
  const { cart } = useCart();  
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <div className="checkout-items">
          {cart.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <div>{item.name}</div>
                <div className="price">Price: Rs{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;

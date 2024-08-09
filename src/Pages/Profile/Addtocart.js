import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Foods/CardContext';
import './Addtocart.css'; // Ensure you have this CSS file

const AddToCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (hotelName) => {
    removeFromCart(hotelName);
  };

  const handleBuyNow = (item) => {
    navigate(`/Checkout/${item.productName}/${item.hotelName}`);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h1><center>Your cart is empty</center></h1>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <h2>{item.productName} - {item.hotelName}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemove(item.hotelName)}>Delete</button>
                <button onClick={() => handleBuyNow(item)}>Buy Now</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddToCart;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderConfirm.css';

const OrderConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails } = location.state || {};
  const [userRating, setUserRating] = useState(orderDetails?.rating || 0);

  if (!orderDetails) {
    return <div><h1><center>No order details available.</center></h1></div>;
  }

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    alert('Thanks for your feedback!');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`} 
        onClick={() => handleRatingClick(index + 1)}
      >
        ★
      </span>
    ));
  };

  const handleTrackNowClick = () => {
    navigate('/map');
  };

  return (
    <div className="order-confirmation-page">
      <div className="order-confirmation-card">
        <h1>Order Successful!</h1>
        <p>Thank you for your order.</p>
        <p><strong>Tracking ID:</strong> {orderDetails.trackingId}</p>
        <p><strong>Product:</strong> {orderDetails.productName}</p>
        <p><strong>Shop Name:</strong> {orderDetails.hotelName}</p>
        <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
        <p><strong>Delivery Time:</strong> {orderDetails.deliveryTime}</p>
        <p><strong>Address:</strong> {orderDetails.userInfo.address}</p>
        <p><strong>Landmark:</strong> {orderDetails.userInfo.landmark}</p>
        <p><strong>Rating:</strong> {renderStars(userRating)}</p>
        <button onClick={handleTrackNowClick} className="track-now-button">Track Now</button>
      </div>
    </div>
  );
};

export default OrderConfirm;

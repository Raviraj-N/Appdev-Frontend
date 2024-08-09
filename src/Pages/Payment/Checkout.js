import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LocationFood from '../Foods/LocationFood';
import './Checkout.css';

const Checkout = () => {
  const { productName, hotelName } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '', landmark: '', Phoneno: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '', upiId: '' });
  const [deliveryTime, setDeliveryTime] = useState('');

  // Fetch product details based on the name
  const productDetails = LocationFood[productName.toLowerCase()]?.find(details => details.hotelName === hotelName);

  useEffect(() => {
    if (productDetails) {
      setTotalPrice(productDetails.pricePerUnit * quantity);
    }
  }, [quantity, productDetails]);

  if (!productDetails) {
    return <div>No details available for this product.</div>;
  }

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(newQuantity);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = () => {
    const orderDetails = {
      productName,
      hotelName,
      quantity,
      userInfo,
      paymentDetails,
      deliveryTime,
      trackingId: Math.random().toString(36).substring(2, 15),
      price: totalPrice, // Use the updated total price
      rating: productDetails.rating 
    };
    
    alert('Your order has been confirmed!');
    navigate('/order-confirm', { state: { orderDetails } });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout for {productName} at {hotelName}</h1>
        
        <div className="product-info">
          <h2>Product Details</h2>
          <div className="product-photos">
            {productDetails.photos.map((photo, idx) => (
              <img key={idx} src={photo} alt={`Photo ${idx + 1}`} />
            ))}
          </div>
          <div className="quantity-price">
            <label>
              <strong>Quantity:</strong> 
              <input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1"
                step="1"
                style={{ marginLeft: '10px', marginRight: '10px', width: '60px' }}
              />
            </label>
            <p>
              <strong>Total Price: </strong> 
              Rs.{totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="user-info">
          <h2>User Information</h2>
          <label>
            Name:
            <input type="text" name="name" value={userInfo.name} onChange={handleUserInfoChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={userInfo.address} onChange={handleUserInfoChange} />
          </label>
          <label>
            Landmark:
            <input type="text" name="landmark" value={userInfo.landmark} onChange={handleUserInfoChange} />
          </label>
          <label>
            Phone No:
            <input type="text" name="Phoneno" value={userInfo.Phoneno} onChange={handleUserInfoChange} />
          </label>
          <label>
            Delivery Time:
            <input 
              type="time" 
              name="deliveryTime" 
              value={deliveryTime} 
              onChange={(e) => setDeliveryTime(e.target.value)} 
              step="900" 
            />
          </label>
        </div>

        <div className="payment-info">
          <h2>Payment Details</h2>
          <label>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="card" 
              checked={paymentMethod === 'card'} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          <label>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="upi" 
              checked={paymentMethod === 'upi'} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          {paymentMethod === 'card' && (
            <>
              <label>
                Card Number:
                <input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={handlePaymentChange} />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" value={paymentDetails.expiryDate} onChange={handlePaymentChange} />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" value={paymentDetails.cvv} onChange={handlePaymentChange} />
              </label>
            </>
          )}

          {paymentMethod === 'upi' && (
            <label>
              UPI ID:
              <input type="text" name="upiId" value={paymentDetails.upiId} onChange={handlePaymentChange} />
            </label>
          )}
        </div>

        <div className="checkout-actions">
          <button className="confirm-order" onClick={handleConfirmOrder}>Confirm Order</button>
          <button className="add-to-cart" onClick={() => navigate('/add')}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

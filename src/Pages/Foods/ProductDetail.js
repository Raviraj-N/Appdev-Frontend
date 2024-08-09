import React, { useState,useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CardContext';
import LocationFood from './LocationFood'; 
import './ProductDetail.css';
import axios from 'axios'; // Import axios for API calls

const ProductDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate(); // use the navigate 
  const { addToCart } = useContext(CartContext); // Use the CartContext
  const productName = name ? name.toLowerCase() : ''; // taken productname as lowercase
  const productDetails = LocationFood[productName];
  const [quantities, setQuantities] = useState(
    productDetails.reduce((acc, curr) => ({ ...acc, [curr.hotelName]: 1 }), {})
  );
  const [ratings, setRatings] = useState({}); // Store ratings for each hotel/shop

  useEffect(() => {
    // Fetch ratings for each hotel/shop
    const fetchRatings = async () => {
      try {
        const ratingData = {};
        for (const details of productDetails) {
          const response = await axios.get(`/api/ratings/${details.hotelName}`);
          ratingData[details.hotelName] = response.data.rating; // Assuming response data has rating
        }
        setRatings(ratingData);
      } catch (error) {
        console.error("Failed to fetch ratings:", error);
      }
    };

    fetchRatings();
  }, [productDetails]);

  if (!productDetails) {
    return <div>No details available for this product.</div>;
  }

  const handleQuantityChange = (hotelName, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [hotelName]: Math.max(1, Number(value)), 
    }));
  };

  const handleBuyNow = (hotelName) => {
    navigate(`/Checkout/${productName}/${hotelName}`);
  };

  const handleAddToCart = (details) => {
    addToCart({
      productName,
      hotelName: details.hotelName,
      quantity: quantities[details.hotelName],
      totalPrice: quantities[details.hotelName] * details.pricePerUnit,
    });
    navigate('/add');  // navigate to add to cart function
  };

  return (
    <div className="product-detail-page">
      <h1><center>{name}</center></h1>
      {productDetails.map((details, index) => {
        const totalPrice = quantities[details.hotelName] * details.pricePerUnit;
        const rating = ratings[details.hotelName]; // Get rating for current hotel/shop

        return (
          <div className="product-detail-card" key={index}>
            <div className="left">
              <h2>{details.hotelName}</h2>
              <div className="photos">
                {details.photos.map((photo, idx) => (
                  <img key={idx} src={photo} alt={`Photo ${idx + 1}`} />
                ))}
              </div>
            </div>
            <div className="center">
              <p><strong>Address:</strong> {details.address}</p>
              <p><strong>Phone:</strong> {details.phone}</p>
              <p><strong>Email:</strong> {details.email}</p>
              <p><strong>Available Time:</strong> {details.availableTime}</p>
              <p><strong>Delivery Time:</strong> {details.deliveryTime}</p>
              <p><strong>Rating:</strong> {rating ? `${rating}/5` : "Loading..."}</p>
              <div className="quantity-selector">
                <label>
                  <strong>Quantity:</strong>
                  <input 
                    type="number" 
                    value={quantities[details.hotelName]} 
                    onChange={(e) => handleQuantityChange(details.hotelName, e.target.value)} 
                    min="1"
                    step="1"
                  />
                </label>
                <p><strong>Total Price:</strong> Rs.{totalPrice.toFixed(2)} Per KG</p>
              </div>
            </div>
            <div className="right">
              <button className="buy-now" onClick={() => handleBuyNow(details.hotelName)}>Buy Now</button> 
              <button className="add-to-cart" onClick={() => handleAddToCart(details)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ name, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name.toLowerCase()}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

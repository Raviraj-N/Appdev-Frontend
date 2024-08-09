import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img src={product.img} alt={product.name} />
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;

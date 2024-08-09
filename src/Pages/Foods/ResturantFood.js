import React from 'react';
import ProductCard from '../ProductCard';

const foods = [
  {
    name: 'Pizza',
    description: 'A delicious cheesy pizza with various toppings.',
    imageUrl: 'https://example.com/pizza.jpg'
  },
  {
    name: 'Sushi',
    description: 'Fresh and tasty sushi rolls.',
    imageUrl: 'https://example.com/sushi.jpg'
  },
  {
    name: 'Burger',
    description: 'A juicy beef burger with lettuce, tomato, and cheese.',
    imageUrl: 'https://example.com/burger.jpg'
  }
  // Add more food items as needed
];

const FoodList = () => {
  return (
    <div className="food-list">
      {foods.map((food, index) => (
        <ProductCard 
          key={index}
          name={food.name}
          description={food.description}
          imageUrl={food.imageUrl}
        />
      ))}
    </div>
  );
};

export default FoodList;


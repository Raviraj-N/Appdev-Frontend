import React from 'react';
import ProductCard from '../Pages/ProductCard';
import './FruitList.css';

const fruits = [
  {
    name: 'Apple',
    description: 'Fresh and crispy apples.',
    imageUrl: 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Banana',
    description: 'Organic bananas rich in potassium.',
    imageUrl: 'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?cs=srgb&dl=pexels-couleur-2316466.jpg&fm=jpg',
  },
  {
    name: 'Orange',
    description: 'Juicy oranges full of Vitamin C.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeea5Y18inx9bVaxbi7JDnnbd1ktnlbz1zA&s',
  },
  {
    name: 'Pomogranate',
    description: 'Good for Health.',
    imageUrl: 'https://img.freepik.com/free-photo/exotic-delicious-pomegranate-white-background_144627-12571.jpg?size=626&ext=jpg&ga=GA1.1.242128202.1703064456&semt=ais_hybrid',
  },
  // Add more fruits as needed
];

const FruitList = () => {
  return (
    <div className="fruit-list">
      <h1 className="page-title"><center>Fresh Fruits</center></h1>
      {fruits.map((fruit, index) => (
        <ProductCard 
          key={index}
          name={fruit.name}
          description={fruit.description}
          imageUrl={fruit.imageUrl}
        />
      ))}
    </div>
  );
};

export default FruitList;

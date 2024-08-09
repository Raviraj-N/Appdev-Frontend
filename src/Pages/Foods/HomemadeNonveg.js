import React from 'react';
import ProductCard from '../ProductCard';

import './HomemadeVeg.css';

const foods = [
  {
    name: 'HotBiriyani',
    description: 'Biriyani with leg pieces',
    imageUrl: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph',
   
  },
  {
    name: 'Non-vegMeals',
    description: 'Non-veg Meals with Fish fry Include.',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721865600&semt=ais_user',
    
  },
  {
    name: 'ChickenGravey',
    description: 'Chicken pieces cooked in a spicy, flavorful curry sauce made with onions, tomatoes, and a variety of spices.',
    imageUrl: 'https://thumbs.dreamstime.com/b/chicken-curry-29197236.jpg',
    
  },
  {
    name: 'MuttonBiriyani',
    description: 'Mutton Biriyani with curd(Setinadu Style)',
    imageUrl: 'https://t4.ftcdn.net/jpg/05/17/96/89/360_F_517968988_hFHjQT6Flfksjx8n0KxfvMtP2tqlmGKk.jpg',
    
  },
  {
    name: 'Fish Fry',
    description: '',
    imageUrl: 'https://t3.ftcdn.net/jpg/01/71/58/86/360_F_171588688_DNG0AqpBzypIDpqnM6jb5r7Rv6JO4H67.jpg'
    
  },
  
  // Add more food items as needed
];

const FoodList = () => {
  return (
    <div className="food-list">
    <h1 className="page-title"><center>HOME MADE FOODS - VEG</center></h1>
  
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

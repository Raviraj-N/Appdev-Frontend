import React from 'react';
import ProductCard from '../ProductCard';

import './HomemadeVeg.css';

const foods = [ //add food items here
  {
    name: 'Idly',
    description: 'Soft Idly with Sambar and Chutney in Home Style.',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/21/25/16/240_F_221251677_H4e9ADfkdV8kyLRLbHrU9oxzy4DDaxth.jpg'
   
  },
  {
    name: 'Dosa',
    description: 'Roasted Dosa with Sambar and Chutney in Home Style.',
    imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-plate-of-dosa-with-sauce-on-top-image_2892701.jpg'
    
  },
  {
    name: 'Full Meals',
    description: 'Full Meals-Rice,sambar,Rasam and buttermilk',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721865600&semt=ais_user'
    
  },
  {
    name: 'Chapathi',
    description: 'Chapathi with Channamasla.',
    imageUrl: 'https://img.freepik.com/free-photo/indian-delicious-roti-arrangement_23-2149073314.jpg?w=1380&t=st=1721968094~exp=1721968694~hmac=106772453e389c510437375bef08e3795f27f808bd42e75676137d918c2ed9e1'
    
  },
  {
    name: 'Poori',
    description: 'Poori with kuruma.',
    imageUrl: 'https://www.shutterstock.com/shutterstock/videos/3541380725/thumb/1.jpg?ip=x480'
    
  },
  {
    name: 'Pongal',
    description: 'Pongal with sambar and Chutney.',
    imageUrl: 'https://t4.ftcdn.net/jpg/01/42/70/69/360_F_142706914_QZYCR8rh3X2d9FRVB5KxhYs7q9tb5FdL.jpg'
    
  },
  {
    name: 'variety Rice',
    description: 'Variety Rice - Lemon,Tomato,Curd.',
    imageUrl: 'https://i.pinimg.com/originals/5e/e6/47/5ee647fbf37834dfb70eb0f457396525.jpg'
    
  }
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

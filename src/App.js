import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home';
import HomemadeVeg from './Pages/Foods/HomemadeVeg';
import HomemadeNonveg from './Pages/Foods/HomemadeNonveg';
import ResturantFood from './Pages/Foods/ResturantFood';
import Favorites from './Pages/Profile/Favorites';
import ProductDetail from './Pages/Foods/ProductDetail';
import Checkout from './Pages/Payment/Checkout';
import AddToCart from './Pages/Profile/Addtocart';
import OrderConfirm from './Pages/Payment/OrderConfirm';
import MapPage from './Pages/Payment/MapPage';
import FruitList from './Grocery/FruitList';
import VegetableList from './Grocery/VegetableList';
import MyOrders from './Pages/Profile/MyOrders';





const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homemade/veg" element={<HomemadeVeg />} />
        <Route path="/details/:name" element={<ProductDetail />} />
        <Route path="/checkout/:productName/:hotelName" element={<Checkout />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />
        
        <Route path="/homemade/Non-veg" element={<HomemadeNonveg />} />
        <Route path="/res" element={<ResturantFood />} />
        <Route path="/add" element={<AddToCart />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/map" element={<MapPage />} />
        
        <Route path="/grocery/fruits" element={<FruitList />} />
        <Route path="/grocery/vegetable" element={<VegetableList />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;

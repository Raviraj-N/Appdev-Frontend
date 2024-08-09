import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [dropdowns, setDropdowns] = useState({
    foods: false,
    homemade: false,
    restaurant: false,
    grocery: false,
    profile: false
  });
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  const handleMouseEnter = (dropdown) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdown]: true
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdown]: false
    }));
  };

  const toggleFavorite = (index) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(index)) {
        newFavorites.delete(index);
      } else {
        newFavorites.add(index);
      }
      return newFavorites;
    });
  };

  const addToCart = (index) => {
    setCart(prevCart => {
      const newCart = new Set(prevCart);
      newCart.add(index);
      return newCart;
    });
  };

  const products = [
    { id: 3, name: 'Apple', price: 'Rs.70 KG', img: 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Banana', price: 'Rs.30 kG', img: 'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?cs=srgb&dl=pexels-couleur-2316466.jpg&fm=jpg' },
    { id: 1, name: 'Carrot', price: 'RS.20 KG', img: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg' },
    { id: 4, name: 'Hot Biriyani', price: 'RS.120 Per KG', img: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=sph' },
    { id: 5, name: 'Dosa', price: 'RS.20 ', img: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-plate-of-dosa-with-sauce-on-top-image_2892701.jpg' },
    { id: 6, name: 'Parrota', price: 'Rs.15', img: 'https://media.istockphoto.com/id/618764348/photo/famous-asian-flat-bread-known-as-parathas.jpg?s=612x612&w=0&k=20&c=yrz3Gn1RIHw8ohxG0uGNAU1H8wa2dB6xRli_DD3PJ6o=' },
    { id: 7, name: 'Dosa', price: 'Rs.20 ', img: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-plate-of-dosa-with-sauce-on-top-image_2892701.jpg' },
  ];

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="topbar">
            <div className="branding">
              <h1>Quickship</h1>
              <h3>Bringing the store to your door</h3>
            </div>
            <ul className="nav">
              <li>Home</li>
              <li
                className="Grocery"
                onMouseEnter={() => handleMouseEnter('foods')}
                onMouseLeave={() => handleMouseLeave('foods')}
              >
                Foods
                {dropdowns.foods && (
                  <ul className='dropdown'>
                    <li
                      onMouseEnter={() => handleMouseEnter('homemade')}
                      onMouseLeave={() => handleMouseLeave('homemade')}
                    >
                      <Link to='/homemade'>HomeMade</Link>
                      {dropdowns.homemade && (
                        <ul className='sub-dropdown'>
                          <li><Link to='/homemade/veg'>Veg</Link></li>
                          <li><Link to='/homemade/non-veg'>Non-Veg</Link></li>
                          </ul>
                        )}
                        </li>
                        <li
                        onMouseEnter={() => handleMouseEnter('restaurant')}
                        onMouseLeave={() => handleMouseLeave('restaurant')}
                        >
                        <Link to='/res'>Restaurant Food</Link>
                        {dropdowns.restaurant && (
                          <ul className='sub-dropdown'>
                          <li><Link to='/homemade/veg'>Veg</Link></li>
                          <li><Link to='/homemade/non-veg'>Non-Veg</Link></li>
                          {/* Add specific restaurant food options here */}
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="Grocery"
                onMouseEnter={() => handleMouseEnter('grocery')}
                onMouseLeave={() => handleMouseLeave('grocery')}
              >
                Grocery
                {dropdowns.grocery && (
                  <ul className='dropdown'>
                    <li><Link to='/grocery/fruits'>Fruits</Link></li>
                    <li><Link to='/grocery/vegetable'>Vegetable</Link></li>
                    <li><Link to='/grocery/oil'>Oil</Link></li>
                    <li><Link to='/grocery/masala'>Masala Products</Link></li>
                    <li><Link to='/grocery/milk'>Milk Products</Link></li>
                  </ul>
                )}
              </li>
              <li
                className="profile"
                onMouseEnter={() => handleMouseEnter('profile')}
                onMouseLeave={() => handleMouseLeave('profile')}
              >
                Profile
                {dropdowns.profile && (
                  <ul className="dropdown">
                    <li><i className="fas fa-shopping-cart"></i><Link to="/myorders"> My Orders</Link></li>
                    <li><i className="fas fa-heart"></i><Link to="/fav"> Favorites</Link></li>
                    <li><i className="fas fa-cart-plus"></i><Link to="/add"> Add to Cart</Link></li>
                    <li><i className="fas fa-cog"></i><Link to="#"> Account Settings</Link></li>
                    <li><i className="fas fa-sign-out-alt"></i><Link to="/Signin"> Logout</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-background">
        <div className="supporting">
          <div className="container">
            <div className="product-list">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div className="image-container">
                    <Link to={`/Signin`}>
                      <img src={product.img} alt={product.name} />
                    </Link>
                    <i
                      className={`fas fa-heart favorite-icon ${favorites.has(product.id) ? 'favorited' : ''}`}
                      onClick={() => toggleFavorite(product.id)}
                    ></i>
                  </div>
                  <h2><Link to={`/Signin`}>{product.name}</Link></h2>
                  <p>{product.price}</p>
                  <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <p>&copy; Quickship 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

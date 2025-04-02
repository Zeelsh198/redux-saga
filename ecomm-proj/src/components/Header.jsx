import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { productSearch } from "../redux/productAction";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
  const cartItems = useSelector((state) => state.cartData);
  const dispatch = useDispatch();


  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        My Store
      </Link>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search for products..." onChange={(event)=>dispatch(productSearch(event.target.value))}/>
      </div>

      {/* Cart Section */}
      <Link to="/cart" className="cart-link">
        <div className="cart-div">
          {/* <img
            src="src/assets/shopping-cart-icon-in-modern-design-style-for-web-vector-26504882.jpg"
            alt="Cart"
            className="cart-icon"
          /> */}
          <IoCartOutline size={36}/>
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;

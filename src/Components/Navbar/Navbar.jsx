import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  // Function to check if the path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Cleaning Fairies</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {isActive('/') ? <hr /> : null}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/services">
            Our Services
          </Link>
          {isActive('/services') ? <hr /> : null}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/products">
            Products
          </Link>
          {isActive('/products') ? <hr /> : null}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/trainings">
            Trainings
          </Link>
          {isActive('/trainings') ? <hr /> : null}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/about">
            About Us
          </Link>
          {isActive('/about') ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

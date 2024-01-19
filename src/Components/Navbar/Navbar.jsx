import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Cleaning Fairies</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("services");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/services">
            Our Services
          </Link>
          {menu === "services" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("products");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/products">
            Products
          </Link>
          {menu === "products" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("trainings");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/trainings">
            Trainings
          </Link>
          {menu === "trainings" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            About Us
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

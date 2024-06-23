/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { assets } from "../../assets/assests/assests";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="nav-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a
          href="#"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="search-icon">
          <CiSearch />
        </div>
        <div className="shopping-cart">
          <Link to="/cart">
            <HiOutlineShoppingBag />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign up</button>
      </div>
    </div>
  );
};

export default Navbar;

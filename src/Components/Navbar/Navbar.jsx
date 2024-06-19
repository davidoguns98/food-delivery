/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";

import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { assets } from "../../assets/assests/assests";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="nav-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          home
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          menu
        </li>
        <li
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          contact-us
        </li>
      </ul>
      <div className="navbar-right">
        <div className="search-icon">
          <CiSearch />
        </div>
        <div className="shopping-cart">
          <HiOutlineShoppingBag />
          <div className="dot"></div>
        </div>
        <button>sign up</button>
      </div>
    </div>
  );
};

export default Navbar;

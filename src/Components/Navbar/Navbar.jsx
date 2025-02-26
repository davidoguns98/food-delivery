/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { assets } from "../../assets/assests/assests";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileView, setMobileView] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth <= 510) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    checkScreenSize(); // Check size when component mounts

    // Add event listener to check size on window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      {mobileView ? (
        <div className="mobile-view">
          <Link to="/">
            <img className="logo-mobile" src={assets.logo} alt="" />
          </Link>

          <Link to="/">
            <img className="hamburger-icon" src={assets.hamburgerIcon} alt="" />
          </Link>
        </div>
      ) : (
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
              {/* <CiSearch /> */}
              <img src={assets.searchIcon} alt="searchIcon" />
            </div>
            <div className="shopping-cart">
              <Link to="/cart">
                {/* <HiOutlineShoppingBag /> */}
                <img src={assets.cartIcon} alt="cart" className="cart-icon" />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>sign up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

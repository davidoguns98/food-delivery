/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assests/assests";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileView, setMobileView] = useState(window.innerWidth <= 510);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 510);
      if (window.innerWidth > 510) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { getTotalCartAmount } = useContext(StoreContext);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setSidebarOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { path: "/", label: "home" },
    { path: "#explore-menu", label: "menu" },
    { path: "#mobile-app", label: "mobile-app" },
    { path: "#footer", label: "contact-us" },
    { path: "/cart", label: "cart" },
  ];

  return (
    <>
      {mobileView ? (
        <div className="mobile-view">
          <Link to="/">
            <img className="logo-mobile" src={assets.logo} alt="Logo" />
          </Link>
          <img
            className="hamburger-icon"
            src={assets.hamburgerIcon}
            alt="Menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          {sidebarOpen && (
            <div className="sidebar">
              <button
                className="close-btn"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>
              <ul className="sidebar-menu">
                {links.map(({ path, label }) =>
                  path.startsWith("#") ? (
                    <a
                      key={label}
                      href={path}
                      onClick={(e) => scrollToSection(e, path)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={label}
                      to={path}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar">
          <Link to="/">
            <img className="logo" src={assets.logo} alt="Logo" />
          </Link>
          <ul className="nav-menu">
            {links.map(({ path, label }) =>
              path.startsWith("#") ? (
                <a
                  key={label}
                  href={path}
                  onClick={(e) => scrollToSection(e, path)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={path}
                  className={menu === label ? "active" : ""}
                  onClick={() => setMenu(label)}
                >
                  {label}
                </Link>
              )
            )}
          </ul>
          <div className="navbar-right">
            <div className="search-icon">
              <img src={assets.searchIcon} alt="Search" />
            </div>
            <div className="shopping-cart">
              <Link to="/cart">
                <img src={assets.cartIcon} alt="Cart" className="cart-icon" />
              </Link>
              {getTotalCartAmount() > 0 && <div className="dot"></div>}
            </div>
            <button onClick={() => setShowLogin(true)}>sign up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

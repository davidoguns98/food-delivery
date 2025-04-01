import React from "react";
import "./Footer.css";
import { assets } from "../assets/assests/assests";
import { Link } from "react-router-dom";
// import { IoLogoFacebook } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            tenetur doloremque maiores ipsum hic provident fugiat distinctio
            amet aperiam placeat. Amet hic sequi voluptatem repellat suscipit
            exercitationem earum voluptate maxime?
          </p>
          {/*           <div className="footer-social-icons">
            <IoLogoFacebook className="icon" />
            <FaLinkedin className="icon" />
            <FaXTwitter className="icon" />
          </div> */}
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>

          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Delivery</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+234 9039737396</li>
            <li>Davidoguns@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; David ogungbemi - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

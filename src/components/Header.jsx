import React, { useState } from "react";
import logo from "../assets/appIcon.png";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onClickHandler = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={onClickHandler}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

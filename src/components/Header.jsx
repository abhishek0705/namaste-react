import React, { useState } from "react";
import logo from "../assets/appIcon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onClickHandler = () => {
    setLoggedIn(!isLoggedIn);
  };

  const navHandler = (route) => {};
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" onClick={onClickHandler}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

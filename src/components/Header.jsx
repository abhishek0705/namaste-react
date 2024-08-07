import React, { useContext, useState } from "react";
import logo from "../assets/appIcon.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const onlineStatus = useOnline();
  const { loggedInUser, isLoggedIn: contextIsLoggedIn } =
    useContext(UserContext);

  const onClickHandler = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex justify-between shadow-lg">
      <div className="m-3">
        <img className="w-14" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link
              to={{
                pathname: "/contact",
                search: "?myParam=myValue",
              }}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" onClick={onClickHandler}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

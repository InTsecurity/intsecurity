import React from "react";
import "./NavBar.css";
import logo from "./../../images/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img
          className="navbar--logo--img"
          alt="logo"
          aria-label="logo"
          src={logo}
        ></img>
      </div>
      <div className="navbar--contents">
        <div className="navbar--details">About</div>
        <div className="navbar--details">Pricing</div>
        <div className="navbar--details">Career</div>
        <div className="navbar--details">Contact us</div>
      </div>
    </div>
  );
}

export default NavBar;

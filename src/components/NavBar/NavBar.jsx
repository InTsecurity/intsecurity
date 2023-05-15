import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./../../images/logo.png";
import { SwitchCase } from "../Designs/HackerText";

function NavBar() {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setMouseY(scrollTop);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let navStyle;
  if (mouseY > 10) {
    navStyle = {
      backgroundColor: "#212121",
    };
  }

  return (
    <div className="navbar--main" style={navStyle}>
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
          <div
            className="navbar--details"
            id="about"
            onMouseEnter={(e) => {
              SwitchCase("about");
            }}
          >
            About
          </div>
          <div
            className="navbar--details"
            id="pricing"
            onMouseEnter={(e) => {
              SwitchCase("pricing");
            }}
          >
            Pricing
          </div>
          <div
            className="navbar--details"
            id="career"
            onMouseEnter={(e) => {
              SwitchCase("career");
            }}
          >
            Career
          </div>
          <div
            className="navbar--details"
            id="contactUs"
            onMouseEnter={(e) => {
              SwitchCase("contactUs");
            }}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

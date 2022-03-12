import React from "react";
import reactLogo from "../images/react.png";

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="React Logo" className="nav--icon" />
      <h3 className="nav--logo__text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;

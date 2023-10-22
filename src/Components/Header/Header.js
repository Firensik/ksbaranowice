import React from "react";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <HeaderTop />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

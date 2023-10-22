import React from "react";
import logo from "../../assets/ksbaranowizezory.webp";

const Header = () => {
  const url = "https://www.facebook.com/lksbaranowice";
  return (
    <nav className="headerTop">
      <div className="headerElements">
        <h1>
          <span>KS BARANOWICE-ŻORY</span>
        </h1>
        {/* <a href="#">
          <img href="/" src={logo} alt="logo" className="headerLogo" />
        </a> */}
        <div className="social">
          <a href={url}>
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

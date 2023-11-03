import React from "react";

const Header = () => {
  const url = "https://www.facebook.com/lksbaranowice";
  return (
    <nav className="headerTop">
      <div className="headerElements">
        <h1>
          <span>KS BARANOWICE-ŻORY</span>
        </h1>

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

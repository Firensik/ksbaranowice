import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
import { FooterUrzad } from "./FooterUrzad";
import { FooterItems } from "./FooterItems";

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="imgUrzad">
        {FooterUrzad.map((item) => (
          <div key={item.id}>
            <Link to={item.Title}>
              <img src={item.img} alt={item.alt}></img>
            </Link>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="footerPartnerzy">
        <h2>Partnerzy Klubu</h2>
        <div className="partners">
          {FooterItems.map((item) => (
            <div key={item.id} className="partnersKlub">
              <Link to={item.title}>
                <img src={item.img} alt={item.alt}></img>
              </Link>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

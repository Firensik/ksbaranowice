import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
import ministerstwo from "../assets/ZdjeciaSponsor/msit.webp";
import urzadMiasta from "../assets/ZdjeciaSponsor/LOGO_zory_poziom_z_haslem.webp";
import Rybka from "../assets/ZdjeciaSponsor/Rybka Serwis.jpg";
import Artinstal from "../assets/ZdjeciaSponsor/artinstal.jpg";

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="imgUrzad">
        <Link to="https://www.zory.pl/">
          <img src={urzadMiasta} alt="Logo Żor"></img>
        </Link>
        <p>
          Szkolenie oraz prowadzenie drużyn w rozgrywkach piłki nożnej we
          wszystkich grupach jest możliwe przede wszystkim dzięki dotacji
          udzielonej przez UM Żory.
        </p>
      </div>
      <div className="imgMini">
        <Link to="https://www.gov.pl/web/sport">
          <img
            src={ministerstwo}
            img="Logo ministerstwa sportu i kultury"
          ></img>
        </Link>
        <p>
          Udział w szkoleniu teoretycznym i praktycznym oraz zakup niezbędnego
          sprzętu sportowego dla naszych najmłodszych zawodników odbywa się
          dzięki środkom pozyskanych w ramach PROGRAMU „KLUB” 2022 finansowanego
          z Funduszu Rozwoju Kultury Fizycznej Ministerstwa Sportu i Turystki.
        </p>
      </div>
      <div className="footerPartnerzy">
        <h2>Partnerzy Klubu</h2>
        <Link to="https://www.facebook.com/RybkaSerwis/?locale=pl_PL">
          <img src={Rybka} alt="Logo Rybka opony" />
        </Link>
        <p>Hurtownia-Serwis Ogumienia Grzegorz Rybka</p>
      </div>
      <Link to="https://www.facebook.com/RybkaSerwis/?locale=pl_PL">
        <img src={Artinstal} alt="Logo Art Instal" />
      </Link>
      <p>P.U.H. Art Instal s.c.</p>
      <Link to="https://www.facebook.com/RybkaSerwis/?locale=pl_PL">
        <img src={Artinstal} alt="Logo Art Instal" />
      </Link>
      <p>P.U.H. Art Instal s.c.</p>
    </footer>
  );
};

export default Footer;

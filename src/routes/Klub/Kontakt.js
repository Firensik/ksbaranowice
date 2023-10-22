import React from "react";
import Header from "../../Components/Header/Header";
import "./KontaktStyle.css";
import { BiPhone, BiNavigation } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import Sponsorzy from "../Footer";

const Kontakt = () => {
  return (
    <>
      <Header />
      <div className="containerKontakt">
        <h1>Kontakt</h1>
        <ul className="kontakt">
          <li className="kontaktPrezes">
            <div className="kontaktIcon">
              <BiPhone />
            </div>
            <h3>Prezes</h3>
            <p>Piotr Dziadek</p>
            <p>Prezes Zarządu</p>
            <p>
              telefon:
              <a href="tel:+48 602 650 537" className="kontaktNumer">
                +48 602 650 537
              </a>
            </p>
          </li>
          <li className="kontaktSala">
            <div className="kontaktIcon">
              <BiPhone />
            </div>

            <h3>Sala</h3>
            <p>Stanisław Waleczek</p>
            <p>Wynajęcie sali</p>
            <p>
              telefon:
              <a href="tel:+48 504 174 197" className="kontaktNumer">
                +48 504 174 197
              </a>
            </p>
          </li>
          <li className="kontaktBoisko">
            <div className="kontaktIcon">
              <HiOutlineMail />
            </div>

            <h3>Email</h3>
            <p>Masz pytania? Napisz do nas!</p>
            <p>
              email:
              <a
                href="mailto:lksbaranowice@gmail.com?subject=Temat wiadomości&body=Treść wiadomości"
                className="kontaktNumer"
              >
                lksbaranowice@gmail.com
              </a>
            </p>
          </li>
          <li className="kontaktBoisko">
            <div className="kontaktIcon">
              <BiNavigation />
            </div>

            <h3>Nasz adres</h3>
            <p>Klub Sportowy Baranowice - Źory</p>
            <p>44-240 Żory, ul.Lipowa9</p>

            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.209930843367!2d18.70707047684153!3d50.02616201782236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716b2dc5d9ca037%3A0x139554e9dbd6e5db!2sLipowa%209%2C%2044-240%20%C5%BBory!5e0!3m2!1spl!2spl!4v1697737752105!5m2!1spl!2spl"
            ></iframe>
          </li>
        </ul>
        <Sponsorzy />
      </div>
    </>
  );
};

export default Kontakt;

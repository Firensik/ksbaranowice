import React, { useState } from "react";
import logo from "../../assets/ksbaranowizezory.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="navbarWrapper">
      <a href="/">
        <img href="/" src={logo} alt="logo" className="headerLogo" />
      </a>

      <div className="navbarItems">
        <div className="menuIcons" onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="navLinks">
          <li className="navLink">
            <Link to="/" onClick={handleClick}>
              <span>Aktualności</span>
            </Link>
            <div className="navLink-child">
              <Link to="../../routes/Aktualnosci/Wydarzenia.js">
                Wydarzenia
              </Link>
              <Link to="/galeria">Galeria</Link>
            </div>
          </li>
          <li className="navLink">
            <Link to="#" className="klub" onClick={handleClick}>
              <span>Klub</span>
            </Link>
            <div className="navLink-child">
              <Link to="../../routes/Klub/Historia.js">Historia</Link>
              <Link to="../../routes/Klub/Osiagniecia.js.js">Osiągnięcia</Link>
              <Link to="/Zarzad">Zarząd</Link>
              <Link to="/Kontakt">Kontakt</Link>
            </div>
          </li>
          <li className="navLink">
            <Link to="#" onClick={handleClick}>
              <span>Drużyny</span>
            </Link>
            <div className="navLink-child">
              <Link to="https://www.laczynaspilka.pl/rozgrywki/druzyna/89189d87-b6a5-4066-8876-88841248f97a?tab=tab-mecz&playDictionary=84ccd1dd-c0ed-4531-ac9b-fec402872a1a">
                Klasa "A"
              </Link>
              <Link to="https://www.laczynaspilka.pl/rozgrywki/druzyna/c837a3b2-9ca8-4849-a840-7d79d534edf4">
                Klaca "C"
              </Link>
              <Link to="https://www.laczynaspilka.pl/rozgrywki/druzyna/cdd02d8d-87a9-4a64-87e2-a5312fb245a7">
                A1 - Juniorzy
              </Link>
              <Link to="https://www.laczynaspilka.pl/rozgrywki/druzyna/a3f1756c-76fe-4d84-b2aa-5a609a5a361b">
                C1 - Trampkarze
              </Link>
              <Link to="https://www.laczynaspilka.pl/rozgrywki/druzyna/1f7b2416-1496-41a8-ab41-95e3dfaeee53">
                C2 -Trampkarze
              </Link>
            </div>
          </li>
          <li className="navLink">
            {" "}
            <Link to="" className="">
              <span>Rozgrywki</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

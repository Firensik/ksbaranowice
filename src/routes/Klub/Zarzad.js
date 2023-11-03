import React from "react";
import Header from "../../Components/Header/Header";
import { ZarzadItems } from "./ZarzadItems";
import Footer from "../Footer/Footer";
import "./ZarzadStyle.css";

const Zarzad = () => {
  return (
    <>
      <Header />
      <div className="containerZarzad">
        <h1>Zarząd Klubu</h1>
        <ul className="Zarzad">
          {ZarzadItems.map((item) => (
            <div key={item.id} className="zarzadElements">
              <h3>{item.Title}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Zarzad;

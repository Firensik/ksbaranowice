import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./GaleriaStyle.css";
import { GaleriaItems } from "./GaleriaItems";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

const Galeria = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleClick = (id) => {
    setSelectedImageId(id);
    console.log(id, "xd");
  };

  return (
    <>
      <Header />

      <div className="galeria">
        <h1>Galeria</h1>
        <ul className="container">
          {GaleriaItems.map((item) => (
            <div key={item.id} className="pics">
              <Link to={`/GaleriaPage/${item.id}`}>
                <img
                  id={item.id}
                  src={item.thumbnail}
                  onClick={() => handleClick(item.id)}
                  alt={`Zdjęcie ${item.id}`}
                />
              </Link>
              <div className="galleryInfo">
                <p>
                  <strong>{item.info}</strong> / {item.date}
                </p>
              </div>
              <div className="galleryTitle">
                <h3>{item.Title}</h3>
              </div>
              <div className="galleryMore">
                <AiOutlineCamera />
                <span className="spanMore">{item.span}</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default Galeria;

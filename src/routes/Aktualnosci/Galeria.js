import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./GaleriaStyle.css";
import { GaleriaItems } from "./GaleriaItems";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ReactPaginate from "react-paginate";

const Galeria = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleClick = (id) => {
    setSelectedImageId(id);
  };

  const [gallery, setGallery] = useState(GaleriaItems.slice(0, 50));

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = gallery
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => (
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
    ));
  const pageCount = Math.ceil(gallery.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />

      <div className="galeria">
        <h1>Galeria</h1>
        <ul className="container">{displayUsers}</ul>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>

      <Footer />
    </>
  );
};

export default Galeria;

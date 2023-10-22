import "./GaleriaItems.css";
import "./galleryPage.css";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { AiOutlineCamera, AiOutlineCalendar } from "react-icons/ai";
import { useRef, useState } from "react";
import { GaleriaItems } from "./GaleriaItems";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillXCircleFill,
  BsSlashCircle,
} from "react-icons/bs";

const GalleryPage = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const intId = +id;

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(selectedImage.img.length - 1)
      : setSlideNumber(slideNumber - 1);
    console.log(setSlideNumber);
  };
  const nextSlide = () => {
    slideNumber + 1 === selectedImage.img.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const selectedImage = GaleriaItems.find((item) => item.id === intId);

  return (
    <>
      <Header />
      <div className="container">
        {selectedImage && (
          <div className="articlesInfo" key={selectedImage.id}>
            <h1>{selectedImage.Title}</h1>
            <span>
              <AiOutlineCalendar />
              {selectedImage.date}
            </span>
            <span>
              <AiOutlineCamera /> {selectedImage.photographer}
            </span>
            <a href="/galeria" className="ArticleInfoRight floatRight">
              POWRÓT DO LISTY
            </a>
          </div>
        )}
      </div>
      {openModal && (
        <div className="sliderWrap">
          <BsFillXCircleFill className="btnClose" onClick={handleCloseModal} />
          <BsFillArrowLeftCircleFill className="btnPrev" onClick={prevSlide} />
          <BsFillArrowRightCircleFill className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={selectedImage.img[slideNumber]} alt="" />
          </div>
        </div>
      )}
      <div className="container">
        {GaleriaItems.find((item) => item.id === intId).img.map(
          (imgSrc, index) => (
            <div
              className="pics"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={imgSrc} alt={`Zdjęcie ${index + 1}`} />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default GalleryPage;

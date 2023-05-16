import React, { useState } from "react";
import "./carousel.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev + data.length - 1) % data.length);
  };

  return (
    <div className="carousel">
      <ArrowBackIcon className="arrow arrowBackward" onClick={prevSlide} />
      {data.map((item, index) => (
        <div key={index}>
          <img
            src={item.src}
            alt={item.alt}
            className={slide === index ? "slide" : "slide-hidden"}
          />
        </div>
      ))}
      <ArrowForwardIcon className="arrow arrowForward" onClick={nextSlide} />

      {data.map((item, index) => (
        <div key={index}>
          <h1 className="imageName">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { Carousel } from "./CarouselData/Carousel";
import "./banner.css"
// import slides from "./CarouselData/CarouselData.json";

const slides = [
    {
      src: "./images/adi-kailsah.jpg",
      alt: "Adi Kailash",
    },
    {
      src: "./images/Chadar-Frozen-River-Trek-Ladakh.jpg",
      alt: "Frozen River Trek",
    },
    {
      src: "./images/banner-img01.jpg",
      alt: "Golden Triangle Tour",
    },
  ];

function Banner() {
  return (
    <>
      <section>
        <div className="container">
          <div className="leftSection">
            <div className="leftCarousel">
              <Carousel data={slides} />
            </div>
          </div>
          <div className="rightSection">
            <h1>right</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;

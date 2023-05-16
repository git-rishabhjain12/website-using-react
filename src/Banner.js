import React from "react";
import { Carousel } from "./CarouselData/Carousel";
import  slides  from "./CarouselData/CarouselData.json";

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
          <div className="rightSection"></div>
        </div>
      </section>
    </>
  );
}

export default Banner;

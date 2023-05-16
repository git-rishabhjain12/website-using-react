import React from "react";
import "./carousel.css";

export const Carousel = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        {data.map((item, index) => {
          return <img src={item.src} alt={item.alt} key={index} />;
        })}
      </div>
    </>
  );
};

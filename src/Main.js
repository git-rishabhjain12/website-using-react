import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
    </BrowserRouter>
  );
}

export default Main;

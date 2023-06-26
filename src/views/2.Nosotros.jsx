/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import UsSection from "../components/UsSection";

/* UTILS */
import nosotros from "../utils/Nosotros.json";

function Nosotros() {
  return (
    <div>
      <Header />
      <HeaderGap />
      <div id="nosotros">
        <Banner content={nosotros.banner} />
        <UsSection contents={nosotros.body} />
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;

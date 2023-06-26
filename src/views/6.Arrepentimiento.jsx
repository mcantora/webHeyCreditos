/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import RegretSection from "../components/Forms/RegretSection";

/* UTILS */
import arrepentimiento from "../utils/Arrepentimiento.json";
import formInputs from "../utils/RegretForm.json";

/* ESTILOS */
import "../css/Contacto.css";
import "../css/BannerElements.css";

function Arrepentimiento() {
  return (
    <>
      <Header />
      <HeaderGap />
      <div id="contact">
        <Banner content={arrepentimiento.banner} />
        <RegretSection formInputs={formInputs}/>
      </div>
      <Footer />
    </>
  );
}

export default Arrepentimiento;

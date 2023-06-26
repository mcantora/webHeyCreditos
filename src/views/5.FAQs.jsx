/*  BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FAQSection from "../components/FAQSection";

/* UTILS */
import faqs from "../utils/FAQs.json";
/* ESTILOS */
import "../css/PreguntasFrecuentes.css";


function PreguntasFrecuentes() {
  return (
    <div>
      <Header />
      <HeaderGap />
      <div id="faq">
        <Banner content={faqs.banner} />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default PreguntasFrecuentes;

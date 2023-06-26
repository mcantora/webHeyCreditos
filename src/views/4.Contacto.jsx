/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

/* UTILS */
import contacto from "../utils/Contacto.json";
import formInputs from "../utils/ContactForm.json";

/* ESTILOS */
import "../css/Contacto.css";
import Contact from "../components/Forms/Contact";

export default function Contacto() {
  return (
    <>
      <Header />
      <HeaderGap />
      <div id="contact">
        <Banner content={contacto.banner} />
        <Contact formInputs={formInputs} />
      </div>
      <Footer />
    </>
  );
}

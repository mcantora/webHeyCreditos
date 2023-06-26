/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
/* UTILS */
import prot from "../utils/Proteccion.json";
/* ESTILOS */
import ProtectionSection from "../components/ProtectionSection";

export default function Protección() {
  
  return (
    <div>
      <Header />
      <HeaderGap />
      <div className="iusf">
        <Banner content={prot.banner} />
        <ProtectionSection/>
      </div>
      <Footer />
    </div>
  );
}

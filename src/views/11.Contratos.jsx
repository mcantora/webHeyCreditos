/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import ContractsSection from "../components/ContractsSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

/* UTILS */
import contratos from "../utils/Contratos.json";

export default function Contratos() {
  return (
    <div>
      <Header bgvisible={false}/>
      <HeaderGap />
      <div className="iusf">
        <Banner content={contratos.banner} />
        <ContractsSection />
      </div>
      <Footer />
    </div>
  );
}

/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

/* UTILS */
import medios from "../utils/Medios.json";
import PaymentSection from "../components/PaymentSection";

export default function MediosPago() {
  return (
    <div>
      <Header bgvisible={false}/>
      <HeaderGap />
      <div className="iusf">
        <Banner content={medios.banner} />
        <PaymentSection/>
      </div>
      <Footer />
    </div>
  );
}

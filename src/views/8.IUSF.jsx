/* BIBLIOTECAS */
import React from "react";
/* COMPONENTS */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

/* ASSETS */
import normas1 from "../assets/info/01-bcra_normas_2019.png";
import normas2 from "../assets/info/02-bcra_normas_2019.png";
import normas3 from "../assets/info/03-bcra_normas_2019.png";
import normas4 from "../assets/info/04-bcra_normas_2019.png";
import normas5 from "../assets/info/05-bcra_normas_2019.png";
import normas6 from "../assets/info/06-bcra_normas_2020.jpg";
/* UTILS */
import info from "../utils/IUSF.json";
/* ESTILOS */
import "../css/IUSF.css";
import IUSFSection from "../components/IUSFSection";
export default function IUSF() {
  return (
    <div>
      <Header />
      <HeaderGap />
      <div className="iusf">
        <Banner content={info.banner} />
        <IUSFSection/>
        <div className="flex row center-y normas">
          <img src={normas1} alt="normas1" />
          <img src={normas2} alt="normas2" />
          <img src={normas3} alt="normas3" />
          <img src={normas4} alt="normas4" />
          <img src={normas5} alt="normas5" />
          <img src={normas6} alt="normas6" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

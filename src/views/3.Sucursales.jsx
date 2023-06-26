/* BIBLIOTECAS */
import React from "react";
/* COMPONENTES */
import Header from "../components/Header";
import HeaderGap from "../components/Header/HeaderGap";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Offices from "../components/Offices";

/* UTILS */
import sucursales from "../utils/Sucursales.json";

export default function Sucursales() {
  return (
    <div>
      <Header />
      <HeaderGap />
      <div>
        <Banner content={sucursales.banner} />
        <Offices contents={sucursales.cba} />
      </div>
      <Footer />
    </div>
  );
}

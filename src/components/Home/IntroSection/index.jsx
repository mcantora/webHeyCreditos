/* BIBLIOTECAS */
import React from "react";
/* ESTILOS */
import "../../../css/Home.css";
import "../../../css/BannerElements.css"

export default function IntroSection({ contents }) {
  return (
    <div className="intro-section">
      <div className="intro-margins">
        <h2 className="black-txt">{contents.h2.map(h2 => <>{h2}<br/></>)}</h2>
        <p className="inside-reqs">{contents.p}</p>
      </div>
      <div className="intro-svg" />
    </div>
  );
}

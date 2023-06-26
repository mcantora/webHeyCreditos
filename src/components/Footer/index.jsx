/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
/* ASSETS */
import bcra from "../../assets/footer/bcra.webp";
/* import f from '../assets/footer/facebook.svg'; */
import ig from "../../assets/footer/instagram.svg";
import fb from "../../assets/footer/facebook.svg";
/* UTILS */
import footer from "../../utils/Footer.json";
/* ESTILOS */
import "../../css/Footer.css";
import styles from "./style.module.css";
import Followus from "./Followus";
import MapSite from "./MapSite";
import Legalities from "./Legalities";
import FinUser from "./FInUser";

export default function Footer() {
  // Componentising purple footer columns for best CSS handling
  return (
    <div className="footer">
      <div className="purple-footer">
        <div id="pf-desktop" className="pf-margins flex row-top between">
          <Followus styles={styles} footer={footer} ig={ig} fb={fb} />
          <div className="vertical" />
          <MapSite styles={styles} footer={footer} />
          <Legalities styles={styles} footer={footer} />
          <FinUser styles={styles} footer={footer} bcra={bcra} />
        </div>

        <div id="pf-mobile" className="pf-margins flex column">
          <div className="flex row evenly">
            <Followus styles={styles} footer={footer} ig={ig} fb={fb} />
            <FinUser styles={styles} footer={footer} bcra={bcra} />
          </div>
          <div className="hr" />
          <div className="flex row-top evenly">
            <MapSite styles={styles} footer={footer} />
            <div style={{ width: "2rem", height: "auto" }} />
            <Legalities styles={styles} footer={footer} />
          </div>
        </div>
      </div>
      <div className="white-footer">
        {footer.white.map((txt,i) => (
          <p className="copyright" key={i}>{parse(txt)}</p>
        ))}
      </div>
      <div className="version">{footer.version} </div>
    </div>
  );
}

/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";
/* COMPONENTS */
import Banner from "../components/Banner";
/* UTILS */
import footer from "../utils/Footer.json";
import block from "../utils/Block.json";
import IconLogo from "../components/Icons/logo";
/* ESTILOS */
import styles from "./Block.module.css";
import Gradient from "../components/Banner/Gradient";
import { Link } from "react-router-dom";
export default function Block() {
  return (
    <div>
      <div className="iusf">
        <div className={styles.header}>
          <IconLogo className={styles.icon} />
        </div>
        <div className={styles.wraper}>
          <div className={styles.text}>
            Para poder realizar tu prestamo HEY, tenés que acceder desde un
            celular o tablet.
          </div>
          <Link className= {styles.link}to={'/'}> Volver al sitio.</Link>
        </div>
        <div className={styles.gap}></div>
        <div className="white-footer">
          {footer.white.map((txt) => (
            <p className="copyright">{parse(txt)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

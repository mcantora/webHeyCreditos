/* BIBLIOTECAS */
import React from "react";
/* ESTILOS */
import "../../../css/Home.css";
import "../../../css/BannerElements.css";
/* import styles from "./style.module.css"; */
import { Link } from "react-router-dom";

export default function Success({ isSuccess}) {
  return (
    <>
      {isSuccess && (
        <div className="section-margins col1-contacto">
          <h3 className="primary-txt">Gracias por escribirnos</h3>
          <p className="col1-text">
            <strong>
              Estamos procesando tu mensaje. En breve nos pondremos en contacto.
            </strong>
          </p>
          <div className="banner-spacer">spacer</div>
          <Link to="/">
            <button className="cta t2 primary-bg">
              <span id="primary">Volver a inicio</span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

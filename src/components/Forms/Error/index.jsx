/* BIBLIOTECAS */
import React from "react";
/* ESTILOS */
import "../../../css/Home.css";
import "../../../css/BannerElements.css";
import { Link } from "react-router-dom";

export default function Error({ isError}) {
  return (
    <>
      {isError && (
        <div className="section-margins col1-contacto">
          <h3 className="primary-txt">No fue posible enviar el mensaje.</h3>
          <p className="col1-text">
            <strong>Por favor intente más tarde</strong>
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

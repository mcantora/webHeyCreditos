/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";

/* ASSETS */
import internet from "../../assets/info/internet.png";
import telefono from "../../assets/info/telefono.webp";
import email from "../../assets/info/email.png";
import correo from "../../assets/info/correo.png";
/* UTILS */
import info from "../../utils/IUSF.json";
import sucursales from "../../utils/Sucursales.json";
import contacto from "../../utils/CanalesContacto.json";
/* ESTILOS */
import "../../css/IUSF.css";

export default function IUSFSection() {

  return (
    <div className="iusf-text">
      {parse(info.p[0])}
      <div className="secondary-bg wrap iusf-box">
        <ul className="ul1">
          <li id="iusf-li" className="flex row center-y" key="Internet">
            <img src={internet} alt="Internet" />
            <div>
              <h3>Por internet</h3>
              <div>a través de nuestro formulario de contacto: </div>
              <a href="/contacto"><strong>www.heycreditos.com.ar/contacto</strong></a>
            </div>
          </li>
          <li id="iusf-li" className="flex row center-y" key="Teléfono">
            <img src={telefono} alt="Teléfono" />
            <div className="flex column">
              <h3>Por teléfono</h3>
              <a href={contacto.linea_tel}>
                Línea fija: <strong>{contacto.linea_txt}</strong>
              </a>
              <a href="https://wa.me/5491126960855">
                WhatsApp: <strong>+5491126960855</strong>
              </a>
            </div>
          </li>
          <li id="iusf-li" className="flex row center-y" key="E-mail">
            <img src={email} alt="E-mail" />
            <div>
              <h3>Por correo electrónico</h3>
              <a href="mailto:info@heycreditos.com.ar">
                a <strong>info@heycreditos.com.ar</strong>
              </a>
            </div>
          </li>
          <li id="iusf-li" className="flex row center-y" key="Correo">
            <img src={correo} alt="Correo postal" />
            <div className="flex column">
              <h3>Por correo postal</h3>
                {sucursales.ba.address.map(
                  x => <div style={{display: 'block'}}>{x}</div>
                )}
            </div>
          </li>
        </ul>
        <ul className="ul2">
          {parse(info.p[1])}
          {parse(info.p[2])}
        </ul>
      </div>
      <div className="hidden height1rem" />
      <div className="primary-bg iusf-box slimmer">
        <ul id="iusf-officials">
          {parse(info["officials-text"])}
          <div className="hidden height1rem" />
          {info.officials.map((txt) => parse(txt))}
        </ul>
      </div>
      <div className="hidden height1rem" />
      <div className="secondary-bg iusf-box slimmer">
        {parse(info.links.h3)}
        <ul id="iusf-links">
          <p>
            <b>
              <a className="t1 wrap" style={{justifyContent: 'center'}} href={info.links.defensa_nacion}>
                <span>Formulario de denuncias -&nbsp;</span>
                <span>Ventanilla Única -&nbsp;</span>
                <span>Defensa del Consumidor Nación</span>
              </a>
            </b>
          </p>
          <p>
            <b>
              <a className="t1 wrap" style={{justifyContent: 'center'}} href={info.links.defensa_caba}>
                <span>Formulario de denuncias -&nbsp;</span>
                <span>Defensa del Consumidor CABA</span>
              </a>
            </b>
          </p>
          <p>
            <b>
              <a className="t1" href={info.links.transp}>
                Régimen de transparencia
              </a>
            </b>
          </p>
          <p>
            <b>
              <a className="t1" href="/arrepentimiento">
                Botón de Arrepentimiento
              </a>
            </b>
          </p>
        </ul>
      </div>
    </div>
  );
}

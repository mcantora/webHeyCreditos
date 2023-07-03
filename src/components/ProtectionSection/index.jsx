/* BIBLIOTECAS */
import React from "react";
/* UTILS */
import prot from "../../utils/Proteccion.json";
/* ESTILOS */
import styles from "./style.module.css";

export default function ProtectionSection() {
  return (
    <div
      className={styles.container}
    >
      {prot.links.map((element) => (
        <div className={styles.section}>
          <p className={styles.title}>
            {element.title}
            <a className={styles.link} href={element.link} target="_blank" rel="noreferrer">
              ingrese aquí.
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

//https://www.argentina.gob.ar/justicia/derechofacil/leysimple/defensa-del-consumidor

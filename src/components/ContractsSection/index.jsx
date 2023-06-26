/* BIBLIOTECAS */
import React from "react";
/* UTILS */
import contratos from "../../utils/Contratos.json";
/* ESTILOS */
import styles from "./style.module.css";

export default function Contratos() {
  return (
    <div className={styles.container}>
        {contratos.content.map(item => 
            <a className="wrap" id={styles.a} href={item.href} target="__blank" rel="noreferrer">
              <b>{item.text}</b>
            </a>
        )}
    </div>
  )
};
/* BIBLIOTECAS */
import React from "react";
/* ESTILOS */
import "../../css/Home.css";
import illustration from "../../assets/nosotros/illustration.svg";
import mision from "../../assets/nosotros/mision.svg";
import vision from "../../assets/nosotros/vision.svg";
/* ESTILOS */
import styles from "./style.module.css";

export default function UsSection({ contents }) {
  return (
    <div id={styles['us-section']}>
      <div className="section-margins" id={styles['us-text']}>
        <h2 className="black-txt">{contents.h2}</h2>
        {contents.p.map((p,i) => <p className={styles['us-main-text']} key={i}>{p}</p>)}
        <div className="wrap2 center-x-1">
          <div className={styles['us-row']}>
            <div className="flex row center-y">
              <img src={mision} alt="1" />
              <h3 className="black-txt" id={styles['title-spacer']}>{contents.mision.h3}</h3>
            </div>
            <p>{contents.mision.p}</p>
          </div>
          <div className={styles['us-row']}>
            <div className="flex row center-y">
              <img src={vision} alt="2" />
              <h3 className="black-txt" id={styles['title-spacer']}>{contents.vision.h3}</h3>
            </div>
            <p>{contents.vision.p}</p>
          </div>
        </div>
      </div>
      <div id={styles['us-illustration']} className="reqs-col2">
        <img src={illustration} alt="Hey Créditos" />
      </div>
    </div>
  );
}

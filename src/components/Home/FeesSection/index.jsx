/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";
/* ESTILOS */
import "../../../css/Home.css";
import styles from "./style.module.css";

export default function FeesSection({ contents }) {
  return (
    <div className="lighter grey-bg white-txt" id={styles.margins}>
      {contents.small.map(p => <p id={styles.p}>{p}</p>)}
      <p className="wrap" id={styles['huge-txt']}>{contents.big.map(x=>parse(x))}</p>
    </div>
  );
}

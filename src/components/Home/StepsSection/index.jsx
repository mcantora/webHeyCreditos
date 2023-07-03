/* BIBLIOTECAS */
import React from "react";
/* ESTILOS */
import "../../../css/Home.css";
import "../../../css/BannerElements.css";
import phone from "../../../assets/home/cellphone.png";
import globo from "../../../assets/home/globotext.svg";
import styles from "./style.module.css";
import money from "../../../assets/home/money.png";
import CellPhone from "./CellPhone";
import Steps from "./Steps";

export default function StepsSection({ contents }) {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <Steps contents={contents} />
      <CellPhone
        styles={styles}
        money={money}
        phone={phone}
        globo={globo}
        contents={contents}
      />
    </div>
  );
}

/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";
/* ESTILOS */
import "../../../css/Home.css";
import styles from "./style.module.css";
/* ASSETS */
import waves from "../../../assets/home/waves.svg";
import wavesRepeat from "../../../assets/home/waves-repeat.svg";
import divLine from "../../../assets/home/line.svg";
import Req1 from "../../../assets/home/Req1.jsx";
import Req2 from "../../../assets/home/Req2.jsx";
import Req3 from "../../../assets/home/Req3.jsx";
import Req4 from "../../../assets/home/Req4.jsx";
import Req5 from "../../../assets/home/Req5.jsx";
import getMobileOperatingSystem from "../../../global/detectSystem";
import { Link } from "react-router-dom";

const icons1 = [
  <Req1 height="80" />,
  <Req2 height="80" />,
  <Req3 height="80" />,
];
const icons2 = [<Req4 height="80" />, <Req5 height="80" />];
const iconsMobil = [
  <Req1 height="55" />,
  <Req2 height="55" />,
  <Req3 height="52" />,
  <Req4 height="55" />,
  <Req5 height="55" />,
];
const iconsTransition = [
  <Req1 height="70" />,
  <Req2 height="70" />,
  <Req3 height="70" />,
  <Req4 height="70" />,
  <Req5 height="70" />,
];

const canRedirect = getMobileOperatingSystem();

export default function ReqsSection({ contents, redirect }) {
  return (
    <div className={styles.reqsContainer}>
      <img className={styles.waves} alt="" src={waves} />
      <img className={styles.waves} alt="" src={wavesRepeat} />
      <h2 className="wrap center-text center-x-1" id={styles.forceCenter}>
        {contents.h2.map((h2) => parse(h2))}
      </h2>
      <img alt="____________" src={divLine} />
      <div
        className={styles.containerIcons}
        id={styles.rowMargins}
        style={{ justifyContent: "center" }}
      >
        <div className="flex wrap2 center-x-1 hiddenmobile">
          {contents.row1.map((row, i) => (
            <div className="flex column" id={styles.forceCenter}>
              {icons1[i]}
              <h3 className="primary-txt">
                <b>{row.title}</b>
              </h3>
              <p className="blue-txt" id={styles.textLimit}>
                {row.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex wrap2 center-x-1 hiddenmobile">
          {contents.row2.map((row, i) => (
            <div className="flex column" id={styles.forceCenter}>
              {icons2[i]}
              <h3 className="primary-txt">
                <b>{row.title}</b>
              </h3>
              <p className="blue-txt" id={styles.textLimit}>
                {row.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex column hiddenDesktop">
          {contents.mobil.map((row, i) => (
            <div className={styles.containerCard}>
              <div className={styles.containerIcon}>{iconsTransition[i]}</div>
              <div>
                <h3 className="primary-txt">
                  <b className={styles.title}>{row.title}</b>
                </h3>
                <p className={styles.phrase}>{row.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex column hiddenTransicion">
          {contents.mobil.map((row, i) => (
            <div className={styles.containerCard}>
              <div style={{ alignSelf: "center", width: "6em" }}>
                {iconsMobil[i]}
              </div>
              <div>
                <h3 className="primary-txt">
                  <b className={styles.title}>{row.title}</b>
                </h3>
                <p className={styles.phrase}>{row.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="cta t2 primary-bg sq-cta">
        {canRedirect ? (
          <a className="t2" id="primary" href={redirect} target="__blank">
            <span id="primary">{contents.cta}</span>
          </a>
        ) : (
          <Link to={"/block"}>
            <a className="t2" id="primary">
              <span id="primary">{contents.cta}</span>
            </a>
          </Link>
        )}
      </button>
    </div>
  );
}

/* BIBLIOTECAS */
import React from "react";
/* UTILS */
import contact from "../../utils/CanalesContacto.json";
/* ESTILOS */
import styles from "./style.module.css";
/* ASSETS */
import WspIcon from "../Icons/wspicon";
import HouseIcon from "../Icons/houseicon";

export default function Offices({ contents }) {
  return (
    <div className="wrap between">
      <div className={styles.office}>
        <div className="secondary-txt" id={styles['office-margins']}>
          <h2 className="primary-txt">{contents.h2}</h2>
          <p>
            <strong className={styles.containerContact}>
            <a className="flex row" href={contents.maps} target="__blank" rel="noreferrer">
              <HouseIcon size="4rem"/>
              <p className={styles.spacing}>{contents.address}</p>
            </a>
            </strong>
          </p>
          <p>
            <strong className={styles.containerContact}>
              <a className="flex row" href={contact.wsp_cba_href} target="__blank" rel="noreferrer">
                <WspIcon size="4rem"/>
                <p className={styles.spacing}>+{contact.wsp_cba_txt}</p>
              </a>
            </strong>
          </p>
          <p className="hidden">spacer</p>

          <p>{contents.available[0]}</p>
          <p>
            <strong>{contents.available[1]}</strong>
          </p>
          <p>
            <strong>{contents.available[2]}</strong>
          </p>
          <button className="cta t2 primary-bg" id={styles['cta-margins']}>
            <a id={styles['primary-link']} href={contact.wsp_cba_href} target="__blank" rel="noreferrer">
              {contents.cta}
            </a>
          </button>
        </div>
      </div> { /* eslint-disable-next-line jsx-a11y/anchor-has-content */ }
      <a  id={styles.hq} className={styles['office-map']} href={contents.maps} target="__blank" rel="noreferrer"/>
    </div>
  );
}

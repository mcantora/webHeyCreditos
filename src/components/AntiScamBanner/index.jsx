/* BIBLIOTECAS */
import React from "react";
import parse from "html-react-parser";
/* ESTILOS */
import "../../css/Home.css";
import "../../css/BannerElements.css";
import styles from "./style.module.css";

/* UTILS */
import chevron from "../../assets/chevron.svg";
import chevronMobil from "../../assets/home/halfchevrone.svg";
import chevronMobilSecondary from "../../assets/chevron-mobil-secondary.svg";

import girl from "../../assets/home/desktopGirl.webp";
import girlMobile from "../../assets/home/bannerGirlMobile.webp";

import money from "../../assets/home/money.png";
import Chevron from "./Chevrone";
import Gradient from "./Gradient";
import ImgGirl from "./ImgGirl";
import Button from "./Button";

export default function AntiScamBanner({ content, redirect, cta, mobile, p }) {
  const { variant, gradient, bg, legales, bigtext } = content;
  //Bg settings
  const banner = {
    legales: `bannerStandar ${bg}`,
    home: `banner ${bg}`,
    default: `bannerSecondary ${bg}`,
  };
  //Text settings
  const text = {
    legales: "banner-text primary-txt",
    home: "banner-text text-home",
    default: "banner-text-secondary white-txt-banner",
  };
  //Gradients settings
  const bannerGradient = legales ? "bannerStandar-gradient" : "banner-gradient";
  //Overlay settings
  const isOverlay = bg === "offices-bnr" || bg === "home-bnr" ? " overlay" : "";
  //Button settings
  const littleBanner = bigtext ? "banner-container-secondary" : false;
  return (
    <div className={banner[variant]}>
      <Gradient
        bannerGradient={bannerGradient}
        isOverlay={isOverlay}
        variant={variant}
        gradient={gradient}
      />
      {/* <Chevron
        styles={styles}
        chevron={chevron}
        chevronMobilSecondary={chevronMobilSecondary}
        chevronMobil={chevronMobil}
        variant={variant}
      /> */}
      {/* <ImgGirl
        styles={styles}
        girl={girl}
        money={money}
        girlMobile={girlMobile}
        variant={variant}
      /> */}
      <div className={littleBanner ? littleBanner : text[variant]}>
        <div>
          {content?.home && <p>{content.p0}</p>}
        </div>
        {content.gap && <div style={{ marginTop: "5em" }}></div>}
        {Array.isArray(content.h1) ? (
          content.h1.map((h) => (
            <h1 className={h === "Botón de" || h === "arrepentimiento" ? styles.regretFix : ""}>
              {parse(h)}
            </h1>
          ))
        ) : (
          <h1>{content?.h1}</h1>
        )}
        
          <p>texto texto</p>
        {content.li?.map((text) => (
          <>
            <li className={styles.bannerLi}>{parse(text)}</li>
          </>
        ))}
        <>{p && <div className={styles.mobileP}>{p}</div>}</>
        <Button styles={styles} cta={cta} redirect={redirect} mobile={mobile} />
      </div>
    </div>
  );
}

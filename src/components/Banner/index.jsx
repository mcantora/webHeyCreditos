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

import Chevron from "./Chevrone";
import Gradient from "./Gradient";
import Button from "./Button";
import FloatImage from "./FloatImage";
import VideoBtn from "./VideoBtn";



export default function Banner({
  content,
  redirect,
  cta,
  vid,
  mobile,
  p,
  icons,
  img,
  bgFloat,
  prestamo,
  scam,
  pago,
  abrirModal,
  cerrarModal
}) {
  const { variant, gradient, bg, legales, bigtext, name } = content;
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
      {/* Recibe la variante y renderiza: Gradiente, Chevron que son las imagenes de fondo difuminadas */}
      <Gradient
        bannerGradient={bannerGradient}
        isOverlay={isOverlay}
        variant={variant}
        gradient={gradient}
      />
      <Chevron
        styles={styles}
        chevron={chevron}
        chevronMobilSecondary={chevronMobilSecondary}
        chevronMobil={chevronMobil}
        variant={variant}
      />
      {/* Recibe la imagen flotante (scam,prestamo,video) */}
      <FloatImage
        styles={styles}
        img={img}
        bg={bgFloat}
        prestamo={prestamo}
        scam={scam}
        pago={pago}
        variant={variant}
      />
      <div className={littleBanner ? littleBanner : text[variant]}>

        <div>{content?.home && <p>{content.p0}</p>}</div>
        {content.gap && <div style={{ marginTop: "5em" }}></div>}

        {/* div para agrupar los h1 con un estilo especifico para el banner de pagoOnline */}
        <div className={vid? styles.pagoOnlineDiv : ""}>
        {/* Si el content.h1 es un array lo mapea, sino muestra lo q tiene */}
        {Array.isArray(content.h1) ? (
          content.h1.map((h,i) => (
            <h1
              className={
                h === "Botón de" || h === "arrepentimiento"
                  ? styles.regretFix
                  : vid? styles.pagoOnline : ""
              }key={i}
            >
              {parse(h)}
            </h1>
          ))
        ) : (
          <h1>{content?.h1}</h1>
        )}
        </div>

          {/* Si el content.p tiene un parseThis lo muestra parseandolo, sino lo muestra como está */}
        {content.p &&
          (content.p.parseThis || content.p.parseThis2 ? (
            <>{parse(content.p.parseThis || content.p.parseThis2)}</>
          ) : (
            <p>{content.p}</p>
          ))}

         {/* mapea el content.li, y en caso de que tenga iconos los muestra(caso del scam banner)    */}
        {content.li?.map((text, index) => {
          return (
            
            <div className={styles.liContainer} >
            
              {icons?.length > 0 && (
                <img src={icons[index]} className={styles.img} />
              )}
              <li className={styles.bannerLi}>{parse(text)}</li>
            </div>
          );
        })}


        <>{p && <div className={styles.mobileP}>{p}</div>}</>

        {/* boton pedi tu prestamo */}
        {mobile && <Button styles={styles} cta={cta} redirect={redirect} mobile={mobile} />} 
        {/* boton ver video */}
         {vid && <VideoBtn  styles={styles} vid={vid}  abrirModal={abrirModal} />}   
       {/* {vid &&  <button onClick={abrirModal}>Abrir Modal</button>} */}

        {/* Scam banner */}
        {name === "scam" &&
          content?.cuentas?.map((text, index) => (
            <>
              <img src={icons[index]} />
              <li className={(name = "scam" ? styles.bannerLi : null)}>
                {parse(text)}
              </li>
            </>
          ))}
        {name === "scam" && (
          <>
            <div className={styles.footer}>
              {content.footer} {" "}
              <a href={content.link}>{parse(content.link)}</a>
            </div>
          </>
        )}

        
      </div>
    </div>
  );
}

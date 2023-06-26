/* BIBLIOTECAS */
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";

/* COMPONENTES */
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Banner from "../components/Banner";
import VideoModal from "../components/VideoModal"
/* UTILS */
import home from "../utils/Home.json";
import scam from "../utils/Scam.json";

/* ESTILOS */
import "../css/Home.css";
import IntroSection from "../components/Home/IntroSection";
import ReqsSection from "../components/Home/ReqsSection";
import StepsSection from "../components/Home/StepsSection";
import FeesSection from "../components/Home/FeesSection";
import HeaderGap from "../components/Header/HeaderGap.jsx";
import { IconsScam } from "../assets/banner";
import pago from "../utils/PagoOnline.json"
import girl from "../assets/home/desktopGirl.webp";
import girlMobile from "../assets/home/bannerGirlMobile.webp";
import money from "../assets/home/money.png";
import bgScam from "../assets/banner/Background.png";
import pagoOnline from "../assets/home/pagoOnline.png"
import scamImage from "../assets/home/scam-banner.png";


const redirectPrestamo = "https://heycreditos.com.ar/getiframeURL.php";


function Home() {

  const [modalAbierto, setModalAbierto] = useState(false);

  function abrirModal() {
    setModalAbierto(true);
  }

  function cerrarModal() {
    setModalAbierto(false);
  }
  const slider = (
    <Carousel
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
         <div>
        <Banner
          content={scam.banner}
          icons={IconsScam}
          img={scamImage}
          bgFloat={bgScam}
          scam={scamImage}
          abrirModal={abrirModal} 
          cerrarModal={cerrarModal}
        />
      </div>
      <div>
        <Banner
          content={home.banner}
          redirect={redirectPrestamo}
          cta={home.cta1}
          mobile={home.mobile}
          p={home.p}
          img={girl}
          bgFloat={money}
          prestamo={girl}
          abrirModal={abrirModal} 
          cerrarModal={cerrarModal}
        />
      </div>
   
      <div>
        <Banner
          content={pago.banner}
          vid={pago.vid}
          img={pagoOnline}
          bgFloat={bgScam}
          pago={pagoOnline}
          abrirModal={abrirModal} 
          cerrarModal={cerrarModal}
        />
      </div>
    </Carousel>
  );
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header />
      <HeaderGap />
      <div className="homeContainer">
        <div>{slider}</div>
        <IntroSection contents={home.intro} />
        <ReqsSection contents={home.reqs} redirect={redirectPrestamo} />
        <StepsSection contents={home} />
        <FeesSection contents={home.fees} />
        {modalAbierto && (
          <VideoModal cerrarModal={cerrarModal} />
        )}
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Home;

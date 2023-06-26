/* BIBLIOTECAS */
import React, { useEffect, useState } from "react";
/* ESTILOS */
import "../../../css/Home.css";
import "../../../css/BannerElements.css";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Loading() {
  const [dote,setDote]=useState(".")
  const [flag,setFlag]=useState(false)
  const timerDote=()=>{
    setFlag(!flag)
    if(dote.length<=2){
      setDote(dote+".")
    }
    else{
      setDote(".")
    }
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  useEffect(()=>{
    setTimeout(()=>timerDote(),100)
  },[flag])
  return (
    <div className="section-margins col1-contacto">
      <h3 className="primary-txt">Enviando {dote}</h3>
      <p className="col1-text">
        <strong></strong>
      </p>
      <div className="banner-spacer">spacer</div>
      <Link to="/">
        <button className="cta t2 primary-bg">
          <span id="primary">Volver a inicio</span>
        </button>
      </Link>
    </div>
  );
}

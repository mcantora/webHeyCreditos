import React from 'react'
import getMobileOperatingSystem from "../../global/detectSystem";
import { Link } from 'react-router-dom';
import header from "../../utils/Header.json";
import style from "./style.module.css"
const PrestamoBtn = ({mobile,href}) => {
    const canRender = getMobileOperatingSystem();
  return (
    mobile?
    <button
    className={`${style.prestamoBtn} ${style.BtnMobile}`}
  >
    <a
      href={href}
      target="__blank"
    >
      ¡Obtené tu préstamo!
    </a>
  </button>
  :
    <button className={style.prestamoBtn} style={{ marginLeft: "1.2rem",marginRight:"0.8rem" }}>
    {canRender ? (
      <a href={header.redirect} target="__blank">
        ¡Solicitá tu préstamo ONLINE!
      </a>
    ) : (
      <Link to="/block">¡Solicitá tu préstamo ONLINE!</Link>
    )}
  </button>
  )
}

export default PrestamoBtn

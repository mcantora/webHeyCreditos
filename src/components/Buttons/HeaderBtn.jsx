import React from 'react'
import getMobileOperatingSystem from "../../global/detectSystem";
import style from "./style.module.css"

const HeaderBtn = ({text,href,icon,mobile}) => {
    const canRender = getMobileOperatingSystem();

    // Hacer verificacion de mobile o desktop para los botones despues
  return (
    mobile?
    <button className={style.mobileHeaderBtn}
    >
      <a
        href={href}
        target="__blank"
      >
      {text}
    </a>
    </button>
  :
    <button className={style.cta} >
          {canRender ? (
            <a
              href={href}
              target="__blank"        
            >
              {text}
              <div className={style.emptyDiv} />
              {icon}{" "}
            </a>
          ) : (
            <a
              href={href}
              target="__blank"
            >
              {text}
              <div className={style.emptyDiv} />
              {icon}
            </a>
          )}
        </button>

  )
}

export default HeaderBtn

// /* BIBLIOTECAS */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* ESTILOS */
import "../../css/Header.css";
/* UTILS */
import header from "../../utils/Header.json";
/* ASSETS */
import IconMenu from "../Icons/menu";
import IconLogo from "../Icons/logo";
import styles from "./style.module.css";
import { Transition } from "@headlessui/react";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HeaderBtn from "../Buttons/HeaderBtn";
import PrestamoBtn from "../Buttons/PrestamoBtn";
export default function Header() {
  const [show, setShow] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const styleContainer = {
    height: show ? "7rem" : "10rem",
    background: show ? "rgba(0, 0, 0, .4)" : "#fff",
    paddingBottom: show ? "10px" : "0px",
  };

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleMenu = () => {
    setIsShowing(!isShowing);
    window.scrollTo(0, 0);
    setShow(false);
  };

  useEffect(() => {
    if (!isShowing) {
      window.addEventListener("scroll", controlNavbar);
    }
    return () => {
      if (!isShowing) {
        window.removeEventListener("scroll", controlNavbar);
      }
    };
  }, [isShowing]);

  return (
    <div className={styles.container} style={styleContainer}>
      {!show ? (
        <Link id="header-logo" to="/" style={{ display: "flex", minWidth: "8%" }}>
          <IconLogo size="6rem" />
        </Link>
      ) : (
        <Link id="header-logo" to="/">
          <IconLogo primary={"#fff"} secondary="#fff" size={"5.5rem"} />
        </Link>
      )}

      {/* DESKTOP HEADER MENU */}
      <div id="header-r-desktop" className="flex row center-y">
        {!show && (
          <ul className={styles.containerLink}>
            {header.links.map((link) => (
              <React.Fragment key={link[1]}>
                <span className="headerSpan" />
                <Link to={link[0]}>
                  <li>{link[1]}</li>
                </Link>
              </React.Fragment>
            ))}
          </ul>
        )}

        <div className={styles.headBtns}>
          {/* <HeaderBtn text="Tienda Hey" href="https://www.heycreditos.com.ar/tiendahey" icon={<ShoppingBagOutlinedIcon />} mobile={false} /> */}
          <HeaderBtn text="Pagá tu cuota online" href="https://pagosenlinea.pagofacil.com.ar/" icon={<PaidOutlinedIcon />} mobile={false} />
        </div>
        <PrestamoBtn mobile={false} />
      </div>


      {/* MOBILE HEADER MENU */}
      <div id="header-r-mobile">
        {show ? (
          <IconMenu
            onClick={() => handleMenu()}
            className="icon-menu"
            stroke="#fff"
          />
        ) : (
          <IconMenu onClick={() => handleMenu()} className="icon-menu" />
        )}

        <Transition
          className={styles.containerSlider}
          style={{ paddingTop: "10px", top: !show ? "10rem" : "7rem" }}
          appear={isShowing}
          show={isShowing}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <ul>
            {header.links.map((link, index) => (
              <React.Fragment key={link[1]}>
                <Link to={link[0]}>
                  <li
                    style={{
                      width: "80vw",
                      fontSize: "2.2rem",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {link[1]}
                  </li>
                </Link>
                {index !== 3 && <hr style={{ width: "50vw" }} />}
              </React.Fragment>
            ))}

            {/* <HeaderBtn text="Tienda Hey" href="https://www.heycreditos.com.ar/tiendahey" mobile={true} />
            <div style={{ height: "10px" }}></div> */}
            <HeaderBtn text="Pagá tu cuota online" href="https://pagosenlinea.pagofacil.com.ar/" mobile={true} />
            <div style={{ height: "10px" }}></div>
            <PrestamoBtn href="https://heycreditos.com.ar/getiframeURL.php" mobile={true} />

            {/* <div className="hidden high" /> */}
          </ul>
        </Transition>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import getMobileOperatingSystem from "../../global/detectSystem";

export default function Button({ styles, cta, redirect, mobile }) {
  const canRedirect = getMobileOperatingSystem();

  if (cta)
    return (
      <>
          <a
            className={styles.linkButtonMobile}
            href={"https://heycreditos.com.ar/getiframeURL.php"}
            target="__blank"
          >
            {mobile}
          </a>

          {canRedirect ? (
            <a
              className={styles.linkButton}
              href={"https://heycreditos.com.ar/getiframeURL.php"}
              target="__blank"
            >
              {cta}
            </a>
          ) : (
            <Link to={'/block'} className={styles.linkButton}> {mobile}</Link>
          )}      
      </>
    );
  else return <></>;
}

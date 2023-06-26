import IconLogo from "../Icons/logo";

export default function Followus({ footer, styles, ig, fb }) {
  const { urls } = footer;
  return (
    <div className="m-auto">
      {/* <img className="footer-logotype" src={footerLogotype} alt="Logotipo Hey"/> */}
      <div style={{ marginTop: "1rem" }}>
        <IconLogo className={styles.icon} />
      </div>
      <div className="social">
        <div className="flex column center-y">
          <div className="grey-txt">¡Seguinos!</div>
          <div className="wrap2 center-x-1">
            <a className="margin1rem" href={urls.ig} target="__blank" rel="noopener noreferrer"><img src={ig} alt="Instagram" /></a>
            <a className="margin1rem" href={urls.fb} target="__blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

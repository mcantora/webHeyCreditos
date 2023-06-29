import { Link } from "react-router-dom";

export default function FinUser({ styles, footer, bcra }) {
  const { links3 } = footer;
  return (
    <ul className={ styles.last_ul }>
      <li key="bcra-png" style={{ alignSelf: "center", marginLeft: "7vw" }}>
        <a href={ links3.bcra } target="__blank">
          <img className={ styles.bcra } src={ bcra } alt="Usuarios financieros" />
        </a>
      </li>
      <div className="hidden height1rem" />
      <li key="info" style={{ textAlign: "right" }}>
        <Link className={ styles.link } to={ links3.info[0] }>
          { links3.info[1] }
        </Link>
      </li>
    </ul>
  );
}

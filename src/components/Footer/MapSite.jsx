import { Link } from "react-router-dom";

export default function MapSite({ styles, footer }) {
  const { links1 } = footer;
  return (
    <ul>
      <p>
        <b>Mapa del sitio</b>
      </p>
      {links1.map((link) => (
        <li key={link[1]}>
          <Link className={styles.li} to={link[0]}>
            {link[1]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

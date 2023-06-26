export default function Legalities({ styles, footer }) {
  const { links2 } = footer;
  return (
    <ul>
      <p>
        <b>Legales</b>
      </p>
      {links2.map((link) => (
        <li key={link[0]}>
          <a
            className={styles.li}
            href={link[1]}
            target={link[2]}
            rel="noopener noreferrer"
          >
            {link[3]}
          </a>
        </li>
      ))}
      <li key="contratos" id="contratos" className={styles.li}>
        <a href="/contratos">
          Contratos de adhesión - Ley 24.240 <br /> de Defensa del Consumidor
        </a>
      </li>
    </ul>
  );
}

export default function CellPhone({
  styles,
  money,
  phone,
  globo,
  contents,
}) {
  const { claims } = contents;
  return (
    <div className={styles.leftContainer}>
      <>
        <img alt="" src={money} className={styles.money} />
        <img alt="" src={phone} className={styles.img} />
        <div className={styles.text}>{claims[0]}</div>
        <img alt="" src={globo} className={styles.globo} />
        <div className={styles.globoText}>{claims[1]}</div>
      </>
    </div>
  );
}

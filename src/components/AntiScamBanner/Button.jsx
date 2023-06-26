export default function Button({ styles, cta, redirect,mobile }) {
  if (cta)
    return (
      <>
        <button className={styles.buttonMobile}>
          <a
            className={styles.buttonText}
            href={redirect && redirect}
            target="__blank"
          >
            {mobile}
          </a>
        </button>
        <button className={styles.button}>
          <a
            className={styles.buttonText}
            href={redirect && redirect}
            target="__blank"
          >
            {cta}
          </a>
        </button>
      </>
    );
    else return<></>
}

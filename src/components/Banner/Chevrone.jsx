//recibe la variante y renderiza y asigna estilos segun eso, recibe estilos para desktop y mobile
export default function Chevron({styles,chevron,chevronMobilSecondary,chevronMobil,variant}){
    const renderChevrone = {
        home: (
          <>
            <img className={styles.bannerChevron} src={chevron} alt=">>>" />
            <img
              className={styles.bannerChevronMobil}
              src={chevronMobil}
              alt=">>>"
            />
          </>
        ),
        default: (
          <>
            <img className={styles.bannerChevron} src={chevron} alt=">>>" />
            <img
              alt=">>>"
              src={chevronMobilSecondary}
              className={styles.bannerChevronMobilSecondary}
            />
          </>
        ),
        legales: (
          <>
            <img
              alt=">>>"
              src={chevronMobilSecondary}
              className={styles.bannerChevronMobilSecondary}
            />
          </>
        ),
      };
      return(renderChevrone[variant])
}
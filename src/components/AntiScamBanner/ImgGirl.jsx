export default function ImgGirl({ styles, girl, girlMobile, money, variant }) {
  if (variant === "home")
    return (
      <>
        <img className={styles.imgGirl} src={girl} alt=">>>" />
        <img className={styles.imgMoney} src={money} />
        {/* Mobile */}
        <img className={styles.imgGirlMobile} src={girlMobile} alt=">>>" />
        <img className={styles.imgMoney} src={money} />
      </>
    );
  else return null;
}

import style from "./FloatImage.module.css"

//Es la imagen flotante que se muestra en cada banner(scam:candado, prestamo:chica con celular, video:chica con lista)
export default function FloatImage({img, prestamo,scam,pago, bg, variant }) {
  //hace la validacion para ver que imagen esta renderizando en ese momento
// const subst= imgMobile?.substring(imgMobile.length -3)





  //float image solo se llama en el home
  if (variant === "home")
    return (
      <>
        {/* estilos para Desktop */}
        <img className={style.imgGirl} src={img} alt="Imágen" />
        <img className={style.imgMoney} src={bg}  alt="Imágen"/>


        {/* {Estilos para mobile segun la validacion de arriba} */}
        {prestamo&& <img className={style.imgGirlMobile} src={prestamo} alt="Imágen" />}
        {scam&& <img className={`${style['imgGirlMobile']} ${style['scamStyle']}`} src={scam} alt="Imágen" />}
        {pago && <img className={`${style['imgGirlMobile']} ${style['pagoStyle']}`} src={pago} alt="Imágen" />}
        <img className={style.imgMoney} src={bg} alt="Imágen" />
      </>
    );
  else return null;
}

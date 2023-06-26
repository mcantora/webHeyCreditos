// recibe la variante y los estilos y los renderiza y asigna los estilos segun eso

export default function Gradient({
  bannerGradient,
  isOverlay,
  variant,
  gradient,
}) {
  const renderGradient = {
    home: <div className={`${bannerGradient}${isOverlay}`} />,
    legales: <div className={`bannerStandar-gradient${isOverlay}`} />,
    default: (
      <>
        <div className={`banner-secondary-gradient${isOverlay}`} />
        {gradient && <div className={gradient} />}
      </>
    ),
  };
  return renderGradient[variant];
}

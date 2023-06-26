import pdf from "../assets/contratos/tyc.pdf";

export default function TerminosCondiciones() {
    return (
        <iframe style={{ width: "100vw", height: "100vh" }} src={pdf} type='application/pdf' title='Términos y condiciones' />
    )
};
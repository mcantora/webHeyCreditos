import pdf from "../assets/contratos/SolicitudDigital.pdf";

export default function ContratoD() {
    return (
        <iframe
            style={{ width: "100vw", height: "100vh" }}
            src={pdf}
            type='application/pdf'
            title='Solicitud de préstamo (canal digital)'
        />
    )
};
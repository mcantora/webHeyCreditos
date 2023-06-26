import pdf from "../assets/contratos/SolicitudPresencial.pdf";

export default function ContratoP() {
    return (
        <iframe
            style={{ width: "100vw", height: "100vh" }}
            src={pdf}
            type='application/pdf'
            title='Solicitud de préstamo (canal presencial)'
        />
    )
};
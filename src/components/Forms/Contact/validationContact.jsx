export function validationContact(values) {
	const errors = {}
	if (!values.from_name) {
		errors.from_name = "Ingrese su nombre completo"
	} else if (!/^[a-zA-ZñÑÀ-ÿ\-\s]*$/i.test(values.from_name)) {
		errors.from_name = "Solamente letras"
	}
	if (!values.from_id) {
		errors.from_id = "Ingrese su número de documento"
	} else if (!/^[0-9]{7,8}[\s]{0,1}$/i.test(values.from_id)) {
		errors.from_id = "Mínimo 7 números"
	}
	if (!values.from_phone) {
		errors.from_phone = "Ingrese un n° de teléfono"
	} else if (!/^[0-9]{10,16}[\s]{0,6}$/i.test(values.from_phone)) {
		errors.from_phone = "Mínimo 10 números"
	}
	if (values.subject === "MOTIVO") {
		errors.subject = "Seleccione un motivo de consulta"
	}
	if (values.subject === "CV" && !values.attachment) {
		errors.attachment = "Cargue su CV"
	}
	return errors
}

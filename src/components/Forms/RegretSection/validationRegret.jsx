export function validationRegret(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Ingrese su nombre completo";
  } else if (!/^[a-zA-ZñÑÀ-ÿ\-\s]*$/i.test(values.name)) {
    errors.name = "Solamente letras";
  }
  if (!values.dni) {
    errors.dni = "Ingrese su número de documento";
  } else if (!/^[0-9]{7,8}[\s]{0,1}$/i.test(values.dni)) {
    errors.dni = "Mínimo 7 números";
  }
  if (!values.phone) {
    errors.phone = "Ingrese un n° de teléfono";
  } else if (!/^[0-9]{10,16}[\s]{0,6}$/i.test(values.phone)) {
    errors.phone = "Mínimo 10 números";
  }
  if (!values.loand_id) {
    errors.loand_id = "Ingrese un N° de referencia";
  } else if (!/^[0-9]{8}$/i.test(values.loand_id)) {
    errors.loand_id = "Debe contener 8 dígitos";
  }
  return errors;
}

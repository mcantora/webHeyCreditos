/* BIBLIOTECAS */
import React, { useState, useRef } from "react"
import emailjs from "emailjs-com"
import { Formik } from "formik"
/* ICONS */
import PhoneIcon from "../../Icons/phone"
import EmailIcon from "../../Icons/email"
import WspIcon from "../../Icons/wspicon"
import IgIcon from "../../Icons/igicon"
import FbIcon from "../../Icons/fbicon"
/* UTILS */
import contact from "../../../utils/CanalesContacto.json"
import { validationContact } from "./validationContact"
/* ESTILOS */
import "../../../css/Contacto.css"
import styles from "./style.module.css"

import Error from "../Error"
import Success from "../Success"
import Loading from "../Loading"
import Form from "../Form"

export default function Contact({ formInputs }) {
	const [summited, setSummited] = useState(false)
	const [error, setError] = useState({ state: false, msj: "" })
	const [loading, setLoading] = useState(false)
	const form = useRef()

	const initialValues = {
		from_name: "",
		from_id: "",
		from_phone: "",
		subject: "MOTIVO",
		message: "",
		attachment: undefined,
	}

	const onHandleSubmit = (values, { setSubmitting, resetForm }) => {
		setLoading(true)
		if (!values.attachment) {
			emailjs
				.send(
					"emailjs_mailoficial",
					"contacto",
					{
						from_name: values.from_name,
						from_id: values.from_id,
						from_phone: values.from_phone,
						subject: values.subject,
						message: values.message,
					},
					process.env.REACT_APP_PRODUDCTION
				)
				.then(
					(result) => {
						console.log("Envío de email: ", result.text)
						setSubmitting(false)
						setError({ state: false, msj: "" })
						setLoading(false)
					},
					(error) => {
						console.log("ERROR al enviar el mail: ", error.text)
						setSubmitting(false)
						setError({ state: true, msj: error.text })
						setLoading(false)
					}
				)
		} else {
			emailjs.sendForm("emailjs_mailoficial", "postulaciones", form.current, process.env.REACT_APP_PRODUDCTION).then(
				(result) => {
					console.log("Envío de email: ", result.text)
					setSubmitting(false)
					setError({ state: false, msj: "" })
					setLoading(false)
				},
				(error) => {
					console.log("ERROR al enviar el mail: ", error.text)
					setSubmitting(false)
					setError({ state: true, msj: error.text })
					setLoading(false)
				}
			)
		}
		setSummited(true)
		resetForm()
	}
	// const buttonRef = useRef(null);

	return (
		<div className="wrap contact-row">
			{!summited && (
				<div className="section-margins col1-contacto hide1">
					<h3 className="primary-txt">Comunicate con nosotros</h3>
					<div className="flex row col1-text">
						<PhoneIcon width="5rem" />
						<div style={{ width: "1rem" }} />
						<div>
							a través de nuestro teléfono: <br />
							<a href={contact.linea_tel} target="_blank" rel="noreferrer">
								<strong>{contact.linea_txt}</strong>
							</a>
						</div>
					</div>
					<div className="flex row col1-text">
						<EmailIcon width="5rem" />
						<div style={{ width: "1rem" }} />
						<div>
							por email a <br />
							<a href={contact.email_mailto}>
								<strong>{contact.email_txt}</strong>
							</a>
						</div>
					</div>
					<div className="flex row col1-text">
						<WspIcon size="5rem" />
						<div style={{ width: "1rem" }} />
						<div>
							por WhatsApp: <br />
							<a href={contact.wsp_ba_href1} target="_blank" rel="noreferrer">
								<strong>+{contact.wsp_ba_txt1}</strong>
							</a>
							<br />
							<a href={contact.wsp_ba_href2} target="_blank" rel="noreferrer">
								<strong>+{contact.wsp_ba_txt2}</strong>
							</a>
						</div>
					</div>
					<div className="flex row col1-text">
						<IgIcon size="5rem" />
						<div style={{ width: "1rem" }} />
						<div>
							Seguinos en Instagram: <br />
							<a href={contact.ig_href} target="_blank" rel="noreferrer">
								<strong>{contact.ig_txt}</strong>
							</a>
						</div>
					</div>
					<div className="flex row col1-text">
						<FbIcon size="5rem" />
						<div style={{ width: "1rem" }} />
						<div>
							también en Facebook: <br />
							<a href={contact.fb_href} target="_blank" rel="noreferrer">
								<strong>{contact.fb_txt}</strong>
							</a>
						</div>
					</div>
					<div className="col1-text">o completando el formulario describiendo el motivo de tu consulta. </div>
					<div className="col1-text primary-txt">
						<strong>¡Estamos para resolver todas tus consultas!</strong>
					</div>
				</div>
			)}
			{!loading ? (
				<>
					<Success isSuccess={!error.state && summited}></Success>
					<Error isError={error.state} msj={error.msj}></Error>
				</>
			) : (
				<Loading />
			)}
			{!summited && (
				<Formik
					initialValues={initialValues}
					validate={(values) => validationContact(values)}
					onSubmit={onHandleSubmit}>
					{({
						values,
						errors,
						touched,
						handleChange,

						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
						<div className="col2-contacto hide2">
							<form enctype="multipart/form-data" onSubmit={handleSubmit} className="contact-form" ref={form}>
								<Form
									formInputs={formInputs}
									values={values}
									errors={errors}
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									handleSubmit={handleBlur}
									isSubmitting={isSubmitting}
									styles={styles}
									// buttonRef={buttonRef}
								/>
								<submit>
									<button
										className="cta t1 primary-bg"
										type="submit"
										disabled={error.state}
										// ref={buttonRef}
									>
										<span className={styles.BtnEnviar}>Enviar</span>
									</button>
								</submit>
							</form>
						</div>
					)}
				</Formik>
			)}
		</div>
	)
}

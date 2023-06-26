/* BIBLIOTECAS */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
/* UTILS */
import { validationRegret } from "./validationRegret";
/* ESTILOS */
import "../../../css/Contacto.css";
import "../../../css/BannerElements.css";
import styles from "./style.module.css";


import Error from "../Error";
import Success from "../Success";
import Loading from "../Loading";
import Form from "../Form";

export default function RegretSection({ formInputs }) {
  const [summited, setSummited] = useState(false);
  const [error, setError] = useState({ state: false, msj: "" });
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    dni: "",
    phone: "",
    loand_id: "",
    message: "",
  };
  const onHandleSubmit = (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    emailjs
      .send(
        "emailjs_mailoficial",
        "arrepentimiento",
        {
          from_name: values.name,
          from_id: values.dni,
          from_phone: values.phone,
          message: values.message,
          subject: "Arrepentimiento",
          loan_id: values.loand_id,
        },
        process.env.REACT_APP_PRODUDCTION
      )
      .then(
        (result) => {
          console.log("Envío de email: ", result.text);
          setSubmitting(false);
          setError({ state: false, msj: "" });
          setLoading(false);
        },
        (error) => {
          console.log("ERROR al enviar el mail: ", error.text);
          setSubmitting(false);
          setError({ state: true, msj: error.text });
          setLoading(false);
        }
      );
    setSummited(true);
    resetForm();
  };
  return (
    <div className="wrap contact-row">
      {!summited && (
        <div className="section-margins col1-contacto hide1">
          <h3 className="primary-txt">Comunicate con nosotros</h3>
          <div className="col1-text">
            Formulario para cancelar, de forma gratuita, productos adquiridos en
            los últimos <strong>10 (diez) días hábiles.</strong>
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
          validate={(values) => validationRegret(values)}
          onSubmit={onHandleSubmit}
        >
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
              <form onSubmit={handleSubmit} className="contact-form">
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
                />
                <submit>
                <button
                    className="cta t1 primary-bg"
                    type="submit"
                    disabled={isSubmitting}
                    // ref={buttonRef}
                  >
                    <span id="primary"className={styles.BtnEnviar}>Enviar</span>
                  </button>
                </submit>
              </form>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
}

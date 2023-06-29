import NumberFormat from "react-number-format";
import { Transition } from "@headlessui/react";
import question from "../../assets/arrepentimiento/question-icon.svg";
/* import { useEffect, useState } from "react"; */

export default function Form({
  formInputs,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  buttonRef,
  styles,
}) {
  const { container } = styles;
  // const [hasErrors, setHasErrors] = useState(false);

  // useEffect(() => {
  //   // Verificar si hay errores en el objeto "errors"
  //   const hasErrors = Object.keys(errors).length > 0;
  //   setHasErrors(hasErrors);

  //   // Habilitar o deshabilitar el botón según si hay errores o no
  //   buttonRef.current.disabled = hasErrors;
  // }, [errors, buttonRef]);

  return (
    <>
      {formInputs.formInputs.map(
        ({ name, label, variant, format, placeholder, options, help }) => {
          const renderVariant = {
            input: (
              <>
                <span className={container}>
                  {label}{" "}
                  <i className="secondary-txt align-r">
                    {errors[name] && touched[name] && errors[name]}
                  </i>
                </span>
                <input
                  type="text"
                  name={name}
                  id={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                  placeholder={label}
                />
                <input
                  type="text"
                  name={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                  placeholder={label}
                  hidden
                />
              </>
            ),
            number: (
              <>
                <span className="flex row end">                
                  <div className="flex row">
                    <span style={{ marginRight: "10px" }}>{label}</span>
                    
                  </div>
                  <i className="secondary-txt align-r marg_r">
                    {errors[name] && touched[name] && errors[name]}
                  </i>
                  {help && (
                      <div className="flex row question-container">
                        <div className="question-tooltip">{help}</div>
                        <img className="question-mark" src={question} alt="?" />
                      </div>
                    )}
                </span>
                <NumberFormat
                  name={name}
                  id={name}
                  value={values[name]}
                  placeholder={placeholder}
                  format={format}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </>
            ),
            select: (
              <>
                <span className="flex row between">
                  <div className="flex row">
                  <span style={{ marginRight: "10px" }}>{label}</span>
                  </div>
                  <i className="secondary-txt align-r">
                    {errors[name] && touched[name] && errors[name]}
                  </i>
                    
                </span>
                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                  className="select-content"
                  name={name}
                  id={name}
                >
                  {options?.map((option) => (
                    <option
                      value={option.value}
                      label={option.labelOption}
                      hidden={option.hidden}
                      className="option-content"
                    />
                  ))}
                </select>
              
                <Transition
                  show={values[name] === "CV" ? true : false}
                  enter={styles.animtationEnter}
                  enterFrom={styles.animtationEnterFrom}
                  enterTo={styles.animationEnterTo}
                  leave={styles.animationLeave}
                  leaveFrom={styles.animationLeaveFrom}
                  leaveTo={styles.animationLeaveTo}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {values.subject === "CV" && (
                      <label className="custom-fileinput t1">
                        <input
                          type="file"
                          name="attachment"
                          id="attachment"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.attachment}
                        />
                        {"Adjuntá tu CV"}
                      </label>
                    )}

                    <span style={{ padding: "10px" }}>
                      <i id="messageReq" className="primary-txt">
                        {errors.attachment &&
                          touched.attachment &&
                          errors.attachment}
                      </i>
                    </span>
                  </div>
                </Transition>
              </>
            ),
            textarea: (
              <>
                <span className="flex row between">
                  <div className="flex row">
                    <span style={{ margin: "10px" }}>{label}</span>
                  </div>
                </span>
                <textarea
                  placeholder={placeholder}
                  name={name}
                  value={values[name]}
                  id={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.textarea}
                  style={{ lineHeight: "1.25rem", padding: "10px" }}
                />
              </>
            ),
          };
          return <>{renderVariant[variant]}</>;
        }
      )}
    </>
  );
}

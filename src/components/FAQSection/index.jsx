/*  BIBLIOTECAS */
import React from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
/* UTILS */
import faqs from "../../utils/FAQs.json";
/* ESTILOS */
import "../../css/PreguntasFrecuentes.css";
/* ICONOS */
import ChevronUpIcon from "../Icons/chevronup";
/* ESTILOS */
import styles from "./style.module.css";

export default function FAQSection() {
  return (
    <div className="faq-section">
      <div className="questions">
        {faqs.questions.map((q) => (
          <div className={styles.container}>
            <Disclosure className={styles.containerAll}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={
                      open ? styles.containerOpen : styles.containerHeader
                    }
                    style={{ backgroundColor: "#fff !important" }}
                  >
                    <div className="container-text">
                      <h3 className="q-title">{q.title}</h3>
                    </div>
                    <ChevronUpIcon
                      className={
                        open ? styles.conatinerChevron : styles.chevronrotate
                      }
                    />
                  </Disclosure.Button>
                  <Transition
                    enter={styles.animtationEnter}
                    enterFrom={styles.animtationEnterFrom}
                    enterTo={styles.animationEnterTo}
                    leave={styles.animationLeave}
                    leaveFrom={styles.animationLeaveFrom}
                    leaveTo={styles.animationLeaveTo}
                  >
                    <Disclosure.Panel className={styles.containerPanel}>
                      <div className="q-margins answer-div blue-txt">
                        {q["answer-array"].map((answer_p) => (
                          <p className="font1rem">{answer_p}</p>
                        ))}
                        {q.links && q.links.map( line =>
                          <p>
                            <a className={styles.link} href={line.href} target="_blank" rel="noreferrer">
                              {line.regular}<b className="primary-txt">{line.bold}</b>
                            </a>
                          </p>
                        )}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
      <div id="faq-cta">
        <h3>{faqs.cta.h3}</h3>

        <button className="cta t2 cta-margins primary-bg">
          <Link
            id="primary"
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "1.24rem",
            }}
            className="t2"
            to="/contacto"
          >
            <div style={{ width: "5.5rem", height: "1.75rem" }} />
            {faqs.cta.btn1}
            <div style={{ width: "5.5rem" }} />
          </Link>
        </button>
      </div>
    </div>
  );
}

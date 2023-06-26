/* BIBLIOTECAS */
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

/* UTILS */
import medios from "../../utils/Medios.json";
import faqs from "../../utils/FAQs.json";

export default function PaymentSection() {
  return (
    <div className="iusf-text" style={{ paddingBottom: "var(--m-1)" }}>
      {medios.content.map((x) =>
        parse(x.h3 + x.p + '<div className="height1rem" />')
      )}
      <div id="faq-cta">
        <h3>{faqs.cta.h3}</h3>
        <div className="height1rem" />
        <button className="cta t2 primary-bg">
          <Link
            id="primary"
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "1.25rem",
            }}
            className="t2"
            to={faqs.cta.to2}
          >
            <div style={{ width: "5.5rem", height: "1.75rem" }} />
            {faqs.cta.btn2}
            <div style={{ width: "5.5rem" }} />
          </Link>
        </button>
        <div className="height1rem" />
        <button className="cta t2 primary-bg">
          <Link
            id="primary"
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "1.25rem",
            }}
            className="t2"
            to={faqs.cta.to1}
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

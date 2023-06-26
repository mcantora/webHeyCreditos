/* BIBLIOTECAS */
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// Vistas
import Home from "./views/1.Home";
import Nosotros from "./views/2.Nosotros";
import Sucursales from "./views/3.Sucursales";
import Contacto from "./views/4.Contacto";
import PreguntasFrecuentes from "./views/5.FAQs";
import Arrepentimiento from "./views/6.Arrepentimiento";
import TerminosCondiciones from "./views/7.TyC";
import IUSF from "./views/8.IUSF";
import MediosPago from "./views/9.MediosPago";
import Protección from "./views/10.Proteccion";
import Contratos from "./views/11.Contratos";
import ContratoD from "./views/12.ContratoD";
import ContratoP from "./views/13.ContratoP";
import Prestamo from "./views/Prestamo";
import Block from "./views/14.Block";

import ScrollToTop from "./components/ScrollToTop";

/* ESTILOS */
import "./css/App.css";
import "./css/BannerElements.css";


const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faq" element={<PreguntasFrecuentes />} />
          <Route path="/prestamo" element={<Prestamo />} />
          <Route path="/arrepentimiento" element={<Arrepentimiento />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/contrato_digital" element={<ContratoD />} />
          <Route path="/contrato_presencial" element={<ContratoP />} />
          <Route
            path="/terminos_condiciones"
            element={<TerminosCondiciones />}
          />
          <Route path="/medios_pago" element={<MediosPago />} />
          <Route path="/block" element={<Block />}/>
          <Route path="/proteccion" element={<Protección />} />
          <Route path="/informacion" element={<IUSF />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

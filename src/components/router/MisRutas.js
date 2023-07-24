import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Inicio } from "../Inicio";
import { Contacto } from "../Contacto";
import { Curriculum } from "../Curriculum";
import { Portafolio } from "../Portafolio";
import { Servicios } from "../Servicios";
import { HeaderNav } from "../layout/HeaderNav";
import { Footer } from "../layout/Footer";
import { Proyecto } from "../Proyecto";

export const MisRutas = () => {
  return (
    <>
      {/* Header y Navegación */}
      <HeaderNav />
      {/* Contenido central */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/proyecto/:id" element={<Proyecto />}></Route>
          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="heading">Error 404 Not found</h1>
              </div>
            }
          ></Route>
        </Routes>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

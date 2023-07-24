import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajo";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, me llamo <strong>Alejandro Pascual</strong>, soy
        <strong>Desarrollador web</strong> en Oviedo(Asturias), tengo un amplio
        conocimiento en tecnologías como: MONGODB, EXPRESS, REACT, NODE,
        JAVASCRIPT, ANGULAR, GIT, GITHUB, HTML5, CSS3, BOOTSTRAP, CHACKRA,
        POSTMAN, FIGMA.
        <br /> Ofrezco{" "}
        <strong>mis conociemientos y servicios de programación</strong> en todo
        tipo de proyectos web cualificados profesionalmente.
      </h1>
      <h2 className="titulo">
        Te aportaré los mejores conocimientos para ser un desarrollador web{" "}
        <Link to="/contacto">contacta conmigo!</Link>
      </h2>
      <section className="ultimos-proyectos">
        <h2 className="encabezado">Proyectos realizados</h2>
        <ListadoTrabajos limite="2" />
        {/* limite es una Prop */}
      </section>
    </div>
  );
};

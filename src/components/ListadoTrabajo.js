import React from "react";
import { Link } from "react-router-dom";
import { trabajos } from "./data/trabajos";

export const ListadoTrabajos = ({ limite }) => {
  return (
    <>
      <section className="trabajos">
        {trabajos.slice(0, limite).map((trabajo) => {
          return (
            <article key={trabajo.id} className="trabajo-icono">
              <div className="mascara">
                <img src={`/images/${trabajo.id}.png`}></img>
              </div>
              <span>{trabajo.categorias}</span>
              <h2>
                <Link to={`/proyecto/${trabajo.id}`} className="enlace-icono">{trabajo.nombre}<div className="icono">{trabajo.iconos}</div>
                </Link>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          );
        })}
      </section>
    </>
  );
};

import React from "react";

export const Servicios = () => {
  return (
    <div className="page">
      <h1 className="encabezado">Mis servicios:</h1>
      <section className="services">
        <article className="service">
          <h2>Mi Aplicacion LDT!</h2>
          <p>
            Una aplicación completa con tecnologias Full-Stack MERN para crear
            tus notas, eventos, alarmas y un planificador, Además contiene tiene
            una sala de chat incorporada.
          </p>
        </article>
        <article className="service">
          <h2>Multicines</h2>
          <p>Podemos crear una pelicula editarla y eliminarla.</p>
        </article>
        <article className="service">
          <h2>La Liga Santander 2023</h2>
          <p>
            Aquí tendrás todos los datos actualizados de cada equipo, cuantos
            partidos ganó, perdió, empató... y muchas cosas más.
          </p>
        </article>
        <article className="service">
          <h2>Silkshop</h2>
          <p>Información sobre cursos para matricularse.</p>
        </article>
        <article className="service">
          <h2>Pizzeria</h2>
          <p>Pagina web de una pizzeria, los chefs que trabajan en ella y los ingredientes que usan y como contactar con ellos</p>
        </article>
      </section>
    </div>
  );
};

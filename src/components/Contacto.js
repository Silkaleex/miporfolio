import React from "react";
import buzon from '../assets/buzon.png'
export const Contacto = () => {
  return (
    <>
    <div className="container">
    <div className="page">
      <h1 className="encabezado">Contacto</h1>
      <form className="contacto" action="mailto:alejandropascualsanchez@gmail.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Motivo del contacto" className="motivo-contacto"/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
 <div>
  <img className="buzon-img"src={buzon}></img>
 </div>
 </div>
    </>
  );
};

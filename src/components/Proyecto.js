import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "./data/trabajos";
import { Link } from "react-router-dom";
import '../index.css'
export const Proyecto = () => {
    const [proyecto,setProyecto] = useState({})
    const paramas = useParams()

    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id == paramas.id)
       setProyecto(proyecto[0])
    },[])
    //Nos aseguramos que el id es exacto tanto en proyecto como en Portfolio con UseParams
  return (
    <>
    <div className="page page-trabajo">
      <h1 className="encabezado">{paramas.id}</h1>
        <div className="mascaras">
        <img src={`/images/${proyecto.id}.png`}></img>
        </div>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
    </div>
      <Link to={proyecto.url} target="_blanck" className="acceso-enl">Acceder a la pagina</Link>
    </>
  );
};

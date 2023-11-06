import React from "react";
import '../hojaEstilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea__contenedor completada' : 'tarea__contenedor'}>
      <div 
        className='tarea__texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea__contenedor-icono'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea__icono'/>
      </div>
    </div>

  )
}

export default Tarea;
import React, { useState} from "react";
import '../hojaEstilo/ListaDeTareas.css'
import Tarea from './Tarea';
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea)
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizada = [tarea, ...tareas];
        setTareas(tareaActualizada);
    }
  }

  const eliminarTarea = id => {
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareaActualizada);
  }

  const completarTarea = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id ) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareaActualizada);
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas__lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
             key={tarea.id}
             id = {tarea.id}
             texto = {tarea.texto}
             completada= {tarea.completada}
             eliminarTarea={eliminarTarea} 
             completarTarea={completarTarea}/>
          
          )
        }
      </div>
    </>

  );

}

export default ListaDeTareas;


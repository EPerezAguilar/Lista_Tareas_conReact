import React, { useState } from "react";
import '../hojaEstilo/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';



function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio= e=> {
    // console.log('Escribiendo...')
    setInput(e.target.value);
    
  }

  const manejarEnvio = e =>{
     e.preventDefault();  //Esto es para que la aplicacion no se cargue cada vez que presionamos el boton
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea__formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea__input'
        type = 'text'
        placeholder='Escribe la tarea'
        name = 'texto'
        onChange={manejarCambio}
      />
      <button className="tarea__boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;
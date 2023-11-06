import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion">
      <div className='titulo'>
        <h1>Tareas Pendientes</h1>
      </div>
      <div className='tareas__contenedor'>
        <ListaDeTareas />

      </div>
      
    </div>
  );
}

export default App;

import './App.css';
import Productos from './componente/Productos';

function App() {
  return (
    <div className='App' id='app'>
      <header id='header' className='header'>
        <div className='menu'>
          <b>Navegue con la siguientes opciones: </b>
          <a href='#fin'>Ir al final</a>
          <a href='#app'>Ir al Comienzo</a>
        </div>
      </header>
      <h1 id='comienso'>Listado de Productos desde la Api de Mercado Libre</h1>
      <Productos></Productos>
      <div id='fin' className='fin'></div>
      <div className='footer'>
        <p>Unidad N2 trabajo (optativo)</p>
        <p>Creado por Alitson Martinez</p>
        <p>17-01-2022 Copyrigth </p>
      </div>
    </div>
  );
}

export default App;

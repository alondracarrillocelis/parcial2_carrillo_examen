import './App.css';
import foto from './foto.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
        <p>
          ALONDRA CARRILLO CELIS - PARCIAL 2
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNIVERSIDAD TECNOLÓGICA DE DURANGO - CLICK PARA VISITAR EL SITIO
        </a>
      </header>
    </div>
  );
}

export default App;

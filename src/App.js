import React  from 'react';
import './App.css';
import Container from './components/ContainerApp/Container';

// Componente principal App: Gerencia o estado e a lógica da aplicação
function App() {
  return (
    <div className="App">
      <Container /> {/* Renderiza o Container, que por sua vez conterá os principais componentes */}
    </div>
  );
}

export default App;

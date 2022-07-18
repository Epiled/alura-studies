import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}

export default App;

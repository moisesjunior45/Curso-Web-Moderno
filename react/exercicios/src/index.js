import React from 'react';
import ReactDOM from 'react-dom';

// Componentes
// import Primeiro from './components/Primeiro';
// import BomDia from './components/BomDia';
// import Multi, { BoaNoite } from './components/Multiplos';
import Saudacao from './components/Saudacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Primeiro />
    <BomDia nome="Guilherme" />
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" /> */}
    <Saudacao tipo="Bom dia" nome="Guilherme" />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primeiro />
    <BomDia nome="Guilherme" />
  </React.StrictMode>
);
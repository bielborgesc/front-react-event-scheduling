import React, { FC } from 'react';
import './App.css';
import ButtonGroupMolecule from './components/molecules/ButtonGroup';

const App: FC = () => (
  <div className="App">
    <ButtonGroupMolecule textBtn1="Enviar" textBtn2="Cancelar"></ButtonGroupMolecule>
  </div>
)

export default App;

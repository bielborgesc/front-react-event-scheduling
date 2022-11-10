import React, { FC } from 'react';
import './App.css';
import ButtonAtom from './components/atoms/Button';

const App: FC = () => (
    <div className="App">
      <ButtonAtom 
        title="Testando botão"
      ></ButtonAtom>  
      <h1>wdawd</h1>
    </div>
)

export default App;

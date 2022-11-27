import React, { FC } from 'react';
import './App.css';
import { LoginTemplate } from './components/templates/login';
// import { RegisterForm } from './components/molecules/registerForm';
// import ButtonAtom from './components/atoms/Button';

const App: FC = () => (
    <div className="App">
      <div className='login-content'
        style={{
          background: '#ad3fd5',
          height: '100vh',
          display: 'grid',
          alignContent: 'center'
        }}
      >
        <LoginTemplate></LoginTemplate>
        {/* <RegisterForm></RegisterForm> */}
      </div>
    </div>
)

export default App;

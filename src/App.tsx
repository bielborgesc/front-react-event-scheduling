import React, { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import DasboardPage from './components/pages/Dashboard';
import ProtectedRoute, { ProtectedRouteProps } from './routes/ProtectedRoute';
import { isConnected } from './service';
import LoginUser from './components/pages/LoginUser/index';
import RegisterUser from './components/pages/RegisterUser/index';
import Register from './components/pages/Register';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isConnected().status,
    authenticationPath: '/login',
  };
  
  return (
    <>
      <div className="App">
      <Toaster position="top-right"  reverseOrder={false}/>
        <Routes>
          <Route path='/' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DasboardPage />} />} />
          <Route path='/cadastrar' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Register namePage={'Cadastrar Evento'} />} />} />
          <Route path='/login' element={<LoginUser/>}></Route>
          <Route path='/cadastrar-usuario' element={<RegisterUser/>}></Route>
        </Routes>
       </div>
    </>
  )
}

export default App;
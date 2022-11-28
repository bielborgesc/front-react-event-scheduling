import React, { FC } from 'react';
import './App.css';
import { Layout } from 'antd';
import SidebarTemplate from './components/templates/Sidebar';
import HeaderTemplate from './components/templates/Header';
import FooterTemplate from './components/templates/Footer';
import LoginUser from './components/pages/LoginUser';
import { isConnected } from './service/index';

const { Content } = Layout;

const App: FC = () => {

  const exibeTelaLoginEstatico = !isConnected().status;
  
  return (
    <>
    {!!exibeTelaLoginEstatico &&
    <>
      {/* <RegisterUser></RegisterUser> */}
      <LoginUser></LoginUser>
    </> }
    {!exibeTelaLoginEstatico && 
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <SidebarTemplate></SidebarTemplate>
          <Layout>
            <HeaderTemplate></HeaderTemplate>
            <Content className='mainContainer'>
            </Content>
            <FooterTemplate>Footer</FooterTemplate>
          </Layout>
        </Layout>
      </div>
    }
    </>
  )
}

export default App;
import React, { FC } from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import { Layout } from 'antd';
import SidebarTemplate from './components/templates/Sidebar';
import HeaderTemplate from './components/templates/Header';
import FooterTemplate from './components/templates/Footer';
import DasboardPage from './components/pages/Dashboard';
import RegisterPage from './components/pages/Register/index';
import InvitePage from './components/pages/Invite';

const { Content } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarTemplate></SidebarTemplate>
      <Layout>
        <HeaderTemplate></HeaderTemplate>
        <Content className='mainContainer'>
          <Routes>
            <Route index element={<DasboardPage />} path="/"/>
            <Route  element={<RegisterPage />} path="/cadastrar"/>
            <Route  element={<RegisterPage />} path="/editar/:id"/>
            <Route  element={<InvitePage />} path="/convidar/:id"/>
          </Routes>
        </Content>
        <FooterTemplate>Footer</FooterTemplate>
      </Layout>
    </Layout>
  </div>
)

export default App;
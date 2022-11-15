import React, { FC } from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import { Layout } from 'antd';
import SidebarTemplate from './components/templates/Sidebar';
import HeaderTemplate from './components/templates/Header';
import FooterTemplate from './components/templates/Footer';
import DasboardPage from './components/pages/Dashboard';
import EditPage from './components/pages/Edit/index';
import RegisterPage from './components/pages/Register/index';
import InvitePage from './components/pages/Invite';

const { Content } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarTemplate></SidebarTemplate>
      <Layout>
        <HeaderTemplate></HeaderTemplate>
        <Content>
          <Routes>
            <Route index element={<DasboardPage />} path="/"/>
            <Route index element={<RegisterPage />} path="/cadastrar"/>
            <Route index element={<EditPage />} path="/editar"/>
            <Route index element={<InvitePage />} path="/convidar"/>
          </Routes>
        </Content>
        <FooterTemplate>Footer</FooterTemplate>
      </Layout>
    </Layout>
  </div>
)

export default App;
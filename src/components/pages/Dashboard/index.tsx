import { Layout } from 'antd';
import React from 'react';
import "./style.css";
import FooterTemplate from '../../templates/Footer';
import HeaderTemplate from '../../templates/Header/index';
import SidebarTemplate from '../../templates/Sidebar';
const { Content } = Layout;

interface Dasboard {

}

const DasboardPage = ({}: Dasboard) => {

  return(
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarTemplate></SidebarTemplate>
      <Layout>
        <HeaderTemplate></HeaderTemplate>
        <Content>
          <h1>Teste</h1>
        </Content>
        <FooterTemplate>Footer</FooterTemplate>
      </Layout>
    </Layout>
  )
}

export default DasboardPage;
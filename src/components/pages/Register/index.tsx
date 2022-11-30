import { Card, Layout } from 'antd';
import React from 'react';
import EventFormGroupOrganism from '../../organisms/EventFormGroupOrganism/index';
import FooterTemplate from '../../templates/Footer';
import HeaderTemplate from '../../templates/Header';
import SidebarTemplate from '../../templates/Sidebar';
const { Content } = Layout;


interface Register {
  namePage: string;
}

const RegisterPage = ({namePage}: Register) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
				<Layout>
					<HeaderTemplate></HeaderTemplate>
					<Content className='mainContainer'>
          <h2 className="title-font">{namePage}</h2>
            <Card style={{ width: '50%' }}>
              <EventFormGroupOrganism nameForm='register'></EventFormGroupOrganism>
            </Card>
					</Content>
					<FooterTemplate>Footer</FooterTemplate>
				</Layout>
        <SidebarTemplate defaultSelectedKeys="2"></SidebarTemplate>
		</Layout>
  )
}

export default RegisterPage;

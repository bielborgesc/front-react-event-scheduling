import {
  UnorderedListOutlined,
  FormOutlined,
  EditOutlined,
  SendOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import "./style.css"
import {Link } from "react-router-dom";


const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/"><span>Dashboard</span></Link>, '1', <UnorderedListOutlined />, ),
  getItem(<Link to="/cadastrar"><span>Cadastrar</span></Link>, '2', <FormOutlined />),
  getItem(<Link to="/editar"><span>Editar</span></Link>, '3', <EditOutlined />),
  getItem(<Link to="/convidar"><span>Convidar</span></Link>, '4', <SendOutlined />),
];

interface Sidebar{

}

const SidebarTemplate = ({}: Sidebar) =>{
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider collapsible collapsed={collapsed} className="sider" onCollapse={value => {
        setCollapsed(value)
        if(value) document.querySelector(".title-logo")?.setAttribute("style", "display:none")
        else document.querySelector(".title-logo")?.setAttribute("style", "display:blcok")
      }}>
          <div className="logo">
            <img src={require("../../../assets/images/scheduling_icon_white.png")} alt="Imagem de um calendário com relógio a frente" width="50" height="50"/>
              <div className="dash"></div>
              <div className="title-logo title-font">
                <span>Event</span> <span>Scheduling</span>
              </div>
          </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} className="title-font menu"/>
      </Sider>
    </>
  );
}

export default SidebarTemplate;
{/* <Link to="/about">About</Link> */}
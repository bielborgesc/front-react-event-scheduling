import {
  UnorderedListOutlined,
  FormOutlined,
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
];

interface Sidebar{
  defaultSelectedKeys: string
}

const SidebarTemplate = ({defaultSelectedKeys}: Sidebar) =>{
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider 
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 2
      }}
      collapsible collapsed={collapsed} className="sider" onCollapse={value => {
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
        <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} mode="inline" items={items} className="title-font menu"/>
      </Sider>
    </>
  );
}

export default SidebarTemplate;
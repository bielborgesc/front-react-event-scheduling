import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import './style.css'
import {
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import ButtonAtom from '../../atoms/Button/index';

interface Header {

}

const HeaderTemplate = ({ }: Header) => {

  return (
    <Header className="navbar">
      <nav>
        <div className="container">
          <div className="perfil">
            <ButtonAtom icon={<BellOutlined />}></ButtonAtom>
            <ButtonAtom icon={<LogoutOutlined />}></ButtonAtom>
          </div>
        </div>
      </nav >
    </Header >
  )
}

export default HeaderTemplate;
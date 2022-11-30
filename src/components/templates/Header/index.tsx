import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import './style.css'
import {
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Button, Card, List, Modal } from 'antd';
import { useEffect } from 'react';
import {getInvitesService} from '../../../service'
import toast from 'react-hot-toast';
import { setResponseInviteService } from '../../../service/index';
import { useNavigate } from 'react-router';

interface Header {

}

const HeaderTemplate = ({ }: Header) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invites, setInvites] = useState([]);
  const [isModalOpenLogout, setIsModalOpenLogout] = useState(false);
  const navigate = useNavigate()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showModalLogout = () => {
    setIsModalOpenLogout(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleOkLogout = () => {
    localStorage.removeItem('token')
    toast.success("Você foi deslogado com sucesso, estamos te redirecionando ...")
    setIsModalOpenLogout(false);
    setTimeout(() => navigate('/login'), 2000)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelLogout = () => {
    setIsModalOpenLogout(false);
  };

  const getInvites = async () => {
    getInvitesService().then(e => setInvites(e.data)).catch((error:any) => toast.error(error.response.data.message))
	};

  const setResponseInvite = async (responseInvite: "ACCEPT" | "REFUSED", idInvite: number) => {
    setResponseInviteService(responseInvite, idInvite)
      .then(() => {
        toast.success("Convite aceito")
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch((error: any) => toast.error(error.response.data.message))
  }

  const formatDateTime = (dateTime: any) => {
    const time = dateTime.split("T")[1].split(":00.000Z")[0]
    const date = dateTime.split("T")[0].split("-").reverse().join("/")
    return `Dia: ${date}  Ás: ${time}`;
  }

  useEffect(() => {
		getInvites();
	}, []);

  return (
    <Header className="navbar site-layout-background" style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}  >
      <nav>
        <div className="container">
          <div className="perfil">
            <Button onClick={showModal} icon={<BellOutlined />}></Button>
              <Modal title="Lista de Convites" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText=""  cancelText="Fechar">
              <List
                bordered
                dataSource={invites}
                renderItem={(item: any) => (
                  <List.Item className='card'>
                    <Card style={{width:"100%"}} type="inner" title={item.event.description} extra={<><Button onClick={() => setResponseInvite("ACCEPT", item.id)}>Aceitar</Button><Button onClick={() => setResponseInvite("REFUSED", item.event.id)}>Recusar</Button></>}>
                      <p>Quem convidou: {item.event.user.email}</p>
                      <p>Data de inicio: {formatDateTime(item.event.start)}</p>
                      <p>Data de término: {formatDateTime(item.event.finish)}</p>
                  </Card>
                  </List.Item>
                )}
              />
              </Modal>
            <Button onClick={showModalLogout} icon={<LogoutOutlined />} ></Button>
            <Modal title="Logout" open={isModalOpenLogout} onOk={handleOkLogout} onCancel={handleCancelLogout} okText="Sim"  cancelText="Não">
              <h2>Você realmente deseja sair?</h2>
            </Modal>
          </div>
        </div>
      </nav >
    </Header >
  )
}

export default HeaderTemplate;
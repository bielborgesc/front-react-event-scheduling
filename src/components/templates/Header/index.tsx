import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import './style.css'
import {
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import ButtonAtom from '../../atoms/Button/index';
import { Button, Card, List, Modal } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';

interface Header {

}

const HeaderTemplate = ({ }: Header) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invites, setInvites] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getInvites = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/invitation/user/86dde15c-32d5-48b9-a811-aeee57cd8555/PENDING`, {
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4ODYwMzc2LCJleHAiOjE2Njg5MjAzNzZ9.miWgq9YQ_2z9hG0SEN164BXwhDTaEv6VsBx7CrYrRnM'
				},
				params: {},
			});
      console.log(res.data)
			setInvites(res.data);
		} catch (err) {
			console.log(err);
		}
	};

  const setResponseInvite = async (responseInvite: "ACCEPT" | "REFUSED", idInvite: number) => {
    try {
      const response = await axios.put(`http://localhost:3000/invitation/${idInvite}`,
      {
        "status": responseInvite
      },
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4ODYwMzc2LCJleHAiOjE2Njg5MjAzNzZ9.miWgq9YQ_2z9hG0SEN164BXwhDTaEv6VsBx7CrYrRnM'
        },
      }
    );
    console.log('Success:', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
		getInvites();
	}, []);

  return (
    <Header className="navbar site-layout-background" style={{ padding: 0 }} >
      <nav>
        <div className="container">
          <div className="perfil">
            <Button onClick={showModal} icon={<BellOutlined />}></Button>
              <Modal title="Lista de Convites" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="" cancelText="Fechar" closable={false}>
              <List
                bordered
                dataSource={invites}
                renderItem={(item: any) => (
                  <List.Item>
                    <Card type="inner" title={item.event.description} extra={<><Button onClick={() => setResponseInvite("ACCEPT", item.id)}>Aceitar</Button><Button onClick={() => setResponseInvite("REFUSED", item.event.id)}>Recusar</Button></>}>
                      <p>Quem convidou: {item.user.email}</p>
                      <p>Data de inicio: {item.event.start}</p>
                      <p>Data de término: {item.event.finish}</p>
                  </Card>
                  </List.Item>
                )}
              />
              </Modal>
            <ButtonAtom icon={<LogoutOutlined />}></ButtonAtom>
          </div>
        </div>
      </nav >
    </Header >
  )
}

export default HeaderTemplate;
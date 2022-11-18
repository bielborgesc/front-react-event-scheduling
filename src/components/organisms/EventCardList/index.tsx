import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, List } from "antd";
import axios from "axios";
import React, { useState } from "react";
import CardAtom from "../../atoms/Card";
import EventFormGroupOrganism from "../EventFormGroupOrganism";
import './style.css';

interface EventCardList {
  data: any;
}

const tabList = [
  {
    key: "tab1",
    tab: "Evento"
  },
  {
    key: "tab2",
    tab: "Participante"
  },
  {
    key: "tab3",
    tab: "Editar"
  },
  {
    key: "tab4",
    tab: "Excluir"
  },
]

const EventCardListOrganism = ({data}: EventCardList) => {
  const [inputSearch, setInputSearch] = useState("")

  const handleUpdateInputSearch = (e: any) => setInputSearch(e.target.value)

  const searchEmail = async (eventId: any) =>{
    let id;
    try {
			const res = await axios.get(`http://localhost:3000/user?email=${inputSearch}`, {
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
				},
				params: {},
			});
			id =  res.data.id;
		} catch (err) {
			console.log(err);
		}
    sendInvite(id, eventId)
  }

  const sendInvite = async (idUser: string, idEvent: number) => {
    try {
      const response = await axios.post(`http://localhost:3000/invitation`,
      {
        "user": {
          "id": `${idUser}`
        },
        "event": {
          "id": idEvent
        },
        "status": "PENDING"
      },
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
        },
      }
    );
    console.log('Success:', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const removeEvent = async (idEvent: any) => {
    try {
      const response = await axios.delete(`http://localhost:3000/event/${idEvent}`,
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
        },
      }
    );
    console.log('Success:', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <List
    grid={{ gutter: 10, column: 1 }}
    dataSource={data}
    renderItem={(item: any) => (
      <List.Item>
        <CardAtom title={item.description} tabList={tabList} contentList={
          {
            tab1: (
                <>
                  <p>{item.start}</p>
                  <p>{item.finish}</p>
                </>
              ),
            tab2: (
              <>
                <div className='inputSearch'>
                  <Input name="search" placeholder='Insira um email válido' type='email' onChange={(e) => handleUpdateInputSearch(e)}></Input>
                  <Button icon={<PlusCircleOutlined />} size="large" onClick={() => searchEmail(item.id)}></Button>
                </div>
                <hr />
                <p>{item.user.email}</p>
                <List
                  dataSource={item.invite}
                  renderItem={(invite: any) => (
                    <List.Item>
                      {(invite.user.email)}
                    </List.Item>
                  )}
                />
              </>
            ),
            tab3: (
              <>
                <EventFormGroupOrganism nameForm='edit' event={item}></EventFormGroupOrganism>
              </>
            ),
            tab4: (
              <>
                <h1>Você Realmente deseja excluir esse evento?</h1>
                <Button onClick={() => removeEvent(item.id)}>
                  Sim
                </Button>
                <Button danger={true}>
                  Não
                </Button>
              </>
            )
          }
        }></CardAtom>
      </List.Item>
    )}
  />
  )

}

export default EventCardListOrganism;
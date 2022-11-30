import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, List } from "antd";
import React, { useState } from "react";
import { getUserByEmailService } from "../../../service";
import CardAtom from "../../atoms/Card";
import EventFormGroupOrganism from "../EventFormGroupOrganism";
import './style.css';
import { sendInviteService, removeEventService } from '../../../service/index';
import toast from "react-hot-toast";

interface EventCardList {
  data: any;
  acceptsInvites: boolean;
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

const acceptInvitesTab = [
  {
    key: "tab1",
    tab: "Evento"
  },
  {
    key: "tab2",
    tab: "Participante"
  },
]

const EventCardListOrganism = ({data, acceptsInvites}: EventCardList) => {
  const [inputSearch, setInputSearch] = useState("")

  const handleUpdateInputSearch = (e: any) => setInputSearch(e.target.value)

  const searchEmail = async (eventId: any) =>{
    getUserByEmailService(inputSearch)
      .then(e => {
        let id = e.data.id
        sendInviteService(id, eventId)
        setInputSearch("")
        toast.success("Convite enviado com sucesso")
        setTimeout(() => window.location.reload(), 1000)
      })
      .catch(() => toast.error("Usuário não encontrado!"))
  }


  const removeEvent = async (idEvent: any, invites: any[]) => {
    if(invites.length > 0) toast.error("Não é possivel excluir eventos com convidados")
    else{
      removeEventService(idEvent)
        .then(() => {
          toast.success("Evento excluido com sucesso")
          setTimeout(() => window.location.reload(), 1000)
        })
        .catch((error) => toast.error(error.response.data.message))
    }
  }

  const formatDateTime = (dateTime: any) => {
    const time = dateTime.split("T")[1].split(":00.000Z")[0]
    const date = dateTime.split("T")[0].split("-").reverse().join("/")
    return `Dia: ${date}  Ás: ${time}`;
  }
  
  return(
    <>
      <List
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <CardAtom title={item.description} tabList={acceptsInvites? acceptInvitesTab :tabList} contentList={
            {
              tab1: (
                  <>
                    <p>Começa em: {formatDateTime(item.start)}</p>
                    <p>Termina em: {formatDateTime(item.finish)}</p>
                  </>
                ),
              tab2: (
                <>
                  <div className='inputSearch'>
                    <Input name="search"
                      placeholder='Insira um email válido'
                      type='email'
                      onChange={(e) => handleUpdateInputSearch(e)}
                      value={inputSearch}
                    ></Input>
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
                <div style={{display: "flex"}}>
                  <h4>Você Realmente deseja excluir esse evento?</h4>
                  <Button onClick={() => removeEvent(item.id, item.invite)} style={{marginLeft: "10px"}} type="primary">
                    Sim
                  </Button>
                </div>
              )
            }
          }></CardAtom>
        </List.Item>
      )}
    />
    </>
  )

}

export default EventCardListOrganism;
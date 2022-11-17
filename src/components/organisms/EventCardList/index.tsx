import { List } from "antd";
import React from "react";
import CardAtom from "../../atoms/Card";
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
]

const EventCardListOrganism = ({data}: EventCardList) => {

  
  
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
          }
        }></CardAtom>
      </List.Item>
    )}
  />
  )

}

export default EventCardListOrganism;
import React from "react";
import CardAtom from "../../atoms/Card";

interface EventCardList {

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

const contentList: Record<string, React.ReactNode> = {
  tab1: (
      <>
        <p>Inicio: 2022-09-22T15:20</p>
        <p>Fim: 2022-09-24T15:16</p>
      </>
    ),
  tab2: (<>
    <p>borges@dev.com</p>
    <p>bia@rh.com</p>
  </>),
};

const EventCardListOrganism = ({}: EventCardList) => {

  // for(let i=0; i < 4; i++){
  //   <>
  //     <CardAtom title="Jogar Tênis 10" contentList={contentList} tabList={tabList}></CardAtom>
  //   </>
  // }

  return(
    <>
      <CardAtom title="Jogar Tênis 10" contentList={contentList} tabList={tabList}></CardAtom>
      <CardAtom title="Jogar Tênis 10" contentList={contentList} tabList={tabList}></CardAtom>
      <CardAtom title="Jogar Tênis 10" contentList={contentList} tabList={tabList}></CardAtom>
    </>
  )

}

export default EventCardListOrganism;
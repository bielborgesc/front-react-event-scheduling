import React from "react";
import "./style.css";
import EventCardListOrganism from '../../organisms/EventCardList/index';

interface Dasboard {

}

const DasboardPage = ({}: Dasboard) => {

  return(
    <>
      <h1>Dashboard Page Aqui</h1>
      <EventCardListOrganism></EventCardListOrganism>
    </>
  )
}

export default DasboardPage;
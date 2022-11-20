import React, { useEffect, useState } from "react";
import "./style.css";
import EventCardListOrganism from '../../organisms/EventCardList/index';
import { getAcceptsEventsService, getEventsService, getMembersService } from '../../../service/index';
import toast, { Toaster } from "react-hot-toast";
import { Spin } from "antd";

interface Dasboard {

}

const DasboardPage = ({}: Dasboard) => {
  const [events, setEvents] = useState([]);
	const [acceptsEvents, setAcceptsEvents] = useState([]);

	const getAcceptsEvents = async () => {
		getAcceptsEventsService()
			.then((e: any) => {
				const events: any = []
				e.data.forEach((e: any) => {events.push(e.event)})
				events.forEach(async (e: any) => e.invite = await getMembersService(e.id).then(e => e))
				setTimeout(() => setAcceptsEvents(events), 1000)
			})
			.catch((error:any) => toast.error(error.response.data.message))

	};

	const getEvents = () => {
		getEventsService()
			.then((e:any) => {
				e.data.forEach(async (e: any) => e.invite = await getMembersService(e.id).then(e => e))
				setTimeout(() => setEvents(e.data), 1000)
			})
			.catch((error:any) => toast.error(error.response.data.message))
	}
  
	useEffect(() => {
		getEvents()
		getAcceptsEvents()
	}, []);

  return(
    <>
			<Toaster position="top-right"  reverseOrder={false}/>
      <h2 className="title-font">Lista de Eventos</h2>
      {events.length > 0 ? <EventCardListOrganism data={events} acceptsInvites={false}></EventCardListOrganism> : <Spin />}
			<h2 className="title-font">Convites Aceitos</h2>
			{acceptsEvents.length > 0 ? <EventCardListOrganism data={acceptsEvents} acceptsInvites={true}></EventCardListOrganism> : <Spin />}
    </>
  )
}

export default DasboardPage;
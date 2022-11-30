import React, { useEffect, useState } from "react";
import "./style.css";
import EventCardListOrganism from '../../organisms/EventCardList/index';
import { getAcceptsEventsService, getEventsService, getMembersService } from '../../../service/index';
import toast from "react-hot-toast";
import { Layout, Spin } from "antd";
import SidebarTemplate from "../../templates/Sidebar";
import HeaderTemplate from "../../templates/Header";
import FooterTemplate from "../../templates/Footer";
const { Content } = Layout;


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
		<Layout style={{ minHeight: '100vh' }}>
				<Layout>
					<HeaderTemplate></HeaderTemplate>
					<Content className='mainContainer'>
						<h2 className="title-font">Lista de Eventos</h2>
						{events.length > 0 ? <EventCardListOrganism data={events} acceptsInvites={false}></EventCardListOrganism> : <Spin />}
						<h2 className="title-font">Convites Aceitos</h2>
						{acceptsEvents.length > 0 ? <EventCardListOrganism data={acceptsEvents} acceptsInvites={true}></EventCardListOrganism> : <Spin />}
					</Content>
					<FooterTemplate>Footer</FooterTemplate>
				</Layout>
				<SidebarTemplate defaultSelectedKeys="1"></SidebarTemplate>
		</Layout>
  )
}

export default DasboardPage;
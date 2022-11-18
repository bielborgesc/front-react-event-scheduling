import React, { useEffect, useState } from "react";
import "./style.css";
import EventCardListOrganism from '../../organisms/EventCardList/index';
import axios from 'axios';

interface Dasboard {

}

const DasboardPage = ({}: Dasboard) => {
  const [events, setEvents] = useState([]);
	const [acceptsEvents, setAcceptsEvents] = useState([]);

	const getEvents = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/event/user/86dde15c-32d5-48b9-a811-aeee57cd8555`, {
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
				},
				params: {},
			});
			setEvents(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const getAcceptsEvents = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/invitation/user/86dde15c-32d5-48b9-a811-aeee57cd8555/ACCEPT`, {
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
				},
				params: {},
			});
			
			const events: any = []

			res.data.forEach((e: any) => events.push(e.event))
			setAcceptsEvents(events);
		} catch (err) {
			console.log(err);
		}
	};

  const getMembers = async (id: number) => {
		try {
			const res = await axios.get(`http://localhost:3000/invitation/event/${id}`, {
				headers: {
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
				},
				params: {},
			});
			return  res.data;
		} catch (err) {
			console.log(err);
		}
	};
  
	useEffect(() => {
		getEvents();
		getAcceptsEvents()
	}, []);

  events.forEach(async (e: any) => e.invite = await getMembers(e.id).then(e => e))
	acceptsEvents.forEach(async (e: any) => e.invite = await getMembers(e.id).then(e => e))

  return(
    <>
      <h2 className="title-font">Lista de Eventos</h2>
      <EventCardListOrganism data={events} ></EventCardListOrganism>
			<h2 className="title-font">Convites Aceitos</h2>
			<EventCardListOrganism data={acceptsEvents} ></EventCardListOrganism>
    </>
  )
}

export default DasboardPage;
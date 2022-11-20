import axios from "axios";

export const idUser = "86dde15c-32d5-48b9-a811-aeee57cd8555"
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4OTQ1Njk3LCJleHAiOjE2NjkwMDU2OTd9.GFyRWBAisGJGTUbzdq0EXlgt1rhLT0L_Um8RWzG91mo'

export const postEventService = async (values: any) => {
    await axios.post(`http://localhost:3000/event`,
      {
        "user": {
          "id": idUser
        },
        "description": values.description,
        "start": values.initDate,
        "finish": values.finalDate
      },
      {
        headers: {
          'Authorization': `Bearer ${token}}`
        },
      }
    );
}

export const getEventsService = async () => {
  return await axios.get(`http://localhost:3000/event/user/${idUser}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    params: {},
  });
};

export const getAcceptsEventsService = async () => {
  return await axios.get(`http://localhost:3000/invitation/user/${idUser}/ACCEPT`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {},
  });
}

export const getMembersService = async (id: number) => {
    const res = await axios.get(`http://localhost:3000/invitation/event/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {},
    });
    return  res.data;
};

export const getUserByEmailService = async (inputSearch: string) => {
    return await axios.get(`http://localhost:3000/user?email=${inputSearch}`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4ODYwMzc2LCJleHAiOjE2Njg5MjAzNzZ9.miWgq9YQ_2z9hG0SEN164BXwhDTaEv6VsBx7CrYrRnM'
      },
      params: {},
    });
}

export const sendInviteService = async (idUser: string, idEvent: number) => {
    await axios.post(`http://localhost:3000/invitation`,
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4ODYwMzc2LCJleHAiOjE2Njg5MjAzNzZ9.miWgq9YQ_2z9hG0SEN164BXwhDTaEv6VsBx7CrYrRnM'
      },
    }
  );
}

export const onUpdateEventService = async (values: any, eventId: number) => {
    await axios.put(`http://localhost:3000/event/${eventId}`,
      {
        "description": values.description,
        "start": values.initDate,
        "finish": values.finalDate
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }
    );

}

export const removeEventService = async (idEvent: any) => {
    await axios.delete(`http://localhost:3000/event/${idEvent}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }
  );
}

export const getInvitesService = async () => {
    return await axios.get(`http://localhost:3000/invitation/user/${idUser}/PENDING`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {},
    });
};

export const setResponseInviteService = async (responseInvite: "ACCEPT" | "REFUSED", idInvite: number) => {
    await axios.put(`http://localhost:3000/invitation/${idInvite}`,
    {
      "status": responseInvite
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }
  );
}
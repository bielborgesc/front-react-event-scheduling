import axios from "axios";
import jwt_decode from "jwt-decode";


export const isConnected = () => {
  const token = localStorage.getItem("token");
  const tokenDecode: any = token ? jwt_decode(<string>token) : null;
  const idUser = !!token ? tokenDecode.sub : null;
  return {
    "token": <string>token,
    "idUser": <string>idUser,
    "status": !!token ? true : false
  }
}

export const postEventService = async (values: any) => {
    await axios.post(`http://localhost:3000/event`,
      {
        "user": {
          "id": `${isConnected().idUser}`
        },
        "description": values.description,
        "start": values.initDate,
        "finish": values.finalDate
      },
      {
        headers: {
          'Authorization': `Bearer ${isConnected().token}`
        },
      }
    );
}

export const getEventsService = async () => {
  return await axios.get(`http://localhost:3000/event/user/${isConnected().idUser}`, {
    headers: {
      'Authorization': `Bearer ${isConnected().token}`
    },
    params: {},
  });
};

export const getAcceptsEventsService = async () => {
  return await axios.get(`http://localhost:3000/invitation/user/${isConnected().idUser}/ACCEPT`, {
    headers: {
      'Authorization': `Bearer ${isConnected().token}`,
    },
    params: {},
  });
}

export const getMembersService = async (id: number) => {
    const res = await axios.get(`http://localhost:3000/invitation/event/${id}`, {
      headers: {
        'Authorization': `Bearer ${isConnected().token}`
      },
      params: {},
    });
    return  res.data;
};

export const getUserByEmailService = async (inputSearch: string) => {
    return await axios.get(`http://localhost:3000/user?email=${inputSearch}`, {
      headers: {
        'Authorization': `Bearer ${isConnected().token}`
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
        'Authorization': `Bearer ${isConnected().token}`
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
          'Authorization': `Bearer ${isConnected().token}`
        },
      }
    );

}

export const removeEventService = async (idEvent: any) => {
    await axios.delete(`http://localhost:3000/event/${idEvent}`,
    {
      headers: {
        'Authorization': `Bearer ${isConnected().token}`
      },
    }
  );
}

export const getInvitesService = async () => {
    return await axios.get(`http://localhost:3000/invitation/user/${isConnected().idUser}/PENDING`, {
      headers: {
        'Authorization': `Bearer ${isConnected().token}`
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
        'Authorization': `Bearer ${isConnected().token}`
      },
    }
  );
}

export const login = async (email: string, password: string) => {
  return await axios.post(`http://localhost:3000/user/login`,
  {
    "email": email,
    "password": password
  },
  {
    headers: {}
  }
  );
}

export const createUserService = async (user: any) => {
  return await axios.post(`http://localhost:3000/user`,
  {
    "name": user.email,
    "email": user.email,
    "password": user.password,
    "confirmPassword": user.confirmPassword
  },
  {
    headers: {}
  }
  );
}
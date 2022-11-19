import axios from "axios";

export const idUser = "86dde15c-32d5-48b9-a811-aeee57cd8555"

export const postEvent = async (values: any) => {
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
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4ODYwMzc2LCJleHAiOjE2Njg5MjAzNzZ9.miWgq9YQ_2z9hG0SEN164BXwhDTaEv6VsBx7CrYrRnM'
        },
      }
    );
}
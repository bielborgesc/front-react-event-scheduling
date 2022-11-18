import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';


interface EventFormGroup{
  nameForm: string;
  event?: any
}

const EventFormGroupOrganism = ({nameForm, event}: EventFormGroup) => {
  const [form, setForm] = useState({
    user: {
      id: event? event.user.id : "86dde15c-32d5-48b9-a811-aeee57cd8555"
    },
    description: event? event.description : "",
    start: event? event.start : "",
    finish: event? event.finish :""
  })

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async (values: any) => {
    const response = await axios.post(`http://localhost:3000/event/`,
      {
        "user": {
          "id": "86dde15c-32d5-48b9-a811-aeee57cd8555"
        },
        "description": values.description,
        "start": values.initDate,
        "finish": values.finalDate
      },
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
        },
      }
    );
    console.log('Success:', response.data);
  };

  const onUpdateEvent = async (values: any) => {
    const response = await axios.post(`http://localhost:3000/event/${event.id}`,
      {
        "user": {
          "id": "86dde15c-32d5-48b9-a811-aeee57cd8555"
        },
        "description": values.description,
        "start": values.initDate,
        "finish": values.finalDate
      },
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NmRkZTE1Yy0zMmQ1LTQ4YjktYTgxMS1hZWVlNTdjZDg1NTUiLCJlbWFpbCI6ImJvcmdlc0BkZXYuY29tIiwiaWF0IjoxNjY4NzcyMDI3LCJleHAiOjE2Njg4MzIwMjd9.MYrmBWae70u65A-6ZOCQkH-PpsmjEdIsmlkLWlFwL0w'
        },
      }
    );
    console.log('Success:', response.data);
  }

  const handleUpdateInput = (e: any) => {
    const name = e.target['name']
    let myForm = form
    switch(name){
      case 'description':
        myForm.description = e.target.value
        break;
      case 'start':
        myForm.start = e.target.value
        break;
      case 'finish':
        myForm.finish = e.target.value
    }
    setForm(myForm)
  }

  return (<>
    <Form
      name={nameForm}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={event ? onUpdateEvent : onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Descrição: "
        name="description"
        rules={[{ required: true, message: 'Por favor insira uma descrição!' }]}
        initialValue={form.description}
      >
        <Input placeholder="Insira a descrição do Evento" name="description" onChange={(e) => handleUpdateInput(e)} value={form.description}/>
      </Form.Item>

      <Form.Item
        label="Data Inicial: "
        name="initDate"
        rules={[{ required: true, message: 'Por favor insira uma data' }]}
        initialValue={form.start.split(":00.000Z")[0]}
      >
        <Input type="datetime-local" name="start" onChange={(e) => handleUpdateInput(e)} value={form.start}/>
      </Form.Item>

      <Form.Item
        label="Data Final: "
        name="finalDate"
        rules={[{ required: true, message: 'Por favor insira uma data' }]}
        initialValue={form.finish.split(":00.000Z")[0]}
      >
        <Input type="datetime-local" name="finish" value={form.finish}/>
      </Form.Item>

      <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>

    </Form>
  </>)
}
export default EventFormGroupOrganism;
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { idUser, postEvent } from '../../../service/index';
import toast, { Toaster } from 'react-hot-toast';

interface EventFormGroup{
  nameForm: string;
  event?: any
}

const EventFormGroupOrganism = ({nameForm, event}: EventFormGroup) => {
  const [formControl] = Form.useForm();
  const [form, setForm] = useState({
    user: {
      id: event ? event.user.id : idUser
    },
    description: event ? event.description : "",
    start: event ? event.start : "",
    finish: event ? event.finish : ""
  })

  const onFinishFailed = (errorInfo: any) => {
    toast.error('Houve um erro, por favor tente novamente!');
    console.error(errorInfo);
  };

  const onFinish = async (values: any) => {
    postEvent(values)
      .then(() => {
        toast.success("Evento cadastrado com sucesso!")
        formControl.resetFields()
      })
      .catch( (error:any) => toast.error(error.response.data.message))
  };

  const onUpdateEvent = async (values: any) => {
    try {
      await axios.put(`http://localhost:3000/event/${event.id}`,
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
      toast.success("Evento cadastrado com sucesso!")
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
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
    <Toaster position="top-right"  reverseOrder={false}/>
    <Form
      name={nameForm}
      initialValues={{ remember: true }}
      onFinish={event ? onUpdateEvent : onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      form={formControl}
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
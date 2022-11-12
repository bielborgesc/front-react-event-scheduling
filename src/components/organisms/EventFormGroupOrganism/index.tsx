import { Form } from 'antd';
import React from 'react';
import ButtonGroupMolecule from '../../molecules/ButtonGroup';
import EventFormGroupMolecule from '../../molecules/EventInputsGroup';


interface EventFormGroup{
  nameForm: string;
}

const EventFormGroupOrganism = ({nameForm}: EventFormGroup) =>{
  const groupButtons = {
    btn1: {
      text: "Enviar",
      htmlType: "submit"
    },
    btn2: {
      text: "Voltar",
      htmlType: "button"
    }
  }

  return (
    <>
    <EventFormGroupMolecule nameForm={nameForm}></EventFormGroupMolecule>
    <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
      <ButtonGroupMolecule btn1={groupButtons.btn1} btn2={groupButtons.btn2}></ButtonGroupMolecule>
    </Form.Item>
    </>
  )
}

export default EventFormGroupOrganism;
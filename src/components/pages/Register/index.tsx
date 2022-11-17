import { Card } from 'antd';
import React from 'react';
import EventFormGroupOrganism from '../../organisms/EventFormGroupOrganism/index';


interface Register {

}

const RegisterPage = ({}: Register) => {

  return (
    <>
      <h1>Pagina de Registro</h1>
      <Card style={{ width: '50%' }}>
        <EventFormGroupOrganism nameForm='register'></EventFormGroupOrganism>
      </Card>
    </>
  )
}

export default RegisterPage;
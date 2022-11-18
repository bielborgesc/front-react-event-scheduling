import { Card } from 'antd';
import React from 'react';
import EventFormGroupOrganism from '../../organisms/EventFormGroupOrganism/index';


interface Register {
  namePage: string;
}

const RegisterPage = ({namePage}: Register) => {

  return (
    <>
      <h2 className="title-font">{namePage}</h2>
      <Card style={{ width: '50%' }}>
        <EventFormGroupOrganism nameForm='register'></EventFormGroupOrganism>
      </Card>
    </>
  )
}

export default RegisterPage;
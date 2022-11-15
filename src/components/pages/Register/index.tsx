import React from 'react';
import EventFormGroupOrganism from '../../organisms/EventFormGroupOrganism/index';

interface Register {

}

const RegisterPage = ({}: Register) => {

  return (
    <>
      <h1>Pagina de Registro</h1>
      <EventFormGroupOrganism nameForm='register'></EventFormGroupOrganism>
    </>
  )
}

export default RegisterPage;
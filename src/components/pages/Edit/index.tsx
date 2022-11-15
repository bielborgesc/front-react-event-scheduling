import React from 'react';
import EventFormGroupOrganism from '../../organisms/EventFormGroupOrganism';

interface Edit {

}

const EditPage = ({}: Edit) => {

  return(
    <>
      <h1>Editar</h1>
      <EventFormGroupOrganism nameForm='edit'></EventFormGroupOrganism>
    </>
  )
}

export default EditPage
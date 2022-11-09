import { Button } from "antd"
import React from "react";

const ButtonAtom = ({title}) => {
  return (
    <Button type='primary'>
      {title}
    </Button>
  )
}

export default ButtonAtom;
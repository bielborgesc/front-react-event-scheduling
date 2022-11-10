import { Button } from "antd"
import React from "react";

const ButtonAtom = (props: any) => {
  return (
    <Button type='primary'>
      {props.title}
    </Button>
  )
}

export default ButtonAtom;
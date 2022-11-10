import { Button } from "antd";
import React from "react";

const ButtonAtom = (title: any) => {
  return (
    <Button type='primary'>
      {title}
    </Button>
  )
}

export default ButtonAtom;
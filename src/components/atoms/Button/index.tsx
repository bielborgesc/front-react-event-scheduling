import { Button } from "antd";
import React from "react";

interface Button {
  title: string
}

const ButtonAtom = ({ title }: Button) => {
  return (
    <Button type='primary'>
      {title}
    </Button>
  )
}

export default ButtonAtom;
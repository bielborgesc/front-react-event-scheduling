import { Button } from "antd";
import React from "react";

interface Button {
  title: string
  danger?: boolean
}

const ButtonAtom = ({ title, danger }: Button) => (
    <Button danger={danger} type="primary">
      {title}
    </Button>
  )


export default ButtonAtom;
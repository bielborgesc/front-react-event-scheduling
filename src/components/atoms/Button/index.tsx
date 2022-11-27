import { Button } from "antd";
import React from "react";

interface Button {
  title: string,
  width?: string,
  height?: string,
  fontSize?: string
}

const ButtonAtom = ({ title, width, height, fontSize }: Button) => {
  return (
    <Button type='primary'
      style={{
        width: width,
        height: height,
        fontSize: fontSize
      }}
    >
      {title}
    </Button>
  )
}

export default ButtonAtom;
import { Button } from "antd";
import React, { ReactNode } from "react";
import "./style.css";

interface Button {
  title?: string
  danger?: boolean
  htmlType?: "button" | "submit" | "reset",
  icon?: ReactNode
}

const ButtonAtom = ({ title, danger = false, htmlType="button", icon}: Button) => (
    <Button danger={danger} type="primary" className="my-btn" htmlType={htmlType} icon={icon}>
      {title}
    </Button>
  )


export default ButtonAtom;
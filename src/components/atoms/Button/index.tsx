import { Button } from "antd";
import React, { ReactNode } from "react";
import "./style.css";

interface Button {
  title?: string
  danger?: boolean
  htmlType?: "button" | "submit" | "reset"
  icon?: ReactNode
  size?: "large" | "middle" | "small"
}

const ButtonAtom = ({ title, danger = false, htmlType="button", icon, size='middle'}: Button) => (
    <Button danger={danger} type="primary" className="my-btn" htmlType={htmlType} icon={icon} size={size}>
      {title}
    </Button>
  )


export default ButtonAtom;
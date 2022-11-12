import React from "react";
import ButtonAtom from "../../atoms/Button";

interface ButtonGroup{
  btn1: {
    text: string;
    htmlType: any;
  }
  btn2: {
    text: string;
    htmlType: any;
  }
}

const ButtonGroupMolecule = ({ btn1, btn2 }: ButtonGroup) => (
  <>
    <ButtonAtom title={btn1.text} htmlType={btn1.htmlType}></ButtonAtom>
    <ButtonAtom title={btn2.text} danger={true} htmlType={btn2.htmlType}></ButtonAtom>
  </>
)

export default ButtonGroupMolecule
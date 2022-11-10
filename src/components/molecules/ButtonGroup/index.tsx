import React from "react";
import ButtonAtom from "../../atoms/Button";

interface ButtonGroup{
  textBtn1: string;
  textBtn2: string;
}

const ButtonGroupMolecule = ({ textBtn1, textBtn2 }: ButtonGroup) => (
  <>
    <ButtonAtom title={textBtn1}></ButtonAtom>
    <ButtonAtom title={textBtn2} danger={true}></ButtonAtom>
  </>
)

export default ButtonGroupMolecule
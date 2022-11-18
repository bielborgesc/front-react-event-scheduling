import { Input } from 'antd';
import React from 'react';

interface Input {
  placeholderText?: string,
  typeInput?: string
  name: string
}

const InputAtom = ({placeholderText = "", typeInput = "text", name}: Input) => (
  <Input placeholder={placeholderText} type={typeInput} name={name}/>
)

export default InputAtom;
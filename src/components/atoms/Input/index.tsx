import { Input } from 'antd';
import React from 'react';

interface Input {
  placeholderText: string,
  typeInput: string
}

const InputAtom = ({placeholderText, typeInput}: Input) => (
  <Input placeholder={placeholderText} type={typeInput}/>
)

export default InputAtom;
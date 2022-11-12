import { Form } from "antd";
import React from "react";
import InputAtom from "../../atoms/Input";

interface EventInputsGroup {
  nameForm: string;
}

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

const EventInputsGroupMolecule = ({nameForm}: EventInputsGroup) => {
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  return (<>
    <Form
      name={nameForm}
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Descrição: "
        name="description"
        rules={[{ required: true, message: 'Por favor insira uma descrição!' }]}
      >
        <InputAtom placeholderText="Insira a descrição do Evento"/>
      </Form.Item>

      <Form.Item
        label="Data Inicial: "
        name="initDate"
        rules={[{ required: true, message: 'Por favor insira uma data' }]}
      >
        <InputAtom typeInput="datetime-local"/>
      </Form.Item>

      <Form.Item
        label="Data Final: "
        name="finalDate"
        rules={[{ required: true, message: 'Por favor insira uma data' }]}
      >
        <InputAtom typeInput="datetime-local"/>
      </Form.Item>
    </Form>
  </>)
}

export default EventInputsGroupMolecule
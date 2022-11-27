import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';

export const RegisterForm = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className=''>
      <Col offset={6} span={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{background: '#FFF', borderRadius: '0.2rem', padding: '2rem 2rem 0.6rem 2rem'}}
          >
          <h1>Registrar-se</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
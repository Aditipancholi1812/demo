import React from 'react';
import { Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
const onFinish = (values) => {
  localStorage.setItem('Username', values.username);
  localStorage.setItem('Password', values.password);
  <Navigate to='/login'/>
};
const Signup = () => (
 <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <div
      style={{
        width: '400px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Signup </h3 >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: '600px',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
            label="Username"
            name="username"
            style={{
              textAlign: 'left',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
           <Input />
        </Form.Item>
        
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
    
      </Form>
    </div>
  </div>
);

export default Signup;

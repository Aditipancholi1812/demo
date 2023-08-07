// import React from 'react';
// import { Button, Form, Checkbox, Input, message } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate()
//   const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
//   };

//   const onFinish = (values) => {
//     console.log('Success:', values);
//     const savedItem = localStorage.getItem("Password", values.password);
    
//     if (savedItem === values.password) {
//       navigate('/')
//       message.success("Login Successfully")
//     }
    
//     else {
//      message.error('Invalid Credentials')      
//     }
//   }

//   return (

//     <div>
   
//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >

//           <Button type="primary" htmlType="submit" >
//             Submit

//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }

// export default Login;

import React from 'react';
import { Button, Form, Checkbox, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    const savedItem = localStorage.getItem('Password', values.password);
    if (savedItem === values.password ) {
      navigate('/');
      console.log("Hello")
      message.success('Login Successfully');
    } else {
      message.error('Invalid Credentials');
    }
  };

  return (
   
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
         <h3 style={{textAlign:'center'}}>Login </h3 >
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
          onFinishFailed={onFinishFailed}
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
            style={{
              textAlign: 'left',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
              textAlign: 'left',
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
              textAlign: 'center',
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

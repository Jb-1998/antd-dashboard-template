import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthInputs } from './types';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { login, selectAuthState } from '../auth/authSlice'; 
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {

  const history = useHistory();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuthState);

  // const { register, handleSubmit, watch, formState: { errors } } = useForm<AuthInputs>();
  // const onSubmit = (data : any) => {
  //     alert('asdas')
  //     console.log(data)
  //     // login redux action
      
  // };

  const onFinish = (values: any) => {
    dispatch(login(values, history));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{display:'flex', margin:'30vh', flex:1, alignItems:'center', justifyContent:'center'}}>
        
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1>PSMBFI Provider Portal</h1>
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

        <Button block type="primary" htmlType="submit">
            Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;


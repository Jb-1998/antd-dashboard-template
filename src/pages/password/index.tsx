//@ts-nocheck
import React, {FC} from 'react';
import { Layout, Menu, Breadcrumb, Button, Input, Form,Col, Row} from 'antd';
import {
LockOutlined, UserOutlined
} from '@ant-design/icons';


import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index'

import './style.less'

import {Link} from "react-router-dom";

const { Content, Footer, Sider } = Layout;

type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}


const Password: FC<BaseProps> = () => {

    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"main4"} />
        <Layout className="site-layout">
        <Header title={"Password"} subTitle={"Update and configure your password"}/>
          <Content style={{ padding: '0 100px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={"15vw"} >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['2']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}><Link to="/profile">Edit Profile</Link></Menu.Item>
                        <Menu.Item key="2" icon={<LockOutlined />}><Link to="/password">Password and Security</Link></Menu.Item>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: '70vh' }}>
                        <h2>Password and Security</h2>
                        <div>
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                            <Col span={12}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                            >
                                <Input.Password  defaultValue="Thisismypassword2021"/>
                            </Form.Item>
                            </Col>
                            </Row>
                        </Form>
                        </div>
                        <h3 style={{marginTop: 30, marginBottom: 15}}>Update your password</h3>
                        <div>
                            <Form layout="vertical" hideRequiredMark>
                                <Row gutter={16} style={{marginBottom: 0}}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="newpassword"
                                            label="New Password"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please input your new password!',
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input.Password/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="confirm"
                                            label="Confirm Password"
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                if (!value || getFieldValue('newpassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <Button size={'medium'} onClick={() => {}} type="primary" style={{marginTop: 0}}>Change Password</Button>
                        </div>
                    </Content>
                </Layout>
            </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default Password;
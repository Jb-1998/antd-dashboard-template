//@ts-nocheck
import React, {useState, FC} from 'react';
import { Layout, Menu, Breadcrumb, Button, Input,Form,Col, Row, Select, Tabs,Avatar, } from 'antd';
import {
AntDesignOutlined,UserOutlined, LockOutlined
} from '@ant-design/icons';

import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index';
import {Link} from "react-router-dom";
import './style.less'

const { Content, Footer, Sider } = Layout;
type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const { Option } = Select;

const Profile: FC<BaseProps> = () => {


    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //       <Select defaultValue="+63" style={{ width: 70 }}>
    //         <Option value="63">+63</Option>
    //       </Select>
    //     </Form.Item>
    // );
    
    
    
    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"main4"} />
        <Layout className="site-layout">
        <Header title={"Profile"} subTitle={"Edit your profile information"}/>
          <Content style={{ padding: '0 100px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={"15vw"} >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}><Link to="/profile">Edit Profile</Link></Menu.Item>
                        <Menu.Item key="2" icon={<LockOutlined />}><Link to="/password">Password and Security</Link></Menu.Item>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: '70vh' }}>
                        <h2>Edit Profile</h2>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '6vw', marginTop: 30, marginBottom: 30}}>
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 150, xxl: 180 }}
                                icon={<AntDesignOutlined />}
                            />,
                        </div>
                        <div>
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                name="FirstName"
                                label="First Name"
                                rules={[{ required: true, message: 'Please enter first name' }]}
                                >
                                <Input placeholder="Please enter first name" defaultValue="John Benedick" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                name="LastName"
                                label="Last Name"
                                rules={[{ required: true, message: 'Please enter last name' }]}
                                >
                                <Input placeholder="Please enter last name" defaultValue="Sta. Romana"/>
                                </Form.Item>
                            </Col>
                            </Row>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: false,
                                        message: 'Please input your E-mail!',
                                    },
                                    ]}
                                >
                                    <Input placeholder="Please enter your email" defaultValue="jb.staromana@redcoresolutions.com"/>
                                </Form.Item>
                            </Col>
                            </Row>
                            <Row gutter={16}>
                            <Col span={12}>
                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[{ required: false, message: 'Please input your phone number!' }]}
                            >
                                <Input style={{ width: '100%' }} placeholder="Please input your phone number" defaultValue="09478093627" />
                            </Form.Item>
                            </Col>
                            </Row>
                            <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="address"
                                    label="Address"
                                    rules={[{ required: false, message: 'Please input your address' }]}
                                >
                                    <Input style={{ width: '100%' }} placeholder="please input your address" defaultValue="Block 13 Lot 45 Address Sample" />
                                </Form.Item>
                            </Col>
                            </Row>
                            <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                name="City"
                                label="City / Municipality"
                                rules={[{ required: true, message: 'Please enter city or municipality' }]}
                                >
                                <Input placeholder="Please enter city or municipality" defaultValue="Rodriguez" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                name="Province"
                                label="Province"
                                rules={[{ required: true, message: 'Please enter your province' }]}
                                >
                                <Input placeholder="Please enter province" defaultValue="Rizal"/>
                                </Form.Item>
                            </Col>
                            </Row>
                        </Form>
                        </div>
                        <Button size={'medium'} onClick={() => {}} type="primary" style={{width: '8vw', marginTop: 10, marginBottom: 50}}>Save</Button>
                    </Content>
                </Layout>
            </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default Profile;
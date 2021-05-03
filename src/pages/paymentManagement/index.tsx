//@ts-nocheck
import React, {useState, FC} from 'react';
import { Layout, Menu, Breadcrumb,  Table, Tag, Space, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index';
import './style.less'

const {Content, Footer } = Layout;
const {Item} = Breadcrumb;
const { Search } = Input;
const { TabPane } = Tabs;

type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const { Option } = Select;

const PaymentManagement: FC<BaseProps> = () => {

    const [visible, setVisible] = useState(false)    
    const showDrawer  = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }
    /// this is for table columns 
    const columnsPayment = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Payment Actions',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button size={'small'} onClick={showDrawer} icon={<PlusOutlined />}>Add Payment Data</Button>
          </Space>
        ),
      },
    ];
    const columnsComplete = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },

      ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    
    
    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
        <SideBar itemSelected={"main1"}/>
        <Layout className="site-layout">
        <Header title={"Payment Management"} subTitle={""}/>          
        <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>Payment Management</Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Tabs tabBarExtraContent={<Button size={'small'} icon={<PlusOutlined />}>Upload Payment Data</Button>}>
                <TabPane tab="Payment Transaction List" key="1">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Payment Transaction List</p>
                        <Search placeholder="input search text" onSearch={() => {}} enterButton style={{width: '20vw'}} allowClear/>
                    </div>
                    <Table columns={columnsPayment} dataSource={data} size="small" bordered  footer={() => 'All New Records'} style={{padding: 10}}/>
                </TabPane>
                <TabPane tab="Complete Application List" key="2">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Complete Application List</p>
                        <Search placeholder="input search text" onSearch={() => {}} enterButton style={{width: '20vw'}} allowClear/>
                    </div>
                    <Table columns={columnsComplete} dataSource={data} size="small" bordered  footer={() => 'All New Records'} style={{padding: 10}}/>
                </TabPane>
            </Tabs>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default PaymentManagement;
import React, {useState, FC, useEffect} from 'react';
import { Layout, Menu, Breadcrumb,  Table, Tag, Space, Button, Input  } from 'antd';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    FileSearchOutlined
} from '@ant-design/icons';
import SideBar from '../../common/components/sideBar/index';
import Header from '../../common/components/pageHeader/index';
import { useHistory, useLocation } from "react-router-dom";

import './style.less';
// Destructured Components

const {Content, Footer} = Layout;
const {Item} = Breadcrumb;
const {Search} = Input;
const {SubMenu} = Menu;

// Base Props data type assignment
type BaseProps = {
    className?: string,
    style?: React.CSSProperties,
    columns?: any
}
  

const NewMembers:FC<BaseProps> = () => {
    const history = useHistory();
    const [collapse, setCollapse] = useState(false);

    const onCollapse = (collapse: any) => {
        setCollapse(collapse);
    }

    /// this is for table columns 
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text: string) => <a>{text}</a>,
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
          title: 'Membership Actions',
          key: 'action',
          render: (text: any, record: any) => (
            <Space size="middle">
              <Button size={'small'} icon={<FileSearchOutlined />}>Review</Button>
              <Button size={'small'} icon={<CheckCircleOutlined />}>Activate</Button>
              <Button size={'small'} icon={<CloseCircleOutlined />}>Reject</Button>
            </Space>
          ),
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
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"subkey1"} itemOpen={"sub1"}/>
        <Layout className="site-layout">
        <Header title={"New Members"} subTitle={"View new members list"}/>
          <Content style={{ margin: '0 100px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>Membership Management</Item>
              <Breadcrumb.Item>New Members</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360}}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>New Membership application</p>
                <Search placeholder="input search text" onSearch={() => {}} enterButton style={{width: '20vw'}} allowClear/>
              </div>
              <Table columns={columns} dataSource={data} size="small" bordered  footer={() => 'All New Records'} style={{padding: 10}}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout> 
    )
}

export default NewMembers;
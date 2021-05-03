//@ts-nocheck
import React, {useState, FC, useEffect} from 'react';
import { Layout, Menu, Breadcrumb,  Avatar, Table, Tag, Space, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs, Modal,Checkbox, List, Card, Divider } from 'antd';
import {
  CloseCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  PlusOutlined,
  DeleteFilled,
  SaveFilled,
  UserOutlined,
  ShoppingFilled
} from '@ant-design/icons';

import Scrollbars from 'react-custom-scrollbars';
import ReactQuill from 'react-quill';
import {ReactComponent as SearchIcon} from '../../common/assets/Search.svg';
import {ReactComponent as BuyIcon} from '../../common/assets/Buy.svg';
import {ReactComponent as CategoryIcon} from '../../common/assets/Category.svg';


import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index';
import CartItem from '../../common/components/cartItem/index';

import 'react-quill/dist/quill.snow.css';
import './style.less'

import {Link} from "react-router-dom";
import axios from 'axios';

const {Content, Footer } = Layout;
const {Item} = Breadcrumb;
const { Search } = Input;
const { Meta } = Card;
const { TabPane } = Tabs;

type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const ProductManagemen: FC<BaseProps> = () => {

    const [productData, setProductData] = useState([]);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: (record: any) => 
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'start'}}>
                    <Avatar style={{borderRadius: 10, marginTop: 0, marginRight: 20}}  size={40} shape="square" src={record.productimage} />
                    <p style={{marginTop: 10}}>{record.productname}</p>
              </div>
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Total Sales',
            dataIndex: 'totalsales',
        },
        {
            title: 'Total Revenue',
            dataIndex: 'totalrevenue',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text, record) => (
                <Space size="middle">
                  <Button size={'small'} onClick={() => {}} icon={<EditOutlined />}>Edit Details</Button>
                </Space>
              ),
        },
    ];
    
    const dataTable = [
        {
          key: '1',
          name: {
              productname: 'Mac Keyboard',
              productimage: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHllbGxvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          price: 'PHP. 5,000',
          status: 'active',
          totalsales: 'PHP. 60,000',
          totalrevenue: 'PHP. 3,600,000'
        },
        {
          key: '2',
          name: {
            productname: 'Italian Watch Limited',
            productimage: 'https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
          price: 'PHP. 80,000.00',
          status: 'active',
          totalsales: 'PHP. 1,200,000',
          totalrevenue: 'PHP. 5,600,000'

        },
        {
          key: '3',
          name: {
            productname: 'Nike Air 35',
            productimage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
          price: 'PHP. 3,000.00',
          status: 'active',
          totalsales: 'PHP. 69,000',
          totalrevenue: 'PHP. 9,600,000'

        },
        {
          key: '4',
          name: {
            productname: 'Nike Air 25',
            productimage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
          price: 'PHP. 4,000.00',
          status: 'active',
          totalsales: 'PHP. 720,000',
          totalrevenue: 'PHP. 1,600,000'

        },
      ]; // rowSelection object indicates the need for row selection

      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };
      
    const getAllProducts = async () => {

        try {
            axios.get("http://15.164.233.106:8301/api/v1/products", 
            {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": 'application/json',
                  }
            }).then((res) => {
                console.log(res.data.data)
                setProductData(res.data.data);
                
            })
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const data = [
        {
          title: 'Camera Lens',
          src: "https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          price: '10,000.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Sony Lens'
        },
        {
          title: 'Italian Watch Limited',
          src: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          price: '80,000.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Rolex'
        },
        {
          title: 'Nike Air 35',
          src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          price: '5,300.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Nike Shoes Company'

        },
        {
          title: 'Catty Girl',
          src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          price: '1,200.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Catty Shirt Ltd.'
        },
        {
          title: 'Italian Made Watch',
          src: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          price: '90,000.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Rolex Watch'

        },
        {
          title: 'Nike Air 25',
          src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          price: '3,000.00',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          company: 'Nike Shoes Company'

        },
      ];
    
    const onSearch = (e) => {
        console.log(e)
    }

    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"main4"} />
        <Layout className="site-layout">
        <Header title={"E-Commerce"} subTitle={"Buy products that you like."}/>
          <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>Store Products</Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360,  borderRadius: 20 }}>
            <Tabs tabPosition={'left'}>
                <TabPane tab={<span>
                                <CategoryIcon style={{marginBottom: -7, marginRight: 10 }}/>
                                My Products
                                </span>} key="1">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 50, marginTop: 0}}>
                        <Search placeholder="Search products by name or keyword" onSearch={onSearch} enterButton={<button className="custom-search-btn"><p>Search</p></button>}  prefix={<SearchIcon style={{marginRight: 10}} />} style={{width: '25vw'}} bordered={false}  allowClear/>
                        <Link to="/addproductitem"><Button size={'large'} onClick={() => {}} icon={<PlusOutlined />}>Add New Product</Button></Link>
                    </div>
                    <Table
                        rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={dataTable}
                        size={"small"}
                        style={{borderRadius: 10}}
                    />
                </TabPane>
            </Tabs> 
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default ProductManagemen;
//@ts-nocheck
import React, {useState, FC, useEffect} from 'react';
import { Layout, Menu, Breadcrumb,  Divider, Table, Tag, Space,Avatar, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs, Modal,Checkbox, List, Card,  Skeleton,Empty  } from 'antd';
import {
  CloseCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  PlusOutlined,
  DeleteFilled,
  SaveFilled,
  UserOutlined,
  ShoppingFilled,
  ShoppingCartOutlined
} from '@ant-design/icons';

import Scrollbars from 'react-custom-scrollbars';
import ReactQuill from 'react-quill';
import {ReactComponent as SearchIcon} from '../../common/assets/Search.svg';
import {ReactComponent as BuyIcon} from '../../common/assets/Buy.svg';
import {ReactComponent as CategoryIcon} from '../../common/assets/Category.svg';
import CreditCardInput from 'react-credit-card-input';

import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index';
import CartItem from '../../common/components/cartItem/index';


import 'react-quill/dist/quill.snow.css';
import './style.less'
import {Link, useLocation} from "react-router-dom";


const {Content, Footer } = Layout;
const {Item} = Breadcrumb;
const { Search } = Input;
const { Meta } = Card;
const { TabPane } = Tabs;

type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const ProductInformation: FC<BaseProps> = (props) => {

    let product = useLocation();

    const [productsToCart, setProductsToCart] = useState([])
    const [cartItemNumber, setCartItemNumber] = useState(0);
    const [totalItems, setTotalItems] = useState(0)
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const onSearch = (e) => {
        console.log(e)
    }

    const list = [
      {
        title: 'product title',
        description: 'product description please view the'
      },
      {
        title: 'product title 2',
        description: 'product description please view the description'
      }
    ]

    const handleCardNumberChange = (e) => {
      setCardNumber(e.target.value)
    }
    const handleCardExpiryChange = (e) => {
      setExpiry(e.target.value)
    }
    const handleCardCVCChange = (e) => {
      setCvc(e.target.value)
    }

    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"main3"} />
        <Layout className="site-layout">
        <Header title={"E-Commerce"} subTitle={"Buy products that you like."}/>
          <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item><Link to="/products">Store Products</Link></Item>
              <Item>{product.state.itemName}</Item>
            </Breadcrumb>   
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360,  borderRadius: 20 }}>
            <Tabs tabPosition={'left'}>
                <TabPane tab={<span>
                                <CategoryIcon style={{marginBottom: -7, marginRight: 10 }}/>
                                <Link to="/products">Products</Link>
                                </span>} key="1">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                        <p style={{marginLeft: 0, fontSize: 20, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center'}}>Product Information</p>
                        <Button size={'large'} onClick={() => {}} style={{marginTop: -10}} icon={<BuyIcon style={{marginBottom: -5, marginRight: 10}}/>}>0</Button>
                    </div>
                    <Row style={{paddingLeft: 0, paddingRight: 30}}>
                        <Col span={12}>
                            {
                                product.state.itemImage ?
                                <img src={product.state.itemImage} width={'100%'} height={'100%'}  style={{borderRadius: 20, objectFit: 'cover'}}/>

                                :
                                <Empty description="no image for product"/>
                            }
                        </Col>
                        <Col span={12}>
                            <p style={{marginLeft: 30, fontSize: 30, fontWeight: 'bold'}}>{product.state.itemName}</p>
                            <p style={{marginLeft: 30, fontSize: 20, fontWeight: 'bold', marginTop: -30}}>By {product.state.itemCompany}</p>
                            <p style={{ marginLeft: 30, alignItem: 'center', justifyContent: 'center', display: 'flex', borderWidth: 1, borderColor: 'transparent', width: 150, padding: 10, borderRadius: 5, backgroundColor: '#cce6ff', color: '#004b94', fontWeight: 'bold', fontSize: 20}}><span style={{fontSize: 10, fontWeight: 'bold',color: '#4c87c2', marginTop: 6, marginRight: 4 }}>PHP</span>{product.state.itemPrice}</p>
                            <p style={{marginLeft: 30, fontSize: 12, fontWeight: '100', paddingRight: 40, marginTop: 30}}>{product.state.itemDescription}</p>
                            <div style={{marginLeft: 30, display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'row', marginTop: 30}}>
                            <Button type="primary" onClick={() => {}}  icon={<ShoppingCartOutlined style={{fontSize: 20 }}/>} style={{borderRadius: 5, paddingLeft: 30, paddingRight: 30, height: 50}} >
                                Add To Cart                            
                            </Button>
                            <button onClick={() => {}} className="custom-buy-btn">
                                Buy Now                         
                            </button>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab={<span>
                                <BuyIcon style={{marginBottom: -7, marginRight: 10 }}/>
                                Cart
                                </span>} key="2">
                  <CartItem/>
                </TabPane>
            </Tabs> 
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default ProductInformation;
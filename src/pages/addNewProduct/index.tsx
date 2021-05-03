//@ts-nocheck
import React, {useState, FC, useEffect} from 'react';
import { Layout, Menu, Breadcrumb,  Switch , Divider, Table, Tag, Space,Avatar, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs, Modal,Checkbox, List, Card,  Skeleton,Empty, Upload   } from 'antd';
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
import ImgCrop from 'antd-img-crop';

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

const AddProductItem: FC<BaseProps> = (props) => {

    let product = useLocation();

    const [productsToCart, setProductsToCart] = useState([])
    const [cartItemNumber, setCartItemNumber] = useState(0);
    const [totalItems, setTotalItems] = useState(0)
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [productDescription, setDescription] = useState('');

    const [fileList, setFileList] = useState([
    ]);

    const onChangeImage = ({ fileList: newFileList }) => {
        console.log(newFileList)
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
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
    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }
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
        <SideBar itemSelected={"main4"} />
        <Layout className="site-layout">
        <Header title={"E-Commerce"} subTitle={"Buy products that you like."}/>
          <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item><Link to="/products">Store Products</Link></Item>
            </Breadcrumb>   
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360,  borderRadius: 20 }}>
                    <Row style={{paddingLeft: 0}}>
                        <Col span={14}>
                                <p style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30, marginTop: 30}}>Add New Product</p>
                                <Form
                                    layout="vertical"
                                    name="basic"
                                    style={{marginLeft: 30}}
                                >
                                    <Form.Item
                                        label="Product Name"
                                        name="productname"
                                    >
                                        <Input placeholder="Enter your product name" style={{width: '100%'}}/>
                                    </Form.Item>
                                    <p>Add product images</p>
                                    <ImgCrop rotate>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChangeImage}
                                            onPreview={onPreview}
                                            
                                        >
                                            {fileList.length < 5 && '+ Upload'}
                                        </Upload>
                                    </ImgCrop>
                                    <p>Add Product Description</p>
                                    <ReactQuill theme="snow"  >
                                        <div className="my-editing-area" style={{height: 180}} value={productDescription} onChange={(e) => setDescription(e.target.value)}/>
                                    </ReactQuill>

                                    
                                </Form>
                        </Col>
                        <Col span={10}>
                            <p style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 30, marginTop: 30}}>Additional Configuration</p>
                            <p style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30,}}> Visibility</p>
                            <p style={{ fontSize: 12, marginLeft: 30, marginTop: -10}}>Set up product visibility for the customers</p>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
                               <span >Visible</span>
                              <Switch defaultChecked onChange={onChange} />
                            </div>
                            <Button type="primary" onClick={() => {}} style={{borderRadius: 5, paddingLeft: 30, paddingRight: 30, height: 50,marginLeft: 30, marginTop: 30, width: '85%' }} >
                                Publish              
                            </Button>
                        </Col>
                    </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default AddProductItem;
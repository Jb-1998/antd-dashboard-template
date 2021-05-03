//@ts-nocheck
import React, {useState, FC, useEffect} from 'react';
import {Divider,Avatar, Button, Input, Form,Col, Row, List, Skeleton  } from 'antd';
import {
  ShoppingCartOutlined
} from '@ant-design/icons';

import CreditCardInput from 'react-credit-card-input';




import './style.less'
import {Link, useLocation} from "react-router-dom";


type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const CartItem: FC<BaseProps> = (props) => {

    let product = useLocation();

    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');



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
       
        <Row style={{paddingLeft: 0, paddingRight: 30}}>
            <Col span={12}>
                <p style={{fontSize: 20, fontWeight: 'bold'}}>{'Cart Item Details'}</p>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                        <List.Item

                        actions={[<a key="list-loadmore-edit">Remove</a>]}
                        >
                            <List.Item.Meta
                            avatar={
                                <Avatar style={{borderRadius: 10}}  size={64} shape="square" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                            }
                            title={<a href="">{"product title"}</a>}
                            description={
                            <div>
                                <p style={{fontSize: 10}}>Ant Design, a design language for background applications, is refined by Ant UED Team</p>
                                <p>PHP. 30.00</p>
                            </div>
                            }
                            />
                        </List.Item>
                    )}
                    />
            </Col>
            <Col span={12}>
                <p style={{marginLeft: 30, fontSize: 20, fontWeight: 'bold'}}>{'Payment Details'}</p>
                <p style={{marginLeft: 30, marginTop: -10, marginBottom: 20}}>Complete your purchase by providing payment details</p>
                <Form
                layout="vertical"
                name="basic"
                style={{marginLeft: 30}}
                >
                <Form.Item
                    name="email"
                    label={<p style={{fontWeight: 'bold', marginBottom: -10}}>E-mail</p>}
                    style={{paddingRight: 0}}
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                    ]}
                >
                    <Input placeholder="Email address"/> 
                </Form.Item>
                <Form.Item
                    name="carddetails"
                    label={<p style={{fontWeight: 'bold', marginBottom: -10}}>Card Details</p>}
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    >
                <CreditCardInput
                    cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange }}
                    cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
                    cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
                    fieldClassName="input-style"
                    />
                </Form.Item>
                <Form.Item
                    name="name"
                    label={<p style={{fontWeight: 'bold', marginBottom: -10}}>Cardholder name</p>}
                    style={{paddingRight: 0}}
                    rules={[
                    {
                        required: true,
                        message: 'Please input cardholder name',
                    },

                    ]}
                >
                    <Input placeholder="Cardholder name"/> 
                </Form.Item>
                <Form.Item
                    name="address"
                    label={<p style={{fontWeight: 'bold', marginBottom: -10}}>Billing address</p>}
                    style={{paddingRight: 0}}
                    rules={[
                    {
                        required: true,
                        message: 'Please input billing address',
                    },

                    ]}
                >
                    <Input placeholder="Address"/> 
                </Form.Item>
                <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                    name="zip"
                    label={<p style={{fontWeight: 'bold', marginBottom: -10}}>ZIP</p>}
                    rules={[{ required: true, message: 'Please choose the approver' }]}
                    >
                        <Input placeholder="ZIP code"/> 
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="provincecity"
                        label={<p style={{fontWeight: 'bold', marginBottom: -10}}>Province / City</p>}
                        rules={[{ required: true, message: 'Please choose the approver' }]}
                    >
                        <Input placeholder="Province or   City"/> 

                    </Form.Item>
                </Col>
                </Row>
                </Form>
                <Divider/>
                <div style={{display: 'flex', marginLeft: 30,   alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingRight: 0}}>
                <p style={{fontSize: 16, fontWeight: 'bold'}}>Total items: </p>
                <p style={{fontSize: 16, fontWeight: 'bold'}}>PHP. 60.00</p>
                </div>
                <div style={{marginLeft: 30, display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'row', marginTop: 30}}>
                <Button type="primary" onClick={() => {}}  icon={<ShoppingCartOutlined style={{fontSize: 20 }}/>} style={{borderRadius: 5, paddingLeft: 30, paddingRight: 30, height: 50, width: '100vw',}} >
                    Buy PHP. 60.00                    
                </Button>
                </div>
            </Col>
        </Row>
    )
}


export default CartItem;
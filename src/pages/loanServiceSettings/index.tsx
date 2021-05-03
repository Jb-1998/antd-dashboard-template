//@ts-nocheck
import React, {useState, FC} from 'react';
import { Layout, Menu, Breadcrumb,  Table, Tag, Space, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs, Modal,Checkbox} from 'antd';
import {
  CloseCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  PlusOutlined,
  DeleteFilled,
  SaveFilled
} from '@ant-design/icons';

import Scrollbars from 'react-custom-scrollbars';
import ReactQuill from 'react-quill';

import SideBar from '../../common/components/sideBar/index'
import Header from '../../common/components/pageHeader/index';


import 'react-quill/dist/quill.snow.css';
import './style.less'


const {Content, Footer } = Layout;
const {Item} = Breadcrumb;
const { Search } = Input;

const { TabPane } = Tabs;

type BaseProps = {
  className?: string,
  style?: React.CSSProperties
}

const LoanServiceSettingEditing: FC<BaseProps> = () => {

    const [visible, setVisible] = useState(false)
    const [visibleNewLoan, setVisibleNewLoan] = useState(false)

    const [confirmLoading, setConfirmLoading] = useState(false);
  

    const [loanInformation, setLoanInformation] = useState('');
    const [benefitInformation, setBenefitInformation] = useState('');
    const [requirementsInformation, setRequirementInformation] = useState('')

    const [loanInformationNew, setLoanInformationNew] = useState('');
    const [benefitInformationNew, setBenefitInformationNew] = useState('');
    const [requirementsInformationNew, setRequirementInformationNew] = useState('')

  
    const showModal = () => {
      setVisible(true);
    };
    const showModalCreate = () => {
      setVisibleNewLoan(true);
    };
    

    // This can be the submit button
    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
    const handleOkCreate = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisibleNewLoan(false);
        setConfirmLoading(false);
      }, 2000);
    };

    const handleCancel = () => {
      setVisible(false);
    };
    const handleCancelCreate = () => {
      setVisibleNewLoan(false);
    };
    

    /// this is for table columns 
    const columnsIncomplete = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Service Actions',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button size={'small'} onClick={showModal} icon={<EditOutlined />}>Edit</Button>
            <Button size={'small'} onClick={() => {}} icon={<CheckCircleOutlined />}>Activate</Button>
            <Button size={'small'} onClick={() => {}} icon={<CloseCircleOutlined />}>Deactivate</Button>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        name: 'House Loan Service',
      },
      {
        key: '2',
        name: 'Car Loan Service',
      },
      {
        key: '3',
        name: 'Business Loan Service',
      },
    ];
    
    
    return  (
        <Layout style={{ minHeight: '100vh' }}>
          <Modal
        title="Creat New Loan Service"
        visible={visibleNewLoan}
        onCancel={handleCancelCreate}
        confirmLoading={confirmLoading}
        footer={[
          <Button key="back" onClick={handleCancelCreate}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOkCreate}>
            Submit
          </Button>
        ]}
        width={'50vw'}
        height={'30vh'}
        >
        <Tabs>
                <TabPane tab="Loan Information" key="1">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Loan Information</p>
                    </div>
                    <ReactQuill theme="snow"  style={{width: '100%'}} >
                      <div className="my-editing-area" style={{height: 180,}} value={loanInformationNew} onChange={setLoanInformationNew}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
                <TabPane tab="Benefits" key="2">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Benefits</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 200}} value={benefitInformationNew} onChange={setBenefitInformation}/>
                    </ReactQuill>
                </TabPane>
                <TabPane tab="Requirements" key="3">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Requirements</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 180}} value={requirementsInformation} onChange={setRequirementInformationNew}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
                <TabPane tab="Form" key="4">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Form</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 180}} value={loanInformation} onChange={setLoanInformation}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
          </Tabs>
      </Modal>
        <Modal
        title="Edit Loan Service Information"
        visible={visible}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} danger icon={<DeleteFilled />}>
            Delete
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} icon={<SaveFilled />}>
            Save
          </Button>
        ]}
        width={'50vw'}
        height={'30vh'}
        >
        <Tabs>
                <TabPane tab="Loan Information" key="1">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Loan Information</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 180}} value={loanInformation} onChange={setLoanInformation}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
                <TabPane tab="Benefits" key="2">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Benefits</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 200}} value={benefitInformation} onChange={setLoanInformation}/>
                    </ReactQuill>
                </TabPane>
                <TabPane tab="Requirements" key="3">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Requirements</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 180}} value={loanInformation} onChange={setLoanInformation}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
                <TabPane tab="Form" key="4">
                <Scrollbars style={{height: 380}} autoHide={true}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Form</p>
                    </div>
                    <ReactQuill theme="snow"  >
                      <div className="my-editing-area" style={{height: 180}} value={loanInformation} onChange={setLoanInformation}/>
                    </ReactQuill>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10,}}>Add Validation Rules</p>
                    </div>
                    <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="A">Validation Rule 1</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="B">Validation Rule 2</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="C">Validation Rule 3</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="D">Validation Rule 4</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="E">Validation Rule 5</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Scrollbars>
                </TabPane>
          </Tabs>
      </Modal>
        <SideBar itemSelected={"main2"} />
        <Layout className="site-layout">
        <Header title={"Loan Service Settings"} subTitle={"Manage all loan service settings"}/>
          <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>Loan Service Settings</Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Tabs tabBarExtraContent={<Button size={'small'} onClick={showModalCreate} icon={<PlusOutlined />}>Create Loan Service</Button>}>
                <TabPane tab="Loan Services" key="1">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Service List</p>
                        <Search placeholder="Search for loan services" onSearch={() => {}} enterButton style={{width: '20vw'}} allowClear/>
                    </div>
                    <Table columns={columnsIncomplete} dataSource={data} size="small" bordered  footer={() => 'All New Records'} style={{padding: 10}}/>
                </TabPane>
            </Tabs>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default LoanServiceSettingEditing;
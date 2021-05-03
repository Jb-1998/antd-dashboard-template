import React, {useState, FC} from 'react';
import {Layout, Menu} from 'antd';
import {
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom";


const {Sider} = Layout;
const {SubMenu} = Menu;

type BaseProps = {
    className?: string,
    style?: React.CSSProperties,
    itemSelected?: any,
    itemOpen?: any

}
const SideBar: FC<BaseProps>= (props) => {

    const [collapse, setCollapse] = useState(false);

    const onCollapse = (collapse: any) => {
        setCollapse(collapse);
    }

    return (
        <Sider collapsible collapsed={collapse} onCollapse={onCollapse} width={'15vw'}>
          <div style={{paddingTop: 20}}>
              <p style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>PSMBFI Logo</p>
          </div>
          <div style={{paddingTop: 20}}>
              <p style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Provider</p>
          </div>
          <Menu theme="dark"defaultSelectedKeys={[props.itemSelected]} defaultOpenKeys={[props.itemOpen]} mode="inline" style={{paddingRight: 15, paddingLeft: 5, backgroundColor: '#001529'}}>
            <SubMenu key="sub1"  icon={<UserOutlined />} title="Membership Management">
                <Menu.Item key="subkey1" style={{borderRadius: 5}}><Link to="/newmembers">New Members</Link></Menu.Item>
                <Menu.Item key="subkey2" style={{borderRadius: 5}}><Link to="/activemembers">Active Members</Link></Menu.Item>
                <Menu.Item key="subkey3" style={{borderRadius: 5}}><Link to="/inactivemembers">Inactive Members</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Loan Processing">
                <Menu.Item key="subkey4" style={{borderRadius: 5}}><Link to="/newloanapplication">New Application</Link></Menu.Item>
                <Menu.Item key="subkey5" style={{borderRadius: 5}}><Link to="/loanprocessing">Processing</Link></Menu.Item>
                <Menu.Item key="subkey6" style={{borderRadius: 5}}><Link to="/loancompleted">Completed</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="main2" icon={<FileOutlined />} style={{borderRadius: 5}}>
                <Link to="/loanservicesettings" >Loan Service Settings</Link>
            </Menu.Item>
            <Menu.Item key="main1" icon={<FileOutlined />} style={{borderRadius: 5}}>
                <Link to="/paymentmanagement">Payment Management</Link>
            </Menu.Item>
            <Menu.Item key="main3" icon={<FileOutlined />} style={{borderRadius: 5}}>
                <Link to="/products">E-commerce</Link>
            </Menu.Item>
            <Menu.Item key="main4" icon={<FileOutlined />} style={{borderRadius: 5}}>
                <Link to="/productManagement">Product Management</Link>
            </Menu.Item>
            {/* <Menu.Item key="main4" icon={<FileOutlined />} style={{borderRadius: 5}}>
                <Link to="/Profile">Profile</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
    )
}

export default SideBar
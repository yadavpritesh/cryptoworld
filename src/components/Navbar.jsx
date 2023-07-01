import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { BrowserRouter as Router ,Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
 
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>CryptoWorld</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' mode='vertical' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
 
  );
};

export default Navbar;
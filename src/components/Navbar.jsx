import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "../images/token_prism_logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar
          src={logo}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Token Prism</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined className='menu-control-icon' />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item
            icon={<HomeOutlined />}
            className={`${
              pathname === "/home" ? "ant-menu-item-selected" : ""
            }`}
          >
            <Link to='/home'>Home</Link>
          </Menu.Item>
          <Menu.Item
            icon={<FundOutlined />}
            className={`${
              pathname === "/cryptocurrencies" ? "ant-menu-item-selected" : ""
            }`}
          >
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item
            icon={<BulbOutlined />}
            className={`${
              pathname === "/news" ? "ant-menu-item-selected" : ""
            }`}
          >
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/home' element={<Homepage />} />
              <Route path='/' element={<Navigate to='/home' />} />

              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              />

              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />

              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Token Prism <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/cryptocurencies'>Cryptocurrencies</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

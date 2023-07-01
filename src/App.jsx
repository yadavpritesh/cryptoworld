import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";

const App = () => {
  return (
    <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              CryptoWorld
              <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>

  );
};

export default App;





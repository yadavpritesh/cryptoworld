import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/CryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  console.log(data);

  if (isFetching) return 'Loading...';

  const globalData = data?.data?.stats || {};
  console.log(typeof globalData.totalMarketCap );

  const formattedTotalCryptos = typeof globalData.total === 'number' ? millify(globalData.total) : '-';
  const formattedTotalExchanges = typeof globalData.totalExchanges === 'number' ? millify(globalData.totalExchanges) : '-';
  const formattedTotalMarketCap = typeof globalData.totalMarketCap === 'string' ? millify(globalData.totalMarketCap) : '-';
  const formattedTotal24hVolume = typeof globalData.total24hVolume === 'string' ? millify(globalData.total24hVolume) : '-';
  const formattedTotalMarkets = typeof globalData.totalMarkets === 'number' ? millify(globalData.totalMarkets) : '-';

  return (
    <>
    
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value= {formattedTotalCryptos}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={formattedTotalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={formattedTotalMarketCap}   />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value= {formattedTotal24hVolume}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value= {formattedTotalMarkets}/>
        </Col>
      </Row>

       <div className='home-heading-container'>
         <Title level={2} className='home-title'>
           Top 10 Cryptos in the World
         </Title>
         <Title level={2} className='show-more'>
           <Link to='/cryptocurrencies'>Show More</Link>
         </Title>
       </div>

       <Cryptocurrencies simplified={true} />

       <div className='home-heading-container'>
         <Title level={2} className='home-title'>
           Latest Crypto News
         </Title>
         <Title level={2} className='show-more'>
           <Link to='/news'>Show More</Link>
         </Title>
       </div>

       <News simplified={true} />
      
    </>
  );
};

export default Homepage;
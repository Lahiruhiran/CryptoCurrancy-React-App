import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const HomePage = () => {
    
    const { data, isFetch } = useGetCryptosQuery();
    console.log(data);
    return (
        <>
        <Title level={2} className="heading">Global Crypto Status</Title>
       <Row>
           <Col span={12}><Statistic title=" Total Cryptocurrancies" value="5"/></Col>
           <Col span={12}><Statistic title=" Total Exchanges" value="5"/></Col>
           <Col span={12}><Statistic title=" Total Market Cap" value="5"/></Col>
           <Col span={12}><Statistic title=" Total 24 Hour Volume" value="5"/></Col>
           <Col span={12}><Statistic title=" Total Market" value="5"/></Col>
          
       </Row>
        </>
    )
}

export default HomePage

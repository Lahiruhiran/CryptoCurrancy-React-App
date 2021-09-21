import React , { useState, useEffect } from 'react'
import millify from "millify";
import { Link } from "react-router-dom";
import { Card , Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from './Loader';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data: crtptoList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(crtptoList?.data?.coins);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
      const filterData = crtptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase()
      .includes(searchItem.toLowerCase()));

      setCryptos(filterData);
    
    }, [crtptoList,searchItem])

    if(isFetching) return <Loader />;


    return (
      <>
      {!simplified && (
        <div className="search-crypto">
            <Input placeholder="Search crptocurrency" onChange={(e)=>setSearchItem(e.target.value)}/>
        </div>
      )}
           
      <Row gutter={[32,32]} className="crypto-card-container">
{cryptos ?.map((curency)=> (
    <Col xs={24} sm={12} lg={6} className="crypto-card" key={curency.id}>
        <Link to={`/crypto/${curency.id}`}>
            <Card title={`${curency.rank}. ${curency.name}`}
            extra={<img className="crypto-image" src={curency.iconUrl}/>}
            hoverable
            >
                <p>Price: {millify(curency.price)}</p>
                <p>Market Cap: {millify(curency.marketCap)}</p>
                <p>Daily Change: {millify(curency.change)}%</p>

            </Card>
        </Link>
    </Col>
))}
      </Row>
      </>
    )
}

export default Cryptocurrencies

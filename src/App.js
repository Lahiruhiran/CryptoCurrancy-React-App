import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';

import { Navbar, HomePage,Exchanges, Cryptocurrencies, CryptoDetails, News } from "./componets";
import './App.css'

const App = () => {
    return (
        <div className="app">
           <div className="navbar">
               <Navbar />
            </div>
               <div className="main">
                        <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path="/">
                                    <HomePage />
                                </Route>
                                <Route exact path="/exchanges">
                                    <Exchanges />
                                </Route>
                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies />
                                </Route>
                                <Route exact path="/crypto/:coinId">
                                    <CryptoDetails />
                                </Route>
                                <Route exact path="/news">
                                    <News />
                                </Route>
                            </Switch>

                        </div>
                            </Layout>
               </div>
            <div className="footer">

            </div>

           
        </div>
    )
}

export default App

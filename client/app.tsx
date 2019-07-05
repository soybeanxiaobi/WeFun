import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Layout } from 'zent';
import { Provider } from 'react-redux';

import {store} from './reducers';

import Home from './pages/Home';
import Joke from './pages/Joke';
import Riddle from './pages/Riddle';
import SideNav from './pages/container/SideNav';
import HeaderNav from './pages/container/HeaderNav';

import './app.scss';
// 引入zent样式
import 'zent/css/index.css';

const { Row, Col } = Layout

export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <HeaderNav />
      <Row>
        <Col span={4}>
          <SideNav />
        </Col>
        <Col span={20} className="right-content">
          <Route exact path="/" component={Home} />
          <Route path="/joke" component={Joke} />
          <Route path="/riddle" component={Riddle} />
        </Col>
      </Row>
    </Router>
    </Provider>
  )
}
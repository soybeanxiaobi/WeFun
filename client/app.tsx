import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Layout } from 'zent';

import { Joke } from './page/Joke/index';
import { Riddle } from './page/Riddle/index';
import SideNav from './page/container/SideNav';
import HeaderNav from './page/container/HeaderNav';

// 引入zent样式
import 'zent/css/index.css';

const { Row, Col } = Layout

export default function App() {
  return (
    <Router>
      <HeaderNav />
      <Row>
        <Col span={4}>
          <SideNav />
        </Col>
        <Col span={20}>
          <Route path="/">
            <Redirect to="/joke" />
          </Route>
          <Route path="/joke" component={Joke} />
          <Route path="/riddle" component={Riddle} />
        </Col>
      </Row>
    </Router>
  )
}
import React, {Component} from 'react';
import {BaseParentRouteConnect} from '../router/BaseComponent';
import IndexHeader from '../components/common/indexHeader';
import Navbar from '../components/common/navbar';
import TabBar from '../components/common/TabBar';
import '../styles/index.less';
import { DatePicker ,Button} from 'antd';

@BaseParentRouteConnect
class App extends Component {
  render() {
    return (
      <div className="app-container">
          <IndexHeader />
          <Navbar />
          <TabBar />
      </div>
    );
  }
}

module.exports = App;


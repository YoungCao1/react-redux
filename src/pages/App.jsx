import React, {Component} from 'react';
import {BaseSubRouteConnent, BaseParentRouteConnent} from '../router/BaseComponent';
import IndexHeader from '../components/common/indexHeader';
import Navbar from '../components/common/navbar';

import '../styles/index.less';
import { DatePicker ,Button} from 'antd';

@BaseParentRouteConnent
class App extends Component {
  render() {
    return (
      <div>
          <IndexHeader />
          <Navbar />
      </div>
    );
  }
}
module.exports = App;

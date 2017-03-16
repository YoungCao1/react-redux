import React, {Component} from 'react';
import NavLink from './NavLink'
import {BaseSubRouteConnent} from '../router/BaseSubRoute';
import IndexHeader from '../components/common/indexHeader';
import Navbar from '../components/common/navbar';

import '../styles/index.less';
import { DatePicker ,Button} from 'antd';

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
module.exports = BaseSubRouteConnent(App, 'mainView' );
// export default App;

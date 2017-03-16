import React, {Component} from 'react';
import Nav from '../components/common/navbar'
import {BaseSubRouteConnent, BaseParentRouteConnent} from '../router/BaseComponent';
import '../styles/mainView';

<<<<<<< HEAD
@BaseParentRouteConnent
=======
import IndexHeader from '../components/common/indexHeader';
import Navbar from '../components/common/navbar';

import '../styles/index.less';
import { DatePicker ,Button} from 'antd';


>>>>>>> 1291e6ef515ba29b66423a1f95f89aac5ce24b5c
class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Nav />
=======

          <IndexHeader />
          <Navbar />

>>>>>>> 1291e6ef515ba29b66423a1f95f89aac5ce24b5c
      </div>
    );
  }
}
module.exports = App;

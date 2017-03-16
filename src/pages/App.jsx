import React, {Component} from 'react';
import Nav from '../components/common/navbar'
import {BaseSubRouteConnent, BaseParentRouteConnent} from '../router/BaseComponent';
import '../styles/mainView';

@BaseParentRouteConnent
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
module.exports = App;

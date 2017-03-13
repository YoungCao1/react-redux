import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { Route, Router} from 'react-router';
import routes from '../router/routes'

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <Router routes={routes} history={history}>
        </Router>
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Route, Router} from 'react-router';
import RouterTree from '../router/routes'

export default class Root extends Component {
  
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <RouterTree history={history} />
          
            <DevTools />

        </div>
      </Provider>
    );
  }
}

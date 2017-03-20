import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import { browserHistory } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux';
import { tabBarIncrement } from './actions/commonAction';
import {greenColor} from './actions/CounterActions';
import { routerConfig } from './router/routerConfig';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// const history = syncHistoryWithStore(createHistory({
//   forceRefresh: false
// }), store);

history.listen(location=>{
  if (location.state&&location.state.mark) {
    store.dispatch(tabBarIncrement(location))
  }
})

render(
  <AppContainer>
    <Root
      store={ store } history={ history }
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
      <AppContainer>
        <RootContainer
          store={ store }
          history={ history }
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

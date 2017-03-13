import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Build the middleware for intercepting and dispatching navigation actions
const router_middleware = routerMiddleware(browserHistory)

const enhancer = applyMiddleware(thunk, router_middleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

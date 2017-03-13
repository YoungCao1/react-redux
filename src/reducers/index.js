import {
  combineReducers
} from 'redux';
import counter from './counter';
import changeColor from './changeColor';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  changeColor,
  routing: routerReducer
});

export default rootReducer;
import {
  combineReducers
} from 'redux';
import counter from './counter';
import changeColor from './changeColor';
import tabBarLocations from './commonReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  changeColor,
  tabBarLocations,
  routing: routerReducer
});

export default rootReducer;
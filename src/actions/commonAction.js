import {
  TABBAR_INCREMENT,
  TABBAR_DECREMENT
} from '../constants/ActionTypes';
import {
  routerMiddleware,
  push
} from 'react-router-redux'

/**
 * 新增头部导航标签
 * @param {*当前历史记录} currentLocation 
 */
export function tabBarIncrement(currentLocation) {
  return {
    type: TABBAR_INCREMENT,
    currentLocation: currentLocation
  };
}
/**
 * 删除头部导航标签
 * @param {*当前历史记录} currentLocation 
 */
export function tabBarDecrementAndRedirect(currentLocation) {
  return (dispatch, getState) => {
    const {
      tabBarLocations
    } = getState();
    if (tabBarLocations.length > 1) {
      for (var i = 0; i < tabBarLocations.length; i++) {
        var location = tabBarLocations[i];
        if (location.state.mark == currentLocation.state.mark) {
          if (i < tabBarLocations.length - 1) {
            dispatch(redirect(tabBarLocations[i + 1]))
          } else {
            dispatch(redirect(tabBarLocations[i - 1]))
          }
        }
      }
    }

    dispatch(tabBarDecrement(currentLocation))
  }
}
/**
 * 删除头部导航标签
 * @param {*当前历史记录} currentLocation 
 */
export function tabBarDecrement(currentLocation) {
  return {
    type: TABBAR_DECREMENT,
    currentLocation: currentLocation
  }
}
/**
 * 重定向
 * @param {*定向地址} location 
 */
export function redirect(location) {
  return (dispatch) => {
    dispatch(push(location));
  };
}
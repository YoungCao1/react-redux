import React, {Component} from 'react';
import {Route, Router, IndexRoute, Redirect} from 'react-router';
import {routerConfig} from './routerConfig';
import {connect} from 'react-redux';
import {tabBarIncrement} from '../actions/commonAction';
// import {FadingRoute} from './FadingRoute';   vonvenient inline rendering

// const findLocationMarkWithRotes = (routes, location)=> {
//   for (var i = 0; i < routerConfig.length; i++) {
//     var route = routerConfig[i];
//     if (location.pathname == route.path) {
//       return route.state;
//     }
//     if (route.childRoutes) {
//       return findLocationMarkWithRotes(route.childRoutes, location);
//     }
//   }
// }

const transformConfig = (routes, dispatch) => {
  const deepLoop = (routes) => {
    routes.map((route, i) => {
      if (route.childRoutes) {
        deepLoop(route.childRoutes, dispatch)
      }
      if (route.component) {
          route.component = require(`../pages/${route.component}`);
            
          if(route.indexRoute) {
            route.indexRoute.onEnter = (nextState, replace) => replace({pathname: route.indexRoute.redirect, state:{mark: route.indexRoute.mark?route.indexRoute.mark:false}}) 
          } else {
            route.onEnter = (nextState, replace) => {
              if(nextState.location.state&&nextState.location.state.mark) {
                dispatch(tabBarIncrement(nextState.location))
              } else if(route.state) {
                nextState.location.state = route.state
                dispatch(tabBarIncrement(nextState.location))
              }
            }
          }
      }
    })
  }
  deepLoop(routes)
  return routes;
}

const RouteWithSubRoutes = (route) => {
  if (route.routes) {
      return <Route key={route.path} path={route.path} component={route.component}>
                {route.routes.map((route) => (RouteWithSubRoutes(route)))}
              </Route >
    
  } else {
    if (route.indexRoute) {
      return <IndexRoute key={new Date()} component={route.component}/>
    } else {
      <Route key={route.path} path={route.path} component={route.component}/>
    }
  }
}
// transformConfig(routerConfig).map((route, i) => (RouteWithSubRoutes(route)))
class RouterTree extends Component {
    render() {
      const {history, dispatch} = this.props;
        return (
            <Router routes={transformConfig(routerConfig, dispatch)} history={history} />
        );
    }
}
export default connect()(RouterTree);

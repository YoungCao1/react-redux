import React, {Component} from 'react';
import {Route, Router, IndexRoute, Redirect} from 'react-router';
import {routerConfig} from './routerConfig';
// import {FadingRoute} from './FadingRoute';   vonvenient inline rendering

const transformConfig = (routes) => {
  const deepLoop = (routes) => {
    routes.map((route, i) => {
      if (route.childRoutes) {
        deepLoop(route.childRoutes)
      }
      if (route.component) {
          route.component = require(`../pages/${route.component}`);
          if(route.indexRoute) {
            route.indexRoute.onEnter = (nextState, replace) => replace(route.indexRoute.to) 
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
export default class RouterTree extends Component {
    render() {
      const {history} = this.props;
        return (
            <Router routes={transformConfig(routerConfig)} history={history}>
            </Router>  
        );
    }
}
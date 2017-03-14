import React, {Component} from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import {routerConfig} from './routerConfig';
// import {FadingRoute} from './FadingRoute';   vonvenient inline rendering

const transformConfig = (routes) => {
  const deepLoop = (routes) => {
    routes.map((route, i) => {
      if (route.routes) {
          route.component = require(`../pages/${route.component}`);
        deepLoop(route.routes)
      } else {
          route.component = require(`../pages/${route.component}`);
      }
    })
  }
  deepLoop(routes)
  return routes;
}

const RouteWithSubRoutes = (route) => {
  if (route.routes) {
    if (route.indexRoute) {
      return <IndexRoute key={route.indexRoute} component={route.component}>
                {route.routes.map((route) => (RouteWithSubRoutes(route)))}
              </IndexRoute >
    } else {
      return <Route  key={route.path} path={route.path} component={route.component}>
                {route.routes.map((route) => (RouteWithSubRoutes(route)))}
              </Route >
    }
    
  } else {
    if (route.indexRoute) {
      return <IndexRoute key={route.indexRoute} component={route.component}/>
    } else {
      return <Route key={route.path} path={route.path} component={route.component}/>
    }
    
  }
}
export default class RouterTree extends Component {
    render() {
      const {history} = this.props;
        return (
            <Router history={history}>
                {transformConfig(routerConfig).map((route, i) => (RouteWithSubRoutes(route)))}
            </Router>
            
        );
    }
}
export const routerConfig = [{
  path: '/',
  component: 'App',
  // indexRoute: {
  //   redirect: '/tacos/bus'
  // },
  childRoutes: [{
    path: '/tacos',
    component: "Tacos",
    childRoutes: [{
      path: '/tacos/bus',
      component: 'Bus'
    }, {
      path: '/tacos/cart',
      component: 'Cart'
    }]
  }, {
    path: '/sandwiches',
    component: 'Sandwiches'
  }]
}]
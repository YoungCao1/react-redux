export const routerConfig = [{
  path: '/',
  component: 'App',
  indexRoute: {
    redirect: '/cart',
    mark: '首页'
  },
  childRoutes: [{
    path: '/tacos',
    component: "Tacos",
    childRoutes: [{
      path: '/tacos/bus',
      component: 'Bus'
    }, {
      path: '/tacos/cart/:user',
      component: 'Cart',
      mark: '淘宝'
    }]
  }, {
    path: '/sandwiches',
    component: 'Sandwiches'
  },{
    path: '/cart',
    component: "Cart",
  }]
}]
export const routerConfig = [{
  path: '/',
  component: 'App',
  indexRoute: {
    redirect: '/cart'
  },
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
  },{
    path: '/cart',
    component: "Cart",
  }]
}]
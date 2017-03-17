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
    state: {
      mark: 'tab'
    },
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
  }, {
    path: '/cart',
    component: "Cart",
    state: {
      mark: '首页'
    }
  }]
}]
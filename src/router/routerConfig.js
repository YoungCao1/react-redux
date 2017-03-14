export const routerConfig = [{
  path: '/',
  component: 'App',
  routes: [{
      indexRoute: '/cart',
      component: 'Cart'
    }, {
      path: '/tacos/bus',
      component: 'Bus'
    }]
}];
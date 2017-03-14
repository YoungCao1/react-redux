export const routerConfig = [{
  path: '/',
  component: 'App',
  routes: [
     {
      path: '/sandwiches',
      component: 'Sandwiches'
    },
     {
      path: '/tacos',
      component: 'Tacos',
      routes: [{
          path: '/tacos/bus',
          component: 'Bus'
        },
        {
          path: '/tacos/cart',
          component: 'Cart'
        }
      ]
    }
  ]
}];
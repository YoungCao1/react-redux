// export const routerConfig = [{
//   path: '/',
//   component: 'App',
//   routes: [{
//       path: '/tacos',
//       component: 'Tacos',
//       routes: [{
//         path: '/tacos/cart',
//         component: 'Cart'
//       }, {
//         path: '/tacos/bus',
//         component: 'Bus',
//         routes: [{
//           redirect: true,
//           from: '/tacos/bus',
//           to: '/tacos/cart'
//         }, ]
//       }]
//     }

//   ]
// }];

export const routerConfig = [{
  path: '/',
  component: 'App',
  indexRoute: {
    to: '/tacos/bus'
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
  }]
}]
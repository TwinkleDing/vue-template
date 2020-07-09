import Layout from '@/pages/index';

export default [
  {
    path: '/info',
    component: Layout,
    children: [{
      path: '/info',
      name: 'Infos',
      component: () => import( /* webpackChunkName: "views" */ '@/views/list/info')
    }]
  }
];
import Layout from '@/pages/index';

export default [
  {
    path: '/info/:name',
    component: Layout,
    props: true,
    children: [{
      path: '/info/:name',
      name: 'Infos',
      component: () => import( /* webpackChunkName: "views" */ '@/views/list/info')
    }]
  }
];
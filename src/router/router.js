import Layout from '@/pages/index';

export default [
  {
    path: '/info',
    component: Layout,
    redirect: '/infos',
    props: true,
    children: [{
      path: '/infos',
      name: 'Infos',
      key: 'Infos',
      component: () => import( /* webpackChunkName: 'info' */ '@/views/list/info')
    }]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import( /* webpackChunkName: 'personal' */ '@/views/personal/index')
  }
];
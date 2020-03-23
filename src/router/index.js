import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import Pages from '@/pages';
import Login from '@/views/login';
import Maps from '@/views/map';
import Charts from '@/views/chart';
import Lists from '@/views/list';
import Forms from '@/views/form';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    alias: '/', //重定向
    name: 'Pages',
    component: Pages
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  }
];

let router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (store.getters.user) {
    next();
  } else if (to.path === '/login') {
    next();
  } else {
    next({ path: '/login' });
  }
});

export default router;

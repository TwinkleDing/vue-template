import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import Pages from '@/pages';
import Login from '@/views/login';
import routerList from './router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/index', //重定向
    name: 'Pages',
    component: Pages,
    children: [...routerList]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
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

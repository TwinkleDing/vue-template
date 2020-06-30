import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import Pages from '@/pages/index';
import NotFound from '@/pages/notFound';
import Login from '@/pages/login';
import Empty from '@/pages/index/empty.vue';
import routerList from './router';

var routes = [
  {
    path: '',
    redirect: '/index', //重定向
    name: 'Pages',
    component: Pages,
    children: [
      ...routerList
    ]
  },
  {
    path: '/',
    redirect: '/index', //重定向
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404', //重定向
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404', //重定向
  }
];

var getRoute;
var _import;
const env = process.env;
if (env.NODE_ENV === 'development') {
  _import = file => require('@/views/' + file + '.vue').default; //开发
} else if (env.NODE_ENV === 'production') {
  _import = file => import('@/views/' + file + '.vue'); //生产
}
var router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
});
router.beforeEach((to, from, next) => {
  if(!getRoute) {
    if(store.getters.route.length === 0) {
      store.dispatch('route').then(res=> {
        routes[0].children.push(...filterAsyncRouter(res));
      });
    }else {
      routes[0].children.push(...filterAsyncRouter(store.getters.route));
    }
    router.addRoutes(routes);
    getRoute = true;
    if (store.getters.user) {
      next({ ...to, replace: true });
    } else if (to.path === '/login') {
      next({ ...to, replace: true });
    } else {
      next({ path: '/login' });
    }
  }else {
    next();
  }
});

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = _import(route.component);
    }else {
      route.component = Empty;
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
  return accessedRouters;
}

Vue.use(VueRouter);

export default router;

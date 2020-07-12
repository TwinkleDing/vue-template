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
    path: '/',
    redirect: '/dashboard', //重定向
  },
  {
    path: '/index',
    redirect: '/dashboard', //重定向
    component: Pages,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404', //重定向
    component: NotFound
  }
];

var getRoute;
var _import;
const env = process.env;
if (env.NODE_ENV === 'development') {
  _import = file => require('@/views/' + file + '.vue').default; //开发
} else if (env.NODE_ENV === 'production') {
  _import = file => () => import('@/views/' + file + '.vue'); //生产
}
var Router = new VueRouter({
  routes : [...routes, ...routerList],
  scrollBehavior: () => ({ x: 0, y: 0 }),
});
Router.beforeEach((to, from, next) => {
  if(store.getters.route.length) {
    if(!getRoute) {
      Router.addRoutes(filterAsyncRouter(store.getters.route));
      getRoute = true;
      next({ ...to, replace: true });
    }else {
      next();
    }
  }else {
    // 未登录
    if(to.path.includes('login')) {
      next();
    }else {
      next('/login');
    }
  }
});

// vue-router升级问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch(err => err);
};

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if(route.name === 'Pages') {
      route.component = Pages;
    }else if(route.name === 'NotFound') {
      route.component = NotFound;
    }else {
      if (route.component) {
        route.component = _import(route.component);
      }else {
        route.component = Empty;
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
  return accessedRouters;
}

Vue.use(VueRouter);

export default Router;

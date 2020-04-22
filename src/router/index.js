import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import Pages from '@/pages/index.vue';
import Login from '@/views/login';
import routerList from './router';

Vue.use(VueRouter);
const env = process.env;
var _import;
if (env.NODE_ENV === 'development') {
  _import = file => require('@/views/' + file + '.vue').default; //开发
} else if (env.NODE_ENV === 'production') {
  _import = file => import('@/views/' + file + '.vue'); //生产
}
var routeData = [
  {
    label: '常用',
    name: 'normal',
    path: '/normal',
    children: [
      {
        label: '列表',
        name: 'Lists',
        path: '/lists',
        component: 'list/index',
      },
    ]
  },
  {
    label: '表单',
    name: 'Forms',
    path: '/forms',
    component: 'form/index',
  },
  {
    label: '文本编辑器',
    name: 'MarkDowns',
    path: '/markdowns',
    component: 'markdown/index',
  },
  {
    label: '图表',
    name: 'Charts',
    path: '/charts',
    component: 'chart/index',
  },
  {
    label: '地图',
    name: 'Maps',
    path: '/maps',
    component: 'map/index',
  },
];

var routes = [
  {
    path: '/index',
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
  }
];

let router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
});
var getRoute;
router.beforeEach((to, from, next) => {
  if(!getRoute) {
    routes[0].children = [...filterAsyncRouter(routeData)];
    router.addRoutes(routes);
    getRoute = true;
    if (store.getters.user) {
      next();
    } else if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login' });
    }
    next({ ...to, replace: true });
  }else {
    next();
  }
});
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
    route.component = _import(route.component);
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
  return accessedRouters;
}
export default router;

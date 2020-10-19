import { setStore, getStore, removeStore } from '@/utils/store';

const common = {
  state: {
    userInfo: getStore({ name: 'userInfo' }) || '',
    loginIn: getStore({ name: 'loginIn'}) || false ,
    user: getStore({ name: 'user' }) || '',
    color: getStore({ name: 'color' }) || '#409eff',
    route: getStore({ name: 'route' }) || [],
    language: getStore({ name: 'language'} ) || 'zh',
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({
        name: 'userInfo',
        content: state.userInfo
      });
    },
    SET_USER: (state, user) => {
      state.user = user;
      setStore({
        name: 'user',
        content: state.user
      });
    },
    REMOVE_USER_INFO: (state) => {
      state.userInfo = {};
      removeStore({
        name: 'userInfo',
        type: 'local'
      });
    },
    REMOVE_USER: (state) => {
      state.user = '';
      removeStore({
        name: 'user',
        type: 'local'
      });
    },
    REMOVE_ROUTES: (state) => {
      state.route = [];
      removeStore({
        name: 'route',
        type: 'local'
      });
    },
    SET_COLOR: (state, color) => {
      state.color = color;
      setStore({
        name: 'color',
        content: state.color
      });
    },
    SET_ROUTE: (state, route) => {
      state.route = route;
      setStore({
        name: 'route',
        content: state.route
      });
    },
    SET_LOGIN_IN: (state, loginIn) => {
      state.loginIn = loginIn;
      setStore({
        name: 'loginIn',
        content: state.loginIn
      });
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      setStore({
        name: 'language',
        content: state.language
      });
    }
  },
  actions: {
    userInfo({ commit }, userInfo) {
      return new Promise(resolve => {
        commit('SET_LOGIN_IN', true);
        commit('SET_USER_INFO', userInfo);
        resolve();
      });
    },
    logIn({ commit }, user) {
      return new Promise(resolve => {
        commit('SET_USER', user);
        resolve();
      });
    },
    logOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_LOGIN_IN', false);
        commit('REMOVE_USER');
        commit('REMOVE_ROUTES');
        commit('REMOVE_USER_INFO');
        resolve();
      });
    },
    route({ commit }) {
      return new Promise((resolve, reject)=> {
        const routes = [
          {
            path: '',
            name: 'Pages',
            component: 'Pages',
            children: [
              {
                label: '首页',
                name: 'Homes',
                path: '/dashboard',
                key: 'Homes',
                component: 'home/index',
              },
              {
                label: '嵌套路由',
                name: 'normal',
                path: '/normal',
                key: 'normal',
                children: [
                  {
                    label: '嵌套路由',
                    name: 'Lists',
                    path: '/lists',
                    key: 'Lists',
                    component: 'list/index',
                    children: [
                      {
                        label: '表格',
                        name: 'Lists',
                        path: '/lists',
                        key: 'Listss',
                        component: 'list/index',
                      },
                    ]
                  },
                  {
                    label: '表单',
                    name: 'Forms',
                    path: '/forms',
                    key: 'Forms',
                    component: 'form/index',
                  },
                ]
              },
              {
                label: '文本编辑器',
                name: 'MarkDowns',
                path: '/markdowns',
                key: 'MarkDowns',
                component: 'markdown/index',
              },
              {
                label: 'Tab',
                name: 'Infos',
                path: '/info',
                key: 'Infos',
                component: 'list/info',
              },
              {
                label: '图表',
                name: 'Charts',
                path: '/charts',
                key: 'Charts',
                component: 'chart/index',
              },
              {
                label: '地图',
                name: 'Maps',
                path: '/maps',
                key: 'Maps',
                component: 'map/index',
              },
              {
                label: '模型',
                name: 'Model',
                path: '/models',
                key: 'Models',
                component: 'model/index',
              }
            ]
          },
          {
            path: '*',
            name: 'NotFound',
            redirect: '/404', //重定向
          }
        ];
        commit('SET_ROUTE', routes);
        resolve(routes);
        if(routes.length === 0) {
          reject(new Error());
        }
      });
    }
  }
};
export default common;

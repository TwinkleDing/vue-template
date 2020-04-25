import { setStore, getStore, removeStore } from '@/util/store';

const common = {
  state: {
    user: getStore({ name: 'user' }) || '',
    color: getStore({ name: 'color' }) || '#409eff',
    route: getStore({ name: 'route' }) || [],
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
      setStore({
        name: 'user',
        content: state.user
      });
    },
    REMOVE_USER: () => {
      removeStore({
        name: 'user',
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
    }
  },
  actions: {
    logIn({ commit }, user) {
      return new Promise(resolve => {
        commit('SET_USER', user);
        resolve();
      });
    },
    logOut({ commit }) {
      return new Promise(resolve => {
        commit('REMOVE_USER');
        resolve();
      });
    },
    route({ commit }, route) {
      return new Promise((resolve, reject)=> {
        const routes = [
          {
            label: '常用',
            name: 'normal',
            path: '/normal',
            key: 'normal',
            children: [
              {
                label: '列表',
                name: 'Lists',
                path: '/lists',
                key: 'Lists',
                component: 'list/index',
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
          }
        ];
        commit('SET_ROUTE', routes);
        resolve(routes);
      });
    }
  }
};
export default common;

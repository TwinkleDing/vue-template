import { setStore, getStore, removeStore } from '@/util/store';

const common = {
  state: {
    user: getStore({ name: 'user' }) || '',
    color: getStore({ name: 'color' }) || '#409eff',
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
    }
  },
  actions: {
    LogIn({ commit }, user) {
      return new Promise(resolve => {
        commit('SET_USER', user);
        resolve();
      });
    },
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit('REMOVE_USER');
        resolve();
      });
    }
  }
};
export default common;

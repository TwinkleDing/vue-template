import { setStore, getStore, removeStore } from "@/util/store";

const common = {
  state: {
    user:
      getStore({
        name: "user"
      }) || ""
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
      setStore({
        name: "user",
        content: state.user
      });
    },
    REMOVE_USER: () => {
      removeStore({
        name: "user",
        type: "local"
      });
    }
  },
  actions: {
    LogIn({ commit }, user) {
      return new Promise(resolve => {
        commit("SET_USER", user);
        resolve();
      });
    },
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit("REMOVE_USER");
        resolve();
      });
    }
  }
};
export default common;

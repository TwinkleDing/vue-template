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
    REMOVE_USER: (state, user) => {
      state.user = user;
      removeStore({
        name: "user",
        type: "session"
      });
    }
  }
};
export default common;

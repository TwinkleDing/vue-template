import { setStore, getStore } from "@/utils/store";
import variables from "@/styles/element-variables.scss";
const themeColor = {
    state: {
        themeColor:getStore({name: "themeColor"}) || variables.theme
    },
    mutations: {
        SET_THEME_COLOR: (state, color)=> {
            state.themeColor = color;
            setStore({
                name: "themeColor",
                content: state.themeColor
            });
        }
    },
    actions: {
        changeColor: ({ commit }, data)=> {
            commit("SET_THEME_COLOR", data);
        }
    }
};

export default themeColor;
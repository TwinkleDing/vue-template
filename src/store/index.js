import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import common from "./modules/common";
import themeColor from "./modules/themeColor";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        themeColor
    },
    getters
});

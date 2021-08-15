import GoTopComponent from "./index.vue";

const GoTop = {
    install:function(Vue) {
        Vue.component("GoTop", GoTopComponent);
    }
};

export default GoTop;
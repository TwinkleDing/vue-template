import { debounce } from "@/utils/util";

export default {
    data() {
        return {
            sidebarElm: null,
            resizeHandler: null
        };
    },
    mounted() {
        this.resizeHandler = debounce(() => {
            if (this.myChart) {
                this.myChart.resize();
            }
        }, 100);
        this.initResizeEvent();
        this.initSidebarResizeEvent();
    },
    beforeDestroy() {
        this.destroyResizeEvent();
        this.destroySidebarResizeEvent();
    },
    // to fixed bug when cached by keep-alive
    // https://github.com/PanJiaChen/vue-element-admin/issues/2116
    activated() {
        this.initResizeEvent();
        this.initSidebarResizeEvent();
    },
    deactivated() {
        this.destroyResizeEvent();
        this.destroySidebarResizeEvent();
    },
    methods: {
    // use  for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
        initResizeEvent() {
            window.addEventListener("resize", this.resizeHandler);
        },
        destroyResizeEvent() {
            window.removeEventListener("resize", this.resizeHandler);
        },
        sidebarResizeHandler(e) {
            if (e.propertyName === "width") {
                this.resizeHandler();
            }
        },
        initSidebarResizeEvent() {
            this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
            this.sidebarElm && this.sidebarElm.addEventListener("transitionend", this.sidebarResizeHandler);
        },
        destroySidebarResizeEvent() {
            this.sidebarElm && this.sidebarElm.removeEventListener("transitionend", this.sidebarResizeHandler);
        }
    }
};

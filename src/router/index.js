import Vue from "vue";
import VueRouter from "vue-router";
import Pages from "@/pages";
import Login from "@/views/login";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    alias: "/", //重定向
    name: "Pages",
    component: Pages
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (store.getters.user) {
    next();
  } else if (to.path == "/login") {
    next();
  } else {
    next({ path: "/login" });
  }
});

export default router;

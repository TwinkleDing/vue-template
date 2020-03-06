import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/login";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
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

import Vue from 'vue';
import VueAxios from 'vue-axios';
import Element from 'element-ui';
import VueParticles from 'vue-particles';
import axios from './router/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import GoTop from './components/GoTop/index.js';
import i18n from './lang';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueParticles);
Vue.use(GoTop);
// Vue.directive('ding', {
//   inserted(el, binding) {
//   }
// });
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

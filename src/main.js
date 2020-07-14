import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from './router/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import GoTop from './components/GoTop/index.js';
import './styles/index.scss';
import './plugins/element.js';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(GoTop);
Vue.directive('ding', {
  inserted(el, binding) {
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

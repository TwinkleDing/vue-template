import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios';
import axios from './router/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.less';
import echarts from 'echarts';

import GoTop from '@/components/GoTop/index.js';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(echarts);
Vue.use(ElementUI);
Vue.use(GoTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

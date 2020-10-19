import axios from 'axios';
import router from '@/router';
import store from '@/store';
import { serialize } from '@/utils/util';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// import { getToken } from '@/util/auth';

// 设置超时时间
axios.defaults.timeout = 100000;
//返回其他状态吗
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
// axios.defaults.withCredentials = true; //没加cookie加上就cors跨域了，不加就好了？
// NProgress Configuration
NProgress.configure({
  showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    NProgress.start(); // start progress bar
    const meta = config.meta || {};
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    if(store.getters.loginIn) {
      config.headers['Authorization'] = store.getters.userInfo.token;
      config.headers['accessToken'] = store.getters.userInfo.token;
    }
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    if (config.method === 'put' && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//HTTPresponse拦截
axios.interceptors.response.use(
  res => {
    NProgress.done();
    const status = res.data.code || 200,
    message = res.data.msg || '未知错误';
    //如果是401则跳转到登录页面
    if (status === 401) {
      router.push({ path: '/login' });
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      Message({
        message: message,
        type: 'error'
      });
      return Promise.reject(new Error(message));
    }
    return res.data;
  },
  error => {
    NProgress.done();
    Message({
      message: error,
      type: 'error'
    });
    return Promise.reject(new Error(error));
  }
);

export default axios;

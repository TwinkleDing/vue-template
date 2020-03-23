import axios from 'axios';
import router from '@/router';
import { serialize } from '@/util/util';
import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
// import "nprogress/nprogress.css"; // progress bar style
import { Base64 } from 'js-base64';
import { getToken } from '@/util/auth';

axios.defaults.timeout = 100000;
//返回其他状态吗
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
  showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    NProgress.start(); // start progress bar
    const meta = config.meta || {},
     isToken = meta.isToken === false;
    config.headers['Authorization'] = `Basic ${Base64.encode(
      'saber:saber_secret'
    )}`;
    if (getToken() && !isToken) {
      config.headers['Blade-Auth'] = 'bearer ' + getToken(); // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
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
    // const statusWhiteList = website.statusWhiteList || [];
     message = res.data.msg || '未知错误';
    //如果在白名单里则自行catch逻辑处理
    // if (statusWhiteList.includes(status)) return Promise.reject(res);
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
    return res;
  },
  error => {
    NProgress.done();
    return Promise.reject(new Error(error));
  }
);

export default axios;

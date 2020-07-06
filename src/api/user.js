import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 登录
export const loginByUsername = data =>
  request({
    url: baseUrl+'/user/login',
    method: 'post',
    data: {
      ...data
    }
  });

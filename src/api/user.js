import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 登录
export const loginByUsername = data =>
  request({
    url: '/api/index',
    method: 'get',
    params: {
      type: 'top'
    }
  });

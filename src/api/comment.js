import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 登录
export const commentList = data =>
  request({
    url: baseUrl+'/leave',
    method: 'get',
    params: {
      ...data
    }
  });

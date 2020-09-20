import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 文件列表
export const fileList = data =>
  request({
    url: baseUrl+'/file/list',
    method: 'get',
    params: {
      ...data
    }
  });

// 文件详情
export const fileInfo = data =>
  request({
    url: baseUrl+'/file/info',
    method: 'post',
    data: {
      ...data
    }
  });

// 文件详情
export const fileStat = data =>
  request({
    url: baseUrl+'/file/stat',
    method: 'post',
    data: {
      ...data
    }
  });

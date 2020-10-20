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

// 文件路径
export const filePath = data =>
  request({
    url: baseUrl+'/file/path',
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

  // 文件状态
  export const fileStat = data =>
    request({
      url: baseUrl+'/file/stat',
      method: 'post',
      data: {
        ...data
      }
    });

    // 新增文件
    export const fileAdd = data =>
      request({
        url: baseUrl+'/file/add',
        method: 'post',
        data: {
          ...data
        }
      });

import request from "@/router/axios";
import { baseUrl } from "@/config/env";

// 登录
export const loginByUsername = data =>
  request({
    url: baseUrl + "/blade-auth/token",
    method: "post",
    params: {
      ...data
    }
  });

import request from "@/router/axios";
import { baseUrl } from "@/config/env";

// 登录
export const loginByUsername = (loginType, account, password) =>
  request({
    url: baseUrl + "/blade-auth/token",
    method: "post",
    params: {
      loginType,
      account,
      password
    }
  });

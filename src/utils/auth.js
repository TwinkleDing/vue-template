import Cookies from 'js-cookie';
const TokenKey = 'x-access-token';
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);

export function getToken() {
  let session = JSON.parse(sessionStorage.getItem('saber-token')),
   token;
  if (session) {
    token = session.content;
  }
  return token;
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: inFifteenMinutes });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

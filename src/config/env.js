let baseUrl = '';
const env = process.env;
if (env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.43.202:3333/api';
} else if (env.NODE_ENV === 'production') {
  baseUrl = 'http://192.168.31.28:3333/api';
}
export { baseUrl, env };

let baseUrl = '';
const env = process.env;
if (env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3333/api';
  // baseUrl = 'http://119.3.44.21:31150';
} else if (env.NODE_ENV === 'production') {
  console.log(1);
} else if (env.NODE_ENV === 'test') {
  console.log(1);
}
export { baseUrl, env };

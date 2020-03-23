let baseUrl = '',
 iconfontVersion = ['567566_pwc3oottzol', '1066523_v8rsbcusj5q'],
 iconfontUrl = '//at.alicdn.com/t/font_$key.css',
 codeUrl = `${baseUrl}/code`;
const env = process.env;
if (env.NODE_ENV === 'development') {
  // baseUrl = "http://www.mockhttp.cn/mock/TwinkleDing";
  baseUrl = 'http://119.3.44.21:31150';
} else if (env.NODE_ENV === 'production') {
  console.log(1);
} else if (env.NODE_ENV === 'test') {
  console.log(1);
}
export { baseUrl, iconfontUrl, iconfontVersion, codeUrl, env };

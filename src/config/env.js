let baseUrl = "";
let iconfontVersion = ["567566_pwc3oottzol", "1066523_v8rsbcusj5q"];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`;
const env = process.env;
if (env.NODE_ENV == "development") {
} else if (env.NODE_ENV == "production") {
} else if (env.NODE_ENV == "test") {
}
export { baseUrl, iconfontUrl, iconfontVersion, codeUrl, env };

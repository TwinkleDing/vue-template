let baseUrl = "";
const env = process.env;

if (env.NODE_ENV === "development") {
    baseUrl = "http://localhost:3333/api";
} else if (env.NODE_ENV === "production") {
    baseUrl = "http://localhost:3333/api";
}
export { baseUrl, env };

"use strict";

const path = require("path");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 显示构建包大小
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const IsProduction = process.env.NODE_ENV === "production" ? true : false;

function resolve(dir) {
    return path.join(__dirname, dir);
}
const cdn = {
    // 忽略打包的第三方库
    externals: {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
        echarts: "echarts",
        "element-ui": "ELEMENT"
    },

    // 通过cdn方式使用
    js: IsProduction ? [
        "https://cdn.bootcss.com/vue/2.6.11/vue.min.js",
        "https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js",
        "https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js",
        "https://cdn.bootcss.com/axios/0.19.2/axios.min.js",
        "https://cdn.bootcss.com/echarts/4.6.0/echarts.min.js"
    ] : [
        "https://cdn.bootcss.com/vue/2.6.11/vue.js",
        "https://cdn.bootcss.com/vue-router/3.1.2/vue-router.js",
        "https://cdn.bootcss.com/vuex/3.1.2/vuex.js",
        "https://cdn.bootcss.com/axios/0.19.2/axios.js",
        "https://cdn.bootcss.com/echarts/4.6.0/echarts.js"
    ],
    css: [],
};

module.exports = {
    publicPath: "./",
    outputDir:"dist",
    indexPath: "index.html",
    filenameHashing: false ,
    lintOnSave: !IsProduction,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: "@import \"~@/assets/scss/variables.scss\";",
            },
        },
    },
    configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
        name: "vue-template",
        // 忽略打包配置
        externals: cdn.externals,
        resolve: {
            alias: {
                "@": resolve("src")
            }
        },
        // devtool: 'none',
        performance: {
            hints: false, //error
            maxAssetSize: 300000, // 整数类型（以字节为单位）
            maxEntrypointSize: 500000 // 整数类型（以字节为单位）
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            // 下面是下载的插件的配置
            new CompressionWebpackPlugin({
                algorithm: "gzip",
                test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                minChunkSize: 100
            })
        ]
    },
    chainWebpack: (config) => {
    // 压缩代码
        config.optimization.minimize(true);
        // 分割代码
        config.optimization.splitChunks({
            chunks: "all"
        });
        // 配置cdn引入
        config.plugin("html").tap((args) => {
            args[0].cdn = cdn;
            return args;
        });
        // set preserveWhitespace
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();

        config
        // https://webpack.js.org/configuration/devtool/#development
            .when(!IsProduction,
                config => config.devtool("cheap-source-map")
            );
        config
            .when(IsProduction,
                config => {
                    // 打包文件处理
                    config
                        .optimization.splitChunks({
                            chunks: "all",
                            maxInitialRequests: Infinity,
                            minSize: 200000, // 依赖包超过200000bit将被单独打包
                            cacheGroups: {
                                vendor: {
                                    test: /[\\/]node_modules[\\/]/,
                                    name(module) {
                                        // get the name. E.g. node_modules/packageName/not/this/part.js
                                        // or node_modules/packageName
                                        const packageName = module.context.match(
                                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                        )[1];
                                        if(packageName.includes("element-ui")) {
                                            return;
                                        }
                                        // npm package names are URL-safe, but some servers don't like @ symbols
                                        return `npm.${packageName.replace("@", "")}`;
                                    }
                                }
                            }
                        });
                    config.optimization.runtimeChunk("single");
                }
            );
    },

    /* webpack-dev-server 相关配置 */
    devServer: {
    /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: "0.0.0.0",
        port: 666,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            "/": {
                /* 目标代理服务器地址 */
                target: "/",
                ws: true,
                /* 允许跨域 */
                changeOrigin: true
            }
        },
        overlay: {
            warnings: false,
            errors: true
        },
    }
};
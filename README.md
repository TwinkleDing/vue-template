## 简介

此项目是一个普通的基础后台项目模板，使用了vue和element-ui。可以快速搭建产品原型。

## 项目地址
预览地址[twinkleding.top](twinkleding.top)，后台使用了node+koa+mongodb实现，需安装mongodb。提供游客登录。

登录，增删改查后台代码地址[node+koa+mongodb项目地址](http://github.com/twinkleding/koa-mongodb)

其中包含文件操作系统，可打开，查看磁盘上的文本文件[项目地址](http://github.com/twinkleding/node-file)

## 功能

```
- 登录 / 退出
- 动态侧边栏（支持多级路由嵌套）
- 国际化语言
- 更换主题色
- 错误页面404
- 高德地图查看
- Echarts图表
- Markdown编辑器
- three模型
```

## 准备

需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 开发

```bash
# 克隆项目
git clone https://github.com/TwinkleDing/vue-template.git

# 进入项目目录
cd vue-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 使用了node-sass，有时候会报错，卸载之后重新使用淘宝镜像安装
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass

# 启动服务
npm run dev
```

## 发布

```bash
# 构建生产环境
npm run build
```

## 其它

```bash
# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

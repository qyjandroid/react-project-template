<h1 align="center">Welcome to react-project-template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.14.6-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.18.4-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> react 项目模板

### 🏠 [Homepage](https://github.com/qyjandroid/react-project-template)

## Prerequisites

- npm >=6.14.6
- node >=12.18.4

## Install

```sh
yarn install
```

## Usage

```sh
yarn run start
```

## 项目目录结构
```markdown
react-project-template
├── .babelrc # babel配置
├──  Webpack # webpack公用配置目录
│ │  ├──plugins # 公用插件集合
│ │  ├──resolve # webpack resolve配置
│ │  ├──utils # webpack 工具类
│ │  ├──variable # webpack 变量配置
│ ├── webpack.base.js # Webpack 基础配置文件
│ ├── webpack.dev.js # Webpack 开发环境配置文件
│ └── webpack.prod.js # Webpack 生产环境配置文件
├── yarn.lock # 锁定 npm 包依赖版本文件
├── package.json
├── postcss.config.js # 自动兼容 CSS3 样式配置文件
├── .editorconfig # IDE格式化规范
├── .eslintignore  # eslint忽略文件配置
├── .eslintrc.js # eslint配置文件
├── .prettierignore # prettierc忽略文件配置
├── .prettierrc # prettierc配置文件
├── .husky # 配置git提交钩子
├── .commitlint.config.js # 配置git提交规范
├── tsconfig.eslint.js # eslint检查typescript配置项配置文件
├── eslintError.html # eslint报告文件
├── public # 存放html模板
├── README.md
├── src
│ ├── assets # 存放会被 Webpack 处理的静态资源文件：一般是自己写的 js、css 或者图片等静态资源
│ │ ├── fonts # iconfont 目录
│ │ ├── images # 图片资源目录
│ │ ├── css # 全局样式目录
│ │ │  ├── common.scss # 全局通用样式目录
│ │ │  ├── core.scss # 全局sass 变量目录,直接使用，不需要引用，全局已统一引入。
│ │ │  └── init.scss # 全局初始化css
│ │ └── js # 全局js
│ ├── common # 存放项目通用文件
│ │ ├── Resolution.ts # 布局适配配置中心
│ │ └── AppContext.ts # 全局App上下文
│ ├── components # 项目中通用的业务组件目录
│ ├── config # 项目配置文件
│ ├── pages # 项目页面目录
│ ├── typings # 项目中d.ts 声明文件目录
│ ├── types # 项目中声明文件
│ │ ├── service # 项目中服务相关声明文件
│ │ ├── enum.ts # 项目中枚举类型
│ │ ├── IContext.ts  # 全局App上下文声明
│ │ ├── IRedux.ts # redux相关声明
│ │ └── IRouterPage.ts # 路由相关声明
│ ├── uiLibrary # 组件库
│ ├── routes # 路由目录
│ │ ├── index.tsx # 路由配置入口文件
│ │ └── RouterUI.tsx # 路由转换
│ ├── services # 和后端相关的文件目录
│ │ ├── api # 调用后端接口定义目录
│ │ │ ├── index.ts
│ │ ├── axios.ts # 基于 axios 二次封装
│ │ ├── BaseService.ts # 基础请求服务类型
│ │ ├── ServerResponseManager.ts # 服务返回统一管理
│ │ ├── serviceConfig.ts # 服务地址配置文件
│ ├── store # redux 仓库
│ │ ├── actionCreaters # action创建与分发绑定
│ │ ├── action  # 项目中action
│ │ ├── reducers  # 项目中reducers
│ │ │  ├──history # 项目中路由相关history
│ │ ├── index.ts # 全局 store 获取
│ │ ├── connect.ts # react 页面与store 连接
│ ├── utils # 全局通用工具函数目录
│ ├── App.tsx # App全局
│ ├── index.tsx # 项目入口文件
│ ├── index.scss # 项目入口引入的scss
└── tsconfig.json # TS 配置文件
```

## Tips

- 项目中引入了 `core.scss `,直接使用，不需要@import

- 构建项目时会自动兼容 CSS3 样式，所以不需要自己去写浏览器兼容样式

- 项目支持配置式路由

- 项目中集成了 `connected-react-router` ，路由存储在store中，界面直接从store获取

- 项目中默认配置了一些常用工具函数

- 项目中针对 `axios` 做了二次封装

- 项目直接使用px即可
  
- 项目大量使用装饰器，来简化代码
  

## 脚手架结合使用

- 需要使用该项目模板，可以通过 [quanyj-react-cli](https://github.com/qyjandroid/react-cli) 脚手架获取
- Install
```js
    npm install quanyj-react-cli -g
```
- create project
```js
    react-cli create 项目名称 -f
```


## TodoList
- [x] eslint 
- [x] commit 提交检查
- [ ] webpack 编写Ts语法
- [ ] Vite 支持
- [ ] dll 支持
- [ ] yml 文件 （CI/CD）

## 推荐VSCode 插件

## Author

👤 **quanyj <qyjandroid@163.com>**

* 掘金: https://juejin.cn/user/923245496789255
* Github: [@qyjandroid](https://github.com/qyjandroid)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/qyjandroid/react-project-template/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_



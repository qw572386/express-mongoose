# myapp

> 使用node-express-mongoose 实现CURD RESTful APIs

## 开发环境

> 本地需要安装mongodb、nodejs、vue-cli(脚手架)

### 第一步：初始化项目

> 通过vue-cli脚手架，我们可以快速搭建一个项目骨架。

``` bash
vue init webpack myapp

cd myapp && npm install

npm run dev

```

### 第二步：把本地的mongodb启动起来

> 前提：下载mongodb,并且已经配置好了环境变量。

### 第三步：后台接口

> 通过npm安装express、mongoose、body-parser模块(express模块用来创建路由 mongoose模块用来创建数据库，连接数据库 body-parser模块用来对post请求的请求体进行解析)

``` bash

# 通过命令行进入项目，执行以下命令安装这三个模块
npm install express body-parser mongoose --save

```

### 第四步：创建数据模型
> 提示：所谓的数据模型，可以理解为你将来创建的表中，要存什么样的数据片段，数据类型是什么。

### 第五步：建立CURD(增删改查)路由接口

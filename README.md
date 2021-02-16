[![Build Status](https://travis-ci.com/awamwang/code-tell-you-javascript.svg?branch=master)](https://travis-ci.com/awamwang/code-tell-you-javascript)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/awamwang/code-tell-you-javascript.git/master)

# code-tell-you-javascript

通过 jupyter notebook(lab)运行一些典型的 JavaScript 代码

## Usage

### 阅读静态结果

直接在 GitHub 打开`.ipynb`文件，可以看到项目执行后的静态结果

### 本地运行

克隆项目代码

```cmd
git clone https://github.com/awamwang/code-tell-you-javascript.git
```

通过自己的 jubyter notebook 或 jupyterlab 等工具查看项目

### 在线运行

#### 直接运行

[jupyter notebook 模式](https://hub-binder.mybinder.ovh/user/awamwang-code-t--you-javascript-eizn1h9t/tree)

jupyter lab 模式(推荐)，进入到notebook界面后，将路径最后的`tree`改为`lab`

```
https://hub.gke2.mybinder.org/user/awamwang-code-t--you-javascript-29dlxnhf/tree  --->  https://hub.gke2.mybinder.org/user/awamwang-code-t--you-javascript-29dlxnhf/lab
```

#### 构建最新代码

点击文档顶部的[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/awamwang/code-tell-you-javascript.git/master)图标，在线执行代码

> binder 修改代码不会保存到 git 仓库
>
> 使用了 binder 平台的 docker 模式，启动需要一定时间
>
> 更多信息参考，[binder 文档](https://mybinder.readthedocs.io/en/latest/)

## Categorys

+ [01Syntax](#01Syntax)
+ [02API](#02API)
+ [03OOP](#03OOP)
+ [04DesignPattern](#04DesignPattern)
+ [05Code Skill](#05Code%20Skill)
+ [06Snippets](#06Snippets)
+ [07原理](#07原理)
+ [Other](#Other)

## Details

### 01Syntax

+ [01 基础语法](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法)
  + [01数据类型](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型)
    + [字符串基础.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/字符串基础.ipynb)
    + [布尔类型-boolean.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/布尔类型-boolean.ipynb)
    + [类型检测.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/类型检测.ipynb)
    + [类型转换](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/类型转换)
      + [关于相等、全等比较.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/类型转换/关于相等、全等比较.ipynb)
      + [对象的隐式转换.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/类型转换/对象的隐式转换.ipynb)
  + [02操作符](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/02操作符)
    + [展开操作符.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/02操作符/展开操作符.ipynb)
  + [作用域](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/作用域)
    + [var声明变量的作用域.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/作用域/var声明变量的作用域.ipynb)
  + [变量定义](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/变量定义)
    + [【牛角尖】关于let不提升的一个疑问.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/变量定义/【牛角尖】关于let不提升的一个疑问.ipynb)
  + [异常处理](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/异常处理)
    + [try catch.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/异常处理/try%20catch.ipynb)
  + [箭头函数.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/箭头函数.ipynb)
+ [02 中级语法](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级语法)
  + [异步编程](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级语法/异步编程)
    + [任务机制.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级语法/异步编程/任务机制.ipynb)
  + [闭包.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级语法/闭包.ipynb)
+ [03 高级语法](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/03%20高级语法)
  + [this变量.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/03%20高级语法/this变量.ipynb)
+ [Decorator-es7.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/Decorator-es7.ipynb)
+ [冷门知识](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/冷门知识)
  + [循环变量的类型.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/01Syntax/冷门知识/循环变量的类型.ipynb)

### 02API

+ [API调用细节.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/API调用细节.ipynb)
+ [DOM](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/DOM)
  + [IntersectionObserver.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/DOM/IntersectionObserver.ipynb)
+ [Native Object](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object)
  + [Promise](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Promise)
    + [PROMISE 你可能真的还没用明白（续集进阶版）.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Promise/PROMISE%20你可能真的还没用明白（续集进阶版）.ipynb)
    + [Promise Loop.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Promise/Promise%20Loop.ipynb)
    + [Promise基础.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Promise/Promise基础.ipynb)
    + [自己实现Promise #H.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Promise/自己实现Promise%20#H.ipynb)
  + [Proxy](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Proxy)
    + [Proxy基础.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Proxy/Proxy基础.ipynb)
  + [Set.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Set.ipynb)
  + [String](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/String)
    + [String.prototype.split.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/02API/Native%20Object/String/String.prototype.split.ipynb)

### 03OOP

+ [01 基础知识-basic](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic)
  + [[[Prototype]] and prototype.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/[[Prototype]]%20and%20prototype.ipynb)
  + [constructor属性.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/constructor属性.ipynb)
  + [instanceof操作符.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/instanceof操作符.ipynb)
  + [实现私有属性-private props.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/实现私有属性-private%20props.ipynb)
  + [静态属性-static props.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/静态属性-static%20props.ipynb)
+ [02 继承的实现方式](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式)
  + [00 设置prototype的方式-set prototype.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式/00%20设置prototype的方式-set%20prototype.ipynb)
  + [抽象类实现-abstract class.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式/抽象类实现-abstract%20class.ipynb)
+ [03 实用方法](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法)
  + [chained method call.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/chained%20method%20call.ipynb)
  + [安全模式创建对象-init class in safe mode.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/安全模式创建对象-init%20class%20in%20safe%20mode.ipynb)
  + [直接继承对象-extend.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/直接继承对象-extend.ipynb)

### 04DesignPattern

+ [01 单例模式](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/01%20单例模式)
  + [index.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/01%20单例模式/index.ipynb)
+ [02 简单工厂](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/02%20简单工厂)
+ [03 工厂方法](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/03%20工厂方法)
+ [04 抽象工厂](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/04%20抽象工厂)
+ [05 原型模式](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/05%20原型模式)
  + [index.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/04DesignPattern/05%20原型模式/index.ipynb)

### 05Code Skill

+ [函数](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数)
  + [函数参数技巧-es6前.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/函数参数技巧-es6前.ipynb)
  + [函数参数技巧-es6后.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/函数参数技巧-es6后.ipynb)
  + [即时执行函数.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/即时执行函数.ipynb)
  + [柯里化-curry.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/柯里化-curry.ipynb)
  + [节流函数.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/节流函数.ipynb)
+ [对象](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/对象)
  + [属性安全访问.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/对象/属性安全访问.ipynb)
+ [性能](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能)
  + [try catch 对代码运行的性能影响.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/try%20catch%20对代码运行的性能影响.ipynb)
  + [尾调用-尾递归.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/尾调用-尾递归.ipynb)
  + [循环优化.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/循环优化.ipynb)

### 06Snippets

+ [函数处理.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/06Snippets/函数处理.ipynb)
+ [字符串处理.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/06Snippets/字符串处理.ipynb)
+ [对象处理.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/06Snippets/对象处理.ipynb)
+ [集合处理-Array.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/06Snippets/集合处理-Array.ipynb)

### 07原理

+ [执行上下文.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/07原理/执行上下文.ipynb)
+ [词法分析.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/07原理/词法分析.ipynb)

### Other

+ [Koa核心原理.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Koa核心原理.ipynb)
+ [Module](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module)
  + [CommonJS 和 ES Module 区别](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module/CommonJS%20和%20ES%20Module%20区别)
    + [CommonJS.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module/CommonJS%20和%20ES%20Module%20区别/CommonJS.ipynb)
    + [ESModule.ipynb](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module/CommonJS%20和%20ES%20Module%20区别/ESModule.ipynb)
    + [es循环依赖](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module/CommonJS%20和%20ES%20Module%20区别/es循环依赖)
    + [es循环依赖2](https://github.com/awamwang/code-tell-you-javascript/tree/master/src/Other/Module/CommonJS%20和%20ES%20Module%20区别/es循环依赖2)


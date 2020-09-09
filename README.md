[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/keepgoingwm/code-tell-you-javascript.git/master)

# code-tell-you-javascript

通过 jupyter notebook(lab)运行一些典型的 JavaScript 代码

## Usage

### 阅读静态结果

直接在 GitHub 打开`.ipynb`文件，可以看到项目执行后的静态结果

### 本地运行

克隆项目代码

```cmd
git clone https://github.com/keepgoingwm/code-tell-you-javascript.git
```

通过自己的 jubyter notebook 或 jupyterlab 等工具查看项目

### 在线运行

#### 直接运行

[jupyter lab 模式(推荐)](https://hub-binder.mybinder.ovh/user/keepgoingwm-cod--you-javascript-oc7zsevw/lab)

[jupyter notebook 模式](https://hub-binder.mybinder.ovh/user/keepgoingwm-cod--you-javascript-oc7zsevw/tree)

> 当无法访问时，则需要[构建最新代码](#构建最新代码)的方式

#### 构建最新代码

点击文档顶部的[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/keepgoingwm/code-tell-you-javascript.git/master)图标，在线执行代码

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

## Details

### 01Syntax

+ [01 基础语法](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法)
  + [01数据类型](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型)
    + [布尔类型-boolean.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/布尔类型-boolean.ipynb)
    + [类型检测.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/01数据类型/类型检测.ipynb)
  + [异常处理](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/异常处理)
    + [try catch.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/01%20基础语法/异常处理/try%20catch.ipynb)
+ [02 中级知识](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级知识)
  + [闭包.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/02%20中级知识/闭包.ipynb)
+ [冷门知识](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/冷门知识)
  + [循环变量的类型.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/01Syntax/冷门知识/循环变量的类型.ipynb)

### 02API

+ [Native Object](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/02API/Native%20Object)
  + [Proxy.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/02API/Native%20Object/Proxy.ipynb)

### 03OOP

+ [01 基础知识-basic](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic)
  + [constructor属性.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/constructor属性.ipynb)
  + [instanceof操作符.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/instanceof操作符.ipynb)
  + [[[Prototype]] and prototype.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/[[Prototype]]%20and%20prototype.ipynb)
  + [实现私有属性-private props.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/实现私有属性-private%20props.ipynb)
  + [静态属性-static props.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/01%20基础知识-basic/静态属性-static%20props.ipynb)
+ [02 继承的实现方式](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式)
  + [00 设置prototype的方式-set prototype.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式/00%20设置prototype的方式-set%20prototype.ipynb)
  + [抽象类实现-abstract class.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/02%20继承的实现方式/抽象类实现-abstract%20class.ipynb)
+ [03 实用方法](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法)
  + [chained method call.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/chained%20method%20call.ipynb)
  + [安全模式创建对象-init class in safe mode.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/安全模式创建对象-init%20class%20in%20safe%20mode.ipynb)
  + [直接继承对象-extend.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/03OOP/03%20实用方法/直接继承对象-extend.ipynb)

### 04DesignPattern

+ [01 单例模式](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/01%20单例模式)
  + [index.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/01%20单例模式/index.ipynb)
+ [02 简单工厂](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/02%20简单工厂)
+ [03 工厂方法](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/03%20工厂方法)
+ [04 抽象工厂](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/04%20抽象工厂)
+ [05 原型模式](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/05%20原型模式)
  + [index.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/04DesignPattern/05%20原型模式/index.ipynb)

### 05Code Skill

+ [函数](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数)
  + [函数参数技巧-es6前.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/函数参数技巧-es6前.ipynb)
  + [函数参数技巧-es6后.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/函数参数技巧-es6后.ipynb)
  + [即时执行函数.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/即时执行函数.ipynb)
  + [柯里化-curry.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/函数/柯里化-curry.ipynb)
+ [对象](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/对象)
  + [属性安全访问.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/对象/属性安全访问.ipynb)
+ [性能](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能)
  + [try catch 对代码运行的性能影响.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/try%20catch%20对代码运行的性能影响.ipynb)
  + [尾调用-尾递归.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/尾调用-尾递归.ipynb)
  + [循环优化.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/05Code%20Skill/性能/循环优化.ipynb)

### 06Snippets

+ [函数处理.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/06Snippets/函数处理.ipynb)
+ [字符串处理.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/06Snippets/字符串处理.ipynb)
+ [对象处理.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/06Snippets/对象处理.ipynb)
+ [集合处理-Array.ipynb](https://github.com/keepgoingwm/code-tell-you-javascript/tree/master/src/06Snippets/集合处理-Array.ipynb)


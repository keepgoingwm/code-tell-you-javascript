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

[jupyter notebook 模式](https://mybinder.org/v2/gh/awamwang/code-tell-you-javascript/7715ad58a0ec68df95d33377aa76f618f046cd7f)

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
